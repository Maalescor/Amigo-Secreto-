let amigos = [];

// agregar amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === ''){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo);
        mostrarAmigos(); // Muestra la lista actualizada de amigos
    }
    limpiarCaja();
}

function limpiarCaja(){
    document.getElementById("amigo").value = '';
}

// mostrar amigos en web
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let addAmigo = document.createElement("li");
        addAmigo.textContent = amigos[i];
        lista.appendChild(addAmigo);
    }
}

// sorteo de amigo secreto
function sortearAmigo(){
    if (amigos.length == 0){
        alert('Agregue amigos para realizar el sorteo');
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[numeroAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
    }

}
