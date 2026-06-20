document.addEventListener('DOMContentLoaded', function () {
    bloquearNavegador();
    loopVideos();
    proximosEventos();
})

function bloquearNavegador() {
    const header = document.querySelector('.header');
    const informacion = document.querySelector('.informacion');

    document.addEventListener('scroll', function () {
        if (informacion.getBoundingClientRect().top < 800) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })


}

function loopVideos() {
    let numeroVideo = 1;
    const limiteTiempo = 4;

    const reproductor = document.createElement("VIDEO");
    const clasevideos = document.querySelector('.video')
    reproductor.src = `src/video/video${numeroVideo}.mp4`
    reproductor.muted = true;
    reproductor.autoplay = true;

    clasevideos.appendChild(reproductor);

    reproductor.addEventListener('ended', function () {

        if (numeroVideo != limiteTiempo) {
            numeroVideo = numeroVideo + 1;
            reproductor.src = `src/video/video${numeroVideo}.mp4`;
        } else {
            numeroVideo = 1;
            reproductor.src = `src/video/video${numeroVideo}.mp4`;
        }

    })


}

function proximosEventos() {
    const imagen = document.createElement('IMG');
    const proximosEventos = document.querySelector('.proximos-eventos');
    let numImagenes = 1;
    const MAX_IMAGENES = 5;
    imagen.src = `./src/img/img${numImagenes}.jpg`;
    imagen.classList.add('bg-imagen')

    proximosEventos.appendChild(imagen);

    setInterval(function () {
        imagen.classList.remove('fade-in');
        imagen.classList.add('fade-out');

        setTimeout(() => {
            if (numImagenes < MAX_IMAGENES) {
                numImagenes++

            } else {
                numImagenes = 1
            }
            imagen.src = `./src/img/img${numImagenes}.jpg`;
            imagen.classList.remove('fade-out');
            imagen.classList.add('fade-in');

        }, 800)

    }, 4000);




    proximosEventos.prepend(imagen);




}