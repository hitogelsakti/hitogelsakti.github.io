const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.dataset.open !== "true";
    menu.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menu.dataset.open = "false";
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    }
  });
}
