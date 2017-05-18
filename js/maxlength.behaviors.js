(function($) {

  Drupal.behaviors.wienimal_maxlength = {
      attach: function (context) {
          $(context).find('.maxlength').once('wienimal_maxlength').each(function () {
              $(this)
                  .add('.counter', $(this).parent())
                  .wrapAll('<div class="maxlength-wrapper" />');
          });
      },
  };

})(jQuery);
