<!DOCTYPE html>
<html>

</style>
<body >
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1>TRENDING</h1>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  
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


<!--- HTML PARA BUSCAR NUEVAS ENTRADAS--->
<div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
      <h4 class="center">Buscar entradas registradas</h4>
        <p>Fecha Inicial</p>
        <input id="inputTipo" type="date" onchange="listar()">
        <p>Fecha Final</p>
        <input id="inputLimit"  type="date"  onchange="listar()">
    </div>
    <div class="col-sm-4">
    </div>

       


<!--- TABLA PARA LISTAR ENTRADAS--->
<div class="container">
  <div class="row">
    <div class="col-sm-2">
    </div>
    <div class="col-sm-8">
            <h4 class="center">Entradas registradas</h4>
                  <table class="black-text">
                  <thead>
                        <tr>
                              <th width="20%" id="idEntrada">ID</th>
                              <th width="20%">FECHA</th>
                              <th width="20%">TIPO</th>
                              <th width="20%">STATUS</th>
                              <th width="20%">ELIMINAR</th>
                        </tr>
                        </thead>
                        <tbody id="idBody" style="border: none;">
                        </tbody>
                  </table>
    </div>
    <div class="col-sm-1">
    </div>
  </div>
</div>


</body>
</html>
