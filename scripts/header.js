const open = document.querySelector(".open")
const close = document.querySelector(".close")
const navbar = document.querySelector(".navbar")
const logo = document.querySelector("#logo")
const background = document.querySelector(".background-image")
const banner = document.querySelector(".banner-image")
const header = document.querySelector(".header")

function openSidebar() {
        open.classList.add("hidden")
        close.classList.remove("hidden")
        navbar.classList.remove("hidden-sm")
        header.classList.add("primary")
        logo.classList.add("whitesmoke")
        close.classList.add("whitesmoke")
}
function closeSidebar() {
        open.classList.remove("hidden")
        close.classList.add("hidden")
        navbar.classList.add("hidden-sm")
        header.classList.remove("primary")
        logo.classList.remove("whitesmoke")
        close.classList.remove("whitesmoke")
}