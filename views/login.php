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
<div class="container">
  <div class="row">
    <div class="col-sm-3">
    </div>
    <div class="col-sm-6">
    <div class="container">
      <img src="./res/img/bettergym.png" class="center">
      <h5>Inicio de sesion</h5>
      <label for="correo"><b>Correo</b></label>
      <input id="emailL" type="text" placeholder="Ingrese su corrreo" name="correo" required>

      <label for="pass"><b>Contraseña</b></label>
      <input id="passL" type="password" placeholder="Ingrese su contraseña" name="pass" required>
          
      <button id="btnLogin" class="loginbtn">Login</button>
    </div>
    </div>
    <div class="col-sm-3">
    </div>
  </div>
</div>


<!-- Pago con PayPal -->
<div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=AeUHiiTZb9g3omOMjgombubbfzt4S4-9xqx2HOQCTXJVR-gi2CKW4hel9PwouqL5Dd_H6w5PsyKoFUJH&enable-funding=venmo&currency=MXN" data-sdk-integration-source="button-factory"></script>
  <script>
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'white',
          layout: 'horizontal',
          label: 'buynow',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"MXN","value":200}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script>

  <!--- Redireccionar a registro --->
  <div class="center">
    <p>No tienes una cuenta registrada</p>
    <button id="linkregistro">Registrate aqui</button> 
  </div>
  <!--- Redireccionar a registro --->
</body>
</html>

<!--- Importado a login script --->
<script type="text/javascript" src="./scripts/login.js?v1.0.0"></script>