$(document).ready(function(){
    $(document).keydown(function(tecla){
         switch (tecla.which) {
            case 37:
                $('.secundario').animate({
                    left: '-=10px'
                }, 'fast');
                break;
            case 38:
                $('.secundario').animate({
                    top: '-=10px'
                }, 'fast');
                break;
            case 39:
                $('.secundario').animate({
                    left: '+=10px'
                }, 'fast');
                break;
            case 40:
                $('.secundario').animate({
                    top: '+=10px'
                }, 'fast');
                break;
            }
        });
})