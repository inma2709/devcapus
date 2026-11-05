# MANUAL: DIGITALIZA TU NEGOCIO

## Gestor de citas para una peluquería

Manual autodidacta para construir la aplicación actual con HTML, CSS, JavaScript vanilla y localStorage. Cada apartado sigue: problema -> concepto -> código -> resultado -> comprobación.

## Índice

0. Qué construiremos
1. Preparar el proyecto
2. HTML
3. CSS
4. Primer dato
5. Arrays
6. Recorrer
7. DOM
8. Mostrar citas
9. Eventos y formularios
10. Leer valores
11. Crear
12. Los datos desaparecen
13. localStorage
14. JSON
15. Guardar
16. Recuperar
17. Eliminar
18. Editar
19. Estadísticas
20. Flujo completo
21. Límites
22. Resumen y glosario

## Objetivos y requisitos

Al terminar podrás explicar dónde están las citas, cómo llegan a la pantalla, cómo funciona CRUD, por qué cada una tiene id, por qué usamos localStorage y qué ocurre al recargar.

Requisitos: HTML/CSS básico, VS Code, Live Server y navegador. No usaremos frameworks, npm, backend ni base de datos.

## Bloque 0: qué vamos a construir

Problema: una peluquería necesita registrar cliente, servicio, fecha, hora y precio, y actualizar esa información.

Una página estática muestra contenido. Una aplicación responde a acciones del usuario. HTML crea estructura, CSS apariencia, JavaScript modifica datos y pantalla y localStorage conserva los datos.

CRUD significa:

| Operación | En la aplicación |
|---|---|
| CREATE | Crear una cita |
| READ | Leer o mostrar citas |
| UPDATE | Editar una cita |
| DELETE | Eliminar una cita |

Comprueba que al abrir aparecen resumen, formulario y citas de ejemplo. Recarga y verifica que siguen ahí.

## Bloque 1: preparar el proyecto

Problema: mezclar estructura, diseño y lógica dificulta aprender.

Crea:

~~~text
Proyecto2.citas/
├── index.html
├── styles.css
├── app.js
└── README.md
~~~

En index.html enlaza:

~~~html
<link rel="stylesheet" href="styles.css">
<script src="app.js"></script>
~~~

En app.js prueba:

~~~javascript
console.log("JavaScript conectado");
~~~

Abre con Live Server, pulsa F12 y entra en Console. La consola muestra valores y errores. Si no aparece el mensaje, revisa nombre y ruta.

## Bloque 2: construir HTML

Construimos primero la cabecera, después estadísticas, formulario y lista. Los ids son puntos que JavaScript podrá seleccionar.

~~~html
<header class="hero">
  <div class="container">
    <p>Digitaliza tu negocio</p>
    <h1>Gestor de citas para peluquería</h1>
    <p>Crear, editar y eliminar citas guardadas en el navegador.</p>
  </div>
</header>
~~~

Estadísticas:

~~~html
<strong id="totalCitas">0</strong>
<strong id="totalIngresos">0 €</strong>
~~~

Formulario:

~~~html
<form id="citaForm">
  <input type="hidden" id="citaId">
  <label for="cliente">Cliente</label>
  <input id="cliente" required>
  <label for="servicio">Servicio</label>
  <input id="servicio" required>
  <label for="fecha">Fecha</label>
  <input id="fecha" type="date" required>
  <label for="hora">Hora</label>
  <input id="hora" type="time" required>
  <label for="precio">Precio</label>
  <input id="precio" type="number" min="0" required>
  <button type="submit" id="submitBtn">Guardar cita</button>
</form>
~~~

Lista:

~~~html
<p id="emptyState" class="hidden">Todavía no hay citas.</p>
<div id="citasList"></div>
~~~

citasList está vacío a propósito: JavaScript escribirá allí. Comprueba que la estructura se ve antes de continuar.

## Bloque 3: CSS necesario

