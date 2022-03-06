//Metodo para redirecionar al registro
$("#linkregistro").click(function(){
    redirect()
});


function redirect(){  
  window.location = "?view=signup";
}