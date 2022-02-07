$(document).ready(function(){
    $("li").on("click",function(){
        $(this).slideUp(1500).slideDown(1000,function(){
            $(this).css("color","red");
        }); 
    })
})