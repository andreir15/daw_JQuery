$(document).ready(function(){
    $(document).on({
        "click":function(obj_e){
  $("#coordenadas").text(obj_e.pageX+", "+obj_e.pageY)},
  "mousemove":function(evento){
      $(".posicion").text(evento.pageX,", ",evento.pageY)}
  })
    
})