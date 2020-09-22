(function($){
    $(window).load(function(){
        $('.introAni').delay(500).fadeOut(500)
    })
    $('#containerBox').load('main.html');
    
    $('.link-set a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container').remove();
        $('#containerBox').load(url);
    })

    $('.depth1 a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        console.log(url);
        $('#container').remove();
        $('#containerBox').load(url);
        return false;
    })
    $('.more a').on('click',function(e){
        e.preventDefault();
        var url =$(this).attr('href');
        $('#container').remove();
        $('#containerBox').load(url);
    })


    // $('.logo_nav h1 a').on('click',function(e){
    //     e.preventDefault();
    //     var url = $(this).attr('href');
    //     $('#container').remove();
    //     $('#containerBox').load(url)
    // })

    $(window).scroll(function () {
        // 스크롤 했을 때 진행프로젝트 영역
        var sct = $(this).scrollTop();
        var part3Box = $('.part3').offset().top - $(this).height() / 2
        // var notNear = $('.part3').offset().top - $(this).height()/1
        if (sct >= part3Box) {
            $('.box-img').addClass('on')
            $('.box-text-wrap').addClass('on')
            // console.log('여기까지')
        } else if (sct <= part3Box-450) {
            $('.box-img').removeClass('on')
            $('.box-text-wrap').removeClass('on')
            // console.log('여기까지2')
        }
    })
})(jQuery)