$(function(){
	$("#draggable").draggable();
	$("#slider").slider();
	$("#button").on( "click", function() {
      $("#bounce").effect("bounce");
    });	
})