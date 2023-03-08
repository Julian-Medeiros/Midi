let teclaClicada = [document.querySelector('.tecla_pom'),
                    document.querySelector('.tecla_clap'),
                    document.querySelector('.tecla_tim'), 
                    document.querySelector('.tecla_puff'),
                    document.querySelector('.tecla_splash'),
                    document.querySelector('.tecla_toim'),
                    document.querySelector('.tecla_psh'),
                    document.querySelector('.tecla_tic'),
                    document.querySelector('.tecla_tom'),
                    ]

for (let i = 0; i < teclaClicada.length; i++) {
    teclaClicada[i].onclick = som[i];
    
}

let som = [document.querySelector('#som_tecla_pom').play(),
           document.querySelector('#som_tecla_clap').play(),
           document.querySelector('#som_tecla_tim').play(),
           document.querySelector('#som_tecla_puff').play(),
           document.querySelector('#som_tecla_splash').play(),
           document.querySelector('#som_tecla_toim').play(),
           document.querySelector('#som_tecla_psh').play(),
           document.querySelector('#som_tecla_tic').play(),
           document.querySelector('#som_tecla_tom').play(),
           ]


