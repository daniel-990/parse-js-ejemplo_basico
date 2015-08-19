jQuery(document).ready(function($){

	var menu = $("#menu_registro");
	var btn_menu = $(".icon-equalizer");
	var contador = 0;
	var img_0 = $("#img_0");
	var img_1 = $("#img_1");
	var img_2 = $("#img_2");
	var img_3 = $("#img_3");
	var img_4 = $("#img_4");

moveRight();

function moveRight(){
	btn_menu.bind("click", function(){
		menu.animate({"margin-right":"0px"});
		$(".icon-equalizer").animate({"margin-right":"-400px"});
		btn_menu.unbind("click");
		moveLeft();
	});

	function moveLeft(){
		btn_menu.bind("click", function(){
			menu.animate({"margin-right":"-400px"});
			btn_menu.unbind("click");
			moveRight();
		});
	}
}

setInterval(function(){

	contador += 1;
	if (contador == 1){

		img_0.animate({"margin-left":"-100%"},1000);
		img_1.animate({"margin-left":"0%"},1000);
		img_2.animate({"margin-left":"0%"},1000);
		img_3.animate({"margin-left":"0%"},1000);
		img_4.animate({"margin-left":"0%"},1000);

		$("#imagen").animate({"margin-left":"100%"},1000);
		$(".color").css({"color":"#C87820"});
		$("#h1_2").css({"color":"#C87820"});

	}else if(contador == 2){

        img_0.animate({"margin-left":"0%"},1000);
	    img_1.animate({"margin-left":"-100%"},1000);
		img_2.animate({"margin-left":"0%"},1000);
		img_3.animate({"margin-left":"0%"},1000);
		img_4.animate({"margin-left":"0%"},1000);

		$(".color").css({"color":"#C8B800"});
		$("#h1_2").css({"color":"#C8B800"});

	}else if(contador == 3){

		img_0.animate({"margin-left":"0%"},1000);
		img_1.animate({"margin-left":"0%"},1000);
		img_2.animate({"margin-left":"-100%"},1000);
		img_3.animate({"margin-left":"0%"},1000);
		img_4.animate({"margin-left":"0%"},1000);

	    $(".color").css({"color":"#C89800"});
		$("#h1_2").css({"color":"#C89800"});


	}else if(contador == 4){

		img_0.animate({"margin-left":"0%"},1000);
		img_1.animate({"margin-left":"0%"},1000);
		img_2.animate({"margin-left":"0%"},1000);
		img_3.animate({"margin-left":"-100%"},1000);
		img_4.animate({"margin-left":"0%"},1000);

		$(".color").css({"color":"#C87B00"});
		$("#h1_2").css({"color":"#C87B00"});

	}else if(contador == 5){

		img_0.animate({"margin-left":"0%"},1000);
		img_1.animate({"margin-left":"0%"},1000);
		img_2.animate({"margin-left":"0%"},1000);
		img_3.animate({"margin-left":"0%"},1000);
		img_4.animate({"margin-left":"-100%"},1000);

		$(".color").css({"color":"#C86916"});
		$("#h1_2").css({"color":"#C86916"});

	}else if(contador == 6){

		contador = 0;

	};

},5000);


});