document.addEventListener('DOMContentLoaded', function () {
    bloquearNavegador();
    loopVideos();
})

function bloquearNavegador() {
    const header = document.querySelector('.header');
    const informacion = document.querySelector('.informacion');

    document.addEventListener('scroll', function () {
        if (informacion.getBoundingClientRect().top < 1000) {
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