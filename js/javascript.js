// HOW IT WORKS ANIMATION

var steps = $(".step");
console.dir(steps);

setTimeout(function() {
  steps.each(function(index) {
    var _t = $(this);
    setTimeout(function() {
      _t.addClass('step--complete');
    }, 1250*index*1.5);
  });
}, 1500);

// NAVBAR

$('.nav-link').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active-link').end().addClass('active-link');
});

// SMOOTH SCROLL

$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 500, function() {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex','-1');
						$target.focus();
					};
				});
			}
		}
	});
