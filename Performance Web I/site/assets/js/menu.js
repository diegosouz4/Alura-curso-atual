const titulo = document.querySelector(".header-menu-titulo");
const menu = document.querySelector(".header-menu");

titulo.addEventListener("click", () => {
  if (menu.hasAttribute("data-ativo")) {
    menu.removeAttribute("data-ativo");
    return;
  }

  menu.setAttribute("data-ativo", "");
});
