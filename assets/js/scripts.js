// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery == 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

/** examples block - content with some height as images */
$(document).ready(function() {
  var examplesCarouselPhotosHeight = $('.examples-carousel__photos').height();
  $('.examples-carousel__content').height(examplesCarouselPhotosHeight - 10);
});
/** examples block - gallery change photos */
$(document).ready(function() {
  $('.image-chooser li').on('click', function() {
    if (!$(this).hasClass('currentimage')) {
      var image = $(this).attr('dataimage');
      $('.big-image img').attr('src', image);
      $('.currentimage').removeClass('currentimage');
      $(this).addClass('currentimage');
    }
  })
});

/** achievements__container some block sizes */

$(document).ready(function() {
  var maxheight = 0;
  $(".achievements__container").each(function() {
    if ($(this).height() > maxheight) {
      maxheight = $(this).height();
    }
  });
  $(".achievements__container").height(maxheight);
  var maxheightNext = 0;
  $(".achievements__sub_container").each(function() {
    if ($(this).height() > maxheightNext) {
      maxheightNext = $(this).height();
    }
  });
  $(".achievements__sub_container").height(maxheightNext);

});

/** hidden-example */
$(document).ready(function() {
  $('.hidden-title').on('click', function(){
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $('.hidden-example').fadeOut('fast');
    } else {
      $(this).addClass('active');
      $('.hidden-example').fadeIn('fast');
    }
  })

  $('.hidden-example__choose li').on('click', function() {
    var image = $(this).attr('dataimage');
    console.log(image)
    $(this).parent().parent().css('background-image', 'url(' + image + ')');
    $('.hidden-example__choose .active').removeClass('active');
    $(this).addClass('active');
  })
});
