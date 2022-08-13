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


<!--- HTML PARA REGISTRAR PRODUCTOS--->
<div class="container">
  <div class="row">
    <div class="col-sm-5">

        <h4 class="center">Registrar nuevo producto</h4>
        <br>

        <h6 class="center">Nombre</h6>
        <input id="postName" type="text"  placeholder="Nombre del producto" required>
        <br>
        <h6 class="center">Precio</h6>
        <input id="postPrice" type="number"  placeholder="Precio del producto" required>
        <br>
        <br>
        <h6 class="center">Imagen</h6>
        <input id="postImage" type="text"  placeholder="Imagen del producto" required>
        <br>
        <br>
        <h6 class="center">Unidades</h6>
        <input id="postStock" type="number"  placeholder="Inventario" required>
        <br>
        <h6 class="center">Estado</h6>
        <select id="postStats" style="display: block;">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        <br>
        <h6 class="center">Fecha</h6>
        <input id="postDate" type="date"  placeholder="Fecha" required>
        <br>
        <br>
        <button id="btnRegistrar" class="btn" style="background-color: #77B64D; color: #1D1C1C">Registrar</button>

    </div>
    <div class="col-sm-2">
    </div>
    <div class="col-sm-5">
        <!--- HTML PARA BUSCAR PRODUCTOS--->
        <h4 class="center">Buscar productos</h4>
        <input id="postNameSearch" type="text"  placeholder="Nombre del producto" required>
        <p>Nombre del producto</p>
        <button id="btnBuscar" class="btn" style="background-color: #77B64D; color: #1D1C1C" onclick="listar()">Buscar</button>


    </div>
  </div>
</div>

<!--- TABLA PARA LISTAR PRODUCTOS--->
<div class="container">
  <div class="row">
    <div class="col-sm-1">
    </div>
    <div class="col-sm-10">
            <h4 class="center">Productos registrados</h4>
                  <table class="black-text">
                  <thead>
                        <tr>
                              <th width="5%" id="idProcuto">ID</th>
                              <th width="20%">NAME</th>
                              <th width="10%">PRICE</th>
                              <th width="30%">IMAGE</th>
                              <th width="5%">STOCK</th>
                              <th width="5%">STATS</th>
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
<script type="text/javascript" src="./scripts/fresh.js?v1.0.0"></script>
</html>
