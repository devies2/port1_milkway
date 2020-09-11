(function($){
    $('#containerBox').load('main.html');
    
    $('.link-set a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container').remove();
        $('#containerBox').load(url);
    })

    // $('.logo_nav h1 a').on('click',function(e){
    //     e.preventDefault();
    //     var url = $(this).attr('href');
    //     $('#container').remove();
    //     $('#containerBox').load(url)
    // })
})(jQuery)