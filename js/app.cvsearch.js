function switchWatch () {

  if ($('.watch-active').attr('hidden')) {
    $('.watch-active').removeAttr('hidden')
    $('.watch-inactive').attr('hidden', '')

  } else {
       $('.watch-inactive').removeAttr('hidden')
    $('.watch-active').attr('hidden', '')
    
  }

  
}
