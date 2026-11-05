# Práctica final: Gestor de citas para una peluquería

## Propósito y resultado

Construirás una aplicación que registra citas con tres datos: **cliente**, **servicio** y **precio**. Debe mostrar las citas, permitir añadir y eliminar una, y conservar los cambios al recargar.

Primero abre `demo/index.html` directamente en el navegador. Es la referencia de aspecto y funcionamiento. Tu trabajo se hace en `index.html`, `styles.css` y `app.js` de esta carpeta.

**Duración total:** 4 horas.

| Fase | Tiempo orientativo |
|---|---:|
| HTML | 35 minutos |
| CSS | 35 minutos |
| Mostrar citas | 40 minutos |
| Añadir citas | 55 minutos |
| Eliminar y persistir | 55 minutos |
| Comprobación final | 20 minutos |
| **Total** | **240 minutos** |

## Objetivos de aprendizaje

- Crear un formulario HTML accesible y preparar los elementos que JavaScript necesita seleccionar.
- Usar Grid y Flexbox para una interfaz sencilla y adaptable.
- Convertir un array de objetos en contenido visible del DOM.
- Crear objetos desde un formulario y añadirlos con `push()`.
- Eliminar por posición con `splice()`.
- Persistir un array con `localStorage`, `JSON.stringify()` y `JSON.parse()`.

No se pide edición, ids, fechas, `Date`, ordenación, `dataset`, `closest` ni delegación de eventos.

## Fase 1 — HTML

**Tiempo orientativo:** 35 minutos.

**Objetivo.** Crear la estructura y los puntos de conexión para CSS y JavaScript.

**Necesitas.** Etiquetas semánticas, `form`, `label`, `input`, `button`, `id`, `required` y `type`.

**Pasos.**

1. En `index.html`, crea un `main` con una cabecera, un título “Gestor de citas” y una frase descriptiva.
2. Crea una sección “Nueva cita” y un formulario con id `formularioCita`.
3. Añade campos de cliente, servicio y precio. Sus ids deben ser, exactamente, `cliente`, `servicio` y `precio`. El precio debe ser numérico y tener mínimo 0; todos son obligatorios.
4. Añade el botón de envío “Añadir cita”.
5. Crea otra sección llamada “Citas programadas”, con: un contador de id `contadorCitas`, un mensaje de id `mensajeVacio` y un contenedor vacío de id `listaCitas`.
6. Enlaza `styles.css` en `head` y `app.js` justo antes de cerrar `body`.

<details>
<summary>Pista 1 · ¿Por dónde empiezo?</summary>

Cada campo debe tener una etiqueta `label`. El valor de `for` en esa etiqueta debe coincidir con el `id` del input. `listaCitas` empieza vacío porque JavaScript lo rellenará después.
</details>

<details>
<summary>Pista 2 · Ayuda con el código</summary>

```html
<label for="cliente">Cliente</label>
<input type="text" id="cliente" required>
```

Coloca `<script src="app.js"></script>` justo antes de cerrar `body`, para que `querySelector` encuentre el HTML.
</details>

**Resultado y prueba.** Se ven título, tres campos y zona de listado. Al hacer clic en un texto de etiqueta, el cursor se coloca en su input.

## Fase 2 — CSS sencillo

**Tiempo orientativo:** 35 minutos.

**Objetivo.** Conseguir una pantalla legible y adaptable sin perder tiempo en diseño avanzado.

**Necesitas.** Selectores, espaciado, bordes, Grid, Flexbox y una media query.

**Pasos.**

1. Aplica un color de fondo y fuente de sistema al `body`. Crea `.contenedor` con ancho máximo y centrado.
2. Da la clase `.panel` a las dos secciones y aplica fondo blanco, relleno, borde y esquinas redondeadas.
3. Usa `display: grid` en el formulario: columnas para campos y botón en pantalla ancha.
4. Usa `display: flex` en el encabezado del listado y en las tarjetas: información a un lado, botón Eliminar al otro.
5. En una media query de `max-width: 700px`, pasa el formulario a una columna.

**Imagen opcional.** Puedes poner una imagen decorativa con texto alternativo en la cabecera. Estas URL no requieren descarga ni cuenta:

- `https://picsum.photos/seed/peluqueria/1000/280`
- `https://picsum.photos/seed/salon/1000/280`
- `https://picsum.photos/seed/tijeras/1000/280`

Para ajustarla: ancho completo, una altura moderada y `object-fit: cover`.

<details>
<summary>Pista 1 · ¿Por dónde empiezo?</summary>

Centra `.contenedor` con `margin: 0 auto`. Grid organiza los campos del formulario y Flexbox alinea el contenido de cada tarjeta. Prioriza una pantalla legible, no un diseño complejo.
</details>

