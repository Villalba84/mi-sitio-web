//funcion para el reloj
function actual() {
    var fecha = new Date(); //actualizar fecha.
    var hora = fecha.getHours(); //hora actual
    var minuto = fecha.getMinutes(); //minuto actual
    var segundo = fecha.getSeconds(); //segundo actual

    //condicional con la que añadimos un 0 cuando la hora es menor que 10
    if (hora < 10) { //dos cifras para la hora
        hora = "0" + hora;
    }
    if (minuto < 10) { //dos cifras para el minuto
        minuto = "0" + minuto;
    }
    if (segundo < 10) { //dos cifras para el segundo
        segundo = "0" + segundo;
    }
    //ver en el recuadro del reloj:
    mireloj = hora + ":" + minuto + ":" + segundo;
    return mireloj;
}

function actualizar() { //función del temporizador
    mihora = actual(); //recoger hora actual
    mireloj = document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML = mihora; //incluir hora en elemento
}
setInterval(actualizar, 1000); //iniciar temporizador

//contador de archicvos html 
function links() {
    var ul, li, a, i, txtValue; //declaracion de variables
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    var cont = 0;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.href || a.innerText;
        if (txtValue.indexOf("html") > -1) {
            cont++;
        } else {

        }
    }
    document.getElementById("num_link").innerHTML = cont;
}
links();