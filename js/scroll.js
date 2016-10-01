// The plugin code  
// 視差用
(function($){
	$.fn.parallax = function(options) {
		var $$ = $(this);
		offset = $$.offset();
		var defaults = {
			//這裡設定從 start ~ stop 多少拉霸高度執行此程式碼
			"start": 0,
			//"stop": offset.top + $$.height(),
			"stop": 200,
			//移動速度的參數
			"coeff": 0.95
		};
		//將屬性帶入覆寫原預設屬性.extend()
		var opts = $.extend(defaults, options);
		return this.each(function(){
			$(window).bind("scroll", function() {
				//目前拉霸位置高度
				windowTop = $(window).scrollTop();
				
				if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
					//移動拉霸刻度對應移動參數
					newCoord = windowTop * opts.coeff;
					//做用區域高度
					newHeight =opts.stop-opts.start;
					//拉霸位置與做用區域高度起始點的距離
					myDistance =windowTop-opts.start;
					
					switch (opts.direction) {
						case "y" :
						$$.stop().css({
							/*
							"background-position": "center "+ newCoord + "px"
							*/
							"top": -( newCoord )/3 + "px"
						});
						break;
						case "x" :
						$$.css({
							"background-position": myDistance + "px "+ newCoord + "px"
						});
						break;
						case "z" :
						$$.stop().css({
							//"opacity":(newCoord-200)/100
							//江顯示區域高度化為百分比計算
							//"opacity":myDistance/newHeight,
							"top":-( newCoord )/8.2 + "px"
						});
						break;
						case "w" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"opacity":myDistance/newHeight,
							"left":myDistance*0.5 + "px",
							"top":newCoord*1.2 + "px"
						});
						break;
						case "e" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"margin-left":-myDistance*0.5 + "px",
							"margin-top":-newCoord*0.35 + "px"
						});
						break;
						case "f" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"margin-left":-myDistance*0.65 + "px",
							"margin-top":newCoord*0.35 + "px",
							"opacity":1-myDistance/newHeight
			
						});
						break;
						case "g" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"margin-left":-myDistance*1.5 + "px",
							"margin-top":newCoord*0.35 + "px",
							"opacity":1-myDistance/newHeight
			
						});
						break;
						case "v" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"opacity":1-myDistance/newHeight,
						});
						break;
						case "q" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"opacity":+myDistance/newHeight,
							"margin-left":-300+myDistance/2 + "px",
						});
						break;
						case "p" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"opacity":+myDistance/newHeight,
							"margin-left":300-myDistance/2 + "px",
						});
						break;
						case "r" :
						$$.css({
							//"opacity":(newCoord-200)/100
							//江顯示區域刻度化為百分比計算
							"opacity":+myDistance/newHeight,
							"margin-top":-300+myDistance/2 + "px",
						});
						break;
						case "a" :
						$$.css({
							"margin-top":-myDistance + "px",
						});
						break;
					}
				}
			});
		});
	};
})(jQuery);


$(window).scroll(function() {

	windowTop = $(window).scrollTop();
	//這邊控制顯示隱藏
	if(windowTop <= inner2Height){
		$("").hide();
	}else{
		$("").show();
	}

	if(windowTop >1400 && windowTop <2600 ){
		$(".fixed_box").css({
			"position": "fixed",
			"top":"0",
			"opacity":1
		});
	}else{
		$(".fixed_box").css({
			"position": "relative",	
			"margin-top": "0"		
		});
	}
	if(windowTop >1400 && windowTop <2600 ){
		$(".inner_con_1 > div,.inner_con_3 > div,.inner_con_2").css({
			"margin-top": "0",
			"margin-left": "0",
			"opacity":1
		});
	}else{
		$(".inner_con_1 > div,.inner_con_3 > div,.inner_con_2").css({
			"position": "relative"
		});
	}

});

