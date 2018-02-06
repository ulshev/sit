$(document).ready(function() {
	
	
	$(".preview").fancybox({
		fitToView   : true,
		autoSize    : true,
		closeClick  : false,
		openEffect  : 'none',
		closeEffect : 'none',
		href        : this.href,
		beforeClose     : function (){
		    $('.bg_video')[0].pause();
		}
	});

	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	
	
	$("#main_slide ul li").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 500);
	});
	
	
	
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
	
	
	$('.plus').click(function(){
		if ($(this).parent().children('.description').css("display") == "block") {
		    $(this).parent().children('.description').slideUp(500);
		    $(this).removeClass('active');
		}else{
		    $('.description').slideUp(500);
		    $('.plus').removeClass('active');
		    $(this).parent().children('.description').slideDown(500);
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
	
	
	$('.tab_buttons .tab_but').on('click', function(){ 
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
		      slidesToShow: 5,
		    }
		  },
		  {
		    breakpoint: 800,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 600,
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
		    breakpoint: 651,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	
	
	$('.main_section .production_slider').slick({
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
		    breakpoint: 1200,
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
	
	$('.products_item .production_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1001,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 451,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	$('.galery_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 450,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	
	$('.more_text_link').html('Показать еще');

	$('.more_text_link').on('click', function(e){
	  e.preventDefault();
	  
	  var
	    $this = $(this),
	    content = $('.more_text_block');  
	  
	  
	  if(!$this.hasClass('trigger')){
	    $this.addClass('trigger');
	    $this.html('Меньше');
	    
	    content.slideDown();
	  } else {
	    $this.removeClass('trigger');
	    $this.html('Показать еще');
	    
	    content.slideUp();
	  }
	});
	
	
	
	$('#main_slide ul li').click(function(){
		$('#waterproofing .tab_buttons .tab_but:eq('+$(this).index()+')').click();
	});
	
   


});

