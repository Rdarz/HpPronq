// add your code here
$(function(){

$( ".glyphicon-triangle-bottom" ).click(function() {
	if($( ".bg-gray" ).css('display')=='none'){
		$( ".bg-gray" ).slideDown(200);		
	}else{
		$( ".bg-gray" ).slideUp(200);		
	}
  
 

});	

$( ".video .container-fluid .container p .glyphicon" ).click(function() {
	
		$( ".video_container" ).slideDown(200);		
});	

$( ".video_container .glyphicon" ).click(function() {
	
		$( ".video_container" ).slideUp(200);		
});	

$( ".clients .container .row .logo" ).click(function() {
	if($(this).hasClass('comcast')){

		$(".clients .container .row p").css('display','none');
		$(".clients .container .row p:first-child").css('display','block');
	}else if($(this).hasClass('kddi')){
		$(".clients .container .row p").css('display','none');
		$(".clients .container .row p:nth-child(2)").css('display','block');
	}else if($(this).hasClass('guess')){
		$(".clients .container .row p").css('display','none');
		$(".clients .container .row p:nth-child(3)").css('display','block');
	}else if($(this).hasClass('Blueshield')){
		$(".clients .container .row p").css('display','none');
		$(".clients .container .row p:last-child").css('display','block');
	}else{

	}
			
});	

// $(".media").mouseenter(function() {
//     // $(".media .container .col-md-8").css("margin","0").fadeIn(2000);
//     $(".media .container .col-md-8").toggle("slide", {
//             direction: 'right'
//         },1000);


// });
$(".media").hover(function() {
	// $(".media .container .col-md-8").css("margin","0").fadeIn(2000);
	$(".media .container .col-md-8").toggle("slide");
		
        

});




$( ".hpa .partners .row .logo" ).click(function() {
	if($(this).hasClass('AVNET')){
		
		$(".hpa .partners .container .title .logo").css('filter','grayscale(100%)');
		$(this).css('filter','grayscale(1%)');
		$(".hpa .partners .row p").css('display','none');
		$(".hpa .partners .row p:first-child").css('display','block');
	}else if($(this).hasClass('RP')){
		
		$(".hpa .partners .container .title .logo").css('filter','grayscale(100%)');
		$(this).css('filter','grayscale(1%)');
		$(".hpa .partners .row p").css('display','none');
		$(".hpa .partners .row p:nth-child(2)").css('display','block');
	
	}else{

	}
			
});	


$(".glyphicon-plus").click(function(){

	
 $(this).parent().find('.desc').css('display','block');
 
});
$(".glyphicon-remove").click(function(){
	
 $(this).parent().css('display','none');


});











  

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

    



});



