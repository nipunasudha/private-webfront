$(function () {
  adjustments_dash()
 
})
$(window).on('resize', function () {
  adjustments_dash()
})

function adjustments_dash () {
  if (window.innerWidth <= 992) {
   $('.nav-title').hide();
  }else {
  $('.nav-title').show();
  }
}
