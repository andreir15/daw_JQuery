$(document).ready(function(){
function incrementa(){
    $("#contador").text("Fx tiene "+$("p").queue().length+" efectos");
}
    $("#fadein").on("click",function(){
$("p").fadeIn(1000, incrementa());
incrementa();
})
$("#fadeout").on("click",function(){
    $("p").fadeOut(1000, incrementa());
    incrementa();

})
$("#slideup").on("click",function(){
    $("p").slideUp(1000, incrementa());
    incrementa();

})
$("#slidedown").on("click",function(){
    $("p").slideDown(1000, incrementa());
    incrementa();

})


})