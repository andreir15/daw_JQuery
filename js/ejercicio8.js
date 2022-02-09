$(document).ready(function(){
    $("#contenedor div:gt(0)").hide();
    setInterval(function(){
        $("#contenedor div:first-child").fadeOut(0)
        .next("div").fadeIn(500)
        .end().appendTo("#contenedor");},4000);

})