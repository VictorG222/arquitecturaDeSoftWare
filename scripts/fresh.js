
var api = new ProductSchema();

function listar(){
  $("#idBody").empty();
  var name = $("#postNameSearch").val();
    toString(name);
  get(name);
}

$("#btnRegistrar").click(function(){
    register()
  });
  
$("#btnEliminar").click(function(){
    deleteEntrada()
});

function register(){
    var name = $("#postName").val();
    var price = $("#postPrice").val();
    var image = $("#postImage").val();
    var stock = $("#postStock").val();
    var stats = $("#postStats").val();
    var date = $("#postDate").val();
    
    fetch(api.products, {
      method: 'POST',
      body: JSON.stringify({
            name: name,
            price: price,
            image: image,
            stock: stock,
            stats: stats,
            date: date
      }),
      headers: {
        "Content-type": "application/json"
          }
      })
      .then(response => response.json())
      .then(data => {
            window.alert('Producto registrado');
          })
      .then($("#idBody").empty())
      .catch(err => {
          console.log(err);
      })
}


function get(name){
        fetch(api.products+'/"'+name+'"', {
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


function getDate(doc){
    var date = new Date(doc.date);
    var day = date.getDay();
    var month = date.getMonth(); 
    var year = date.getFullYear();
    var fecha = (year+ "-" + month + "-" + day);
    return fecha;
}

function metodoAppend (doc) {
    $("#idBody").append('<tr>' +
      '<td id="'+doc.id+'">' + doc.id + '</td>' +
      '<td>' + doc.name+ '</td>' + 
      '<td>' + doc.price+ '</td>' + 
      '<td>' + doc.image+ '</td>' + 
      '<td>' + doc.stock+ '</td>' + 
      '<td>' + doc.stats+ '</td>' + 
      '<td>' + getDate(doc) + '</td>' +
      '<td><button id="btnEliminar" class="btn btn-danger" onclick="deleteEntrada('+doc.id+')">Eliminar</button></td>' +
      '<td><button id="btnCarrito" class="btn btn-primary" onclick="agregarcarrito('+doc.id+')">Carrito</button></td>' +
    '</tr>');
}


function deleteEntrada(id) {
    if(confirm('¿Esta seguro de que quiere eliminar el producto?')){
    fetch(api.products+'/'+id, {
      method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
    .then(listar())
    .catch(err => console.log(err));
    }
  }