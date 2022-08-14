const loader = document.querySelector(".loding");
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const sideMenuOverlay = document.querySelector(".side-menu-overlay");
const closeBtn = document.querySelector(".close-button");

window.addEventListener("DOMContentLoaded", () => {
    loader.classList.add("disable");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});


menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    sideMenuOverlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    sideMenuOverlay.classList.remove("active");
});