$(function() {
	var $HtmlBody = $('html,body');
	inner2Height=0;
	inner3Height=500;
	//call the plugin
	$(".go_pic_1").parallax({  "direction" : "y","start": 0,"stop": 1000,"coeff": 0.65 });
	$(".car").parallax({  "direction" : "e","start": 0,"stop": 1000,"coeff": 0.95 });
	$(".star").parallax({  "direction" : "f","start": 0,"stop": 800,"coeff": 0.95 });
	$(".star_2").parallax({  "direction" : "g","start": 200,"stop": 1000,"coeff": 0.95 });
	$(".scroll_man_indus").parallax({  "direction" : "z","start": 0,"stop": 1200 });
	$(".fixed_box").parallax({  "direction" : "a","start": 2000,"stop": 3000,"coeff": 1 });
/*	
*/
	$(".autobiography").parallax({  "direction" : "q","start": 1000,"stop": 1600 });
	$(".educational").parallax({  "direction" : "q","start": 1300,"stop": 1900 });
	$(".workexperience").parallax({  "direction" : "p","start": 1000,"stop": 1600 });
	$(".mydesig").parallax({  "direction" : "p","start": 1300,"stop": 1900 });
	$(".inner_con_2").parallax({  "direction" : "r","start": 1000,"stop": 1600 });

/*
	$(".section").parallax({ "coeff":-0.65, "direction" : "y"});
	$(".section .inner").parallax({ "coeff":1.15, "direction" : "x" });
	$(".section .inner2").parallax({  "direction" : "z","start": inner2Height,"stop": 400 });
	$(".section .inner3").parallax({  "direction" : "w","start": inner3Height,"stop": 600 });
	$(".inner3").parallax({  "direction" : "z","start": 600,"stop": 800 });
	$(".inner3").parallax({  "direction" : "w","start": 800,"stop": 1000 });
*/

	$(".scroll-down").click(function() {
		$HtmlBody.animate({scrollTop:"2000px"}, 2000);
	});

	$(".mydesig").click(function() {
		$HtmlBody.animate({scrollTop:"2750px"}, 500);
	});

	$(".next").click(function() {
		$HtmlBody.animate({scrollTop:"0px"}, 2000);
	});

	$(".autobiography").click(function() {
		$(".about_1").fadeIn('slow/400/fast', function() {
		});
		$(".about_1 > div").addClass('slideLeft');
		$(".about_1 > div+div").delay(500).addClass('slideRight');
	});

	$(".about_1 > b,.clo_1").click(function() {
		$(".about_1 > div").removeClass('slideLeft');
		$(".about_1 > div+div").removeClass('slideRight');
		$(".about_1").fadeOut('slow/400/fast', function() {
		});
	});

	$(".workexperience").click(function() {
		$(".about_3").fadeIn('slow/400/fast', function() {
		});
		$(".about_3 > div").delay(500).addClass('slideDown');
	});

	$(".about_3 > b,.clo_3").click(function() {
		$(".about_3 > div").removeClass('slideDown');
		$(".about_3").fadeOut('slow/400/fast', function() {
		});
	});


//------------滑到作品集-----------------------

	
	$(".more").click(function(){
		$(".mywork").animate({"margin-left":"0%"},500);
		
		$HtmlBody.delay(0).css({
	 	 "overflow":"hidden"
		});
	});
	
	$(".mywork > div > h5 ,.mywork > span").click(function(){
		$(".mywork").animate({"margin-left":"100%"},500);
		$HtmlBody.delay(0).css({
	 	 "overflow":"visible","margin-left":"0%"
		})/*.animate({scrollTop:$('.work').offset().top}, 0)*/;
	});
	

	$(".mywork > div > h4").click(function(){
		$(".mywork > div > div > div").eq(0).fadeOut(500);
		$(".mywork > div > div > div").eq(1).fadeIn(500);
		$(".mywork > div > h3").css({"background-color":"rgba(0,0,0,0.6)","color":"#FFF"});
		$(".mywork > div > h4").css({"background-color":"rgba(0,0,0,0.8)","color":"#FF0"});
		$(".btn1").hide();
		$(".btn2").show();
	});

	$(".mywork > div > h3").click(function(){
		$(".mywork > div > div > div").eq(1).fadeOut(500);
		$(".mywork > div > div > div").eq(0).fadeIn(500);
		$(".mywork > div > h4").css({"background-color":"rgba(0,0,0,0.6)","color":"#FFF"});
		$(".mywork > div > h3").css({"background-color":"rgba(0,0,0,0.8)","color":"#FF0"});
		$(".btn2").hide();
		$(".btn1").show();
	});

	
	







});





