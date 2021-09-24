$(document).ready(function() {
    
  $('.js--scroll-to-services').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000); 
    
     /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
  });
  });

     /* Navigation scroll */
     $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1200);
            return false;
          }
        }
      });
    });
    
});