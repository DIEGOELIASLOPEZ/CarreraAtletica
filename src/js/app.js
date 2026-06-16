document.addEventListener('DOMContentLoaded', function () {
    loopVideos();
})

function loopVideos() {
    let numeroVideo = 1;
    const limiteTiempo = 5;

    const reproductor = document.createElement("VIDEO");
    const clasevideos = document.querySelector('.video')
    reproductor.src = `src/video/video${numeroVideo}.mp4`
    reproductor.muted = true;
    reproductor.autoplay = true;

    clasevideos.appendChild(reproductor);

    reproductor.addEventListener('ended', function () {

        if (reproductor.currentTime >= limiteTiempo) {
            numeroVideo++;
            if (numeroVideo > 4) {
                numeroVideo = 1
            }
        }

    })


}