//-------------作品集的燈箱------------------------------------


$(function(){
	
	
	RR=0;
	var MM=$(".graphic > img").length;
	var NN=$(".web > img").length;
	
	for(i=0;i<MM;i++){
		$(".btn1 >.show_r").append('<a>▶</a>');
		$(".btn1 >.show_f").append('<a>◀</a>');
		
	};
	for(i=0;i<NN;i++){
		$(".btn2 >.show_r").append('<a>▶</a>');
		$(".btn2 >.show_f").append('<a>◀</a>');
		
	};
	$(".mywork > span").text();
	$(".btn1 >.show_f a").first().hide();
	$(".btn1 >.show_r a").last().hide();
	$(".btn2 >.show_f a").first().hide();
	$(".btn2 >.show_r a").last().hide();

	$(".btn1 > .show_r a").click(function(){
		QQ=$(this).index();
		$(".graphic > img").eq(QQ+1).fadeIn(300).siblings().hide();	
		$(".btn1 > .show_r a").eq(QQ+1).fadeIn().siblings().hide();
		$(".btn1 > .show_f a").eq(QQ+1).fadeIn().siblings().hide();
		$(".btn1 >.show_r a").last().hide();
	});
	$(".btn1 > .show_f a").click(function(){
		QQ=$(this).index();
		$(".graphic > img").eq(QQ-1).fadeIn(300).siblings().hide();	
		$(".btn1 > .show_f a").eq(QQ-1).fadeIn().siblings().hide();
		$(".btn1 > .show_r a").eq(QQ-1).fadeIn().siblings().hide();
		$(".btn1 >.show_f a").first().hide();
	});
	
	$(".btn2 > .show_r a").click(function(){
		QQ=$(this).index();
		$(".web > img").eq(QQ+1).fadeIn(300).siblings().hide();	
		$(".btn2 > .show_r a").eq(QQ+1).fadeIn().siblings().hide();
		$(".btn2 > .show_f a").eq(QQ+1).fadeIn().siblings().hide();
		$(".btn2 >.show_r a").last().hide();
	});
	$(".btn2 > .show_f a").click(function(){
		QQ=$(this).index();
		$(".web > img").eq(QQ-1).fadeIn(300).siblings().hide();	
		$(".btn2 > .show_f a").eq(QQ-1).fadeIn().siblings().hide();
		$(".btn2 > .show_r a").eq(QQ-1).fadeIn().siblings().hide();
		$(".btn2 >.show_f a").first().hide();
	});
	
	
	

});




//---------------------------燈箱----------------------

$(function(){
	
	var NN=0;
	var TT=0;
	
	var MM=$("#showman a").length;
	for(i=0;i<MM;i++){
		$("#showbtn").append('<a>' + (i + 1) + '</a>')
	};
	$("#showbtn a").eq(0).addClass("btn").siblings().addClass("btn_2");
	
	function SHOWBOX(){
	
		$("#showman a").eq(NN).fadeIn(500).siblings().fadeOut(500);
		$("#showbtn a").removeClass().eq(NN).addClass("btn").siblings().addClass("btn_2");
		if(NN<MM-1){
			NN+=1;
		}else{
			NN=0
		};
		TT=setTimeout(SHOWBOX,6000)
	};

	SHOWBOX();
	
	$("#showman,#showbtn").hover(
		function(){
			clearTimeout(TT);
		},
		function(){
			TT=setTimeout(SHOWBOX,1000)
		}
	);
	$("#showbtn a").click(function(){
		NN=$(this).index();
		$("#showman a").eq(NN).fadeIn(500).siblings().fadeOut(500);
		$("#showbtn a").removeClass().eq(NN).addClass("btn").siblings().addClass("btn_2");
	});

});

