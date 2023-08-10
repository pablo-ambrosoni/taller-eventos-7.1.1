function saludar() {
    alert("Hola!")
};

document.addEventListener("DOMContentLoaded", function () {
    let midiv = document.getElementById("midiv");

    midiv.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
});