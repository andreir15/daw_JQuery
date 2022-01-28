$(document).ready(function(){
    $(p).on({
    "mouseenter":function(){
        $(this).addClass("destacado");
    },
    "mouseleave":function(){
        $(this).removeClass("destacado");
    }
    })
})
    