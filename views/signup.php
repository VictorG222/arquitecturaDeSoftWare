<!DOCTYPE html>
<html>
<style>
body {font-family: Arial, Helvetica, sans-serifs}
* {box-sizing: border-box}

body{
    color: 77B64D;
}


/* Full-width input fields */




hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #77B64D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}



.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
<body >

<form action="/action_page.php" style="border:1px solid #ccc; background-color: #F5F5F5">
  <div class="container">

    
    <img src="./res/img/bettergym.png" class="center">


    <h4>Registro de usuario</h4>
    <p>Porfavor llene el formulario de registro.</p>
    <hr>

    <label for="correo"><b>Correo</b></label>
    <input id="correo" type="text" placeholder="Ingrese su correo" name="correo" required>

    <label for="pass"><b>Contraseña</b></label>
    <input id="pass" type="password" placeholder="Ingrese su contraseña" name="pass" required>

    <label for="pass-verify"><b>Confirmar contraseña</b></label>
    <input id="pass-verify" type="password" placeholder="Confirmar contraseña" name="pass-verify" required>

    <label for="nombre"><b>Nombre</b></label>
    <input id="nombre" type="text" placeholder="Ingrese su nombre" name="nombre" required>

    <label for="apellido"><b>Apellido</b></label>
    <input id="apellido" type="text" placeholder="Ingrese su apellido" name="apellido" required>

    <label for="edad"><b>Edad</b></label>
    <input id="edad" type="text" placeholder="Ingrese su edad" name="edad" required>

    <label for="sexo"><b>Sexo</b></label>
    <input id="sexo" type="text" placeholder="Ingrese su sexo" name="sexo" required>

    <label for="fecha"><b>Fecha de registro</b></label>
    <input id="fecha" type="date"  name="fecha" required>
    


    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancelar</button>
      <button id="btnSignUp" class="signupbtn">Registrar</button>
    </div>
  </div>
</form>

</body>
</html>

<script src="./scripts/signup.js?v1.0.0"></script>
