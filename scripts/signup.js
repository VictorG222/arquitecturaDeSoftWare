var api = new APISchema();

//Evento para el registro de usuarios
$("#btnSignUp").click(function(){
    signup()
});

//Funcion para hacer registro en firebase
function signup(){
  var pass = $("#pass").val();
  var name = $("#nombre").val();
  var apellido = $("#apellido").val();
  var edad = $("#edad").val();
  var sexo  = $("#sexo").val();
  var fecha_de_renovacion = $("#fecha").val();
  var email = $("#correo").val();
  
    if( email === "" || pass === ""){
        M.toast({html: 'No se permiten campos vacios!'})
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          var uid = user.uid;
          fetch(api.users, {
              method: 'POST',
              body: JSON.stringify({
                US_name: name,
                US_apellido: apellido,
                US_edad: parseInt(edad),
                US_sexo: sexo,
                fecha_de_renovacion: fecha_de_renovacion,
                estado_membresia: 1,
                status: 1,
                US_email: email,
                UID: uid
              }),
              headers: {
                "Content-type": "application/json"
              }
          })
          .then(response => response.json())
          .then(data => {
            M.toast({html: 'Bienvenido'});
            window.location = "?view=home";
          })
          .catch(err => {
            console.log(err);
          });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          M.toast({html: errorCode + ' - '+ errorMessage});
          // ..
        });
    }
}
//Metodo para redirecionar al login
$("#linklogin").click(function(){
  window.location = "?view=login";
});

$("#linklogin").click(function(){
  window.location = "?view=login";
});


// reCAPTCHA
function getCaptchaResponse() {
  var response = grecaptcha.getResponse();

  if(response.length == 0) {
    $("#g-recaptcha-error").show(0);
  } else {
    alert("Continuar con el envio del formulario");
  }
}

function verifyCaptcha() {
  $("#g-recaptcha-error").hide(0);
}

$("#submitForm").click(function() {
  getCaptchaResponse();
});
