// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let amigos = document.getElementById('amigo').value;
    if (amigos === '') {
        alert ('Por favor, ingrese un nombre válido');
    } else {
        listaDeAmigos.push (amigos);
        let agregarAmigos = document.getElementById("listaAmigos");
        let contenido = "";
        for (let amigo of listaDeAmigos){
            contenido += `<li>${amigo}</li>`;
            agregarAmigos.innerHTML = contenido;
        }
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

function sortearAmigo() {
    if (listaDeAmigos == ""){
        alert(":)");  
    }else {
        let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        let amigoAleatorio = listaDeAmigos[indiceAleatorio];
        console.log(indiceAleatorio);
        console.log(amigoAleatorio);
        let resultadoSorteo = document.getElementById('resultado');
        resultadoSorteo.innerHTML = `Felicidades ${amigoAleatorio} es el amigo secreto.`;  
    }
}