$(document).ready(function(){
    $("p").on("click",function(){
        //$(this).fadeOut(jQuery.fx.speeds.slow); Al fadeOut hay que ponerle tiempo siempre
        $(this).fadeOut(2000).fadeIn(1500,function(){
            alert("FIN");
        }); 
       })
       $("#aparecer").on("click",function(){
           //$("p").show(); Al show y al hide no hace falta ponerles tiempo por defecto
           $("p").show(1000);
       })
       $("#desaparecer").on("click",function(){
        $("p").hide();
    })
})