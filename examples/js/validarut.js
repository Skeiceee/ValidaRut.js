$.fn.ValidaRut = function() {
	var validacion = false
	var valor = this.val().replace(/[.]/g, '').trim()

	valor = valor.replace('-', '')
	var cuerpo = valor.slice(0, -1)
	dv = valor.slice(-1).toUpperCase()
	var m = 0, s = 1;
	for (; cuerpo; cuerpo = Math.floor(cuerpo / 10)) {
	    s = (s + cuerpo % 10 * (9 - m++ % 6)) % 11
	}

	if (dv == (s ? s - 1 : 'K'))
	    validacion = true

	return (valor === '' || valor.slice(0, -1) < 7 || isNaN(s)) ? false : validacion;
}
