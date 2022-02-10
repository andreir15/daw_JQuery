$(document).ready(function(){
	//jquery
	$(document).on("keydown", function(obj){		
		if(obj.which==37){
			$("div.keko").css({
				"left" : "-=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "-64px"				
			});
			$("div.pikachu").css({
				"left" : "-=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "-64px"				
			});
			$("span.badge").css("left", "-=7px");
		}
		if(obj.which==38){
			$("div.keko").css({
				"top" : "-=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "64px"
			});
			$("div.pikachu").css({
				"top" : "-=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "64px"
			});
			$("span.badge").css("top", "-=7px");
		}
		if(obj.which==39){
			$("div.keko").css({
				"left" : "+=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "-128px"
			});
			$("div.pikachu").css({
				"left" : "+=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "-128px"
			});
			$("span.badge").css("left", "+=7px");
		}
		if(obj.which==40){
			$("div.keko").css({
				"top" : "+=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "0px"
			});
			$("div.pikachu").css({
				"top" : "+=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "0px"
			});
			$("span.badge").css("top", "+=7px");
		}
		x_keko=parseInt($("div.keko").css("left")); y_keko=parseInt($("div.keko").css("top"));
		x_caterpie=parseInt($("div.caterpie").css("left")); y_caterpie=parseInt($("div.caterpie").css("top"));		
		x_pokemons=parseInt($("div.pokemons").css("left")); y_pokemons=parseInt($("div.pokemons").css("top"));		
	
		if (x_caterpie>x_keko-30 && x_caterpie<x_keko+30)
			if (y_caterpie>y_keko-30 && y_caterpie<y_keko+30)
				{			
				$("div.keko").data("puntos", $("div.keko").data("puntos")+1);
				$("span.badge").text($("div.keko").data("puntos"));				
				x=Math.random() * 800;
				y=Math.random() * 400;
				$("div.caterpie").css({"left" : x, "top" : y });
				}
				if (x_pokemons>x_keko-30 && x_pokemons<x_keko+30)
				if (y_pokemons>y_keko-30 && y_pokemons<y_keko+30)
					{			
					$("div.keko").data("puntos", $("div.keko").data("puntos")+1);
					$("span.badge").text($("div.keko").data("puntos"));				
					x=Math.random() * 800;
					y=Math.random() * 400;
					$("div.pokemons").css({"left" : x, "top" : y });
					}
			})
	
	setInterval(function(){ 
				x=Math.random() * 800;
				y=Math.random() * 400;
				$("div.caterpie").css({"left" : x, "top" : y });
	 }, 4500);
	
	

     setInterval(function(){ 
		 x=Math.random() * 800;
		 y=Math.random() * 400;
		 $("div.pokemons").css({"left" : x, "top" : y });
        }, 6500);

})