<details>
<summary>Pista 2 · Ayuda con el código</summary>

```css
form {
    display: grid;
    gap: 16px;
}

.cita {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
</details>

<details>
<summary>Ayuda · ¿Cómo hago que el formulario se adapte al móvil?</summary>

```css
@media (max-width: 700px) {
    #formularioCita {
        grid-template-columns: 1fr;
    }

    .cita {
        flex-direction: column;
        align-items: flex-start;
    }
}
```

`@media` establece una regla según el tamaño de pantalla. `max-width: 700px` se aplica cuando el viewport mide 700 píxeles de ancho o menos. `grid-template-columns: 1fr` coloca los campos en una sola columna y `flex-direction: column` coloca el contenido de la tarjeta uno debajo de otro. Antes, el formulario debe tener `display: grid` y las tarjetas `display: flex`.
</details>

**Resultado y prueba.** La página tiene dos paneles claros; al estrechar la ventana, el formulario queda en una columna y no aparece desplazamiento horizontal.

## Fase 3 — Mostrar citas

**Tiempo orientativo:** 40 minutos.

**Objetivo.** Dibujar en la página las citas que haya en el array.

**Necesitas.** `let`, `const`, funciones, objetos, arrays, `forEach`, `querySelector`, `innerHTML`, `textContent`, `createElement` y `appendChild`.

**Pasos.**

1. En `app.js`, selecciona formulario, inputs, lista, contador y mensaje usando los ids del HTML.
2. Declara el array inicial vacío: `let citas = [];`, y crea `mostrarCitas()`.
3. Vacía la lista antes de recorrer `citas`.
4. Recorre el array con `forEach`; por cada objeto crea una tarjeta con cliente, servicio y precio, y añádela al listado.
5. Actualiza `contadorCitas` con la longitud del array.
6. Si no hay citas, muestra “No hay citas todavía.”; si las hay, deja el mensaje vacío.
7. Ejecuta `mostrarCitas()` al final.

<details>
<summary>Pista 1 · ¿Por dónde empiezo?</summary>

Dentro de `forEach`, `cita` representa el objeto de la vuelta actual. Puedes leer `cita.cliente`, `cita.servicio` y `cita.precio`. Modificar el array no modifica automáticamente el HTML: debes crear su representación visual.
</details>

<details>
<summary>Ayuda · ¿Cómo creo una tarjeta y la añado al HTML?</summary>

```javascript
// Creamos un elemento HTML
const tarjeta = document.createElement("div");

// Le damos una clase
tarjeta.className = "cita";

// Creamos un párrafo
const parrafo = document.createElement("p");

// Añadimos el nombre del cliente
parrafo.textContent = cita.cliente;

// Introducimos el párrafo en la tarjeta
tarjeta.appendChild(parrafo);

// Introducimos la tarjeta en la lista
listaCitas.appendChild(tarjeta);
```

`cita` es el objeto recibido en una vuelta de `forEach()` y `listaCitas` es el elemento seleccionado previamente. `createElement()` crea un elemento HTML, `textContent` introduce texto y `appendChild()` introduce un elemento dentro de otro.

```text
listaCitas
   └── tarjeta
         └── parrafo
               └── nombre del cliente
```

Usa el mismo patrón para añadir el servicio y el precio.
</details>

<details>
<summary>Ayuda · Evitar duplicados</summary>

```javascript
listaCitas.innerHTML = "";
```

Vacía el listado antes de volver a crear las tarjetas; así no se acumulan elementos duplicados.
</details>

**Resultado y prueba.** Al abrir por primera vez aparece el mensaje de lista vacía y el contador marca 0. Añade temporalmente una cita al array: debe aparecer una tarjeta, sin duplicados.

## Fase 4 — Añadir citas

**Tiempo orientativo:** 55 minutos.

**Objetivo.** Transformar los valores del formulario en un objeto y añadirlo al array.

**Necesitas.** `submit`, `preventDefault`, `value`, `Number`, `if`, objetos, `push` y funciones.

**Pasos.**

1. Crea `anadirCita(evento)` y escucha el envío del formulario con `addEventListener`.
2. Evita que la página se recargue.
3. Lee los tres campos con `.value`; convierte el precio mediante `Number`.
4. Si falta cliente o servicio, o el precio es negativo, termina la función sin añadir.
5. Construye un objeto que tenga solamente `cliente`, `servicio` y `precio`.
6. Añádelo con `push()`, guarda, vuelve a mostrar las citas y limpia el formulario.

<details>
<summary>Pista 1 · ¿Por dónde empiezo?</summary>

El orden es: recoger datos → comprobar → crear objeto → añadir al array → guardar → actualizar pantalla → limpiar formulario. Aunque un input sea numérico, `.value` llega como texto. `push()` añade al final del array existente.
</details>

<details>
<summary>Pista 2 · Ayuda con el código</summary>

```javascript
evento.preventDefault();

