
$(document).ready(function() {

//////////////////////////////////////////////////////////////////////
// for mobile device detecting
//////////////////////////////////////////////////////////////////////

	var isMobile = false; 

	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))     isMobile = true;


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
		$('.screen1 .container, .screen1 .icons').css({
			'transform': 'translate3d(0px,'+ topScroll/3.35 +'px,0px)'
		});
		$('.screen1 h2, .screen1 h1').css({
			'transform': 'translate3d(0px,'+ topScroll/2.35 +'px,0px)',
			'opacity': 1-topScroll/2000
		});
	};
	if(!isMobile) $( window ).scroll(topScrollGo);	


 






});