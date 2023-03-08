const teclaClicada = document.querySelectorAll('.tecla');

for (let i = 0; i < teclaClicada.length; i++) {
    
    const tecla = teclaClicada[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}
function tocaSom(IdElementAudio) {
    document.querySelector(IdElementAudio).play();
}