import $ from 'jquery';

// Event on scroll
!function(n){var p,t=n.fn.on;n.fn.on=function(){var n=Array.apply(null,arguments),a=n[n.length-1];if(isNaN(a)||1===a&&n.pop())return t.apply(this,n);var i=n.pop(),o=n.pop();return n.push(function(){var n=this,t=arguments;clearTimeout(p),p=setTimeout(function(){o.apply(n,t)},i)}),t.apply(this,n)}}($);

$(document).ready(function(){
    let infinite          = $('[data-infinite]');
    let resultClass       = infinite.attr('data-infinite-result');
    let resultHTML        = $(resultClass);
    let auto              = infinite.attr('data-infinite-auto');
    let textButton        = infinite.attr('data-infinite-button');
    let textButtonLoading = infinite.attr('data-infinite-button-loading');
    let item              = '.showcase__item';
    let paginateClass     = '.paginates'

    if(!auto)   auto = true;
    else        auto = auto == 'true' ? true : false; 

    if (!resultHTML.length) {
        console.log('[ PAGINATION INFINITE ] Error: Selecione o campo de Resultado');
        return;
    }

    if(infinite.attr('data-infinite') != 'false') {
        let paginates = $('.paginates', infinite);

        if(paginates.length) {
            let buttonNext  = paginates.find('.page-next a');
            let loadmore    = $(`<button class="infinite__button" type="button">`).text(textButton);

            paginates.hide();

            if(buttonNext.length) {
                let src = buttonNext.attr('href');

                loadmore.attr('data-src', src);
                paginates.after(loadmore);
                
                loadmore.click(function(){
                    let src = loadmore.attr('data-src');

                    if(src.length) {

                        infinite.addClass('infinite--loading');
                        loadmore
                            .addClass('infinite__button--loading')
                            .attr('disabled', true)
                            .text(textButtonLoading);

                        $.get(src)
                            .then((data) => {
                                let paginates   = $(paginateClass, data);
                                let buttonNext  = paginates.find('.page-next a');
                                
                                data = $(resultClass, data);

                                resultHTML.append(
                                    $(item, data)
                                        .addClass('infinite--hide')
                                        .css({
                                            opacity     : 0
                                        })
                                );

                                if( buttonNext.length ) {
                                    let src = buttonNext.attr('href');
                                    loadmore.attr('data-src', src);
                                } else loadmore
                                            .hide()
                                            .attr('disabled', true)
                                            .attr('data-src', '');

                                $(resultHTML).find('.infinite--hide').each(function(index, el){
                                    setTimeout(function(){

                                        $(el)
                                            .animate({
                                                'opacity': 1,
                                                'visibility': 'visible'
                                            }, 450)
                                            .removeClass('infinite--hide');

                                    },100 + ( index * 100 ));
                                });

                                infinite.removeClass('infinite--loading');
                                loadmore
                                    .removeClass('infinite__button--loading')
                                    .attr('disabled', false)
                                    .text(textButton);

                            });
                    }

                });

                if(auto) {
                    console.log('[ PAGINATION INFINITE ] Scroling Auto ');
                    const body = $(window);
                    let top         = body.scrollTop();
                    let topResult   = resultHTML.offset().top + (resultHTML.outerHeight() / 2);

                    if(top > topResult) {
                        if(!loadmore.attr('disabled')) loadmore.trigger('click');
                    }

                    body.on('scroll', function(){
                        let top         = body.scrollTop();
                        let topResult   = resultHTML.offset().top + (resultHTML.outerHeight() / 2);

                        if(top > topResult) {
                            if(!loadmore.attr('disabled')) loadmore.trigger('click');
                        }
                    }, 250);
                }
            }

        } else console.log('[ PAGINATION INFINITE ] Error: Enableb paginates ');
    }
});