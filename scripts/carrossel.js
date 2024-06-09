let imagens = [
    { src: '../assets/projetos/g-g/cozinha.png', indice: 'Imagem 1: ', desc: 'Cozinha da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/g-g/fachada.png', indice: 'Imagem 2: ', desc: 'Fachada da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/g-g/home-theater.png', indice: 'Imagem 3: ', desc: 'Home theater da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/g-g/jardim.png', indice: 'Imagem 4: ', desc: 'Jardim da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/g-g/piscina.png', indice: 'Imagem 5: ', desc: 'Piscina da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/g-g/sala-estar.png', indice: 'Imagem 6: ', desc: 'Sala de estar da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/g-g/sala-jantar.png', indice: 'Imagem 7: ', desc: 'Sala de jantar da <a class="link" href="../projetos/g-g.html">Casa G.G</a>' },
    { src: '../assets/projetos/petrus/fachada.png', indice: 'Imagem 8: ', desc: 'Fachada da <a class="link" href="../projetos/petrus.html">Residência Petrus</a>' },
    { src: '../assets/projetos/petrus/gourmet.png', indice: 'Imagem 9: ', desc: 'Gourmet da <a class="link" href="../projetos/petrus.html">Residência Petrus</a>' },
    { src: '../assets/projetos/petrus/jardim.png', indice: 'Imagem 10 ', desc: 'Jardim da <a class="link" href="../projetos/petrus.html">Residência Petrus</a>' },
    { src: '../assets/projetos/petrus/piscina.png', indice: 'Imagem 11 ', desc: 'Piscina da <a class="link" href="../projetos/petrus.html">Residência Petrus</a>' }
];

let inicio = 0;

function atualizarGaleria() {
    const imagensGaleria = document.querySelectorAll('.imagemGaleria');
    const indicesImagem = document.querySelectorAll('.indiceImagem');
    const descricoesImagem = document.querySelectorAll('.descricaoImagem');
    
    for (let i = 0; i < 4; i++) {
        let index = (inicio + i) % imagens.length;
        imagensGaleria[i].src = imagens[index].src;
        imagensGaleria[i].alt = imagens[index].desc;
        indicesImagem[i].textContent = imagens[index].indice;
        descricoesImagem[i].innerHTML = imagens[index].desc;
    }
}

function moverEsquerda() {
    inicio = (inicio - 1 + imagens.length) % imagens.length;
    atualizarGaleria();
}

function moverDireita() {
    inicio = (inicio + 1) % imagens.length;
    atualizarGaleria();
}

document.addEventListener('DOMContentLoaded', atualizarGaleria);