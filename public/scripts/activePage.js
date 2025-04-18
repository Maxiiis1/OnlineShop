(function () {
    function currentPage () {
        const currentPage = document.location.pathname;
        const pages = document.querySelectorAll('.header__nav .header__link');

        pages.forEach(link => {
            const linkHref = link.getAttribute('href').replace(/\/$/, '');
            const path = currentPage.replace(/\/$/, '');

            if (linkHref === path) {
                link.classList.add('header__link--active');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', currentPage);
})();
