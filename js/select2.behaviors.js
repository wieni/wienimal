(function ($, Drupal) {
    'use strict';

    Drupal.behaviors.select2 = {
        attach: function(context) {
            $('select', context).once('select2').each(function() {
                $(this).select2({
                    minimumResultsForSearch: 10,
                });
            });
        }
    };

}(jQuery, Drupal));