$(document).ready(function(){
  numeroV=1;
  numeroC=1;
  numeroE=1;
  $("#texto").on("keypress",function(obj_evento){
  $("#caracteres").text($("#texto").val().length);
  if(obj_evento.which==101||obj_evento.which==97||obj_evento.which==105||obj_evento.which==111||obj_evento.which==117){
  $("#vocales").text(numeroV++);
  }
  else if(obj_evento.which==32){
  $("#espacios").text(numeroE++);
    }
    else{
      $("#consonantes").text(numeroC++);
    }
    })

})