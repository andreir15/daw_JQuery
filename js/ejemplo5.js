$(document).ready(function(){
alert($("p").text()); //este alert incluye el contenido de todos los p juntos

//Recorrer todos los elementos li del ul
$("li").each(function(i){
    i++;
    console.log(i+" : "+$(this).text());
    
})

})