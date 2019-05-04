'use strict';
(function(_0x4d28x1) {
    _0x4d28x1(window)['on']('load', function() {
        _0x4d28x1('#alx-preloader')['delay'](1000)['fadeOut']('slow');
        _0x4d28x2a(_0x4d28x1('.alx-services'))
    });
    _0x4d28x1(document)['ready'](function() {
        _0x4d28x1('section')['each'](function() {
            var _0x4d28x2 = _0x4d28x1(this)['children']('.container, .container-fluid')['outerHeight'](),
                _0x4d28x3 = _0x4d28x1(this),
                _0x4d28x4 = _0x4d28x1(window)['height']() - 100;
            _0x4d28x3['children']('.container, .container-fluid')['css']('height', +_0x4d28x2);
            if (_0x4d28x4 < _0x4d28x2) {
                _0x4d28x3['removeClass']('alx-vertical-middle')
            }
        })
    });
    _0x4d28x1c();
    _0x4d28x1('img, a')['on']('dragstart', function(_0x4d28x5) {
        _0x4d28x5['preventDefault']()
    });
    _0x4d28x1('.alx-burger')['each'](function() {
        _0x4d28x1(this)['on']('click', function(_0x4d28x6) {
            _0x4d28x6['preventDefault']();
            _0x4d28x1(this)['toggleClass']('on')
        })
    });
    _0x4d28x1('#alx-particles')['particleground']({
        dotColor: 'rgba(255, 255, 255, 0.40)',
        lineColor: 'rgba(255, 255, 255, 0.21)',
        parallaxMultiplier: 5,
        particleRadius: 5,
        proximity: 130,
        density: 12000
    });
    _0x4d28x1(function() {
        _0x4d28x1('#alx-pagepiling')['pagepiling']({
            loopBottom: true,
            scrollingSpeed: 200,
            easing: 'Clip',
            fitToSection: false,
            autoScrolling: false,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
            verticalCentered: false,
            sectionSelector: 'section',
            onLeave: function(_0x4d28x7, _0x4d28x8, _0x4d28x9) {
                _0x4d28x1('.pp-section')['find']('.alx-skills')['removeClass']('alx-skill-viewport');
                _0x4d28x1('.pp-section.active')['find']('.alx-skills')['addClass']('alx-skill-viewport');
                if (_0x4d28x1('.pp-section.active')['find']('.alx-skills')['length']) {
                    _0x4d28x1c()
                } else {
                    _0x4d28x1('.pp-section')['find']('.alx-skills')['find']('.alx-skills__bar')['css']('width', '0')
                }
            }
        });
        var _0x4d28xa = _0x4d28x1('.alx-pp-arrows-up'),
            _0x4d28xb = _0x4d28x1('.alx-pp-arrows-down');
        _0x4d28xa['on']('click', function() {
            _0x4d28x1['fn']['pagepiling']['moveSectionUp']()
        });
        _0x4d28xb['on']('click', function() {
            _0x4d28x1['fn']['pagepiling']['moveSectionDown']()
        })
    });
    _0x4d28x1(function() {
        if (_0x4d28x1('.alx-portfolio-control')['length']) {
            _0x4d28x1('.alx-portfolio-control li')['on']('click', function() {
                var _0x4d28xc = _0x4d28x1(this)['attr']('data-filter');
                _0x4d28x1('.alx-portfolio-control li')['removeClass']('alx-active');
                _0x4d28x1(this)['addClass']('alx-active');
                _0x4d28x1('.alx-layout-isotope')['isotope']({
                    filter: _0x4d28xc,
                    masonry: {
                        transitionDuration: '0.8s',
                        percentPosition: true
                    }
                });
                return false
            })
        }
    });
    _0x4d28x1(function() {
        var _0x4d28xd = _0x4d28x1('.alx-layout-isotope');
        _0x4d28xd['imagesLoaded']()['done'](function() {
            _0x4d28xd['isotope']({
                itemSelector: '.alx-isotope-item',
                masonry: {
                    columnWidth: '.alx-isotope-item'
                },
                transitionDuration: '0.8s',
                percentPosition: true
            })
        });
        _0x4d28x1(window)['on']('resize', function() {
            _0x4d28xd['isotope']()
        })['trigger']('resize')
    });
    _0x4d28x1('.alx-img-gallery')['magnificPopup']({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    _0x4d28x1('.alx-contact-form:nth-child(1n)')['on']('submit', function() {
        var _0x4d28xe = _0x4d28x1(this);
        _0x4d28x1['ajax']({
            type: 'POST',
            url: 'mail.php',
            data: _0x4d28xe['serialize']()
        })['done'](function() {
            _0x4d28xe['trigger']('reset');
            _0x4d28xe['find']('.alx-success-msg')['slideToggle']('slow');
            setTimeout(function() {
                _0x4d28xe['find']('.alx-success-msg')['slideToggle']('hide')
            }, 3000)
        });
        return false
    });
    _0x4d28x1['fn']['alx_testimonials'] = function() {
        _0x4d28x1(this)['each'](function() {
            var _0x4d28xf = _0x4d28x1(this)['find']('.alx-slider__nav__dots');
            var _0x4d28x10 = _0x4d28x1(this)['find']('.alx-slider__nav');
            var _0x4d28x11 = _0x4d28x10['children']('.alx-slider__nav__next');
            var _0x4d28x12 = _0x4d28x10['children']('.alx-slider__nav__prev');
            var _0x4d28x13 = _0x4d28x1(this)['children']('.alx-testimonials__slides');
            _0x4d28x13['not']('.slick-initialized')['slick']({
                dots: true,
                appendDots: _0x4d28xf,
                dotsClass: 'dots',
                autoHeight: true,
                infinite: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: _0x4d28x12,
                nextArrow: _0x4d28x11,
                customPaging: function(_0x4d28x14, _0x4d28x15) {
                    var _0x4d28x16 = _0x4d28x1(_0x4d28x14['$slides'][_0x4d28x15])['data'](),
                        _0x4d28x17 = _0x4d28x15 + 1;
                    if (_0x4d28x15 < 9) {
                        return '<button>0' + _0x4d28x17 + '</button>'
                    } else {
                        return '<button>' + _0x4d28x17 + '</button>'
                    }
                },
                responsive: [{
                    breakpoint: 810,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }]
            })
        })
    };
    _0x4d28x1('.alx-testimonials')['alx_testimonials']();
    _0x4d28x1('.alx-testimonials__item__text > p')['readmore']({
        collapsedHeight: 60
    });

    function _0x4d28x18() {
        _0x4d28x1('.alx-skill-viewport')['each'](function() {
            var _0x4d28x19 = _0x4d28x1(this)['find']('.alx-skills__body'),
                _0x4d28x1a = _0x4d28x1(this)['find']('.alx-skills__bar');
            _0x4d28x1a['waypoint'](function(_0x4d28x1b) {
                if (_0x4d28x1b === 'down') {
                    _0x4d28x1a['css']('width', _0x4d28x1a['attr']('data-skills'))
                } else {
                    _0x4d28x1a['css']('width', '0')
                }
            }, {
                offset: '90%'
            })
        })
    }

    function _0x4d28x1c() {
        _0x4d28x1('.alx-skill-viewport')['each'](function() {
            var _0x4d28x19 = _0x4d28x1(this)['find']('.alx-skills__body'),
                _0x4d28x1a = _0x4d28x1(this)['find']('.alx-skills__bar');
            _0x4d28x1a['css']('width', _0x4d28x1a['attr']('data-skills'))
        })
    }
    _0x4d28x1(function() {
        var _0x4d28x1d = _0x4d28x1('.alx-burger'),
            _0x4d28x1e = _0x4d28x1('body'),
            _0x4d28x1f = _0x4d28x1('.alx-aside-sidebar'),
            _0x4d28x20 = _0x4d28x1('.alx-aside-sidebar__overlay'),
            _0x4d28x21 = _0x4d28x1('#alx-sidebar')['children']('.alx-burger'),
            _0x4d28x22 = _0x4d28x1('#alx-sidebar')['children']('.alx-sidebar-menu')['find']('a'),
            _0x4d28x23 = false;

        function _0x4d28x24() {
            _0x4d28x1e['removeClass']('alx-aside-sidebar__openoverlay');
            _0x4d28x1f['removeClass']('alx-aside-sidebar__open');
            _0x4d28x1d['removeClass']('on')
        }
        _0x4d28x1d['on']('click', function(_0x4d28x6) {
            if (!_0x4d28x23) {
                _0x4d28x6['preventDefault']();
                _0x4d28x1e['toggleClass']('alx-aside-sidebar__openoverlay');
                _0x4d28x1f['toggleClass']('alx-aside-sidebar__open')
            };
            _0x4d28x23 = true
        });
        _0x4d28x20['on']('click', function(_0x4d28x6) {
            if (_0x4d28x23) {
                _0x4d28x6['preventDefault']();
                _0x4d28x24()
            };
            _0x4d28x23 = false
        });
        if (window['matchMedia']('(max-width: 767px)')['matches']) {
            _0x4d28x22['on']('click', function(_0x4d28x6) {
                if (_0x4d28x23) {
                    _0x4d28x24()
                };
                _0x4d28x23 = false
            })
        };
        _0x4d28x21['on']('click', function(_0x4d28x6) {
            if (_0x4d28x23) {
                _0x4d28x6['preventDefault']();
                _0x4d28x24();
                _0x4d28x23 = false
            }
        })
    });
    _0x4d28x1('.alx-style')['each'](function() {
        var _0x4d28x25 = _0x4d28x1(this)['attr']('data-style');
        if (_0x4d28x25) {
            _0x4d28x1(this)['attr']('style', '' + _0x4d28x25)
        }
    });
    _0x4d28x1['fn']['alx_background_image'] = function() {
        _0x4d28x1(this)['each'](function() {
            var _0x4d28x26 = _0x4d28x1(this)['attr']('data-image');
            if (_0x4d28x26) {
                _0x4d28x1(this)['css']('background-image', 'url(' + _0x4d28x26 + ')')
            }
        })
    };
    _0x4d28x1('.alx-bg-img')['alx_background_image']();
    _0x4d28x1('.alx-services')['each'](function() {
        var _0x4d28x3 = _0x4d28x1(this),
            _0x4d28x27 = _0x4d28x3['attr']('data-interval');
        _0x4d28x3['addClass']('run');
        _0x4d28x1(this)['mouseover'](function() {
            _0x4d28x1(this)['removeClass']('run')
        })['mouseout'](function() {
            _0x4d28x1(this)['addClass']('run')
        });
        _0x4d28x2a(_0x4d28x3);
        _0x4d28x1(window)['on']('resize', function() {
            _0x4d28x2a(_0x4d28x3)
        })['trigger']('resize');
        _0x4d28x3['find']('.alx-services__container')['eq'](0)['addClass']('alx-active');
        setInterval(_0x4d28x28, _0x4d28x27);

        function _0x4d28x28() {
            if (_0x4d28x3['hasClass']('run')) {
                var _0x4d28x29 = _0x4d28x3['find']('.alx-services__container')['length'] - 1;
                _0x4d28x3['find']('.alx-services__container')['each'](function(_0x4d28x7) {
                    if (_0x4d28x1(this)['hasClass']('alx-active') && _0x4d28x7 != _0x4d28x29) {
                        _0x4d28x1(this)['removeClass']('alx-active')['next']('.alx-services__container')['addClass']('alx-active');
                        return false
                    } else {
                        if (_0x4d28x7 == _0x4d28x29) {
                            _0x4d28x1(this)['removeClass']('alx-active');
                            _0x4d28x3['find']('.alx-services__container')['eq'](0)['addClass']('alx-active');
                            return false
                        }
                    }
                })
            }
        }
    });
    _0x4d28x1('.alx-services__item__wrap')['matchHeight']({
        property: 'height'
    });

    function _0x4d28x2a(_0x4d28x2b) {
        _0x4d28x2b['each'](function() {
            var _0x4d28x2b = _0x4d28x1(this),
                _0x4d28x2c = _0x4d28x2b['find']('.alx-services__container')['outerHeight']();
            _0x4d28x2b['css']('height', +_0x4d28x2c)
        })
    }
})(jQuery)