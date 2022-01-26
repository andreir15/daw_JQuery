$(document).ready(function(){
$("#boton").on("click",function(){
    $(".miLista").append("<li>"+$("#nombreId").val()+"</li>");
    $("#nombreId").val("");
})

})