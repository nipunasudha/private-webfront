
$(function () {
  adjustments()
  
})
$(window).on('resize', function () {
  adjustments()
})

function adjustments(){
  // _.debounce(arrow_fix, 300);
}



function arrow_fix () {
    
  arrow = $('.arrow')
  signup = $('.create-btn-div')

  arrow.css({
    'left': '40px',
    'top': '100px'
  })
}
