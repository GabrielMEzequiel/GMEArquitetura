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

const saves = document.querySelectorAll(".card-save")

saves.forEach(save => {
    save.addEventListener("click", function(event) {
        event.preventDefault()
        saveProject(event)
    });
});

function saveProject(event) {
    const save = event.currentTarget
    if (save.classList.contains("saved")) {
        save.classList.remove("saved")
    } else {
        save.classList.add("saved")
    }
}


const btnTodos = document.querySelector("#btn-todos");
const btnComerciais = document.querySelector("#btn-comerciais");
const btnResidenciais = document.querySelector("#btn-residenciais");

const comerciais = document.querySelector(".comerciais");
const residenciais = document.querySelector(".residenciais");

function exibirTodos() {
    comerciais.classList.remove("hidden")
    residenciais.classList.remove("hidden")
    btnTodos.classList.add("active")
    btnComerciais.classList.remove("active")
    btnResidenciais.classList.remove("active")
}

function exibirComerciais() {
    comerciais.classList.remove("hidden")
    residenciais.classList.add("hidden")
    btnTodos.classList.remove("active")
    btnComerciais.classList.add("active")
    btnResidenciais.classList.remove("active")
}

function exibirResidenciais() {
    comerciais.classList.add("hidden")
    residenciais.classList.remove("hidden")
    btnTodos.classList.remove("active")
    btnComerciais.classList.remove("active")
    btnResidenciais.classList.add("active")
}


document.addEventListener("DOMContentLoaded", function() {  
    var textos = ["inspira", "transforma", "inova", "encanta"]
    var contador = 0
    const rotative = document.querySelector(".rotative-text")

    function mudarTexto() {
        rotative.innerHTML = textos[contador]
        contador++;
        if (contador >= textos.length) {
            contador = 0;
        }
    }
    setInterval(mudarTexto, 3000);
});