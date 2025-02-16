// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo").value.trim();
    console.log(nuevoAmigo);
    nuevoAmigo != "" ? amigos.push(nuevoAmigo) : alert("Por favor, inserte un nombre");
    console.log(amigos);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista(){
let lista = document.getElementById("listaAmigos");
lista.innerHTML = "";
for(let contador = 0; contador <= amigos.length; contador++){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigos[contador];
    lista.appendChild(nuevoElemento);
}
}

