//declaracion de variables
var slider = document.querySelector(".slider-contenedor") //se recoge el contenedor
var sliderIndividual = document.querySelectorAll(".contenido2-slider") //re recoger el contenedor2
var contador = 1;
var width = sliderIndividual[0].clientWidth;
var intervalo = 3000; //intervalo de tiempo de actuacion

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
})

//calculo del tiempo
setInterval(function() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;
    //condicional de transicion
    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500)
    }
}