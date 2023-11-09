<?php
	// Esto es para activar la visualización de errores en el servidor, por si los hubiese
	error_reporting(-1);
	ini_set('display_errors', 'On');
	set_error_handler("var_dump");

	// El valor entre corchetes son los atributos name del formulario html
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$telefono = $_POST['telefono'];
	$mensaje = $_POST['mensaje'];

	$cuerpoCorreo='<h1>Mensaje de la web</h1>
	<p>Nombre:'.$nombre.'</p>
	<p>Email:'.$email.'</p>
	<p>telefono:'.$telefono.'</p>
	<p>Mensaje:'.$mensaje.'</p>';
	
echo($cuerpoCorreo);
	// El from DEBE corresponder a una cuenta de correo real creada en el servidor
	$headers = "From: nurialomo@gmail.com\r\n"; 
	$headers .= 'Reply-To:'.$email."\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
	 
	if(mail($email, "Mensaje web", $cuerpoCorreo,$headers)){
	 	echo true;
	}else{
	 	echo false;
	}
?>