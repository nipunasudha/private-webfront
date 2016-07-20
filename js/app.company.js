

$('.btn-pin').on('click', function () {
  $(this).toggleClass('btn-pin')
  $(this).toggleClass('btn-pinned')
  
  $(this).find('.pin-text').toggle()
})
