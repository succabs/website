const initComicPanels = () => {
  const spreads = Array.from(
    document.querySelectorAll<HTMLElement>('.project-spread[data-spread-id]')
  );
  const revealTargets = Array.from(
    document.querySelectorAll<HTMLElement>('.project-spread[data-spread-id]')
  );

  if (revealTargets.length === 0) {
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
    revealTargets.forEach((panel) => revealObserver.observe(panel));
  } else {
    revealTargets.forEach((panel) => panel.classList.add('is-visible'));
  }

  if ('IntersectionObserver' in window && spreads.length > 0) {
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
    spreads.forEach((panel) => hashObserver.observe(panel));
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
