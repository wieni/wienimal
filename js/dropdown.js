(function($) {
    var $button = $('.dropdown-toggle');

    $button.on('click', function() {
        $(this).closest('.btn-group').addClass('js-remain');
        $button.closest('.btn-group:not(.js-remain)').removeClass('open');
        $(this).closest('.btn-group').toggleClass('open');
        $(this).closest('.btn-group').removeClass('js-remain');
    });

})(jQuery);
