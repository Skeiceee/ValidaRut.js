$(document).ready(function(){
  let status = $('#status')
  $('#validar').click(function(event){
    event.preventDefault()
    let val = $("#rut").ValidaRut()

    if (!$("#rut").ValidaRut()) {
      status.text('El rut no es valido')
      status.addClass('pink-text text-darken-2')
      status.removeClass('teal-text text-lighten-2')
    }else{
      status.text('El rut es valido')
      status.addClass('teal-text text-darken-2')
      status.removeClass('pink-text text-darken-3')
    }

  })
})
