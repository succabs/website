const initComicPanels = () => {
  const panels = Array.from(
    document.querySelectorAll<HTMLElement>('.comic-panel[data-panel-id]')
  );
  if (panels.length === 0) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    panels.forEach((panel) => revealObserver.observe(panel));
  } else {
    panels.forEach((panel) => panel.classList.add('is-visible'));
  }

  if ('IntersectionObserver' in window) {
    let lastHash = window.location.hash;
    const hashObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (!top) {
          return;
        }
        const id = top.target.getAttribute('id');
        if (!id) {
          return;
        }
        const newHash = `#${id}`;
        if (newHash !== lastHash) {
          history.replaceState(null, '', newHash);
          lastHash = newHash;
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-35% 0px -55% 0px' }
    );
    panels.forEach((panel) => hashObserver.observe(panel));
  }

  if (!prefersReducedMotion) {
    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    panels.forEach((panel) => {
      const media = panel.querySelector<HTMLElement>('.panel-media');
      if (!media) {
        return;
      }

      panel.addEventListener('pointermove', (event) => {
        const rect = media.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        media.style.setProperty('--parallax-x', `${clamp(x * 12, -10, 10)}px`);
        media.style.setProperty('--parallax-y', `${clamp(y * 12, -10, 10)}px`);
      });

      panel.addEventListener('pointerleave', () => {
        media.style.setProperty('--parallax-x', '0px');
        media.style.setProperty('--parallax-y', '0px');
      });
    });
  }

  const currentHash = window.location.hash.replace('#', '');
  if (currentHash) {
    const target = document.getElementById(currentHash);
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }
};

document.addEventListener('DOMContentLoaded', initComicPanels);
