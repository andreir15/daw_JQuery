$(document).ready(function(){
    
//Seleccionar todos los elementos div que poseen la clase “module”.
    $("div.module").css({ "font-size":"20px",
    "color":"white",
    "backgroundColor":"blue"
});

//Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista
//desordenada #myList.
$("#myList li:nth-child(3)")
$("#myList").children().eq(2).css({ "font-size":"20px",
"color":"white",
"backgroundColor":"blue"
});
$("#myList").children().first().next().next()

//Seleccionar el elemento label del elemento input utilizando un selector de atributo.
$("input[name=q]").closest("form").css({ "font-size":"20px",
"color":"white",
"backgroundColor":"blue"
});

//Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
($(":hidden")).length;

//Averiguar cuantas imágenes en la página poseen el atributo alt.
$("img[alt]");

//Seleccionar todas las filas impares del cuerpo de la tabla.
$("table tr:odd");

})