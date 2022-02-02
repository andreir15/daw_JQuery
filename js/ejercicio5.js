$(document).ready(function(){
    $("#texto").on("keypress",function(obj_evento){
      
      $("#caracteres").text(obj_evento.which);
    })
})