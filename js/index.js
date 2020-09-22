$(function($){
        // $('.tabTit a').on('click',function(e){
        //     e.preventDefault();
        //     console.log($(this).index());
        //     var ind = $(this).index();
        //     console.log(ind);
        //     $('.tabCont').eq(ind).siblings().removeClass('on');
        //     $('.tabCont').eq(ind).addClass('on');
        // })
        $('.depth1 >li').on('mouseenter',function(){
            console.log('실행')
            $(this).find('.depth2').slideDown(300);
            $(this).find('.detail').slideDown(300);
        })

        $('.depth1 >li').on('mouseleave',function(){
            console.log('실행')
            $(this).find('.depth2').slideUp(700);
            $(this).find('.detail').slideUp(700);
        })

})(jQuery)