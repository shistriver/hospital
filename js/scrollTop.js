$(function(){
	//屏幕滚动
  	$(window).scroll(function(){
    	if ($(window).scrollTop() > 300){
	      	$('.gotop').show();
	    }else{
	      	$('.gotop').hide();
	    }
  });
  	
  //返回顶部
  $('.gotop').on('click', function(){
    	$("html, body").animate({ scrollTop: 0 }, 120);
  });
})