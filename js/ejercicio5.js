$(document).ready(function(){
    $("#texto").on("keypress",function(obj_evento){
      $("miDiv").text(obj_evento.which);
    })
})