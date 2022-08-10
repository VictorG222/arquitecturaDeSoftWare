
var api = new PaypalSchema();
function listar(){
  var fecha_inicial = $("#inputInicial").val();
  var fecha_final = $("#inputFinal").val();
  get(fecha_inicial,fecha_final);
}


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

\







