
var apiProduct = new ProductSchema();

var apiKart = new KartSchema();

'use strict';
const boton_foto = document.querySelector('#btnFoto');
const imagen = document.querySelector('#productImage');
let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dzpcfwntm',
    uploadPreset: 'gv9itgnl'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);



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

$("#btnCarrito").click(function(){
  agregarcarrito()
});


function agregarcarrito(product_id, user_id, quantity){
  
  fetch(apiKart.kart+'/', {
    method: 'POST',
    body: JSON.stringify({
          product_id: product_id,
          user_id: user_id,
          quantity: quantity
    }),
    headers: {
      "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
          window.alert('Agregado al carrito');
        })
    // .then($("#idBody").empty())
    .catch(err => {
        console.log(err);
    })
}



function register(){
    var name = $("#postName").val();
    var price = $("#postPrice").val();
    var image = document.getElementById("productImage").src;
    var stock = $("#postStock").val();
    var stats = $("#postStats").val();
    var date = $("#postDate").val();
    
    fetch(apiProduct.products, {
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
        fetch(apiProduct.products+'/"'+name+'"', {
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
      '<td> <img width="50%" src="'+doc.image+'" class="center"></td>' + 
      '<td>' + doc.stock+ '</td>' + 
      '<td>' + doc.stats+ '</td>' + 
      '<td>' + getDate(doc) + '</td>' +
      '<td><button id="btnEliminar" class="btn btn-danger" onclick="deleteEntrada('+doc.id+')">Eliminar</button></td>' +
      '<td><button id="btnCarrito" class="btn btn-primary" onclick="agregarcarrito('+doc.id+', 1, 1)">Carrito</button></td>' +
    '</tr>');
}


function deleteEntrada(id) {
    if(confirm('¿Esta seguro de que quiere eliminar el producto?')){
    fetch(apiProduct.products+'/'+id, {
      method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
    .then(listar())
    .catch(err => console.log(err));
    }
  }

