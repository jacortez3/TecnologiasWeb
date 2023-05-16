function mostrarOcultarFormulario() {
    var checkbox = document.getElementById("EntregaTercero");
    var formulario = document.getElementById("FormTercero");
    
    if (checkbox.checked) {
      formulario.style.display = "block";
    } else {
      formulario.style.display = "none";
    }
  }