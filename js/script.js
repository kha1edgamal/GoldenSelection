/*jslint browser: true*/
/*global $, jQuery, alert*/

$( document ).ready(function() {
//        $('#return-to-top').click(function() {      // When arrow is clicked
//            $('body,html').animate({
//            scrollTop : 0                       // Scroll to top of body
//            }, 500);
//        });
    
//when scroll down make something
//    $(document).scroll(function() {
//           if($(window).scrollTop() > 50){
//
//            $("header").css("box-shadow","0px 1px 9px 0px #949494");
//            
//           }
//        else if($(window).scrollTop() < 50){
//
//            $("header").css("box-shadow","none");
//            
//
//           }
//    });
    
    
    
    
    
//----------------search icon------------
         $("#icon").mouseenter(function(){
        $("header .search-container .search-form input").css("width", "117px").css("visibility", "visible");
        
    });
    $(".search-container").mouseleave(function(){
        $("header .search-container .search-form input").css("width", "0").css("visibility", "hidden");
    });
//----------------/search icon-----------
    
    
    
/*---------------tabs------------------*/
    $("#navbarText").mouseleave(function(){
        
        var element = document.getElementById("navbarText");
        element.classList.remove("show");
        
    });
    
/*---------------/tabs------------------*/
    
    
    
/*wow animation initial*/
     new WOW(
   {

      offset: 50,          // default
   }
  ).init();
/*/wow animation initial*/
    
    
//    $(document).ready(function() {
        

	var next = $("#next")
	var previous =$("#previous")

//	$(document).ready(function() {
	
		$(next).click(function () {
			$("ul").css({
				'margin-top' : '-303px' , 
				'transition' : 'all 1.5s ease-in-out'
			});

		});		
		
		$(previous).click(function () {
			$("ul").css("margin-top", "0");

		});

//	});
//});
    /*End Carousel Slider Script */
    
    
    /*Vertical Slider Script*/
    $.noConflict();
    jQuery('#thumbnail li').click(function ()
    {
        
        jQuery(this).addClass('active').siblings().removeClass('active');
        var slide = jQuery('#slide li'),
            slideTop = 0,
            slideBlock = jQuery('#slide ul'),
            thum = jQuery('#thumbnail .thumbnail-list li'),
            thumTop = jQuery('#thumbnail .thumbnail-list  .active').position().top - jQuery('#thumbnail .thumbnail-list').position().top + 'px';

        for (var i = 0; i < thum.length; i++)
        {
            if (jQuery(thum[i]).hasClass('active'))
            {
                jQuery(jQuery(slide)[i]).addClass('active').siblings().removeClass('active');
            }
        }

        for (var i = 0; i < slide.length; i++)
        {
            jQuery(jQuery('#slide li .blur-img')[i]).attr('style', jQuery(jQuery('#slide li .img')[i]).attr('style'));
            if (jQuery(jQuery(slide)[i]).hasClass('active'))
            {
                slideTop += -(600 * i);
                jQuery(slideBlock).css('transform', 'translateY(' + slideTop + 'px)');
            }
        }

        jQuery('#thumbnail .marker').css('top', (thumTop));
    });
    jQuery(jQuery('#thumbnail li')[0]).trigger('click');
    /*End Vertical Slider Script*/
    
    


    
    
    });