Problema: necesitamos que la interfaz sea legible y responsive. Usamos mobile first, contenedor, tarjetas, botones, espaciado y Grid.

~~~css
.container {
  width: min(100% - 1.5rem, 980px);
  margin: 0 auto;
}

.form {
  display: grid;
  gap: 0.9rem;
}

.card {
  background: #fff;
  border: 1px solid #e7ddd1;
  border-radius: 16px;
  padding: 1rem;
}

@media (min-width: 720px) {
  .layout {
    grid-template-columns: 1fr 1.2fr;
  }
}
~~~

Grid distribuye bloques y gap crea espacio. Reduce y amplía la ventana para comprobarlo. Reto: cambia el color del botón principal.

## Bloque 4: primer dato

Problema: antes de mostrar muchas citas debemos representar una.

Una variable guarda un valor. const declara una referencia que no se reasigna. Un objeto agrupa propiedades:

~~~javascript
const cita = {
  id: 1,
  cliente: "Ana García",
  servicio: "Corte",
  fecha: "2026-09-25",
  hora: "10:00",
  precio: 25
};
console.log(cita.cliente);
~~~

cliente es una propiedad. Comprueba el resultado en Console. Cambia el nombre y observa que aún no cambia la pantalla. Ejercicio: añade telefono.

## Bloque 5: arrays

Problema: la peluquería tendrá muchas citas. Un array es una lista; aquí será una lista de objetos.

~~~javascript
let citas = [
  { id: 1, cliente: "Ana García", servicio: "Corte", fecha: "2026-09-25", hora: "10:00", precio: 25 },
  { id: 2, cliente: "Marta López", servicio: "Tinte", fecha: "2026-09-25", hora: "11:30", precio: 45 }
];
~~~

citas[0] es la primera; los índices empiezan en cero. cita es un objeto y citas es un array. Prueba citas.length. Añade una tercera cita.

## Bloque 6: recorrer

Problema: hay que hacer una acción por cada cita. forEach recorre el array:

~~~javascript
citas.forEach(function (cita) {
  console.log(cita.cliente);
});
~~~

La función se ejecuta una vez por elemento y cita representa el elemento actual. Reto: muestra también el servicio.

## Bloque 7: DOM

Problema: los datos están en JavaScript, pero deben aparecer en HTML. El DOM es la representación de la página que JavaScript puede consultar y modificar.

~~~javascript
const listaCitas = document.querySelector("#citasList");
~~~

~~~text
HTML: <div id="citasList"></div>
       ↓
querySelector("#citasList")
       ↓
JavaScript puede modificarlo
~~~

document representa la página; querySelector busca por selector CSS. Comprueba con console.log. Error frecuente: usar #lista-citas cuando el id real es #citasList.

## Bloque 8: mostrar citas

Problema: tenemos datos, pero no tarjetas. Una función agrupa instrucciones:

~~~javascript
function mostrarCitas() {
  citasList.innerHTML = "";

  citas.forEach(function (cita) {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML =
      "<h3>" + cita.cliente + "</h3>" +
      "<p>" + cita.servicio + "</p>" +
      "<p>" + cita.fecha + " - " + cita.hora + "</p>" +
      "<p>" + cita.precio + " €</p>";
    citasList.appendChild(article);
  });
}
~~~

El código actual usa template literals: comillas invertidas que permiten HTML en varias líneas y expresiones entre llaves para insertar valores. appendChild añade la tarjeta. Limpiamos antes para no duplicar.

Estado vacío:

~~~javascript
if (citas.length === 0) {
  emptyState.classList.remove("hidden");
} else {
  emptyState.classList.add("hidden");
}
~~~

Ejecuta mostrarCitas() y comprueba la pantalla.

## Bloque 9: formularios y eventos

Problema: enviar un formulario recarga la página. Un evento es una acción; addEventListener conecta una acción con una función:

~~~javascript
citaForm.addEventListener("submit", guardarCita);

function guardarCita(evento) {
  evento.preventDefault();
}
~~~

