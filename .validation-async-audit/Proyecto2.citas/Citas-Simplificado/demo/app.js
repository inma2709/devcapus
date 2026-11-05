const formularioCita = document.querySelector("#formularioCita");
const clienteInput = document.querySelector("#cliente");
const servicioInput = document.querySelector("#servicio");
const precioInput = document.querySelector("#precio");
const listaCitas = document.querySelector("#listaCitas");
const contadorCitas = document.querySelector("#contadorCitas");
const mensajeVacio = document.querySelector("#mensajeVacio");

let citas = [];

function guardarCitas() { localStorage.setItem("citasPeluqueria", JSON.stringify(citas)); }
function cargarCitas() { const guardadas = localStorage.getItem("citasPeluqueria"); if (guardadas !== null) { citas = JSON.parse(guardadas); } }
function eliminarCita(posicion) { citas.splice(posicion, 1); guardarCitas(); mostrarCitas(); }
function mostrarCitas() {
  listaCitas.innerHTML = "";
  contadorCitas.textContent = citas.length;
  if (citas.length === 0) {
    mensajeVacio.textContent = "No hay citas todavía.";
  } else {
    mensajeVacio.textContent = "";
  }
  citas.forEach(function (cita, posicion) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "cita";
    tarjeta.innerHTML = "<div><h3>" + cita.cliente + "</h3><p>" + cita.servicio + " · " + cita.precio + " €</p></div>";
    const boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.className = "boton-eliminar";
    boton.addEventListener("click", function () { eliminarCita(posicion); });
    tarjeta.appendChild(boton);
    listaCitas.appendChild(tarjeta);
  });
}
function anadirCita(evento) {
  evento.preventDefault();
  const cliente = clienteInput.value.trim();
  const servicio = servicioInput.value.trim();
  const precio = Number(precioInput.value);
  if (cliente === "" || servicio === "" || precio < 0) { return; }
  citas.push({ cliente: cliente, servicio: servicio, precio: precio });
  guardarCitas(); mostrarCitas(); formularioCita.reset();
}
formularioCita.addEventListener("submit", anadirCita);
cargarCitas();
mostrarCitas();
