// AOS init
AOS.init();

// Change page
$('#about').on('click', function () {
    $('.utama').css('display', 'none');
    $('.tentang').css('right', 0);
});
$('#tentangHref').on('click', function () {
    $('.utama').css('display', '');
    $('.tentang').removeAttr('style');
});

$(window).scroll(function (e) {
    var scroll = Math.floor($(window).scrollTop() / 10);

    $('#hitungAngka').html(scroll + 'm');
    $('#hitung').val(scroll);
    // console.log(scroll);

});

$('#menuBtn').on('click', function () {
    $('nav').toggleClass('closeNav');
    let span = $('nav').find('span');
    // console.log(span);
    if (span.has('span .navMenuHidden')) {
        $('.sidenavbar-link').toggleClass('navMenuHidden');
    };

    if (!$('nav').hasClass('.closeNav')) {
        $('nav i').toggleClass('box-icon-logo');
    }
});

// sidenavbar
$(function () {
    if (window.matchMedia('(max-width: 769px)').matches) {
        $('nav').removeClass('closeNav');
        $('.projects-list').children().removeClass('col-md-4');
    } else {
        $('nav').addClass('closeNav');
        $('.projects-list').children().addClass('col-md-4');
    }
});