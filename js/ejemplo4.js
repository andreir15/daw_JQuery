$(document).ready(function(){

//$("p:first").addClass("destacado"); Añade al primer parrafo la clase='destacado'

$("p").on("click",function(){
$(this).addClass("destacado"); //Añade la clase destacado al parrafo en el que hagas click
//$(this).toggleClass("destacado"); Si haces click una vez se añade la clase destacado pero si vuelve a hacer click
})

$("li").on("click",function(){
$(this).toggleClass("destacado");
})
$("button").on("click",function(){
    $("*").removeClass("destacado");//tambien vale $(*).removeClass() y te quita todas las clases
})
if($("p:first").hasClass("destacado")){
    console.log("El primer parrafo esta destacado");
}else{
    console.log("El primer parrafo no esta destacado");
}
})