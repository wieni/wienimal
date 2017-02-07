(function ($, Drupal) {

    Drupal.behaviors.dropdown = {
        attach: function(context) {
            var $button = $('.dropdown-toggle', context);

            $button.on('click', function () {
                $(this).closest('.dropdown-group').addClass('js-remain');
                $button.closest('.dropdown-group:not(.js-remain)').removeClass('open');
                $(this).closest('.dropdown-group').toggleClass('open');
                $(this).closest('.dropdown-group').removeClass('js-remain');
            });
        }
    };

})(jQuery, Drupal);
