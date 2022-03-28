$("#btnLogOut").click(function() {
    var confirm = window.confirm("¿Esta seguro de quere cerrar su sesion?");
    if(confirm){
        firebase.auth().signOut().then(function() {
            window.location = "?view=login";
        }).catch(function(error) {
            console.log(error);
        });
    }
});