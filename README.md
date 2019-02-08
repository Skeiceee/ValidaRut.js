# ValidaRut.js
![alt text](https://img.shields.io/badge/Version-v0.0.1-%232F9ED4.svg "Version")
![alt text](https://img.shields.io/badge/License-MIT-%23428878.svg "License")

Esto prentende ser una libreria dependiente de jQuery no tan grande y de cosas que se puedan a llegar a hacer con un rut.
### ¿Como uso esto?
#### Validar rut
##### Html
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>ValidaRut!</title>
</head>
<body>
  
  <form action="#">
    <label for="rut">Ingresa un rut </label>
    <input type="text" name="rut" id="rut">
    <button type="submit" id="validar">Validar</button>
    <span id="status"></span>
  </form>
  
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  
</body>
</html>
```
##### JavaScript
```javascript
$(document).ready(function(){
  let status = $('#status')
  $('#validar').click(function(event){
    event.preventDefault()
    let val = $("#rut").ValidaRut()

    if (!$("#rut").ValidaRut()) {
      status.text('El rut no es valido')
    }else{
      status.text('El rut es valido')
    }

  })
})
```

### [Demo](https://validarut.netlify.com/)
