const dropzone = document.getElementById("dropzone");
const intentos = document.getElementById("intentos");
const avisos = document.getElementById("avisos");

let intentosRestantes = 3;
let ganar = false;
const numeroRandom = Math.floor(Math.random() * 10) + 1;

console.log("Número ganador: " + numeroRandom);

document.querySelectorAll(".ficha").forEach(ficha => {
    ficha.addEventListener("dragstart", (evento) => {
        evento.dataTransfer.setData("text/plain", ficha.innerText);
    });
});

dropzone.addEventListener("dragover", (evento) => {
    evento.preventDefault();
});
dropzone.addEventListener("drop", (evento) => {
    evento.preventDefault();
    let fichaId = evento.dataTransfer.getData("text/plain");
    let ficha = document.getElementById("ficha" + fichaId);

    if (!ficha) return;

    const fichaRect = ficha.getBoundingClientRect();
    const dropRect = dropzone.getBoundingClientRect();

    const translateX = dropRect.left + dropRect.width / 2 - (fichaRect.left + fichaRect.width / 2);
    const translateY = dropRect.top + dropRect.height / 2 - (fichaRect.top + fichaRect.height / 2);

    ficha.style.transition = "transform 1.5s ease";
    ficha.style.transform = `translate(${translateX}px, ${translateY}px)`;

    setTimeout(() => {
        ficha.style.display = "none"; 
        let numero = parseInt(fichaId);
        if (intentosRestantes === 0 || ganar) {
            avisos.innerText = "Juego terminado";
        } else {
            checarJugada(numero);
        }
    }, 500);
});


function checarJugada(numero) {
    if (numero < numeroRandom) {
        avisos.innerText = "El número " + numero + " es menor";
    } else if (numero > numeroRandom) {
        avisos.innerText = "El número " + numero + " es mayor";
    } else {
        avisos.innerText = "¡GANASTE!";
        ganar = true;
        eventoganar();
        return;
    }

    intentosRestantes--;
    intentos.innerText = "Intentos restantes: " + intentosRestantes;
    if (intentosRestantes === 0 && !ganar) {
        avisos.innerText = "¡PERDISTE! El número era " + numeroRandom;
        eventoperder();
    }
}


function eventoganar() {
    dropzone.style.borderColor = "gold";
    dropzone.style.boxShadow = "0 0 20px gold";
    dropzone.style.transition = "transform 0.5s ease";
    dropzone.style.transform = "scale(1.2)";
    setTimeout(() => {
        dropzone.style.transform = "scale(1)";
    }, 500);
    dropzone.style.backgroundColor = "lightgreen";
    dropzone.style.color = "var(--color-4)";

}

function eventoperder() {
    dropzone.style.borderColor = "red";
    dropzone.style.boxShadow = "0 0 20px red";
    dropzone.style.transition = "transform 0.5s ease";
    dropzone.style.transform = "scale(0.8)";
    setTimeout(() => {
        dropzone.style.transform = "scale(1)";
    }, 500);
    dropzone.style.backgroundColor = "lightcoral";
    dropzone.style.color = "var(--color-4)";
}