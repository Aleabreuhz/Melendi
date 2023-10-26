function initialize() {
    const headerMenuIcon = document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", showSideMenu);
    const sideMenuHide = document.getElementById("side-menu-hide");
    sideMenuHide.addEventListener("click", hideSideMenu);
}
function showSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("side-menu-open");
    sideMenu.classList.remove("side-menu-hide");
}

function hideSideMenu() {
    const sideMenu = document.getElementById("side-menu");
sideMenu.classList.add("side-menu-hide");
sideMenu.classList.remove("side-menu-open");
}

initialize();