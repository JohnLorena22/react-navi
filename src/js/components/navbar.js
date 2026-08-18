/**
 * Navbar component
 * Edit NAV_LINKS below to add/remove/reorder items.
 * A link can optionally have `children` to render as a dropdown.
 */
const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Features", href: "#features" },
  {
    label: "Resources",
    href: "#resources",
    children: [
      { label: "Documentation", href: "#docs" },
      { label: "Guides", href: "#guides" },
      { label: "API Reference", href: "#api" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function renderLink(link) {
  if (link.children) {
    const items = link.children
      .map((c) => `<a href="${c.href}">${c.label}</a>`)
      .join("");
    return `
      <li class="navbar__item navbar__item--dropdown">
        <button class="navbar__link" aria-haspopup="true" aria-expanded="false">
          ${link.label}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="navbar__dropdown">${items}</div>
      </li>`;
  }

  return `
    <li class="navbar__item">
      <a class="navbar__link${link.active ? " is-active" : ""}" href="${link.href}">${link.label}</a>
    </li>`;
}

export function renderNavbar() {
  const links = NAV_LINKS.map(renderLink).join("");

  return /* html */ `
    <nav class="navbar" id="navbar">
      <a class="navbar__brand" href="#home">
        <span class="navbar__brand-mark">B</span>
        <span class="navbar__brand-name">Boilerplate</span>
      </a>

      <ul class="navbar__links" id="navbarLinks">
        ${links}
      </ul>

      <div class="navbar__spacer"></div>

      <div class="navbar__actions">
        <a class="btn btn--ghost" href="#login">Log in</a>
        <a class="btn btn--primary" href="#signup">Sign up</a>
      </div>

      <button class="navbar__toggle" id="navbarToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navbarLinks">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" id="toggleIcon">
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
      </button>
    </nav>
  `;
}

/** Wires up the mobile toggle, dropdowns, and outside-click / escape handling. */
export function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navbarToggle");

  // Mobile open/close
  toggle?.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Dropdown open/close (click-based so it works on touch too)
  const dropdownItems = navbar.querySelectorAll(".navbar__item--dropdown");
  dropdownItems.forEach((item) => {
    const btn = item.querySelector(".navbar__link");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      // close any sibling dropdowns
      dropdownItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".navbar__link")?.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  // Click outside closes dropdowns + mobile menu
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) return;
    if (e.target.closest(".navbar__item--dropdown")) return;
    dropdownItems.forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".navbar__link")?.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      dropdownItems.forEach((item) => item.classList.remove("is-open"));
    }
  });

  // Escape closes everything
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    dropdownItems.forEach((item) => item.classList.remove("is-open"));
    navbar.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });

  // Close mobile menu after a link is clicked
  navbar.querySelectorAll(".navbar__links a").forEach((a) => {
    a.addEventListener("click", () => {
      navbar.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}
