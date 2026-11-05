// 1. Selección de elementos del DOM
const citaForm = document.querySelector("#citaForm");
const clienteInput = document.querySelector("#cliente");
const servicioInput = document.querySelector("#servicio");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const precioInput = document.querySelector("#precio");
const citaIdInput = document.querySelector("#citaId");
const submitBtn = document.querySelector("#submitBtn");
const cancelEditBtn = document.querySelector("#cancelEditBtn");
const toggleFormBtn = document.querySelector("#toggleFormBtn");
const form = document.querySelector(".form");
const formPanel = document.querySelector(".form-panel");
const citasList = document.querySelector("#citasList");
const emptyState = document.querySelector("#emptyState");
const totalCitasElement = document.querySelector("#totalCitas");
const totalIngresosElement = document.querySelector("#totalIngresos");

// 2. Variables de la aplicación
let citas = [];
let citaEditandoId = null;

const citasPorDefecto = [
  { id: 1, cliente: "Ana García", servicio: "Corte", fecha: "2026-09-25", hora: "10:00", precio: 25 },
  { id: 2, cliente: "Marta López", servicio: "Tinte", fecha: "2026-09-25", hora: "11:30", precio: 45 },
  { id: 3, cliente: "Laura Ruiz", servicio: "Corte y peinado", fecha: "2026-09-25", hora: "13:00", precio: 35 }
];

// 3. Recuperar datos de localStorage
function cargarCitas() {
  const citasGuardadas = localStorage.getItem("citas");

  if (citasGuardadas) {
    citas = JSON.parse(citasGuardadas);
    return;
  }

  citas = citasPorDefecto;
  guardarCitas();
}

// Guardar citas
function guardarCitas() {
  localStorage.setItem("citas", JSON.stringify(citas));
}

// Ordenar citas por fecha y hora
function ordenarCitas() {
  citas.sort(function (a, b) {
    const fechaA = `${a.fecha}T${a.hora}`;
    const fechaB = `${b.fecha}T${b.hora}`;
    return new Date(fechaA) - new Date(fechaB);
  });
}

// Actualizar estadísticas
function actualizarEstadisticas() {
  totalCitasElement.textContent = citas.length;

  const ingresos = citas.reduce(function (total, cita) {
    return total + Number(cita.precio);
  }, 0);

  totalIngresosElement.textContent = `${ingresos} €`;
}

// Mostrar citas
function mostrarCitas() {
  ordenarCitas();
  citasList.innerHTML = "";

  if (citas.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  citas.forEach(function (cita) {
    const article = document.createElement("article");
    article.className = "card";

    article.innerHTML = `
      <div class="card-top">
        <div>
          <p class="card-time">${cita.fecha} · ${cita.hora}</p>
          <h3 class="card-client">${cita.cliente}</h3>
          <p class="card-service">${cita.servicio}</p>
        </div>
        <p class="card-price">${cita.precio} €</p>
      </div>
      <div class="card-actions">
        <button type="button" class="secondary-btn edit-btn" data-id="${cita.id}">Editar</button>
        <button type="button" class="secondary-btn delete-btn" data-id="${cita.id}">Eliminar</button>
      </div>
    `;

    citasList.appendChild(article);
  });

  actualizarEstadisticas();
}

function limpiarFormulario() {
  citaForm.reset();
  citaIdInput.value = "";
  citaEditandoId = null;
  submitBtn.textContent = "Guardar cita";
  cancelEditBtn.classList.add("hidden");
  document.querySelector("#form-title").textContent = "Nueva cita";
}

function rellenarFormulario(cita) {
  citaIdInput.value = cita.id;
  clienteInput.value = cita.cliente;
  servicioInput.value = cita.servicio;
  fechaInput.value = cita.fecha;
  horaInput.value = cita.hora;
  precioInput.value = cita.precio;
  citaEditandoId = cita.id;
  submitBtn.textContent = "Guardar cambios";
  cancelEditBtn.classList.remove("hidden");
  document.querySelector("#form-title").textContent = "Editar cita";
  formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function guardarCita(evento) {
  evento.preventDefault();

  const nuevaCita = {
    id: citaEditandoId === null ? Date.now() : citaEditandoId,
    cliente: clienteInput.value.trim(),
    servicio: servicioInput.value.trim(),
    fecha: fechaInput.value,
    hora: horaInput.value,
    precio: Number(precioInput.value)
  };

  if (citaEditandoId === null) {
    citas.push(nuevaCita);
  } else {
    citas = citas.map(function (cita) {
      return cita.id === citaEditandoId ? nuevaCita : cita;
    });
  }

  guardarCitas();
  mostrarCitas();
  limpiarFormulario();
}

function editarOCancelarCita(id) {
  const cita = citas.find(function (item) {
    return item.id === id;
  });

  if (!cita) {
    return;
  }

  rellenarFormulario(cita);
}

function eliminarCita(id) {
  const confirmar = confirm("¿Quieres eliminar esta cita?");

  if (!confirmar) {
    return;
  }

  citas = citas.filter(function (cita) {
    return cita.id !== id;
  });

  guardarCitas();
  mostrarCitas();

  if (citaEditandoId === id) {
    limpiarFormulario();
  }
}

function manejarClickLista(evento) {
  const boton = evento.target.closest("button");

  if (!boton) {
    return;
  }

  const id = Number(boton.dataset.id);

  if (boton.classList.contains("edit-btn")) {
    editarOCancelarCita(id);
    return;
  }

  if (boton.classList.contains("delete-btn")) {
    eliminarCita(id);
  }
}

function alternarFormulario() {
  const oculto = form.classList.toggle("hidden");
  toggleFormBtn.textContent = oculto ? "Mostrar formulario" : "Ocultar formulario";
  toggleFormBtn.setAttribute("aria-expanded", String(!oculto));
}

// 5. Eventos
citaForm.addEventListener("submit", guardarCita);
citasList.addEventListener("click", manejarClickLista);
cancelEditBtn.addEventListener("click", limpiarFormulario);
toggleFormBtn.addEventListener("click", alternarFormulario);

// 6. Inicio de la aplicación
cargarCitas();
mostrarCitas();
