$(document).ready(function() {

	var waypoint = new Waypoint({
	element: document.getElementById('map'),
	handler: function(direction) {	
			console.log('weypoint rule!!!')
	},
	offset: '25%'
	})



	var sticky = new Waypoint.Sticky({
	element: $('.logo')
	})


	new Vivus('svg', {type: 'delayed', duration: 200});


  	var showBox = '<div id="show-box"></div>';
	$('#certificate').on('click', function(e){
		$('body').after(showBox);
		$('#show-box').css({
			'backgroundImage':'url(\'../images/certificate-nextherm.jpg\')'
		});
		e.preventDefault()

	});

});

$(document).ready(function() {
	$('#show-box').on('click', function(){
		$('#show-box').html('hi');
	});
});