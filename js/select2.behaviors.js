(function ($, Drupal) {
    'use strict';

    Drupal.behaviors.select2 = {
        attach: function (context) {
            $('select', context).once('select2').each(function () {
                var options = {
                    minimumResultsForSearch: 10,
                    width: 'auto',
                    containerCssClass: ':all:'
                };

                if($(this).data().hasOwnProperty('select2Tags')) {
                    options.tags = true;
                }

                $(this).select2(options);
            });
        }
    };

}(jQuery, Drupal));
