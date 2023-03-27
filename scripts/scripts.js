// contador de días
function countdown() {
    const cursoInicio = new Date("2023-04-21").getTime();
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
