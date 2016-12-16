(function() {
    var menu = document.querySelector('.vertical-tabs__menu');
    var menuPosition = menu.getBoundingClientRect().top;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= menuPosition) {
            menu.style.position = 'fixed';
            menu.style.top = '0px';
        } else {
            menu.style.position = 'static';
            menu.style.top = '';
        }
    });

})();
