function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var tiposBici = document.getElementsByClassName("form-control").value;


	if (nombre == "" || nombre.charAt(0).toUpperCase() != nombre.charAt(0) || /^[a-zA-Z]+$/.test(nombre) == false ) {
		var nombreDiv = document.getElementsByClassName('name-container input-box')[0];
		var span = document.createElement('span');
		var requerido1 = document.createTextNode("Debe ingresar su nombre");
		nombreDiv.appendChild(span);
		span.appendChild(requerido1);
	}
	else if (apellido == "" || apellido.charAt(0).toUpperCase() != apellido.charAt(0) || /^[a-zA-Z]+$/.test(apellido) == false) {
		var apellidoDiv = document.getElementsByClassName('lastname-container input-box')[0];
		var span2 = document.createElement('span');
		var requerido2 = document.createTextNode("Debe ingresar su apellido");
		apellidoDiv.appendChild(span2);
		span2.appendChild(requerido2);
	}
	else if (email.indexOf("@") == -1){
		var emailDiv = document.getElementsByClassName('email-container input-box')[0];
		var span3 = document.createElement('span');
		var requerido3 = document.createTextNode("Verifique su email");
		emailDiv.appendChild(span3);
		span3.appendChild(requerido3);
	}
	else if (password.length < 6 ||password == "password" || password == "123456" || password == "098765") {
		var passDiv = document.getElementsByClassName('form-group input-box')[0];
		var span4 = document.createElement('span');
		var requerido4 = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
		passDiv.appendChild(span4);
		span4.appendChild(requerido4);
	}
	else if (tiposBici == 0) {
		var tiposDiv = document.getElementsByClassName('form-group input-box')[1];
		var span5 = document.createElement('span');
		var requerido4 = document.createTextNode("Debes seleccionar al menos un tipo de bici");
		tiposDiv.appendChild(span5);
		span5.appendChild(requerido5);
	}

	}
