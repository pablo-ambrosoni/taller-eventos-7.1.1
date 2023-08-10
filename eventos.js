document.addEventListener("DOMContentLoaded", function () {
    let midiv = document.getElementById("midiv");

    midiv.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    let boton = document.getElementById("button");

    boton.addEventListener("click", function (event) {
        alert("Hola!");
        event.stopPropagation(); // Detener la propagación del evento
    });
});


