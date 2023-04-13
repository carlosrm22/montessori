// contador de días
function countdown() {
    const cursoInicio = new Date("2023-04-28").getTime();
    const ahora = new Date().getTime();
    const diferencia = cursoInicio - ahora;

    if (diferencia < 0) {
        cursoInicio.innerHTML = 'Iniciamos clases el 26 de mayo';
        clearInterval(intervalo);
        return;
    }

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasRestantes = Math.floor(diferencia / dias);

    document.getElementById("countdown").innerHTML = "Iniciamos el <strong><br> 28 de abril de 2023</strong>: <br>faltan " + diasRestantes + " días.</br >";
}

countdown();

// Contador para la masterclass
function actualizarContador() {
    const divContador = document.getElementById('contadorMasterClass');
    const fechaEvento = new Date('2023-04-22T10:00:00'); // Cambia esta fecha por la de tu evento
    const fechaActual = new Date();
    const diferencia = fechaEvento - fechaActual;

    if (diferencia < 0) {
        divContador.innerHTML = 'El evento ya ha comenzado';
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    divContador.innerHTML = `Faltan ${dias} días, ${horas} horas y ${minutos} minutos para la clase, regístrate:`;
}

const intervalo = setInterval(actualizarContador, 1000);
actualizarContador();

// modal para apmliar la imagen
const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}