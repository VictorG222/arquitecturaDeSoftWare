//Evento para el registro de usuarios
$("#btnLogin").click(function(){
  login();
});


function login(){
  var pass = $("#passL").val();
  var email = $("#emailL").val();   

  if( email === "" || pass === ""){
      M.toast({html: 'No se permiten campos vacios!'})
  } else {
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Loged In
        window.location = "?view=home";
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
//Metodo para redirecionar al registro
$("#linkregistro").click(function(){
    redirect()
});

function redirect(){  
  window.location = "?view=signup";
}