const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navbar = document.querySelector('.navbar')
const banner = document.querySelector('.banner-content')

function openSidebar() {
        open.classList.add("hidden")
        close.classList.remove("hidden")
        navbar.classList.remove("hidden-sm")
        banner.classList.add("hidden-sm")
}
function closeSidebar() {
        open.classList.remove("hidden")
        close.classList.add("hidden")
        navbar.classList.add("hidden-sm")
        banner.classList.remove("hidden-sm")
}

document.addEventListener('DOMContentLoaded', function() {  
    var textos = ["inspira", "transforma", "inova", "encanta"]
    var contador = 0
    const rotative = document.querySelector('.rotative-text')

    function mudarTexto() {
        rotative.innerHTML = textos[contador]
        contador++;
        if (contador >= textos.length) {
            contador = 0;
        }
    }
    setInterval(mudarTexto, 3000);
});