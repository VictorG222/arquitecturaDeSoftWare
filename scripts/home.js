// Detectar sesión activa

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
  } else {
      window.location = "?view=login";
  }
});