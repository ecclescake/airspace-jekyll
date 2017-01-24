$(document).ready(function(){

    var $root = $('html, body');

    if($(window).width() >= 768){
        setTimeout(function () {
            $('.delayed').show().addClass('animated bounceInDown');}, 2000
        );
    }

    $('.more-link').on('click', function(event){     
        event.preventDefault();
        $root.animate({scrollTop:$(this.hash).offset().top}, 500);
    });

	$('#photo-gallery').justifiedGallery({
		'rowHeight': 300,
	});


});




