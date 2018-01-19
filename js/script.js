$(document).ready(function() {


	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	/*// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".tab_buttons_in").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 100;
	    $('body,html').animate({scrollTop: top}, 500);
	});*/
	
	/*/ шапка при прокрутке
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#header').addClass('scroll');
	    } else {
		$('#header').removeClass('scroll');
	    }
	});*/

	
	/*/ класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// открытие подменю
	if ($(window).width() < 1600) {
	$('.main_menu .submenu a').on('click', function(e){
		if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');
			
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		}
	});
	}
	// закрытие подменю
	$('body').click(function (event) {
	    if ($(event.target).closest('.main_menu .submenu').length == 0 ) {
		$('.main_menu .submenu ul').slideUp(500);
		$('.main_menu .submenu').removeClass('show');
	    }
	});
	
	// показываем меню
	$('.menu_button').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		$('.main_menu').css('left', '50%');
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('').on('click', function(){
		$('.submenu.active').removeClass('show');
		$('.submenu').removeClass('show');
		//$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});*/
	
	/*$(window).on("load",function(){
		$(".popup .text").mCustomScrollbar({
			theme:"minimal-dark"
		});
        });*/
	
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1450) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	$('.menu_button_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $(this).removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $(this).addClass('active');
		}
	});
	
	
	    if ( window.innerWidth>0 ) {
		    $('.main_section').toggleClass("hidden");
		    //$('#main_slide.hidden').addClass("animated");	
	    };
	
	
	$(window).on('load scroll', function(){
		$('.main_section').each(function(){
		    if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
			$(this).addClass('animated');
		    }	
		});
	});
	
	
	$('#services .tab_buttons .tab_but').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons .tab_but', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	
	$( function() {
	    $( "#accordion" ).accordion({
	      heightStyle: "content",
	      collapsible: true,
	      active: false
	    });
	} );
	
	
	$('.services_slider').slick({
		//dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		//appendDots: '.tab_dots'
	});
	
	$('.active .slick-initialized').on('beforeChange', function(slick, slide){
		$('.active .slick-initialized .slide').eq(slide.currentSlide).addClass('ex-active');
		setTimeout(function(){
			$('.active .slick-initialized .ex-active').removeClass('ex-active');
		}, 1000);
	}) 
	
	var timer = false;
	$('.tab_dots li').click(function(){
	  if(!timer){
	    timer = true;
	    var el = $(this);
	    if(!el.hasClass('active')){
	      var nextTab = el.index();
	      $('.tab_dots .active').removeClass('active');
	      $('.services_slider').slick('slickGoTo', nextTab);
	      el.addClass('active');
	    }
	    setTimeout(function(){
	      timer = false;
	    }, 1500)
	  }
	  return false;
	})
	      
	$('.sertificates_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1600,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1300,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 800,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 450,
		    settings: {
		      slidesToShow: 2,
		    }
		  }
		]
	});
	
	$('.main_section .clients_wrap').slick({
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
            nextArrow: '<span class="slick-next">&nbsp;</span>',
	    //fade: true,
	    speed: 1500,
	    slidesToShow: 8,
	    responsive: [{
		breakpoint: 1300,
		settings: { 
		    slidesToShow: 8,
		    adaptiveHeight: false
		}
	    },
	    {
		breakpoint: 1001,
		settings: { 
		    slidesToShow: 6,
		    adaptiveHeight: false
		}
	    },
	    {
		breakpoint: 801,
		settings: { 
		    slidesToShow: 4,
		    adaptiveHeight: true
		}
	    },
	    {
		breakpoint: 451,
		settings: { 
		    slidesToShow: 2,
		    adaptiveHeight: true
		}
	    }]
	});
	
	
	$('.projects_slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		appendDots: '#projects .left_block',
		responsive: [
		  {
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	$('.production_slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		appendDots: '#production .left_block',
		responsive: [
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 601,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	$('.news_slider').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		 variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1000,
		    settings: {
		      //slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      //slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 450,
		    settings: {
		      //slidesToShow: 1,
		    }
		  }
		]
	});
    
});

