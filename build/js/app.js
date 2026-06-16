document.addEventListener('DOMContentLoaded', function () {
    loopVideos();
})

function loopVideos() {
    const video = document.createElement('VIDEO');
    const videoClass = document.querySelector('.video');

    contador = 1;

    video.src = `src/video/video${contador}.mp4`;
    video.autoplay = true;
    video.muted = true;
    videoClass.appendChild(video);

    video.addEventListener('ended', function () {
        if (contador != 4) {
            contador = contador + 1
            video.src = `src/video/video${contador}.mp4`;
        }else{
            contador = 1
            video.src = `src/video/video${contador}.mp4`;
        }


    })


}