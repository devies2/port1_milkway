(function($){
        // $('.tabTit a').on('click',function(e){
        //     e.preventDefault();
        //     console.log($(this).index());
        //     var ind = $(this).index();
        //     console.log(ind);
        //     $('.tabCont').eq(ind).siblings().removeClass('on');
        //     $('.tabCont').eq(ind).addClass('on');
        // })
        var flag;
        flag = true;
        init();
        
        function init(){
          var ww =$(window).width();
          if(ww>680){
            $('html').addClass('pc').removeClass('mobile')
            if(flag){
              $('#nav').show()
              $('.open_nav, .close_nav, .depth2').hide()
              flag = false
            }
          } else if(ww<=680){
            $('html').removeClass('pc').addClass('mobile')
            if(!flag){
              $('#nav').hide()
            $('.open_nav').show()
            flag = true

            }
          }
        }
        $(window).on('resize',function(){
          init()
        })
        $('.depth1 >li').on('mouseenter',function(){
            // console.log('실행')
            // if($('html').hasClass('pc')){
              $(this).find('.depth2').stop().slideDown(300);
              $(this).find('.detail').stop().slideDown(100);
            // }
        })

        $('.depth1 >li').on('mouseleave',function(){
            // console.log('실행')
            // if($('html').hasClass('pc')){
              $(this).find('.depth2').stop().slideUp(300);
              $(this).find('.detail').stop().slideUp(700);
            // }
        })
        // $('.depth1 >li > a').on('click',function(e){
        //   e.preventDefault();
          
        // })
        $(".depth1 > li").on('click', function(){
          // 1005 추가
          // 모바일에서 depth1 클릭시 depth2 보이게
          if($('html').hasClass('mobile')){
            // $(this).toggleClass('on')
            $(this).find('.depth2').stop().slideToggle(300)
            // $(this).find('.depth2').stop().css({
            //   display: 'block',
            // })
            $(this).siblings().each(function(){
              if($(this).css('display') === 'block'){
                $(this).find('.depth2').stop().slideUp(100)
                // $(this).removeClass('on')
                // ㄴ이 this는 siblings 각각을 의미
              }
            })
          }
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