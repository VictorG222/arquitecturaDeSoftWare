//Evento para el registro de usuarios
$("#btnLogin").click(function(){
  login();
});


function login(){
  var password = $("#passL").val();
  var email = $("#emailL").val();   

  if( email === "" || password === ""){
      M.toast({html: 'No se permiten campos vacios!'})
  } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
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