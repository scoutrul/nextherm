
$(document).ready(function() {

//////////////////////////////////////////////////////////////////////
// weypoints
//////////////////////////////////////////////////////////////////////


	// sticky menu and set active point
	var menuFix = new Waypoint.Inview({
		element: $('.screen1')[0],
		enter: function(direction) {
			$('.header').removeClass('menu-fix');
		},
		exited: function(direction) {
			$('.header').addClass('menu-fix');
		}
	});

	var menuFixActiveProd = new Waypoint.Inview({
		element: $('#production')[0],
		enter: function(direction) {
			$('.production').addClass('active');
		},
		exited: function(direction) {
			$('.production').removeClass('active');
		}
	});

	var menuFixActiveClients = new Waypoint.Inview({
		element: $('#clients')[0],
		entered: function(direction) {
			$('.clients').addClass('active');
		},
		exited: function(direction) {
			$('.clients').removeClass('active');
		}
	});

	var menuFixActiveContacts = new Waypoint.Inview({
		element: $('#contacts')[0],
		entered: function(direction) {
			$('.contacts').addClass('active');
		},
		exited: function(direction) {
			$('.contacts').removeClass('active');
		}
	});

//////////////////////////////////////////////////////////////////////







	new Vivus('svg', {type: 'delayed', duration: 200});



//////////////////////////////////////////////////////////////////////
// сертификат и протокол pop-up
//////////////////////////////////////////////////////////////////////

	$('#show-box').hide();

	$('#certificate').on('click', function(e){
		$('#show-box').show().css({
			'backgroundImage':'url(\'../images/certificate-nextherm.jpg\')'
		});
		e.preventDefault()
	});

	$('#protocole').on('click', function(e){
		$('#show-box').show().css({
			'backgroundImage':'url(\'../images/protocole-nextherm.jpg\')'
		});
		e.preventDefault()
	});

	$('#show-box, #show-box .close').on('click', function(){
		$('#show-box').hide().css({
			'backgroundImage':''
		});

	});



//////////////////////////////////////////////////////////////////////
// The Call to action pop up & mail send
//////////////////////////////////////////////////////////////////////

	$('#cta-box').hide();
	$('.contactForm').show();


	$('.cta').on('click', function(e){
		$('#cta-box').show()
		e.preventDefault();
		$('.contactForm').removeClass('send');
	});

	// закрыть
	$('#cta-box .close').on('click', function(){
		$('#cta-box').hide();
	});

	// отправка
	$("#cta-box button").click(function() {
		$('input, textarea').removeClass('form_error');
		var hasError = false;
		var name = $("#form_name").val();
			if (name == '') {
				$("#form_name").focus().addClass('form_error');
				hasError = true;
				return false;
			} 
		var contact = $("#form_contact").val();
			if(contact == '') {
				$("#form_contact").focus().addClass('form_error');
				hasError = true;
				return false;
			}
		var message = $("#form_text").val();
			if(message == '' ) {
				$("#form_text").focus().addClass('form_error');
				hasError = true;
				return false;
			}

		var dataString = 'name=' + name + '&contact=' + contact + '&message=' + message;

		$.ajax({
		type: "POST",
		url: "/mail.php",
		data: dataString,
			success: function() {
				$('.contactForm').hide().find("input, textarea").val("");
				alert("Ваше сообщение отправленно!"); 
			}
		});
		return false;
	});




//////////////////////////////////////////////////////////////////////
// Smooth scroll's 
//////////////////////////////////////////////////////////////////////


	$(".logo").click(function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});
	$(".production").click(function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $("#production").offset().top + 10
		}, 500);
	});
	$(".clients").click(function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $("#clients").offset().top + 10
		}, 500);
	});
	$(".contacts").click(function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $("#contacts").offset().top + 10
		}, 500);
	});



//////////////////////////////////////////////////////////////////////
// scroll's parallax
//////////////////////////////////////////////////////////////////////

	var topScrollGo = function() {
		var topScroll = $(this).scrollTop();
		$('.screen1 .container,.screen1 h1').css({
			'transform': 'translate3d(0px,'+ topScroll/3.35 +'px,0px)',
			'opacity': 1-topScroll/2000
		});
	};
	$( window ).scroll(topScrollGo);	









});