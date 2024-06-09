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