
var api = new EntradaSchema();
// Detectar sesión activa
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
  } else {
      window.location = "?view=login";
  }
});

$("#btnRegistrar").click(function(){
  register()
});

$("#btnEliminar").click(function(){
  deleteEntrada()
});



function listar(){
  var tipo = $("#inputTipo").val();
  var limit = $("#inputLimit").val();
  get(tipo,limit);
}

function register(){
  var fecha = $("#postFecha").val();
  var tipo = $("#postTipo").val();
  var status = $("#postStatus").val();
  
  fetch(api.entradas, {
    method: 'POST',
    body: JSON.stringify({
        fecha: fecha,
        tipo: parseInt(tipo),
        status: parseInt(status)
    }),
    headers: {
      "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
          window.alert('Entrada registrada');
        })
    .then(listar())
    .catch(err => {
        console.log(err);
    })
  }

function get(tipo,limit){
      fetch(api.entradas+'/'+tipo+'/'+limit, {
        method: 'GET'
      }) .then(response => response.json()).then(data => {
      if(data.length > 0){
           $("#idBody").empty();
           data.forEach((doc) => {
           metodoAppend(doc);
           });
       } else {}
      }).catch(err => console.log(err));
  }

function metodoAppend (doc) {
      $("#idBody").append('<tr>' +
        '<td id="'+doc.id+'">' + doc.id + '</td>' +
        '<td>' + getDate(doc) + '</td>' +
        '<td>' + doc.tipo+ '</td>' +
        '<td>' + doc.status+ '</td>' +
        '<td><button id="btnEliminar" class="btn btn-danger" onclick="deleteEntrada('+doc.id+')">Eliminar</button></td>' +
      '</tr>');
  }

function getDate(doc){
  var date = new Date(doc.fecha);
  var day = date.getDay();
  var month = date.getMonth(); 
  var year = date.getFullYear();
  var fecha = (year+ "-" + month + "-" + day);
  return fecha;
}

function deleteEntrada(id) {
  if(confirm('¿Esta seguro de que quiere eliminar la entrada?')){
  fetch(api.entradas+'/'+id, {
    method: 'DELETE',
  })
  .then(res => res.text()) 
  .then(res => console.log(res))
  .then(listar())
  .catch(err => console.log(err));
  }
}


// Funcionalidad del dominio del DOOM  
$('#dom').ready(function(){
  $('#dom').find('h5').eq(2).html('Tercer elemento modificado').end();
  var encabezados = $('#dom').find('h5').length;
  var accion = $('#accionDom').val();
  listarEncabezados(encabezados);
  mostrar(accion);
});

function dom(){
  var valor = $('#valor').val();
  var accion = $('#accionDom').val();
  var position = $('#position').val();
 
  Encabezado(position, valor, accion);
  var encabezados = $('#dom').find('h5').length;
  $('#position').empty();
  listarEncabezados(encabezados);
  
  $('#position').val('');
  $('#valor').val('');
}

function Encabezado(position, valor, accion){
  console.log(accion);
  if(accion == 'create'){
    // $('#dom').find('h5').eq(position).appendTo('<h5>'+valor+'</h5>');
    // $('#dom').find('h5').appendTo(position);
    $('#dom').append('<h5>'+valor+'</h5>');
  } else if(accion == 'edit'){
    $('#dom').find('h5').eq(position).html(valor).end();
  } else if(accion == 'delete'){
    $('#dom').find('h5').eq(position).remove().end();
  } else if(accion == 'color'){
    var color = $('#color').val();
    $('#dom').find('h5').eq(position).css({'color': color});
  }
}

function listarEncabezados(encabezados){
  for (let i = 0; i < encabezados; i++) {
    var varlorEncabezado = $('#dom').find('h5').eq(i).text();
    $('#position').append('<option value="'+i+'">'+varlorEncabezado+'</option>').end();
  }
}

function mostrar(){
  var accion = $('#accionDom').val();
  console.log(accion);
  if (accion == 'edit'){
    // Ocultar la seleccion del color
    $('#color').css({'display':'none'})
    $('#hColor').css({'display':'none'});
    // Mostrar la selecion de la posicion
    $('#position').css({'display':'inline'});
    $('#hPosition').css({'display':'inline'});
    // Mostrar el campo para el valor
    $('#valor').css({'display':'inline'});
    $('#hValor').css({'display':'inline'});
  } else if (accion == 'create'){
    // Ocultar la seleccion del color
    $('#color').css({'display':'none'})
    $('#hColor').css({'display':'none'});
    // Mostrar la selecion de la posicion
    $('#position').css({'display':'none'});
    $('#hPosition').css({'display':'none'});
    // Mostrar el campo para el valor
    $('#valor').css({'display':'inline'});
    $('#hValor').css({'display':'inline'});  
  } else if (accion == 'color'){
    // Mostar la seleccion del color
    $('#color').css({'display':'inline'});
    $('#hColor').css({'display':'inline'});
    // Ocultar el campo para el valor
    $('#valor').css({'display':'none'});
    $('#hValor').css({'display':'none'});
    // Ocultar el campo para la posicion
    $('#position').css({'display':'inline'});
    $('#hPosition').css({'display':'inline'});
    } else {
    // Ocultar el campo para el valor
    $('#valor').css({'display':'none'});
    $('#hValor').css({'display':'none'});
    // Ocultar la seleccion del color
    $('#color').css({'display':'none'});
    $('#hColor').css({'display':'none'});
    // Mostrar la selecion de la posicion
    $('#position').css({'display':'inline'});
    $('#hPosition').css({'display':'inline'});
  }
}
