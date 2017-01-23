$(document).ready(function(){

    var $root = $('html, body');

    setTimeout(function () {
        $('.more-link').show().addClass('animated bounceInDown');}, 2000
    );

    $('.more-link').on('click', function(event){     
        event.preventDefault();
        $root.animate({scrollTop:$(this.hash).offset().top}, 500);
    });

	$('#photo-gallery').justifiedGallery({
		'rowHeight': 300,
	});


});




