// VARIABLE ========================
var sidebarVisible = false
var isMobile = false
// EVENTS============================

$(function () {
  init_positions()
  realtime_adjustments()
})
$(window).on('resize', function () {
  realtime_adjustments()
})
$(window).on('scroll', function () {})

// FUNCTIONS ======================
function realtime_adjustments () {
  check_mobile()
  set_filter_position(isMobile)
// put code to hide toggler!
}
function init_positions () {
  $('.left-div').width('0%')
  $('.right-div').width('100%')
}
function check_mobile () {
  isMobile = (window.innerWidth <= 992)
  console.log(isMobile)
}
function showslide () {
  $('.right-div').stop().animate({width: '75%'}, 300)
  $('.left-div').stop().animate({width: '25%'}, 300)
  sidebarVisible = true
}
function hideslide () {
  $('.right-div').stop().animate({width: '100%'}, 300)
  $('.left-div').stop().animate({width: '0%'}, 300)
  sidebarVisible = false
}

function toggleslide () {
  if (sidebarVisible) {
    $('.right-div').stop().animate({width: '100%'}, 300)
    $('.left-div').stop().animate({width: '0%'}, 300)
    sidebarVisible = false
  }else {
    $('.right-div').stop().animate({width: '75%'}, 300)
    $('.left-div').stop().animate({width: '25%'}, 300)
    sidebarVisible = true
  }
}

function set_filter_position (k) {
  if (k) {
    $('.right-div').stop().width('100%')
    $('.left-div').stop().width('100%')
  }else {
    $('.right-div').stop().width('100%')
    $('.left-div').stop().width('0%')
  }
}