const cliente = clienteInput.value.trim();
const precio = Number(precioInput.value);
```

`preventDefault()` evita que el formulario recargue la página. `.value` recupera lo escrito en un input. `Number()` convierte el precio de texto a número y `trim()` elimina espacios al principio y al final del nombre. Comprueba también que el precio sea un número válido y no negativo.
</details>

**Resultado y prueba.** Al enviar Marta, Color y 40 aparece una cita, el contador aumenta y el formulario queda vacío.

## Fase 5 — Eliminar, guardar y recuperar

**Tiempo orientativo:** 55 minutos.

**Objetivo.** Borrar una cita por su posición y conservar los cambios tras recargar.

**Necesitas.** Segundo parámetro de `forEach`, `splice`, eventos `click`, `localStorage`, JSON e `if`.

**Eliminar: pasos.**

1. Pide en `forEach` también la posición actual.
2. Crea un botón “Eliminar” dentro de cada tarjeta.
3. Conecta el clic de ese botón con `eliminarCita(posicion)`.
4. En esa función usa `splice` para borrar un solo elemento, guarda y repinta.

**Guardar y recuperar: pasos.**

1. En `guardarCitas()`, convierte `citas` a JSON y guárdalo con la clave `citasPeluqueria`.
2. En `cargarCitas()`, guarda el resultado de `getItem()` en `guardadas`. Si `guardadas !== null`, conviértela de JSON a array y asígnala a `citas`.
3. Al iniciar, ejecuta `cargarCitas()` antes de `mostrarCitas()`.
4. Guarda después de añadir y de eliminar.

<details>
<summary>Pista 1 · ¿Por dónde empiezo?</summary>

La posición es el segundo valor que puede recibir `forEach`. `splice()` necesita una posición y una cantidad; aquí la cantidad es una. Después de modificar el array hay que guardar y volver a mostrar.
</details>

<details>
<summary>Pista 2 · Ayuda con el código</summary>

```javascript
citas.splice(posicion, 1);
```

El segundo argumento indica cuántos elementos se eliminan.
</details>

<details>
<summary>Ayuda · Guardar las citas en localStorage</summary>

```javascript
function guardarCitas() {
    localStorage.setItem(
        "citasPeluqueria",
        JSON.stringify(citas)
    );
}
```

`citas` es el array de la aplicación. `JSON.stringify()` lo convierte en una cadena JSON y `setItem()` guarda ese texto. `"citasPeluqueria"` es la clave que identifica los datos.
</details>

<details>
<summary>Ayuda · Recuperar las citas con getItem y JSON.parse</summary>

Declara previamente el array vacío:

```javascript
let citas = [];
```

Después utiliza:

```javascript
function cargarCitas() {
    const guardadas = localStorage.getItem("citasPeluqueria");

    if (guardadas !== null) {
        citas = JSON.parse(guardadas);
    }
}
```

`getItem()` recupera el texto guardado. Si no existe la clave, devuelve `null`; por eso comprobamos que haya valor. `JSON.parse()` convierte el texto JSON en un array de objetos y se lo asignamos a `citas`.
</details>

<details>
<summary>Ayuda · El orden correcto</summary>

El ciclo es: **Modificar array → guardar → actualizar pantalla.**

```javascript
citas.push(nuevaCita);

guardarCitas();
mostrarCitas();
```

Al iniciar la aplicación, el orden es:

```javascript
cargarCitas();
mostrarCitas();
```

Primero recuperamos el array guardado y después lo mostramos en la página.
</details>

**Resultado y prueba.** Cada tarjeta tiene un botón funcional. Añade Carmen, recarga y comprueba que continúa; elimínala, recarga y comprueba que no vuelve.

## Lista final de entrega

**Tiempo reservado:** 20 minutos.

Antes de entregar, comprueba que no hay errores en la consola y verifica:

- [ ] El formulario muestra los tres campos correctamente.
- [ ] El diseño funciona en ordenador y móvil.
- [ ] Puedes añadir una cita y el contador se actualiza.
- [ ] Cada cita muestra cliente, servicio y precio.
- [ ] Puedes eliminar una cita concreta.
- [ ] Las citas se mantienen al recargar.
- [ ] Las citas eliminadas no reaparecen tras recargar.
- [ ] Al eliminar todas las citas, la lista continúa vacía tras actualizar.

Entrega `index.html`, `styles.css` y `app.js`.
