<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body {font-family: Arial, Helvetica, sans-serif;}
  form {border: 3px solid #f1f1f1;}

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }

  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  .container {
    padding: 16px;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
  }
</style>
</head>
<body>
<!--- Formulario Login --->
<form>
  <div class="imgcontainer">
    <img src="./res/img/bettergym.png" class="center">
    <h5>Inicio de sesion</h5>
  </div>
  <div class="container">
    <label for="correo"><b>Correo</b></label>
    <input id="emailL" type="text" placeholder="Ingrese su corrreo" name="correo" required>

    <label for="pass"><b>Password</b></label>
    <input id="passL" type="password" placeholder="Ingrese su contraseña" name="pass" required>
        
    <button id="btnLogin" class="loginbtn">Login</button>
  </div>
  <!--- Redireccionar a registro --->
  <div class="center">
    <p>No tienes una cuenta registrada</p>
    <button id="linkregistro">Registrate aqui</button> 
  </div>
  <!--- Redireccionar a registro --->
</form>

</body>
</html>

<!--- Importado a login script --->
<script type="text/javascript" src="./scripts/login.js?v1.0.0"></script>