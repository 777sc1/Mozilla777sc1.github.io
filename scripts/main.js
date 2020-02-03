
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
	var miNombre = prompt('Por favor, ingrese su nombre');
	localStorage.setItem('nombre', miNombre);
	miTitulo.textContent = 'Mozilla, ' + (miNombre || 'Anónimo');
}

if(localStorage.getItem('nombre')){
	var auxNombre = localStorage.getItem('nombre');
	auxNombre = auxNombre === 'null' ? 'Anónimo' : auxNombre;
	
	miTitulo.textContent = 'Mozilla, ' + auxNombre;
}
else
	establecerNombreUsuario();

miBoton.onclick = function(){
	
	establecerNombreUsuario();
	
}

// ------------------------------------------

var miImagen = document.querySelector('img');

miImagen.onclick = function() {
	
	var miSRC = miImagen.getAttribute('src');
	
	if(miSRC === 'imagenes/scarecrow.jpg')
		miImagen.setAttribute('src', 'imagenes/scarecrow02.jpg');
	else
		miImagen.setAttribute('src', 'imagenes/scarecrow.jpg');
}

// ------------------------------------------