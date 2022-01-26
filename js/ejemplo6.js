$(document).ready(function(){
$("ul.aficiones li:first").insertAfter("ul.aficiones li:last");//Mueve el primer li detras del ultimo li
$("ul.aficiones li:last").after($("ul.aficiones li:first"));//Hace lo mismo

$("ul.aficiones").append($("<li>Nuevo elemento</li>"));
$("ul.aficiones li").on("click",function(){
    //$(this).appendTo("ul.propias"); Mueve los li de aficiones a propias

    $(this).clone().appendTo("ul.propias");//Copia y mueve los li de aficiones a propias (copia los elementos pero sin eventos)
    //$(this).clone(true).appendTo("ul.propias"); Copia los elementos con eventos

    //$(this).insertAfter(".aficiones li:last");
});
})