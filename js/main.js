function validateForm(){
	var nombre = document.getElementById("name").value;
	var aoellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var tiposBici = document.getElementsByClassName("form-control").value;


	if (nombre == "") {
		
		var nombreVacio = document.getElementsByClassName('name-container input-box')[0];
		var span = document.createElement('span');
		var requerido1 = document.createTextNode("Debe ingresar su nombre");
		nombreVacio.appendChild(span);
		span.appendChild(requerido1);


	}

	}
