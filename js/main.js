document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.navbar');
    const btnNav = document.querySelector('.navbar-toggler')

    function addShadow() {
        if (window.scrollY > 0) {
            navMenu.classList.add('navShadow');
        } else {
            navMenu.classList.remove('navShadow');
        };
    }
    btnNav.addEventListener('click', function () {
        navMenu.classList.add('navShadow');
    });

    // Closing navigation after click - cnac
    window.addEventListener('scroll', addShadow);
    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
                if (window.scrollY < 1) {
                    navMenu.classList.remove('navShadow');
                }
            }
        });
    });
    // Team-carousel
    $(document).ready(function () {
        $('.team-carousel').slick({
            infinite: true,
            mobileFirst: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 879,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1499,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
    });


})