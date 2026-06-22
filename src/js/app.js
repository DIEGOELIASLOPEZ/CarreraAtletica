document.addEventListener('DOMContentLoaded', function () {
    bloquearNavegador();
    loopVideos();
    proximosEventos();
    galeria();
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

function galeria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const NUM_IMAGNES = 16;

    for (let i = 1; i <= NUM_IMAGNES; i++) {
        const img = document.createElement('IMG');
        img.src = `src/img/gallery/${i}.jpg`
        galeria.appendChild(img);

        img.addEventListener('click', function () {
            mostrarImagen(i);
        })

    }

}

function mostrarImagen(i) {

    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const modal = document.createElement('DIV');
    const img = document.createElement('IMG');
    const btnModal = document.createElement('button')

    img.src = `src/img/gallery/${i}.jpg`

    modal.classList.add('modal')
    body.classList.add('overflow-hiden')
    btnModal.classList.add('btn-modal')
    header.classList.remove('fixed');

    btnModal.textContent = "X"

    modal.onclick = cerrarModal;
    btnModal.onclick = cerrarModal;


    modal.appendChild(img)
    modal.appendChild(btnModal)
    body.appendChild(modal)

}
function cerrarModal() {
    const header = document.querySelector('header');
    const modal = document.querySelector('.modal');

    modal.classList.add('fade-out');
    setTimeout(() => {
        if (modal) {
            modal.remove();
        }

    }, 500);
    header.classList.add('fade-in');
    const body = document.querySelector('body')
    header.classList.add('fixed')
    body.classList.remove('overflow-hiden')
}