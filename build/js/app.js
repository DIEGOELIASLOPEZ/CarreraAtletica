document.addEventListener('DOMContentLoaded', function () {
    bloquearNavegador();
    loopVideos();
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
    });
}

function loopVideos() {
    let numeroVideo = 1;
    const limiteTiempo = 4;

    const reproductor = document.createElement("VIDEO");
    const clasevideos = document.querySelector('.video');
    reproductor.src = `src/video/video${numeroVideo}.mp4`;
    reproductor.muted = true;
    reproductor.autoplay = true;

    clasevideos.appendChild(reproductor);

    reproductor.addEventListener('ended', function () {
        if (numeroVideo == limiteTiempo) {
            numeroVideo = 1;
        } else {
            numeroVideo = numeroVideo + 1;
        }
        
        // Cambiamos el video y le damos PLAY de inmediato para que no se pause
        reproductor.src = `src/video/video${numeroVideo}.mp4`;
        reproductor.play(); 
    });
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

        if (numeroVideo == limiteTiempo) {
            numeroVideo = 1
            reproductor.src = `src/video/video${numeroVideo}.mp4`
        } else {
            numeroVideo = numeroVideo + 1
            reproductor.src = `src/video/video${numeroVideo}.mp4`
        }

    })


}