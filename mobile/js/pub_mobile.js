$(function() {

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
		slideWidth:150,
		slideMargin : 20,
		moveSlides: 1,
		minSlides : 2,
		maxSlides : 2,
        prevSelector: '.cbtn_prev',
        nextSelector: '.cbtn_next',
		speed:1000,
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			bnSlider.startAuto();
        }

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
		minSlides : 2,
		maxSlides : 2,
        prevSelector: '.cbtn_prev',
        nextSelector: '.cbtn_next',
		speed:1000
    });

	/* 3dsolution tab */
	$(".3dsol_tab").on("click",function(){
		$(".3dsol_tab").removeClass("on");
		$(this).addClass("on");
		var on_tab = $(this).attr("rel");
		$(".solution_slide_con").addClass("hidden");
		$("#"+on_tab).removeClass("hidden");
	});

	//상단으로
	$("#top_btn").on("click", function() {
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});

	/*  */
	$(".gnb_al_ul").hide();
	$(".ft_menu_open").click(function(){
		$(".gnb_al_ul").slideToggle()
		$(".ft_menu_open span").toggleClass("sli_up sli_down");
	});

});
