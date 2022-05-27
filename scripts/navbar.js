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


$("#trending").click(function(){
    redirecttrending()
});

function redirecttrending(){
  window.location = "?view=trending";
}



$("#fresh").click(function(){
    redirectfresh()
});

function redirectfresh(){
  window.location = "?view=fresh";
}




$("#top").click(function(){
    redirecttop()
});

function redirecttop(){
  window.location = "?view=top";
}

$("#contact").click(function(){
    redirectcontact()
});


function redirectcontact(){
  window.location = "?view=contact";
}

$("#home").click(function(){
    redirecthome()
});

function redirecthome(){
  window.location = "?view=home";
}
