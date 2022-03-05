$("#btnSignUp").click(function(){
    signup()
});


function signup(){
    
    var email = $("#correo").val();
    var pass = $("#pass").val();


    if( email === "" || pass === ""){
        M.toast({html: 'No se permiten campos vacios!'})

    } else {

        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          var uid = user.uid;
          M.toas({html: '' + uid});
          window.location = "?view=login"
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