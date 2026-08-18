/**
 * App entry point.
 * Mounts navbar and footer into their placeholders, then runs init logic.
 */
import { renderNavbar, initNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

function mount() {
  document.getElementById("navbarRoot").innerHTML = renderNavbar();
  document.getElementById("footerRoot").innerHTML = renderFooter();

  initNavbar();
}

document.addEventListener("DOMContentLoaded", mount);
