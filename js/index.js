$(function($){
        $('.tabTit a').on('click',function(e){
            e.preventDefault();
            console.log($(this).index());
            var ind = $(this).index();
            $('.tabCont').eq(ind).siblings().removeClass('on');
            $('.tabCont').eq(ind).addClass('on');
        })
})(jQuery)