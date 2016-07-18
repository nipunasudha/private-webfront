$(function () {
  adjustments()
  top_bar_switcher(false)
  goto_top_switcher(false)
})
$(window).on('resize', function () {
  adjustments()
})
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop()
  goto_top_switcher(scroll > 200)
})
$('.go-to-top').on('click',function(){
  $("html, body").animate({ scrollTop: 0 }, 500);
       
})
function adjustments () {
  $('body').css('padding-top', $('.navbar').height() + 'px')

  if (window.innerWidth <= 768) {
    smallSearch()
    $('.breadcrumb-div').before($('.search-min-div'))
    switch_lang_menu(true)
  }else {
    bigSearch()
    $('.breadcrumb-div').after($('.search-min-div'))
    switch_lang_menu(false)
  }
}
function switch_lang_menu (k) {
  if (k) {
    $('.lang-div').hide()
    $('.lang-menu-mobile').show()
  }else {
    $('.lang-div').show()
    $('.lang-menu-mobile').hide()
  }
}
function smallSearch () {
  $('.search-box').removeClass('input-group-lg')
  $('.search-box').addClass('input-group-md')
  $('.search-box').addClass('mobile-search-box')
}
function bigSearch () {
  $('.search-box').removeClass('input-group-md')
  $('.search-box').addClass('input-group-lg')
  $('.search-box').removeClass('mobile-search-box')
}

function top_bar_switcher (k) {
  if (k) {
    $('.search-bread').hide()
    $('.search-only').show()
  }else {
    $('.search-bread').show()
    $('.search-only').hide()
  }
}
function goto_top_switcher (k) {
  if (k) {
    $('.go-to-top').stop().fadeIn(500)
  }else {
    $('.go-to-top').stop().fadeOut(500)
  }
}
