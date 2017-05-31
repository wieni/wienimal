(function ($, Drupal) {
    'use strict';

    Drupal.behaviors.select2 = {
        attach: function (context) {
            $('.form-type-select-autocreate select', context).once('select2').each(function () {
                $(this).select2({
                    minimumResultsForSearch: 10,
                    width: 'auto',
                    tags: true,
                });
            });

            $('select', context).once('select2').each(function () {
                $(this).select2({
                    minimumResultsForSearch: 10,
                    width: 'auto',
                });
            });
        }
    };

}(jQuery, Drupal));
