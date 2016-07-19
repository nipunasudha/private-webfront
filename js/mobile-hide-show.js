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
    
    if (window.innerWidth <= 768) {
      $('.switch-sm-d').hide()
      $('.switch-sm-m').show()
      
    }else {
      $('.switch-sm-d').show()
      $('.switch-sm-m').hide()
      
    }
  }else {
    $('.switch-md-d').show()
    $('.switch-sm-d').show()
    $('.switch-md-m').hide()
    $('.switch-sm-m').hide()
    
  }
}
