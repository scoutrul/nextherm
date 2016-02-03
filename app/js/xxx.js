// ScrollTo script
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,a="client"+s,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+s]||t[a]||o[a]):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.5",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,a=r-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
// 

$(document).ready(function() {



///////////////////weypoints//////////////////////////



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

	// //ScrollTo (menu)

	// //ease method
	// jQuery.extend( jQuery.easing,
	// {
	// 	expoout: function(x, t, b, c, d) {
	// 	return jQuery.easing.easeOutExpo(x, t, b, c, d);
	// 	}
	// });

	// $('a[href^="#"]').click(function(e) {
	// 	e.preventDefault();
	// 	$(window).stop(true).scrollTo(
	// 	this.hash, {
	// 		duration:800, 
	// 		interrupt:true,
	// 		easing: 'easeOutExpo'
	// 		}
	// 	);
	// });

//////////////////////////////////////////////////////////////////////

// scroll's href

		$(".whois").click(function() {
		    $('html, body').animate({
		        scrollTop: $(".about").offset().top
		    }, 500);
		});




		// scroll's parallax
	
		var topScrollGo = function() {
			var topScroll = $(this).scrollTop();
			$('.screen1 .container,.screen1 h1').css({
				'transform': 'translate3d(0px,'+ topScroll/3.35 +'px,0px)',
				'opacity': 1-topScroll/2000
			});
		};
		$( window ).scroll(topScrollGo);	









});