function startFirefly($) {
  $.firefly({
    images: [
    'assets/firefly/cube_blue.png', 
    'assets/firefly/cube_green.png'
    ],
    minPixel: 5,
    maxPixel: 20,
    on: "#hero",
    total: 30,
  });
}

function startParallax($) {
  $(".parallax").parallax();
}

// Credits to https://css-tricks.com/snippets/jquery/smooth-scrolling/
function startSmoothSamePageScrolling($) {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });
  });
}

(function ($) {
  $(document).ready(function () {
    startFirefly($);
    startParallax($);
    startSmoothSamePageScrolling($);
  });
})(jQuery);