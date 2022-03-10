// Cerrar sesión

/*firebase.auth().signOut().then(function() {
    //window.location = "?view=login";
}).catch(function(error) {

});*/

// Detectar sesión activa

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
   
  } else {
      window.location = "?view=login";
  }
});