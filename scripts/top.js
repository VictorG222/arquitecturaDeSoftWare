var total = 0.0;
var apiKart = new KartSchema();

function listar(){
    $("#idBody").empty();
    var user_id = 1;
    toString(user_id);
    get(user_id);
  }
  
//   $("#btnRegistrar").click(function(){
//       register()
//     });
    
  $("#btnEliminarProducto").click(function(){
      deleteKart()
  });

  $("#btnEmpty").click(function(){
    emptyKart()
});
  
  

  function get(user_id){
          fetch(apiKart.kart+'/'+user_id, {
            method: 'GET'
          }) .then(response => response.json()).then(data => {
          if(data.length > 0){
               $("#idBody").empty();
               
               data.forEach((doc) => {
                if (doc.status!=1){
                  metodoAppend(doc);
                  total += parseFloat(doc.price);
                  $("#total").text(total);
                }
                else{
                }
               });
           } else {}
          })
          .catch(err => console.log(err));
  }
  

  function metodoAppend (doc) {
      $("#idBody").append('<tr>' +
        '<td id="'+doc.id+'">' + doc.id + '</td>' +
        '<td>' + doc.quantity+ '</td>' + 
        '<td>' + doc.name+ '</td>' + 
        '<td>' + doc.price+ '</td>' + 
        '<td> <img width="50%" src="'+doc.image+'" class="center"></td>' + 
        '<td><button id="btnEliminarProducto" class="btn btn-danger" onclick="deleteProductoKart('+doc.id+')">Eliminar</button></td>' +
      '</tr>');
  }
  
  
function deleteProductoKart(id) {
    if(confirm('¿Esta seguro de que quiere eliminar el producto?')){
      fetch(apiKart.kart, {
        method: 'PUT',
        body: JSON.stringify({
            id: parseInt(id),
            status: parseInt(0),
        }),
        headers: {
          "Content-type": "application/json"
            }
        })
    .then()
    .then(listar())
    .catch(err => console.log(err));
    }
  }

function deleteKart(id) {
  fetch(apiKart.kart+'/'+id, {
    method: 'DELETE',
  })
  .then(listar())
  .catch(err => console.log(err));
  
}
  
  

var apipaypal = new PaypalSchema();

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
          purchase_units: [{"amount":{"currency_code":"MXN","value":total}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          var paypal_order_id = orderData.id;
          var paypal_payer_id = orderData.payer.payer_id;
          var paypal_payer_email = orderData.payer.email_address ;
          var paypal_country_code = orderData.payer.address.country_code;
          var paypal_amount = orderData.purchase_units[0].amount.value;
          var paypal_currency = orderData.purchase_units[0].amount.currency_code;
          var status = orderData.status;
          if (status == "COMPLETED"){
            status = 1;
          }
          var created_date = orderData.create_time;
          register(paypal_order_id, paypal_payer_id, paypal_payer_email, paypal_country_code, paypal_amount, paypal_currency, status, created_date);
          var id = 1;
          deleteKart();
          deleteKart(id);
          
          function register(){
            fetch(apipaypal.paypal_order, {
              method: 'POST',
              body: JSON.stringify({
                  paypal_order_id: paypal_order_id,
                  paypal_payer_id: paypal_payer_id,
                  paypal_payer_email: paypal_payer_email,
                  paypal_country_code: paypal_country_code,
                  paypal_amount: parseFloat(paypal_amount),
                  paypal_currency: paypal_currency,
                  status: parseInt(status),
                  created_date: created_date
              }),
              headers: {
                "Content-type": "application/json"
                  }
              })
              .then(response => response.json())
              .then(data => {
                    window.alert('Pago registrado');
                  })
              .then()
              .catch(err => {
                  console.log(err);
              })
        
            }
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


    
    
    
    







