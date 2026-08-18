/**
 * Footer component
 * Edit FOOTER_COLUMNS to add/remove link groups.
 */
const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

function renderColumn(col) {
  const links = col.links
    .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join("");
  return `
    <div class="footer__col">
      <h4>${col.title}</h4>
      <ul>${links}</ul>
    </div>`;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  const columns = FOOTER_COLUMNS.map(renderColumn).join("");

  return /* html */ `
    <footer class="footer">
      <div class="footer__inner">
        <div>
          <a class="footer__brand" href="#home">
            <span class="footer__brand-mark">B</span>
            <span class="footer__brand-name">Boilerplate</span>
          </a>
          <p class="footer__tagline">A clean starting point for your next project.</p>
        </div>
        ${columns}
      </div>

      <div class="footer__bottom">
        <span>© ${year} Boilerplate Inc. All rights reserved.</span>
        <div class="footer__socials">
          <a href="#" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.4 22H1.3l8.2-9.4L1 2h7.3l5 6.6L18.9 2zm-1.2 18h1.9L7.4 4h-2l12.3 16z"/></svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.95-8.68-2.91V8.48z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  `;
}
