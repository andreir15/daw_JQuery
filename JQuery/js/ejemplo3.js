$(document).ready(function(){
    //metodo text como obtenedor
    texto_primer_parrafo=$("p:first").text();
    console.log(texto_primer_parrafo);

    //metodo text como establecedor
    $("p:first").text("Este es el nuevo parrafo 1");

    //metodo css como obtenedor
    console.log($("p").css("font-size"));

    //metodo css como establecedor
    // $("p:last").css("font-size","20px"); Otra manera de hacerlo
    $("p:last").css({
        "font-size":"20px",
        "color":"white",
        "backgroundColor":"blue"
    });

    $("p:first").css("font-size","+=10px");

    //metodos de dimensiones
    
    //1 manera de hacerlo(esta es la menos optima, las otras 2 son igual de optimas)
    $("div").width("200px");
    $("div").height("100px");
    
    //2 manera
    $("div").width("200px").height("100px");
    
    //3 manera
    $("div").css({
        "width":"200px",
        "height":"100px"
    })
})