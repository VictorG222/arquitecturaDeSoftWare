var view = $('.hiddenView').attr("id");
var time = 0

if(view == "home"){
  $("#breadcrumbHome").show(time);
}else if (view == "trending"){
  $("#breadcrumbTrending").show(time);
}else if (view == "fresh"){
  $("#breadcrumbFresh").show(time);
}else if (view == "top"){
  $("#breadcrumbTop").show(time);
}else if (view == "contact"){
  $("#breadcrumbContact").show(time);
}

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



//Redireccionamiento de menu persistente
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