preventDefault evita el comportamiento automático.

## Bloque 10: leer valores

Problema: debemos convertir los campos en un objeto:

~~~javascript
const clienteInput = document.querySelector("#cliente");
const servicioInput = document.querySelector("#servicio");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const precioInput = document.querySelector("#precio");

const nuevaCita = {
  cliente: clienteInput.value.trim(),
  servicio: servicioInput.value.trim(),
  fecha: fechaInput.value,
  hora: horaInput.value,
  precio: Number(precioInput.value)
};
~~~

El elemento es clienteInput; su valor es clienteInput.value. trim quita espacios y Number convierte texto en número. Comprueba con console.log(nuevaCita).

## Bloque 11: crear

Problema: el objeto debe entrar en la colección. push añade al final:

~~~javascript
citas.push(nuevaCita);
mostrarCitas();
citaForm.reset();
~~~

Flujo: formulario -> objeto -> push -> array -> mostrarCitas.

La versión real añade id con Date.now:

~~~javascript
const nuevaCita = {
  id: citaEditandoId === null ? Date.now() : citaEditandoId,
  cliente: clienteInput.value.trim(),
  servicio: servicioInput.value.trim(),
  fecha: fechaInput.value,
  hora: horaInput.value,
  precio: Number(precioInput.value)
};
~~~

Crea una cita y comprueba que aparece sin recargar.

## Bloque 12: los datos desaparecen

Crea una cita y pulsa F5. Desaparece porque el array estaba en la memoria de esa ejecución. Persistencia significa conservar datos para recuperarlos después.

## Bloque 13: localStorage

Problema: necesitamos conservar el array:

~~~javascript
localStorage.setItem("nombre", "Ana");
const nombre = localStorage.getItem("nombre");
console.log(nombre);
~~~

localStorage usa clave y valor y permanece entre recargas en ese navegador. Ejercicio: guarda y recupera una clave llamada prueba.

## Bloque 14: JSON

localStorage solo guarda texto. Este error:

~~~javascript
localStorage.setItem("citas", citas);
~~~

puede producir [object Object], porque se pierde la estructura.

~~~text
array/objetos -> JSON.stringify -> texto -> localStorage
localStorage -> texto -> JSON.parse -> array/objetos
~~~

## Bloque 15: guardarCitas

Problema: crear, editar y eliminar necesitan guardar. Centralizamos el código:

~~~javascript
function guardarCitas() {
  localStorage.setItem("citas", JSON.stringify(citas));
}
~~~

Error frecuente: actualizar la interfaz sin llamar guardarCitas. Al recargar, el cambio se perderá.

## Bloque 16: recuperar

~~~javascript
function cargarCitas() {
  const citasGuardadas = localStorage.getItem("citas");

  if (citasGuardadas) {
    citas = JSON.parse(citasGuardadas);
    return;
  }

  citas = citasPorDefecto;
  guardarCitas();
}
~~~

if comprueba si existe un valor. Si existe, parse lo convierte. Si no, cargamos ejemplos. Al iniciar:

~~~javascript
cargarCitas();
mostrarCitas();
~~~

## Bloque 17: eliminar

Problema: debemos identificar qué cita se pulsa. Cada una tiene id y cada botón data-id:

~~~html
<button class="delete-btn" data-id="3">Eliminar</button>
~~~

filter crea un array conservando todo excepto el id elegido:

~~~javascript
function eliminarCita(id) {
  if (!confirm("¿Quieres eliminar esta cita?")) {
    return;
  }

  citas = citas.filter(function (cita) {
    return cita.id !== id;
  });

  guardarCitas();
  mostrarCitas();
}
~~~

Flujo: eliminar -> guardar -> mostrar. Comprueba que persiste después de recargar. Piensa qué pasaría con dos ids iguales.

## Bloque 18: editar

Problema: no necesitamos un segundo formulario. Guardamos el id que se está editando:

~~~javascript
let citaEditandoId = null;
~~~

null significa que no editamos ninguna. find localiza la cita:

