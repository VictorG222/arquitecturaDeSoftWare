
var api = new PaypalSchema();

function listar(){
  $("#idBody").empty();
  var fecha_inicial = $("#inputInicial").val();
  var fecha_final = $("#inputFinal").val();
    toString(fecha_inicial);
    toString(fecha_final);
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
          
          function register(){
            fetch(api.paypal_order, {
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
              .then(listar())
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

function get(inputInicial,inputFinal){
    fetch(api.paypal_order+'/"'+inputInicial+'"/"'+inputFinal+'"', {
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
      '<td> ' + doc.paypal_order_id + '</td>' +
      '<td>' + doc.paypal_payer_id + '</td>' +
      '<td>' + doc.paypal_payer_email+ '</td>' +
      '<td>' + doc.paypal_country_code+ '</td>' +
      '<td>' + doc.paypal_amount+ '</td>' +
      '<td>' + doc.paypal_currency+ '</td>' +
      '<td>' + doc.status+ '</td>' +
      '<td>' + doc.created_date + '</td>' +
    '</tr>');
}




