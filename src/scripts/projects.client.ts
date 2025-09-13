interface Link {
  label: string;
  href: string;
}
interface Project {
  id: string;
  codename: string;
  title: string;
  desc: string[];
  tech: string[];
  links?: Link[];
  images: string[]; // URLs
  thumb?: string; // URL
}

declare global {
  interface Window {
    projectsData?: Project[];
    projectData?: Project[];
  }
}
export {};

function init() {
  // Prefer the already-published global, else parse JSON node
  const globalData = (window.projectsData ?? window.projectData) as
    | Project[]
    | undefined;

  const dataEl = document.getElementById("projects-data");
  const parsed: Project[] = dataEl?.textContent
    ? (JSON.parse(dataEl.textContent) as Project[])
    : [];

  const DATA: Project[] = Array.isArray(globalData) ? globalData : parsed;
  const REAL_COUNT = DATA.length;

  if (!REAL_COUNT) {
    console.warn("[projects] No project data found");
  }

  // Elements
  const allTiles = Array.from(
    document.querySelectorAll<HTMLElement>(".select-tile")
  );

  const detail = document.getElementById("project-detail")!;
  const titleEl = detail.querySelector<HTMLElement>(".detail-title")!;
  const techEl = detail.querySelector<HTMLElement>(".detail-tech")!;
  const descEl = detail.querySelector<HTMLElement>(".detail-desc")!;
  const linksEl = detail.querySelector<HTMLElement>(".detail-links")!;
  const imgEl = detail.querySelector<HTMLImageElement>(".detail-image")!;
  const placeholderEl = detail.querySelector<HTMLElement>(".media-placeholder")!;
  const prevBtn = detail.querySelector<HTMLButtonElement>(".nav.prev")!;
  const nextBtn = detail.querySelector<HTMLButtonElement>(".nav.next")!;
  const thumbsEl = detail.querySelector<HTMLElement>(".detail-thumbs")!;

  if (
    !titleEl ||
    !techEl ||
    !descEl ||
    !linksEl ||
    !imgEl ||
    !placeholderEl ||
    !prevBtn ||
    !nextBtn ||
    !thumbsEl
  ) {
    console.error("[projects] Missing one or more detail elements");
    return;
  }

  imgEl.addEventListener("error", showPlaceholder);

  // State
  let activeIndex = -1;
  let imgIndex = 0;

  function showPlaceholder() {
    imgEl.hidden = true;
    placeholderEl.hidden = false;
  }

  function hidePlaceholder() {
    imgEl.hidden = false;
    placeholderEl.hidden = true;
  }

  function updateImage(p: Project) {
    const total = p.images.length;
    if (!total) {
      showPlaceholder();
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }
    hidePlaceholder();
    imgEl.src = p.images[imgIndex];
    imgEl.alt = `${p.title} screenshot ${imgIndex + 1} of ${total}`;
    prevBtn.disabled = imgIndex === 0;
    nextBtn.disabled = imgIndex === total - 1;
  }

  function renderDetail(p: Project) {
    detail.classList.remove("locked");
    titleEl.textContent = p.title;

    techEl.innerHTML = p.tech
      .map((t) => `<span class="tag" role="listitem">${t}</span>`)
      .join("");
    descEl.innerHTML = p.desc.map((d) => `<p>${d}</p>`).join("");
    linksEl.innerHTML = (p.links ?? [])
      .map(
        (l) =>
          `<a class="btn-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
      )
      .join("");

    thumbsEl.innerHTML = p.images
      .map(
        (src, i) => `
      <button class="thumb" role="listitem" data-i="${i}" aria-label="Screenshot ${
            i + 1
          }"${i === 0 ? ' aria-current="true"' : ""}>
        <img src="${src}" alt="" loading="lazy"/>
      </button>
    `
      )
      .join("");

    thumbsEl.querySelectorAll<HTMLButtonElement>(".thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        const n = Number(btn.getAttribute("data-i"));
        if (Number.isNaN(n)) return;
        imgIndex = n;
        updateImage(p);
        thumbsSync();
      });
    });

    imgIndex = 0;
    updateImage(p);
  }

  function renderLockedDetail(label = "COMING SOON") {
    detail.classList.add("locked");
    titleEl.textContent = label;
    techEl.innerHTML = "";
    descEl.innerHTML = `<p>New challenger approaching… This slot is locked.</p>`;
    linksEl.innerHTML = "";
    imgEl.src = "";
    imgEl.alt = "";
    showPlaceholder();
    thumbsEl.innerHTML = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }

  function thumbsSync() {
    thumbsEl.querySelectorAll<HTMLButtonElement>(".thumb").forEach((b, i) => {
      const active = i === imgIndex;
      if (active) {
        b.setAttribute("aria-current", "true");
      } else {
        b.removeAttribute("aria-current");
      }
    });
  }

  function selectByIndex(i: number, focusTile = false) {
    const isLocked = i >= REAL_COUNT;
    allTiles.forEach((t) => t.classList.remove("is-active"));
    const tile = allTiles[i];
    if (tile) tile.classList.add("is-active");

    activeIndex = Math.min(i, REAL_COUNT - 1);

    if (isLocked) {
      const label =
        tile?.querySelector(".codename")?.textContent?.trim() || "COMING SOON";
      renderLockedDetail(label);
    } else {
      renderDetail(DATA[i]);
    }

    if (focusTile && tile) tile.focus();
  }

  // Events
  allTiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const idx = Number(tile.getAttribute("data-index"));
      if (!Number.isNaN(idx)) selectByIndex(idx);
    });
  });

  prevBtn.addEventListener("click", () => {
    if (activeIndex < 0) return;
    const p = DATA[activeIndex];
    if (imgIndex > 0) {
      imgIndex--;
      updateImage(p);
      thumbsSync();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (activeIndex < 0) return;
    const p = DATA[activeIndex];
    if (imgIndex < p.images.length - 1) {
      imgIndex++;
      updateImage(p);
      thumbsSync();
    }
  });

  detail.addEventListener("keydown", (ev: KeyboardEvent) => {
    if (activeIndex < 0) return;
    const p = DATA[activeIndex];
    if (ev.key === "ArrowLeft") {
      if (imgIndex > 0) {
        imgIndex--;
        updateImage(p);
        thumbsSync();
      }
      ev.preventDefault();
    } else if (ev.key === "ArrowRight") {
      if (imgIndex < p.images.length - 1) {
        imgIndex++;
        updateImage(p);
        thumbsSync();
      }
      ev.preventDefault();
    }
  });

  if (DATA.length) selectByIndex(0);
}

// Run after HTML is parsed
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
