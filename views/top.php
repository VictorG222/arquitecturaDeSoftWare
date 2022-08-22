<!DOCTYPE html>
<html>
<style>
.container{  
text-align: center;   
} 

.td{  
text-align: center;   
} 

</style>
<body onload="listar()">
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1>Carrito de Compras</h1>

  <br>


  <div class="container">
    <div class="row">
        <!-- Elementos generados a partir del JSON -->
        <!-- Carrito -->
        <aside class="col-sm-12">
            <!-- Elementos del carrito -->
            <ul id="carrito" class="list-group"></ul>
            <hr>
            <table class="black-text">
                  <thead>
                        <tr>
                              <th width="%" id="idKart">ID</th>
                              <th width="20%">CANTIDAD</th>
                              <th width="30%">PRODUCTO</th>
                              <th width="5%">PRECIO</th>
                              <th width="30%">IMAGEN</th>
                              <th width="20%">INVENTARIO</th>
                        </tr>
                        </thead>
                        <tbody id="idBody" style="border: none;">
                        </tbody>
                  </table>


            <!-- Precio total -->
            <p class="text-right">Total: 
                <span id="total"></span>$MXN</p>

            <br>
                <div style="text-align: center;">
                <td><button id="btnEmpty" class="btn btn-danger" onclick="deleteKart(1)">Vaciar Carrito</button></td>
                </div>
            
            <br>
            <!-- Pago con PayPal -->
            <div id="smart-button-container">
                <div style="text-align: center;">
                    <div id="paypal-button-container"></div>
                </div>
            </div>
            <script src="https://www.paypal.com/sdk/js?client-id=AduSjW8CSmidtswRQZcEZ9H8_VgPI-0afRgMuwhkAm0WA-RCnnuDoJ3qtdDdIUwT8ISIIzk_lnsJS1Ex&enable-funding=venmo&currency=MXN" data-sdk-integration-source="button-factory"></script>
        </aside>
    </div>
</div>






</body>
<script type="text/javascript" src="./scripts/top.js?v1.0.0"></script>
<script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
</html>
