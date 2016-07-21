$(function () {
  adjustments_dash()
})
$(window).on('resize', function () {
  adjustments_dash()
})

function adjustments_dash () {
  if (window.innerWidth <= 992) {
    $('.switch-md-d').hide()
    $('.switch-md-m').show()
    equalizer(0)
    if (window.innerWidth <= 768) {
      $('.switch-sm-d').hide()
      $('.switch-sm-m').show()
      equalizer(0)
    }else {
      $('.switch-sm-d').show()
      $('.switch-sm-m').hide()
      equalizer(1)
    }
  }else {
    $('.switch-md-d').show()
    $('.switch-sm-d').show()
    $('.switch-md-m').hide()
    $('.switch-sm-m').hide()
    equalizer(1)
  }
}

function equalizer (k) {
  one = $('.eq-one')
  two = $('.eq-two')
  if (k) {
    one.height(two.height())
  }else {
    one.css('height', 'auto')
  }
}
