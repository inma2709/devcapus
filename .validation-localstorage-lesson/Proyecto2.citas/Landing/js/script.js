// Seleccionamos el botón para mostrar y ocultar información extra.
const botonVerMas = document.querySelector("#boton-ver-mas");
const textoVerMas = document.querySelector("#texto-ver-mas");

// Seleccionamos el botón de la promoción y el mensaje que vamos a mostrar.
const botonPromocion = document.querySelector("#boton-promocion");
const mensajePromocion = document.querySelector("#mensaje-promocion");

// Seleccionamos el formulario y el mensaje de respuesta.
const formularioContacto = document.querySelector("#formulario-contacto");
const inputNombre = document.querySelector("#nombre");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

function mostrarInformacionExtra() {
  textoVerMas.classList.toggle("d-none");
}

function mostrarPromocion() {
  mensajePromocion.classList.remove("d-none");
}

function procesarFormulario(event) {
  event.preventDefault();

  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    mensajeFormulario.classList.remove("d-none");
    mensajeFormulario.classList.remove("alert-info");
    mensajeFormulario.classList.add("alert-warning");
    mensajeFormulario.textContent = "Por favor, escribe tu nombre.";
    return;
  }

  mensajeFormulario.classList.remove("d-none");
  mensajeFormulario.classList.remove("alert-warning");
  mensajeFormulario.classList.add("alert-info");
  mensajeFormulario.textContent = "Gracias, " + nombre + ". Hemos recibido tu mensaje.";
  formularioContacto.reset();
}

botonVerMas.addEventListener("click", mostrarInformacionExtra);
botonPromocion.addEventListener("click", mostrarPromocion);
formularioContacto.addEventListener("submit", procesarFormulario);
