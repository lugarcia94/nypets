



jQuery(document).ready(function ($) {
    $('.botao-commerce.botao-novo-cadastro').click(function () {
        $(this).closest('form').each(function () { this.submit() });
    });




    var arrowNext = '<button type="button" class="slick-next slick-arrow"><svg class="control__icon icon--next"><use xlink:href="#icon-arrow-right"></use></svg></button>';
    var arrowPrevious = '<button type="button" class="slick-prev slick-arrow"><svg class="control__icon icon--previous"><use xlink:href="#icon-arrow-lefth"></use></svg></button>';

    if (jQuery('.page-home').length > 0) {
        var bannerHome = jQuery('.banner-home__list');
        if (bannerHome) {
            jQuery(bannerHome).slick({
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                nextArrow: arrowNext,
                pauseOnHover: true,
                prevArrow: arrowPrevious,
                slidesToShow: 1,
                responsive: [
                    { breakpoint: 767, settings: { arrows: false } }
                ]
            });
        }

        // plugin instagram
        var instagramUserId = jQuery('.instagram__user-id').attr('data-user-id');
        var instagramToken = jQuery('.instagram__token').attr('data-token');

        var galleryFeed = new Instafeed({
            get: "user",
            userId: instagramUserId,
            accessToken: instagramToken,
            resolution: "low_resolution",
            useHttp: "true",
            limit: 5,
            links: "true",
            template:
                '<div class="img-featured-container">' +
                '<a href="{{link}}" target="_blank">' +
                '<div class="img-backdrop"></div>' +
                '<div class="description-container">' +
                '<span class="likes" title="Likes"><svg class="instafeed__icon"><use xlink:href="#icon-pet"></use></svg> {{likes}}</span>' +
                '<span class="comments" title="Comments"><svg class="instafeed__icon"><use xlink:href="#icon-comments"></use></svg> {{comments}}</span>' +
                '</div>' +
                '<img src="{{image}}" class="img-responsive">' +
                '</a>' +
                '</div>',
            target: "instafeed-gallery-feed",
            after: function () {
                // disable button if no more results to load
                if (!this.hasNext()) {
                    if (btnInstafeedLoad)
                        btnInstafeedLoad.setAttribute('disabled', 'disabled');
                }

                // instagram carousel
                var instagram = jQuery('#instafeed-gallery-feed');
                if (instagram) {
                    jQuery(instagram).slick({
                        arrows: true,
                        nextArrow: arrowNext,
                        prevArrow: arrowPrevious,
                        dots: false,
                        slidesToShow: 5,
                        responsive: [
                            {
                                breakpoint: 1199, settings: {
                                    slidesToShow: 5
                                }
                            },
                            {
                                breakpoint: 991, settings: {
                                    slidesToShow: 4
                                }
                            },
                            {
                                breakpoint: 767, settings: {
                                    slidesToShow: 3
                                }
                            },
                            {
                                breakpoint: 420, settings: {
                                    slidesToShow: 2
                                }
                            }
                        ]
                    });
                }
                // end instagram carousel
            }
        });

        galleryFeed.run();

        var btnInstafeedLoad = document.querySelector("#btn-instafeed-load");
        if (btnInstafeedLoad) {
            btnInstafeedLoad.addEventListener("click", function () { galleryFeed.next() });
        }
        // end plugin instagram   
    }

    var showcaseHome = jQuery('.showcase__carousel .showcase__list');
    if (showcaseHome) {
        jQuery(showcaseHome).slick({
            nextArrow: arrowNext,
            prevArrow: arrowPrevious,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                { breakpoint: 1199, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 679, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
    }

    var showcaseVideo = jQuery('.video-youtube__list');
    if (showcaseVideo) {
        jQuery(showcaseVideo).slick({
            nextArrow: arrowNext,
            prevArrow: arrowPrevious,
            dots: false,
            vertical: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                { breakpoint: 1199, settings: { slidesToShow: 3, vertical: true, slidesToScroll: 3 } },
                { breakpoint: 991, settings: { slidesToShow: 2, vertical: false, slidesToScroll: 2 } },
                { breakpoint: 679, settings: { slidesToShow: 1, vertical: false, slidesToScroll: 1 } }
            ]
        });
    }

    var carroselMarcas = jQuery('.brands__list-carrosel');
    if (carroselMarcas) {
        jQuery(carroselMarcas).slick({
            nextArrow: arrowNext,
            prevArrow: arrowPrevious,
            dots: false,
            vertical: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                { breakpoint: 1199, settings: { slidesToShow: 6, vertical: false, slidesToScroll: 6 } },
                { breakpoint: 991, settings: { slidesToShow: 4, vertical: false, slidesToScroll: 4 } },
                { breakpoint: 679, settings: { slidesToShow: 2, vertical: false, slidesToScroll: 2 } }
            ]
        });
    }
    if (jQuery(window).width() < 991) {
        var information = jQuery('.information-list');
        if (information) {
            jQuery(information).slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                nextArrow: arrowNext,
                prevArrow: arrowPrevious,
                dots: false,
                slidesToShow: 4,
                responsive: [
                    { breakpoint: 1199, settings: { arrows: true, slidesToShow: 4, slidesToScroll: 2 } },
                    { breakpoint: 991, settings: { arrows: true, slidesToShow: 3, slidesToScroll: 1 } },
                    { breakpoint: 767, settings: { arrows: true, slidesToShow: 1, slidesToScroll: 1 } }
                ]
            });
        }
    }
    if (jQuery(window).width() < 992) {
        jQuery('.banner__wrapper--extras .banner__list').slick({
            nextArrow: arrowNext,
            prevArrow: arrowPrevious,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    if (jQuery(window).width() < 1199) {
        var showcaseRelated = jQuery('.product__related .showcase__list');
        if (showcaseRelated) {
            jQuery(showcaseRelated).slick({
                nextArrow: arrowNext,
                prevArrow: arrowPrevious,
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    { breakpoint: 1199, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                    { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2, dots: false } },
                    { breakpoint: 679, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } }
                ]
            });
        }
    }

    jQuery('img').closest('.video-youtube__image').on('click', function (e) {
        var id = jQuery(this).attr('data-code');
        var title = jQuery(this).attr('data-title');
        jQuery('.video-youtube__first').html('<iframe src="https://www.youtube.com/embed/' + id + '?playlist=' + id + ';autoplay=1&controls=1&showinfo=0&rel=0&loop=0&modestbranding=0&wmode=transparent&enablejsapi=0&mute=1&color=white" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" class="style-scope yt-sharing-embed-renderer"></iframe> <p class="video-youtube__title">' + title + '</p>');
    })

    if (jQuery('.page-product').length > 0) {

        jQuery('.produto-preco').append(jQuery('.produto-preco .product__payments-wrapper'));

        jQuery('.product__payments-anchor').click(function () {
            jQuery('.product__payments-wrapper').removeClass('hide-payments');
        });

        var div = jQuery(".product__payments-wrapper");

        jQuery("body").on("click", function (e) {
            if (div.has(e.target).length || e.target == div[0])
                return;
            jQuery('.product__payments-wrapper').addClass("hide-payments");
        });

        jQuery('.product__bundle select').SumoSelect();


        $tray(document).ajaxComplete(function (event, xhr, settings) {
            if (settings.url.indexOf('/product/loadNextVariantDropDown') != -1) {
                jQuery('#second_dropdown').SumoSelect();
            }

            if (settings.url.indexOf('variacao_dupla_compre_junto') != -1) {
                jQuery('select[data-tray-tst="buy_together_second_variation"]').SumoSelect();
            }

            if (jQuery('.page-product').length > 0) {
                var cont = 0;
                $('.product__variations').each(function () {
                    cont = cont + 1;
                    var textoHtml = $(this).find('.texto_variacao > h2');
                    var newText = textoHtml.html();
                    console.log(newText, cont);
                    if (newText == 'Cores disponíveis') {
                        $('.texto_variacao h2').html('Escolha a cor');
                    }
                });

                jQuery('.thumb__video').click(function () {
                    jQuery('#colVideo').addClass('on__video');
                });

                jQuery('#colVideo').click(function (e) {
                    if ($(e.target).hasClass('on__video')) {
                        jQuery('#colVideo').removeClass('on__video');
                        $('#colVideo iframe').attr('src', $('#colVideo iframe').attr('src'));
                        jQuery('#colVideo').hide();
                    }
                });
            }
        });

        var prodID = $('.product__payments').attr('id');
        $('.product__payments-content').load('/mvc/store/product/payment_options', { loja: 680277, IdProd: prodID, });
        setTimeout(function () {
            $('.product__payments-content > li, .product__payments-content > li > a, .product__payments-content > li > table').removeAttr('id');
            if (!$('.product__payments-wrapper .Forma1 li').length) {
                $('.product__payments-wrapper').remove();
            } else {
                $('.product__payments-wrapper').show();
            }
            console.log(prodID)
        }, 5000);
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') { c = c.substring(1); }
            if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
        }

        return "";
    }
    setCookie();
    getCookie();
    // lightbox newsletter
    if ($('.lightbox-out').length > 0) {

        var lightboxtrue = Cookies.get('lightbox-out');
        Cookies.set('lightbox-out', 'false');

        $('.lightbox__close').click(function () {
            $('.lightbox-out').addClass("hidden");
            $('body').removeClass('news-on');
            Cookies.set('lightbox-out', 'true', { expires: 30 });
        });

        if (!lightboxtrue) {
            $('.lightbox-out').removeClass("hidden");
        }
    }
    // end lightbox newsletter

    jQuery(".lightbox__close").click(function () {
        jQuery(".lightbox-out").addClass('hidden');
    });

    jQuery(".lightbox__close--second").click(function () {
        jQuery(".lightbox-out").addClass('hidden');
    });

    jQuery(".lightbox-out").click(function (e) {
        if ($(e.target).hasClass('lightbox-out')) {
            jQuery(".lightbox-out").addClass('hidden');
        }
    });

    jQuery(".header__menu-overlay").click(function (e) {
        $('.header__menu--close').trigger('click');
    });

    // end lightbox out

    +function ($) {
        'use strict';

        var $smartFilterMobile = jQuery('.mobileFilter');
        var $mobileMenu = jQuery('.mobileMenu');
        var $mask = jQuery('#mask');

        jQuery($smartFilterMobile).click(function () {
            jQuery('body').toggleClass('ac_sm_ft');
        });
        jQuery($mobileMenu).click(function () {
            jQuery('body').toggleClass('ac_sm_menu');
        });
        jQuery($mask).click(function () {
            jQuery('body').removeClass('ac_sm_menu ac_sm_ft');
        });
    }(jQuery);

    +function ($) {
        'use strict';

        var errorVariacao = jQuery('#span_erro_carrinho');
        jQuery('#form_comprar .variacao-produto').append(errorVariacao);
        jQuery('#bt-submit-comments').remove();
        jQuery('#form-comments').append('<button id="bt-submit-comments" class="image pointer">Enviar</button>');
        jQuery('.page-contact #imagem').remove();
        jQuery('.page-contact .formulario-contato').append('<button  name="imagem" id="imagem">Enviar</button>');
        jQuery('.page-central_troca form input[type=image]').after('<button type="submit" class="button-submit" name="submit">Gerar Ordem de Devolu&#231;&#227;o</button>')
            .remove();
        jQuery('.page-central_gera_troca form input[type=image]').after('<button type="submit" class="button-submit" name="submit">Gerar Ordem de Devolu&#231;&#227;o</button>')
            .remove();
        jQuery('.page-search #vitrine-catalogo fieldset [type=image]').after('<button type="submit" class="button-submit" name="submit">Buscar</button>')
            .remove();
        jQuery('.page-central_senha input[type=image]').after('<button type="submit" class="button-submit" name="submit">Avan&#231;ar</button>')
            .remove();
    }(jQuery);

    +function ($) {
        jQuery('.caixa-botoes .bt-avancar').html('Avan&#231;ar');

        jQuery(document).ready(function ($) {
            jQuery('table').each(function (index, el) {
                var titles = [];

                jQuery(this).find('th').each(function (index, el) {
                    titles.push(jQuery(this).html());
                });

                jQuery(this).find('tr').each(function (index, el) {
                    jQuery(this).find('td').each(function (index, el) {
                        jQuery(this).attr('data-table-title', titles[index]);
                    });
                });
            });
        });
    }(jQuery);

    if (screen.width < 991) {
        var i = 1;

        jQuery('.smart_filter [name=form-filter] h3').each(function (index, el) {
            var self = jQuery(this);

            if (self.next('ul').find('label').length) {
                var name = self.next('ul').find('input').attr('name');
                var name = name + i;
                self.attr('data-filter-label', name)
                    .addClass('smart-filter-label')
                    .attr('data-filter-label-content', self.html());
                self.next('ul').attr('data-filter-container', name)
                    .addClass('smart-filter-container');
                i++;
            }
        });

        jQuery('.smart_filter .smart-filter-label').each(function (index, el) {
            var self = jQuery(this);
            var name = self.attr('data-filter-label');

            self.bind('click', function (event) {
                self.toggleClass('estado-ativo');
                jQuery('[data-filter-container=' + name + ']').slideToggle('300')
                    .toggleClass('estado-ativo');
            });
        });
    };

    // verifies which header to show.

    var slidebar_width = jQuery(window).width(); //slidebar width + padding size
    var slide_bar = jQuery(".header__menu-wrapper"); //slidebar
    var slide_open_btn = jQuery(".header__menu--open"); //slidebar open btn
    var slide_close_btn = jQuery(".header__menu--close"); //slidebar close btn
    var overlay = jQuery(".header__menu-overlay"); //slidebar mask

    slide_open_btn.click(function (e) {
        e.preventDefault();
        slide_bar.css({ "left": "0px" }); //change to "right" for right positioned menu
        overlay.css({ "opacity": "1", "width": "100%" });
        jQuery('body').addClass('show-menu');
    });

    slide_close_btn.click(function (e) {
        e.preventDefault();
        slide_bar.css({ "left": "-" + slidebar_width + "px" }); //change to "right" for right positioned menu
        overlay.css({ "opacity": "0", "width": "0" });
        jQuery('body').removeClass('show-menu');
    });


    jQuery('#foto_p').attr('data-target', "");

    if ($('.smart_filter h3').eq(0).text() == "Categorias") {
        $('.smart_filter h3').eq(0).text($('.breadcrumb .category').text());
    }

    if ($('.fotosCompreJunto').length > 0) {

        var aux;

        $.each($('.fotosCompreJunto .produto img'), function () {
            aux = $(this).attr('src');

            aux = aux.replace('/90_', '/180_');

            $(this).attr('src', aux);
        });

    }

    if ($('#nav_bar .nv-01 > .you-need').length > 0) {

        if ($(window).width() < 980) {
            $('#nav_bar .nv-01 > .you-need .you-need__toggle').on('click', function () {
                $('.you-need__list').slideToggle(150);
            });
        }

    }

    var lastScrollTop = 0;
    jQuery(window).scroll(function (event) {
        var st = jQuery(this).scrollTop();

        if (st > 150) {
            jQuery('body').addClass('moving');
            if (st > lastScrollTop) {
                jQuery('body').addClass('moving--down');
            } else {
                jQuery('body').removeClass('moving--down');
            }
            lastScrollTop = st;
        } else {
            jQuery('body').removeClass('moving');
        }
    });

    jQuery('.category__button').on('click', function () {
        if (!jQuery(this).parent().hasClass('show-dropdown')) {
            jQuery(this).parent().addClass('show-dropdown');
        } else {
            jQuery(this).parent().removeClass('show-dropdown');
        }
    });

    jQuery("body").addClass("active__body");

});

