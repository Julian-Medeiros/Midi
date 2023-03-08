let teclaClicada = [document.querySelector('.tecla_pom'),
                    document.querySelector('.tecla_clap'),
                    document.querySelector('.tecla_tim'), 
                    document.querySelector('.tecla_puff'),
                    document.querySelector('.tecla_splash'),
                    document.querySelector('.tecla_toim'),
                    document.querySelector('.tecla_psh'),
                    document.querySelector('.tecla_tic'),
                    document.querySelector('.tecla_tom'),]

for (let i = 0; i < teclaClicada.length; i++) {
    teclaClicada[i].onclick = tocaSomPom;
    
}



function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}
function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}
function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}
function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}
function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}
function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}
