<?php
  $view = $_GET['view'];
?>

<style>
* {
  padding: 0;
  margin: 0;
}
p {
  margin-bottom: 20px;
}

.breadcrumb{
  display: inline;
  padding: 0 1rem;
}
.wrapper {
  width: 80%;
  margin: auto;
  overflow:hidden;
}
header {
  background: rgba(0,0,0,0.9);
  width: 100%;
  position: fixed;
  z-index: 10;
}

a {
  font-size: 40px;
  font-weight:bold;
  font-style: normal;
  
}
nav ul {
  list-style: none;
  overflow: hidden; /* Limpiamos errores de float */
}
nav ul li {
  float: left;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #000;

}
nav ul li {
  display: block; /* Convertimos los elementos a en elementos bloque para manipular el padding */
  padding: 20px;
  color: #fff;
  text-decoration: none;
}
nav ul li:hover {
  background: #2b302d;
}
.contenido {
  padding-top: 80px;
}
</style>
<!-- <nav style="background-color: #1D1C1C">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center"><img src="./res/img/bettergym.png" class="center" style="width: 25%;"></a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html" >Cerrar sesion</a></li>
        <li><a href="badges.html">Usuarios</a></li>
        <li><a href="collapsible.html">Registro</a></li>
      </ul>
    </div>
    <button id="btnLogOut" class="btn right" style="background-color: #77B64D; color: #1D1C1C">Cerrar sesion</button>

  </nav> -->
<div class="nav-wrapper">


		<nav style="background-color: #000;   min-height: 100px;" >
			<ul>
				<li id="home">
          <img src="./res/img/bettergym.png" alt="bettergym"id="itemImg" width="100">
        </li>
        <li id="trending">PayPal</li>
        <li id="fresh">Productos</li>
        <li id="top">Carrito</li>
        <li id="contact">Contact us</li>
			</ul>
    </nav>
    <h5 class="hiddenView" id="<?php if($view) echo $view ?>"></h5>


  <!-- <nav style="background-color: #000;   min-height: 50px;">
      <div class="nav-wrapper">
        <div class="col s12" id="breadcrumbHome" style="display: none;">
          <a href="?view=home" class="breadcrumb">Home</a>
        </div>

        <div class="col s12" id="breadcrumbTrending" style="display: none;">
          <a href="?view=home" class="breadcrumb">Home</a>
          <a href="?view=trending" class="breadcrumb">Trending</a>
        </div>

        <div class="col s12" id="breadcrumbFresh" style="display: none;">
          <a href="?view=home" class="breadcrumb">Home</a>
          <a href="?view=fresh" class="breadcrumb">Fresh</a>
        </div>

        <div class="col s12" id="breadcrumbTop" style="display: none;">
          <a href="?view=home" class="breadcrumb">Home</a>
          <a href="?view=top" class="breadcrumb">Top</a>
        </div>

        <div class="col s12" id="breadcrumbContact" style="display: none;">
          <a href="?view=home" class="breadcrumb">Home</a>
          <a href="?view=contact" class="breadcrumb">Contact Us</a>
        </div>
      </div>
  </nav> -->

  </div>

<script src="./scripts/navbar.js?v1.0.0"></script>
