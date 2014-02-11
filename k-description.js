/*
 * Name: k-description - Plugin jQuery.
 * home: https://github.com/filipelinhares/k-description
 * version: 1.0.1
 * author: Filipe Linhares
 */

(function($) {
  $.fn.description = function(options) {

    //Define defaults values
    var defaults = {
        kheight: '100px'
      , kwidth: '100%'
      , kmarginTop: "100px"
      , kduration: 1000
      , kin: 'down'
      , kout: 'down'
      , kopacity: 1
      , kease: ''
      , kcontent: "k-description jQuery"
    },

      //Extend defaults and user options
      settings = $.extend(
          {}
        , defaults
        , options
        );

    //Return
    return this.each(function() {

      //Create class kp to paragraph, kcontent to span and style.
      $(this)
        .css('overflow', 'hidden')
        .append('<p class="kp"><span class="kcontent"></span></p>');
      $("p.kp span.kcontent")
        .css('display', 'block')
        .text(settings.kcontent);

      //Manipule down and up value to kin
      if (settings.kin == 'down') 
        settings.kin = '+';
        else if (settings.kin == 'up') 
        settings.kin = '-';

      //Style kp with user options
      $("p.kp").css({
          display: "block"
        , width: settings.kwidth
        , height: settings.kheight
        , opacity: settings.kopacity
        , marginTop: settings.kin + settings.kheight
      });

      //Add event mouseover to element, and show description.
      $(this).on({
        mouseover: function() {
          $(this)
            .find("p.kp")
            .stop()
            .animate({
                width: settings.kwidth
              , height: settings.kheight,
                marginTop: settings.kmarginTop
            }, settings.kduration, settings.kease);
        },

        //Add evente mouseleave to element, and hide description
        mouseleave: function() {

          //Manipulate down and up value to kout.
          if (settings.kout == 'down') 
            settings.kout = '+';
            else if (settings.kout == 'up') 
            settings.kout = '-';

          //Clear animation from description.
          $(this)
            .find("p.kp")
            .stop()
            .animate({
              marginTop: settings.kout + settings.kheight
            }, settings.kduration, settings.kease);
        }
      });
    });
  };

})(jQuery);