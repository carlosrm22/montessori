// contador de días
function countdown() {
    const cursoInicio = new Date("2023-04-22").getTime();
    const ahora = new Date().getTime();
    const diferencia = cursoInicio - ahora;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasRestantes = Math.floor(diferencia / dias);

    document.getElementById("countdown").innerHTML = "Iniciamos el <strong><br> 21 de abril de 2023</strong>: <br>faltan " + diasRestantes + " días.</br >";
}

countdown();

// Contador para la masterclass
function actualizarContador() {
    const divContador = document.getElementById('contadorMasterClass');
    const fechaEvento = new Date('2023-04-08T10:00:00'); // Cambia esta fecha por la de tu evento
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
