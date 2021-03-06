
<!DOCTYPE html>
<html>
<style>
</style>
<body >
<br><br><br>
<!--- HTML PARA REGISTRAR NUEVAS ENTRADAS--->

<br>
<br>
<br>
<br>
<div id="dom" style="padding: 5%;">
        <h6>Accion</h6>
          <select id="accionDom" style="display: block;" onchange="mostrar()">
            <option value="create" >Agregar</option>
            <option value="edit" >Editar</option>
            <option value="delete" >Eliminar</option>
            <option value="color" >Color</option>
          </select>
        <br>

        <h6 id="hPosition">Posicion</h6>
          <select id="position" style="display: block;" class="selDiv">
          </select>
        <br>
      
        <h6 id="hValor">Valor</h6>
        <input id="valor" type="text" placeholder="Valor" name="valor" required>
        <br>

        <h6 id="hColor" style="display: none;">Color</h6>
        <select id="color" style="display: block; display: none;"  >
          <option value="black">Negro</option>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
          <option value="red">Rojo</option>
        </select>

        <button id="btnDom" class="btn" style="background-color: #77B64D; color: #1D1C1C" onclick="dom()">ACCION</button>

  <br>
  <br>
  <h5>1</h5>
  <h5>2</h5>
  <h5>3</h5>
  <h5>4</h5>
  <h5>5</h5>
  <h5>6</h5>
</div>

<br>
<br>
<br>

<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <h4 class="center">Registrar nueva entrada</h4>
      <input id="postFecha" type="date"  placeholder="Fecha de registro" required>
      <select id="postTipo" style="display: block;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select id="postStatus" style="display: block;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      <button id="btnRegistrar" class="btn" style="background-color: #77B64D; color: #1D1C1C" onclick="dom()">Registrar</button>
    </div>
    <div class="col-sm">
    </div>
  </div>
</div>
<!--- HTML PARA BUSCAR NUEVAS ENTRADAS--->
<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <h4 class="center">Buscar entradas registradas</h4>
        <p>Tipo de entrada</p>
        <select id="inputTipo" style="display: block;" onchange="listar()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>Numero de registros</p>
        <select id="inputLimit" style="display: block;" onchange="listar()">
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
    </div>
    <div class="col-sm">
    </div>
  </div>
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

<script type="text/javascript" src="./scripts/home.js?v1.0.0"></script>
