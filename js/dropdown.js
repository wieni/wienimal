(function ($, Drupal) {

    Event.prototype.propagationPath = function propagationPath() {
        var polyfill = function () {
            var element = this.target;
            var pathArr = [element];

            if (element === null || element.parentElement === null) {
                return [];
            }

            while (element.parentElement !== null) {
                element = element.parentElement;
                pathArr.unshift(element);
            }

            return pathArr;
        };

        return this.path || (this.composedPath && this.composedPath()) || polyfill();
    };

    Drupal.clickOutsideHandler = function (event) {
        var container = $(event.target).closest('.dropdown-group').get(0);
        var isWrongEvent = (event.type === 'click' && Drupal.isTouch) || (event.type === 'touchstart' && !Drupal.isTouch);

        if (!isWrongEvent && !event.propagationPath().includes(container)) {
            $('.dropdown-group.open').removeClass('open');
        }

        return false;
    };

    Drupal.behaviors.dropdown = {
        attach: function(context) {
            var $button = $('.dropdown-toggle', context);

            // Detect touch devices
            if ('ontouchstart' in window || 'maxTouchPoints' in navigator) {
                Drupal.isTouch = true;
                window.addEventListener('mousemove', function mouseMoveDetector() {
                    Drupal.isTouch = false;
                    window.removeEventListener('mousemove', mouseMoveDetector);
                });
            } else {
                Drupal.isTouch = false;
            }

            // Attach toggle click handler
            $button.on('click', function () {
                var $container = $(this).closest('.dropdown-group');

                $container.addClass('js-remain');
                $button.closest('.dropdown-group:not(.js-remain)').removeClass('open');
                $container.toggleClass('open');
                $container.closest('.dropdown-group').removeClass('js-remain');
            });

            // Attach outside click handler
            window.addEventListener('touchstart', Drupal.clickOutsideHandler);
            window.addEventListener('click', Drupal.clickOutsideHandler);
        }
    };

})(jQuery, Drupal);
