# Amigo Secreto 

Este proyecto es una aplicación web sencilla para organizar un sorteo de "Amigo Secreto". Permite agregar nombres de participantes, mostrarlos en una lista y realizar el sorteo de manera aleatoria.

## Características

- Agregar nombres de amigos a una lista.
- Visualizar la lista de participantes en la web.
- Sortear un amigo secreto de forma aleatoria.
- Validación para evitar campos vacíos y sorteos sin participantes.

## Uso

1. **Agregar amigo:**  
   Escribe el nombre en el campo de texto y haz clic en el botón "Agregar". El nombre aparecerá en la lista.

2. **Sortear amigo secreto:**  
   Haz clic en el botón "Sortear" para seleccionar aleatoriamente uno de los participantes. El resultado se mostrará en pantalla.

## Estructura de archivos

- `app.js`: Lógica principal de la aplicación.
- `index.html`: Interfaz web (debes tener un campo de entrada con id `amigo`, una lista con id `listaAmigos` y un elemento con id `resultado`).

## Ejemplo de HTML mínimo

```html
<input type="text" id="amigo" placeholder="Nombre del amigo">
<button onclick="agregarAmigo()">Agregar</button>
<ul id="listaAmigos"></ul>
<button onclick="sortearAmigo()">Sortear</button>
<div id="resultado"></div>
<script src="app.js"></script>
