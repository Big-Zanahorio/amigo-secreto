// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    // Se obtiene lo que hay en la caja de texto con el ID "amigo" y se le quitan los espacios en blanco
    let nuevoAmigo = document.getElementById("amigo").value.trim(); 

    // Se verifica primero si el texto recibido no esta vacio y se agrega a el array "amigos"
    nuevoAmigo != "" ? amigos.push(nuevoAmigo) : alert("Por favor, inserte un nombre");

    // Se limpia la caja de texto
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista(){
    // Se crea un objeto que apunte a la lista html "lista de amigos" que esta en el index.html
    let lista = document.getElementById("listaAmigos");

    // Se limpia la lista
    lista.innerHTML = "";

    // Se recorre el array "amigos" y se van agregando la lista "listaAmigos"
    for(let contador = 0; contador <= amigos.length; contador++){
        // Se crea el elemento "li" que sirve para agregar a una lista html
        let nuevoElemento = document.createElement("li");

        // Al elemento creado se le asigna el texto que hay en esta posicion de el array "amigos"
        nuevoElemento.textContent = amigos[contador];

        // Se agrega ese elemento a la lista html "listaAmigos"
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    // Se verifica que la lista no este vacia
    if(amigos!=""){
        // Se genera el numero random entre 0 y la cantidad de datos en el array "amigos" -1
        let indice = Math.floor(Math.random()*amigos.length);

        // Se usa el numero random para determinar la posicion en el array que se tomara como resultado
        let amigoSorteado = amigos[indice];

        // Se crea un objeto que apunte a la lista html "resultado"
        let resultado = document.getElementById("resultado");

        // Se asigna el resultado
        resultado.innerHTML = amigoSorteado;
    }
    else {
        alert("No hay amigos para sortear");
    }
}