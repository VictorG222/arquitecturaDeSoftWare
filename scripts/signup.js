var api = new APISchema();

//Evento para el registro de usuarios
$("#btnSignUp").click(function(){
    signup()
});

//Funcion para validar contraseñas
// function verificar(pass) {
//   var pass = $("#pass").val();
//   var email = $("#correo").val();

//   var newPassword = pass
//   var minNumberofChars = 6;
//   var maxNumberofChars = 16;
//   var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

//   if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
//       M.toast({html: 'La contraseña debe ser de entre 8 y 16 caracteres'});
//       return false;
//   }
//   if(!regularExpression.test(newPassword)) {
//       M.toast({html: 'Introdusca una contraseña valida'});
//       return false;
//   } else{
//       M.toast({html: 'Buena contraseña'});
//       signup(pass, email); 
//   }
// }

//Funcion para hacer registro en firebase
function signup(){
  var pass = $("#pass").val();
  var email = $("#correo").val();
  var name = $("#nombre").val();
  
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
                US_email: email,
                UID: uid
              }),
              headers: {
                "Content-type": "application/json"
              }
          })
          .then(response => response.json())
          .then(data => {
            M.toast({html: 'Bien Venido'});
            window.location = "?view=home";
          })
          .catch(err =>{
            console.log(err);
          });
           
          //M.toas({html: '' + uid});
          //
          // ...
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
  redirect()
  window.location = "?view=login";
});


function redirect(){    
}




