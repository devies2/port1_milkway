$(function($){
        // $('.tabTit a').on('click',function(e){
        //     e.preventDefault();
        //     console.log($(this).index());
        //     var ind = $(this).index();
        //     console.log(ind);
        //     $('.tabCont').eq(ind).siblings().removeClass('on');
        //     $('.tabCont').eq(ind).addClass('on');
        // })

        init();
        
        $(window).on('resize',function(){
          init()
        })
      
        function init(){
          var ww =$(window).width();
          if(ww>680){
            $('#nav').show()
            $('.open_nav i, .close_nav i, .depth2').hide()
          } else if(ww<=680){
              $('#nav').hide()
            $('.open_nav i').show()
          }1
        }

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
        $('.open_nav i').on('click', function(){
            console.log('123')
            $(this).parent().next().css({
                display: 'block',
            })
            $(this).hide();
            $(this).parent().next().next().find('i').show();
        })
      
        $('.close_nav i').on('click', function(){
            $(this).parent().prev().css({
                display: 'none',
            })
            $('.open_nav i').show();
            $(this).hide();
            $('.depth2').hide();
            $(this).parent().prev().prev().find('i').show();
        })
      

})(jQuery)