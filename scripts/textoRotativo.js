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