~~~javascript
const cita = citas.find(function (item) {
  return item.id === id;
});
~~~

rellenarFormulario coloca sus datos en los campos. Al enviar:

~~~javascript
if (citaEditandoId === null) {
  citas.push(nuevaCita);
} else {
  citas = citas.map(function (cita) {
    return cita.id === citaEditandoId ? nuevaCita : cita;
  });
}
~~~

map sustituye solo la cita seleccionada. Flujo: editar -> find -> rellenar -> cambiar -> actualizar -> guardar -> mostrar. Comprueba editando un precio.

## Bloque 19: estadísticas

Total:

~~~javascript
totalCitasElement.textContent = citas.length;
~~~

Ingresos:

~~~javascript
const ingresos = citas.reduce(function (total, cita) {
  return total + Number(cita.precio);
}, 0);
totalIngresosElement.textContent = ingresos + " €";
~~~

reduce acumula una suma; 0 es el valor inicial. Cambia un precio y verifica el total.

## Bloque 20: flujo completo

~~~text
USUARIO -> FORMULARIO/BOTONES -> EVENTO -> JAVASCRIPT
-> ARRAY citas -> localStorage -> DOM -> USUARIO
~~~

El array citas es el estado actual en memoria. El DOM es lo visible y localStorage la copia persistente. La aplicación actual también ordena por fecha y hora usando sort y Date. Los botones dinámicos se gestionan escuchando el clic en citasList, localizando el botón y leyendo data-id.

## Bloque 21: límites

localStorage pertenece a ese navegador, no sincroniza móvil y ordenador, no comparte datos entre usuarios, puede borrarse y no debe guardar información sensible real.

Para compartir datos necesitaríamos:

~~~text
frontend -> backend -> base de datos
~~~

No desarrollamos backend porque el objetivo es aprender JavaScript, DOM, CRUD y persistencia local.

## Resumen final y comprobación

El alumno debe poder explicar:

1. Las citas viven en el array citas, en memoria.
2. mostrarCitas recorre y actualiza el DOM.
3. Crear lee campos, construye un objeto y usa push.
4. Eliminar usa id y filter.
5. Editar usa find, el mismo formulario y map.
6. id identifica una cita concreta.
7. localStorage permite sobrevivir a una recarga.
8. stringify y parse convierten objetos y texto.
9. Al recargar se cargan y pintan de nuevo los datos.
10. No hace falta backend porque todo queda local.
11. No existe sincronización entre dispositivos.

Prueba final: crea una cita, recarga, edita el precio, comprueba ingresos, elimina y vuelve a recargar.

## Glosario

- Variable: nombre que apunta a un valor.
- let: variable que puede reasignarse.
- const: referencia que no se reasigna.
- Objeto: datos relacionados entre llaves.
- Propiedad: dato con nombre dentro de un objeto.
- Array: lista ordenada.
- Índice: posición de un array, desde cero.
- Función: bloque reutilizable de instrucciones.
- Parámetro: dato que recibe una función.
- Evento: acción detectada, como submit o click.
- DOM: representación modificable del HTML.
- querySelector: busca elementos por selector CSS.
- addEventListener: conecta función y evento.
- preventDefault: evita el comportamiento automático.
- forEach: ejecuta una función por cada elemento.
- push: añade al final.
- find: encuentra el primer elemento coincidente.
- filter: conserva elementos que cumplen una condición.
- reduce: acumula elementos para obtener un resultado.
- JSON: formato de texto estructurado.
- JSON.stringify: convierte objetos a texto JSON.
- JSON.parse: convierte texto JSON a objetos.
- localStorage: almacenamiento persistente del navegador.
- CRUD: crear, leer, modificar y eliminar.
- Persistencia: conservar datos después de recargar.

## Estructura final

~~~text
Proyecto2.citas/
├── index.html
├── styles.css
├── app.js
├── README.md
└── MANUAL_PROYECTO_DIGITALIZA.md
~~~

