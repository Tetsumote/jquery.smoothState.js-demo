/*====================================
 =            ON DOM READY            =
 ====================================*/
$(function() {
  $('.lines-button').click(function(e) {
    e.preventDefault();
    toggleNav();
  });
});


/*========================================
 =            CUSTOM FUNCTIONS            =
 ========================================*/
function toggleNav() {
  if ($('#site-wrapper').hasClass('show-nav')) {
    // Do things on Nav Close
    $('#site-wrapper').removeClass('show-nav');
    $('.lines-button').removeClass('close');
  } else {
    // Do things on Nav Open
    $('#site-wrapper').addClass('show-nav');
    $('.lines-button').addClass('close');
  }

  //$('#site-wrapper').toggleClass('show-nav');
}

;
(function($) {
  'use strict';
  var content = $('#trans-target').smoothState({
    prefetch: true,
    development: true,
    onStart: {
      duration: 1400,
      render: function(url, $container) {
        content.toggleAnimationClass('is-exiting');
      }
    }
  }).data('smoothState');
})(jQuery);