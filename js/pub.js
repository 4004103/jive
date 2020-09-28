$(function() {

    /* nav */
	//slide way
    var $nav = $(".gnb")
    var $nav_list = $(".gnb_1dli > a");

    $nav_list.on("mouseover focus", function(e) {
        $nav.addClass("on");
    });
    $nav.on("mouseleave", function(e) {
        $nav.removeClass("on");
    });

    $(".gnb_2dli:last > a").on("blur", function() {
        $nav.removeClass("on");
    });


    // $(".main-banner__btn--prev").on("click",function(){
    //     bnSlider.goToPrevSlide();
    // });
    // $(".main-banner__btn--next").on("click",function(){
    //     bnSlider.goToNextSlide();
    // });

	/*상단메뉴 고정*/
	 var hdoffset = $('#hd').offset();
	 $(window).scroll(function(){
	 	if ( $(document).scrollTop() > hdoffset.top ){
	 		$('#hd').addClass('hd_wrapperfixed')
			$('.gnb').css('height','80px');
			$('.gnb_wrap').css('background','url(../jive/img/hd_bg_2.png) no-repeat 56px 0px');
			$('.gnb').addClass('sgnb');
	 	}else{
	 		$('#hd').removeClass('hd_wrapperfixed')
			$('.gnb').css('height','92px');
			$('.gnb_wrap').css('background','url(../jive/img/hd_bg.png) no-repeat 56px -5px');
			$('.gnb').removeClass('sgnb');
	 	}
	 });

	/* 홈버튼 location */
	$(".fa-home").on("click",function(){
		location.href="/";
	});

	/* SHOP 버튼 location */
	$(".fa-shopping-cart").on("click",function(){
		location.href="/shop";
	});

	/* 상단으로 */
	$("#top_btn").on("click", function() {
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});

    /* 메인 배너 */
    var bnSlider = $('#bnSlider').bxSlider({
        //autoHover: true,
        //pagerSelector: '.selector', //셀렉터에 pager를 $selector에 append
        //autoControls: true, //재생 정지버튼
        //autoControlsSelector: '.selector', //재생,정지버튼을 $selector에  append
        //mode:'fade',
        //tickerHover: true,
        //autoHover:true,
        auto:true,
        controls:true,
        pause: 5000,
		pager: true,
		speed: 2000,
        //autoControls: true, //재생,정지버튼
        prevSelector: '.main-banner__btn--prev',
        nextSelector: '.main-banner__btn--next',
		onSlideAfter: function($slideElement, oldIndex, newIndex){
        bnSlider.startAuto();
        }
    });

	/* 3D SOLUTION */
    var slider3 = $('.list_slider').bxSlider({
        auto:true,
        controls:true,
        pause: 8000,
		pager: false,
		slideWidth:250,
		slideMargin : 20,
		moveSlides: 1,
		minSlides : 1,
		maxSlides : 4,
        prevSelector: '.cbtn_prev',
        nextSelector: '.cbtn_next'
    });


	/* 하단 배너 */
    var bnSlider2 = $('#bnSlider2-1').bxSlider({
        auto:true,
        controls:true,
        pause: 3000,
		pager: false,
		slideWidth:230,
		slideMargin : 20,
		moveSlides: 1,
		minSlides : 4,
		maxSlides : 4,
        prevSelector: '.cbtn_prev',
        nextSelector: '.cbtn_next'
    });


	$(".3dsol_tab").on("click",function(){
		$(".3dsol_tab").removeClass("on");
		$(this).addClass("on");
		var on_tab = $(this).attr("rel");
		$(".solution_slide_con").addClass("hidden");
		$("#"+on_tab).removeClass("hidden");
	});

});