var elements = document.querySelectorAll('.product__right-wrapper');
Stickyfill.add(elements);


if (jQuery('.product__addcart').length > 0) {

    var prodId;

    jQuery('.product__addcart').on('click', function () {
        prodId = jQuery(this).data('id');

        addCart(prodId);
    });
}

function addCart(dataProductId) {
    var dataSession = jQuery("html").attr("data-session");
    jQuery.ajax({
        method: "POST",
        url: "/web_api/cart/",
        contentType: "application/json; charset=utf-8",
        data: '{"Cart":{"session_id":"' + dataSession + '","product_id":"' + dataProductId + '","quantity":"1"}}'
    }).done(function (response, textStatus, jqXHR) {

        jQuery('.addcart-' + dataProductId).html('Adicionado!!');
        setTimeout(function () {
            jQuery('.addcart-' + dataProductId).html('<svg class="addCart__icon icon--cart"><use xlink:href="#cart"></use></svg> Adicionar à Sacola');
        }, 2000);
        var qtdCart = parseInt(jQuery("span[data-cart=amount]").html());
        jQuery("span[data-cart=amount]").html(qtdCart + 1);

        const UPDATECART = new CustomEvent('UPDATECART', { detail: response.data });
        window.dispatchEvent(UPDATECART);
    }).fail(function (jqXHR, status, errorThrown) {
        var response = jQuery.parseJSON(jqXHR.responseText);

    });
}

