// PRÁCTICA DEL ALUMNO
// Completa los bloques marcados como META. No necesitas modificar el HTML ni el CSS.

const formularioCita = document.querySelector("#formularioCita");
const clienteInput = document.querySelector("#cliente");
const servicioInput = document.querySelector("#servicio");
const precioInput = document.querySelector("#precio");
const listaCitas = document.querySelector("#listaCitas");
const contadorCitas = document.querySelector("#contadorCitas");
const mensajeVacio = document.querySelector("#mensajeVacio");

let citas = [];

// META 1: crea mostrarCitas(). Debe vaciar listaCitas, recorrer citas y mostrar
// una tarjeta por cada cita. Actualiza también contadorCitas y mensajeVacio.
function mostrarCitas() {
  // Escribe aquí tu código.
}

// META 2: crea añadirCita(evento). Evita el envío del formulario, lee los tres
// campos, crea un objeto cita, lo añade con push(), actualiza la pantalla y limpia el formulario.
function anadirCita(evento) {
  // Escribe aquí tu código.
}

// META 3: crea eliminarCita(posicion). Debe eliminar una cita con splice(),
// guardar los cambios y volver a mostrar la lista.
function eliminarCita(posicion) {
  // Escribe aquí tu código.
}

// META 4: completa guardarCitas() y cargarCitas().
function guardarCitas() {
  // Guarda el array citas en localStorage con la clave "citasPeluqueria".
}

function cargarCitas() {
  // Guarda getItem en una variable llamada guardadas.
  // Si guardadas !== null, conviértela con JSON.parse y guárdala en citas.
}

formularioCita.addEventListener("submit", anadirCita);

// META 4: llama aquí a cargarCitas() antes de mostrar las citas.
cargarCitas();
mostrarCitas();
