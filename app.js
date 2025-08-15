// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


function agregarAmigo() {
    let amigos = document.getElementById('amigo').value;
    if (amigos === '') {
        alert ('Por favor, ingrese un nombre válido');
    } else {
        lista ('h3', amigos);
    }
    
    limpiarCaja ();
    return
}



function limpiarCaja () {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
    return
}

function lista (elemento, texto){
    let nombreAñadido = document.querySelector(elemento);
    nombreAñadido.innerHTML = texto;
    return
}

