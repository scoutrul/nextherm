
(function(){

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

});