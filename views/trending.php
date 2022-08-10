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
  
  </script>

<br>
  <br>

<!--- HTML PARA BUSCAR PAGOS--->
<div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
      <h4 class="center">Buscar entradas registradas</h4>
        <p>Fecha Inicial</p>
        <input id="inputInicial" type="date" onchange="listar()">
        <p>Fecha Final</p>
        <input id="inputFinal"  type="date"  onchange="listar()">
    </div>
    <div class="col-sm-4">
    </div>

       


<!--- TABLA PARA LISTAR PAGOS--->
<div class="container">
  <div class="row">
    <div class="col-sm-2">
    </div>
    <div class="col-sm-8">
            <h4 class="center">Pagos registradas</h4>
                  <table class="black-text">
                  <thead>
                        <tr>
                              <th width="20%" id="idPago">ID</th>
                              <th width="20%">ORDER ID</th>
                              <th width="20%">PAYER ID</th>
                              <th width="20%">PAYER EMAIL</th>
                              <th width="20%">COUNTRY CODE</th>
                              <th width="20%">AMOUNT</th>
                              <th width="20%">CURRENCY</th>
                              <th width="20%">STATUS</th>
                              <th width="20%">DATE</th>
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
<script type="text/javascript" src="./scripts/trending.js?v1.0.0"></script>
</html>
