# Manual de aprendizaje

## Proyecto 2: Te presento mi negocio

### Café La Plaza con Bootstrap 5 y JavaScript Vanilla

Este manual está pensado para personas adultas que empiezan a desarrollar páginas web. No es un README técnico ni una lista de códigos para copiar sin pensar. La intención es que puedas seguirlo paso a paso, observar qué cambia en el navegador y entender por qué funciona.

El resultado será una landing page para **Café La Plaza**, un pequeño negocio de barrio. La misma estructura podría adaptarse después a una peluquería, una academia, un restaurante, un taller, una tienda, una clínica, un fotógrafo o cualquier otro pequeño comercio.

---

## Antes de empezar

En el Proyecto 1, **Currículum Digital**, aprendiste a construir una página utilizando HTML y CSS. Allí escribías gran parte de las reglas visuales: colores, márgenes, espacios, botones, distribución y adaptación a pantallas pequeñas.

En este segundo proyecto añadimos dos ideas nuevas:

~~~text
HTML
↓
define el contenido y la estructura

Bootstrap
↓
aporta estilos, componentes y responsive preparado

JavaScript
↓
añade comportamiento e interactividad
~~~

La separación es importante:

- HTML dice qué elementos existen: títulos, párrafos, botones, tarjetas y formularios.
- Bootstrap proporciona clases y componentes visuales ya preparados.
- JavaScript permite reaccionar cuando la persona pulsa un botón o envía un formulario.

Todavía no vamos a utilizar arrays, localStorage, APIs, backend, npm ni JavaScript avanzado. Esos contenidos pertenecen a proyectos posteriores.

---

# BLOQUE 1. Preparar el proyecto

## Paso 1. Crear la carpeta

### Qué vamos a hacer

Vamos a crear una carpeta para guardar todos los archivos de la web.

### Escribe este código

La estructura será:

~~~text
te-presento-mi-negocio/
│
├── index.html
├── js/
│   └── script.js
└── img/
    └── cafe-la-plaza-hero.png
~~~

### ¿Qué significa?

- index.html será la página principal.
- La carpeta js contiene nuestro JavaScript.
- script.js tendrá las acciones propias de la página.
- La carpeta img contiene imágenes.
- manual-aprendizaje.md contiene este recorrido didáctico.

Separar los archivos ayuda a encontrar cada tipo de contenido y mantiene el proyecto ordenado.

### Comprueba el resultado

Debes ver una carpeta con un archivo HTML, una carpeta para JavaScript y otra para imágenes.

---

## Paso 2. Crear la estructura HTML inicial

### Qué vamos a hacer

Recordaremos la estructura mínima que ya conoces del Proyecto 1.

### Escribe este código

~~~html
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Café La Plaza</title>
</head>
<body>

</body>
</html>
~~~

### ¿Qué significa?

- <!doctype html> indica que usamos HTML moderno.
- lang="es" informa de que el contenido está en español.
- meta charset permite utilizar correctamente tildes y otros caracteres.
- viewport ayuda a que la página se adapte a móviles.
- title es el texto de la pestaña del navegador.
- Dentro de body escribiremos el contenido visible.

### Comprueba el resultado

Abre index.html en el navegador. Al principio verás una página vacía, pero la pestaña mostrará el título.

---

# BLOQUE 2. Conocer Bootstrap

## Paso 3. ¿Qué es Bootstrap?

Bootstrap es un framework CSS. Una forma sencilla de entenderlo es esta:

> Un framework nos proporciona una base de trabajo preparada para no tener que construir todo desde cero.

En el Proyecto 1 escribías tus propias reglas CSS para diseñar un botón. En este proyecto puedes utilizar clases que Bootstrap ya ha diseñado.

### Sin Bootstrap

~~~html
<button class="mi-boton">Contactar</button>
~~~

Después tendrías que crear CSS para .mi-boton.

### Con Bootstrap

~~~html
<button class="btn btn-primary">Contactar</button>
~~~

Bootstrap ya conoce las clases btn y btn-primary.

### ¿Qué problema resuelve?

Bootstrap ofrece soluciones reutilizables para botones, tarjetas, formularios, navegación, tablas, ventanas modales, columnas y espacios. También incorpora muchas reglas para que los elementos se adapten a diferentes tamaños de pantalla.

### Ventajas y limitaciones

Bootstrap permite avanzar rápido, mantener una apariencia coherente y disponer de responsive preparado. Su limitación es que muchas webs pueden parecerse si solo se utilizan los estilos de serie. Además, debemos aprender a leer sus clases y a veces necesitaremos CSS propio.

Bootstrap y CSS propio no son enemigos. Son herramientas distintas. Podemos utilizar Bootstrap como base y añadir CSS propio cuando necesitemos personalizar algo.

---

## Paso 4. Añadir Bootstrap mediante CDN (librería externa)

### Qué vamos a hacer

No vamos a instalar Bootstrap en el ordenador. Lo cargaremos desde Internet mediante una CDN.

### Escribe este código

Dentro de head, antes de </head>, añade:

~~~html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
>
~~~

Antes de </body>, añade también:

~~~html
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js">
</script>
~~~

### ¿Qué significa?

Una CDN es una red de servidores que entrega archivos a través de Internet. Nuestro HTML pide los archivos de Bootstrap y el navegador los descarga.

~~~text
Nuestro HTML
      ↓
pide los archivos de Bootstrap
      ↓
la CDN los envía
      ↓
el navegador puede utilizar Bootstrap
~~~

El link carga el CSS de Bootstrap. Ese CSS contiene los estilos de botones, tarjetas, columnas y muchas utilidades.

El script carga el JavaScript de Bootstrap. Es un JavaScript que pertenece a Bootstrap, no a nuestro proyecto. Algunos componentes interactivos, como el menú móvil y el modal, lo necesitan.

bootstrap.bundle.min.js incluye lo necesario para esos componentes. Nuestro archivo será otro archivo distinto: js/script.js.

### ¿Qué aporta Bootstrap aquí?

El CSS y el JavaScript de Bootstrap quedan disponibles para nuestra página. A partir de ahora podemos escribir clases Bootstrap y utilizar componentes preparados.

### Limitación importante

Si no hay conexión a Internet, Bootstrap cargado mediante CDN puede no estar disponible. En ese caso las clases no tendrán el aspecto esperado y los componentes interactivos pueden no funcionar.

### Comprueba el resultado

Guarda el archivo y abre la página con conexión a Internet. Todavía no verás mucho contenido, pero Bootstrap ya está conectado.

---

## Paso 5. Primer experimento con Bootstrap

### Escribe este código

Dentro de body, prueba estos dos botones:

~~~html
<button>Botón normal</button>

<button class="btn btn-primary">
    Botón Bootstrap
</button>
~~~

### ¿Qué significa?

El primer botón no tiene clases de Bootstrap. El segundo combina btn y btn-primary.

~~~text
btn
↓
indica que es un botón Bootstrap

btn-primary
↓
aplica el color y el estilo principal
~~~

### Pregunta para pensar

¿Qué ha cambiado si nosotros no hemos escrito CSS?

La respuesta es que el navegador ha cargado el CSS de Bootstrap y ha encontrado reglas para esas clases.

### Comprueba el resultado

El segundo botón debe tener una apariencia más cuidada, con color, espacio interno y bordes redondeados.

---

## Paso 6. Aprender a leer las clases Bootstrap

### Escribe este código

~~~html
<button class="btn btn-primary btn-lg">
    Contactar
</button>
~~~

### ¿Qué significa?

- btn: prepara el elemento como botón Bootstrap.
- btn-primary: utiliza el estilo principal.
- btn-lg: crea una versión grande.

Las clases se pueden combinar. No hay que memorizar cientos de nombres. Lo importante es reconocer patrones como:

~~~text
btn-*   estilos de botones
text-*  estilos de texto
bg-*    fondos
m-*     margin
p-*     padding
col-*   columnas
~~~

---

# BLOQUE 3. Container y espaciado

## Paso 7. Introducir container

### Escribe este código

~~~html
<div class="container">
    <h1>Contenido de Café La Plaza</h1>
</div>
~~~

### ¿Qué significa?

container limita el ancho del contenido y deja márgenes adecuados a los lados. Sin él, el texto podría ocupar todo el ancho de la ventana.

~~~text
sin container: contenido pegado a los extremos
con container: contenido centrado y más fácil de leer
~~~

### ¿Qué aporta Bootstrap aquí?

Bootstrap calcula distintos anchos de contenedor según el tamaño de pantalla. No necesitamos escribir todas esas reglas CSS manualmente.

---

## Paso 8. Utilidades de espaciado

### Escribe este código

~~~html
<section class="py-5 mb-4">
    <div class="container px-3">
        Contenido de ejemplo
    </div>
</section>
~~~

### ¿Qué significa?

Bootstrap utiliza letras y números para describir espacios:

~~~text
m = margin
p = padding

t = top
b = bottom
x = horizontal
y = vertical
~~~

Por tanto:

- mb-4: margin inferior.
- mt-3: margin superior.
- py-5: padding vertical, arriba y abajo.
- px-3: padding horizontal, izquierda y derecha.

El número representa una intensidad de espacio dentro de una escala de Bootstrap. No es necesario saber ahora cuántos píxeles exactos representa cada número.

### Comprueba el resultado

Observa que el contenido tiene aire alrededor. El espacio no es decoración inútil: mejora la lectura y separa visualmente las secciones.

---

# BLOQUE 4. La barra de navegación

## Paso 9. Crear el navbar

### Escribe este código

~~~html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#inicio">Café La Plaza</a>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuPrincipal"
                aria-controls="menuPrincipal"
                aria-expanded="false"
                aria-label="Abrir navegación">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menuPrincipal">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
                <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
            </ul>
        </div>
    </div>
</nav>
~~~

### ¿Qué significa?

- navbar: indica que es una barra de navegación.
- navbar-expand-lg: en pantallas grandes muestra el menú extendido; en pantallas pequeñas puede plegarse.
- navbar-dark: prepara colores claros para un fondo oscuro.
- bg-dark: aplica un fondo oscuro.
- navbar-brand: marca o nombre principal.
- navbar-nav: grupo de enlaces de navegación.
- nav-link: estilo de cada enlace.
- container: centra y limita el contenido.

El botón tiene data-bs-toggle="collapse" y data-bs-target="#menuPrincipal". Estos atributos indican qué elemento se debe abrir o cerrar.

### Idea fundamental

Aquí todavía **no hemos escrito JavaScript nosotros**. Bootstrap utiliza su propio JavaScript para que el menú hamburguesa funcione.

### Error frecuente

Si el menú móvil no se abre, revisa que el script de Bootstrap esté justo antes de nuestro script.js y que el valor de data-bs-target coincida con el id del menú.

---

# BLOQUE 5. Hero y tipografía

## Paso 10. Crear la sección principal

### Escribe este código

~~~html
<section id="inicio" class="py-5">
    <div class="container">
        <div class="row align-items-center g-4">
            <div class="col-12 col-lg-6">
                <span class="badge text-bg-warning mb-3">Negocio local</span>
                <h1 class="display-5 fw-bold">Café La Plaza</h1>
                <p class="lead">Tu café de siempre, ahora también online.</p>
                <a class="btn btn-primary btn-lg" href="#servicios">Conócenos</a>
            </div>
            <div class="col-12 col-lg-6">
                <img class="img-fluid rounded-4 shadow"
                     src="img/cafe-la-plaza-hero.png"
                     alt="Café y pastel en una cafetería acogedora">
            </div>
        </div>
    </div>
</section>
~~~

### ¿Qué significa?

- display-5: crea un título grande.
- fw-bold: aplica una letra más gruesa.
- lead: destaca un párrafo introductorio.
- text-center: centra el texto cuando se utiliza.
- img-fluid: hace que la imagen no desborde su columna.
- rounded-4: redondea las esquinas.
- shadow: añade sombra.
- align-items-center: alinea verticalmente los elementos de la fila.
- g-4: añade separación entre columnas.

La imagen utiliza una ruta relativa. Desde index.html, la carpeta img está al mismo nivel, por eso escribimos img/cafe-la-plaza-hero.png.

---

# BLOQUE 6. El grid de Bootstrap

## Paso 11. ¿Qué es el grid?

El grid es el sistema de columnas de Bootstrap. Su esquema básico es:

~~~text
container
   ↓
row
   ↓
columnas
~~~

Ejemplo:

~~~html
<div class="container">
    <div class="row">
        <div class="col">Columna 1</div>
        <div class="col">Columna 2</div>
    </div>
</div>
~~~

row crea una fila. col crea columnas que se reparten el espacio.

## Paso 12. Las doce columnas

Bootstrap imagina cada fila dividida en doce partes:

~~~text
12 / 12 → ancho completo
6 / 12  → aproximadamente la mitad
4 / 12  → aproximadamente un tercio
~~~

Por ejemplo:

~~~html
<div class="col-6">Mitad</div>
<div class="col-6">Mitad</div>
~~~

La suma es 6 + 6 = 12.

## Paso 13. Responsive con col-12 col-md-4

Las tarjetas de servicios utilizan:

~~~html
<div class="col-12 col-md-4">
    Una tarjeta
</div>
~~~

Se lee literalmente así:

~~~text
col-12
↓
en pantallas pequeñas ocupa las doce partes: todo el ancho

col-md-4
↓
desde el tamaño md ocupa cuatro de doce partes
~~~

El resultado es:

~~~text
Móvil

[ tarjeta 1 ]
[ tarjeta 2 ]
[ tarjeta 3 ]

Ordenador

[ tarjeta 1 ][ tarjeta 2 ][ tarjeta 3 ]
~~~

### ¿Qué aporta Bootstrap aquí?

Bootstrap ya incluye las reglas responsive. Nosotros indicamos cómo queremos distribuir el contenido y el framework adapta la fila según el tamaño de pantalla.

### Comprueba el resultado

Abre las herramientas de desarrollo o cambia el ancho de la ventana. Las columnas deben pasar de estar juntas a apilarse en móvil.

---

# BLOQUE 7. Cards y componentes

## Paso 14. Crear los servicios

### Escribe este código

~~~html
<div class="col-12 col-md-4">
    <div class="card h-100 shadow-sm">
        <div class="card-body">
            <h3 class="h5 card-title">Desayunos</h3>
            <p class="card-text">Café, tostadas y zumos naturales.</p>
            <button class="btn btn-primary" type="button">
                Ver más
            </button>
        </div>
    </div>
</div>
~~~

### ¿Qué significa?

- card: crea la estructura visual de una tarjeta.
- card-body: zona interior con espacio preparado.
- card-title: título de la tarjeta.
- card-text: texto de la tarjeta.
- h-100: hace que varias tarjetas puedan tener la misma altura.
- shadow-sm: añade una sombra discreta.

Una card es un componente: una estructura visual pensada para mostrar contenido de forma ordenada. Repetimos la estructura y cambiamos los datos. Otros componentes de Bootstrap son navbar, modal, alert y accordion.

---

# BLOQUE 8. Nuestro JavaScript

## Paso 15. Crear y enlazar script.js

### Escribe este código

En js/script.js comenzaremos con:

~~~javascript
console.log("JavaScript funciona");
~~~

Y antes de cerrar body, después del script de Bootstrap, enlazamos nuestro archivo:

~~~html
<script src="js/script.js"></script>
~~~

### ¿Qué significa?

~~~text
<script src="bootstrap..."></script>
↓
JavaScript perteneciente a Bootstrap

<script src="js/script.js"></script>
↓
nuestro JavaScript
~~~

No son lo mismo. Bootstrap necesita su script para sus componentes. Nosotros necesitamos script.js para programar las acciones propias de Café La Plaza.

### ¿Qué es JavaScript?

Una forma sencilla de recordarlo es:

~~~text
HTML dice qué existe
Bootstrap decide cómo se ve
JavaScript decide qué ocurre
~~~

### Comprueba el resultado

Abre la consola del navegador con F12, o con la opción “Inspeccionar”. Debes ver el mensaje JavaScript funciona.

---

## Paso 16. Crear el botón “Ver más”

### Escribe este código

En la tarjeta de desayunos añadimos:

~~~html
<button id="boton-ver-mas" class="btn btn-primary" type="button">
    Ver más
</button>

<p class="mt-3 mb-0 text-secondary d-none" id="texto-ver-mas">
    Disponible de lunes a sábado de 8:00 a 12:00.
</p>
~~~

### ¿Qué significa d-none?

d-none es una clase Bootstrap que oculta un elemento.

~~~text
Bootstrap proporciona la clase d-none
JavaScript decidirá cuándo quitarla
~~~

Ahora necesitamos localizar el botón y el párrafo.

~~~javascript
const botonVerMas = document.querySelector("#boton-ver-mas");
const textoVerMas = document.querySelector("#texto-ver-mas");
~~~

- const crea una variable cuyo valor no vamos a reasignar.
- botonVerMas es el nombre que hemos elegido.
- document representa el documento HTML.
- querySelector busca un elemento.
- #boton-ver-mas significa “el elemento cuyo id es boton-ver-mas”.

Después esperamos el clic:

~~~javascript
function mostrarInformacionExtra() {
    textoVerMas.classList.toggle("d-none");
}

botonVerMas.addEventListener("click", mostrarInformacionExtra);
~~~

addEventListener espera un evento. En este caso, el evento es click. Cuando sucede, llama a la función.

classList.toggle("d-none") quita la clase si existe y la añade si no existe. Así el mismo botón puede mostrar y ocultar la información.

### Flujo completo

~~~text
HTML
↓
el párrafo empieza con d-none

usuario hace clic
↓
JavaScript detecta click

toggle modifica d-none
↓
el párrafo aparece o vuelve a ocultarse
~~~

### Comprueba el resultado

Pulsa Ver más. El horario del desayuno debe aparecer. Pulsa otra vez y debe ocultarse.

### Error frecuente

Si el botón no hace nada, comprueba que el id escrito en HTML sea exactamente igual al selector de JavaScript. Los guiones y las mayúsculas importan.

---

# BLOQUE 9. Promoción propia con JavaScript

## Paso 17. Mostrar una promoción

### Escribe este código

~~~html
<button class="btn btn-success btn-lg" type="button" id="boton-promocion">
    Ver promoción de hoy
</button>

<div class="alert alert-success mt-3 d-none" id="mensaje-promocion" role="alert">
    Hoy: café + tostada por 3,50 €
</div>
~~~

### ¿Qué significa?

- alert prepara un aviso.
- alert-success le da el estilo de éxito.
- d-none lo mantiene oculto al principio.
- mt-3 lo separa del botón.

En JavaScript:

~~~javascript
const botonPromocion = document.querySelector("#boton-promocion");
const mensajePromocion = document.querySelector("#mensaje-promocion");

function mostrarPromocion() {
    mensajePromocion.classList.remove("d-none");
}

botonPromocion.addEventListener("click", mostrarPromocion);
~~~

Aquí nosotros programamos el comportamiento. Bootstrap da la apariencia del aviso, pero no decide cuándo aparece.

---

# BLOQUE 10. Modal de Bootstrap

## Paso 18. Añadir una ventana modal

### Escribe este código

El botón que abre el modal es:

~~~html
<button class="btn btn-outline-secondary btn-lg" type="button"
        data-bs-toggle="modal" data-bs-target="#ofertaModal">
    Conoce nuestra oferta
</button>
~~~

Más abajo, normalmente antes de los scripts, añadimos el modal:

~~~html
<div class="modal fade" id="ofertaModal" tabindex="-1"
     aria-labelledby="ofertaModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title fs-5" id="ofertaModalLabel">
                    Oferta de bienvenida
                </h2>
                <button type="button" class="btn-close"
                        data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                Presenta esta web en nuestro local y disfruta de un café gratis con tu desayuno.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
~~~

### ¿Qué significa?

data-bs-toggle="modal" indica que el botón controla un modal. data-bs-target="#ofertaModal" indica cuál, buscando el elemento con ese id.

No hemos programado el evento en nuestro script.js.

~~~text
Modal
↓
componente Bootstrap

Bootstrap CSS
↓
apariencia

Bootstrap JavaScript
↓
abrir y cerrar
~~~

La diferencia es importante:

- La promoción la programamos nosotros con addEventListener.
- El modal utiliza el JavaScript de Bootstrap y sus atributos data-bs-*.

### Comprueba el resultado

Pulsa “Conoce nuestra oferta”. Debe aparecer una ventana sobre la página. Puedes cerrarla con la equis o con el botón “Cerrar”.

### Error frecuente

Si no abre, revisa el script bootstrap.bundle.min.js, el data-bs-target y el id del modal.

---

# BLOQUE 11. Horarios, opiniones y formulario

## Paso 19. Crear una tabla Bootstrap

### Escribe este código

~~~html
<div class="table-responsive">
    <table class="table table-bordered table-striped align-middle">
        <thead class="table-dark">
            <tr>
                <th scope="col">Día</th>
                <th scope="col">Horario</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Lunes - Viernes</td><td>08:00 - 20:00</td></tr>
            <tr><td>Sábado</td><td>09:00 - 14:00</td></tr>
            <tr><td>Domingo</td><td>Cerrado</td></tr>
        </tbody>
    </table>
</div>
~~~

table aplica el estilo base. table-bordered añade bordes, table-striped alterna colores de filas y table-responsive ayuda a que la tabla pueda desplazarse en pantallas estrechas.

## Paso 20. Reutilizar cards para opiniones

No necesitamos aprender una técnica nueva. Volvemos a utilizar row, col-12 col-md-4, card, card-body y card-text.

~~~html
<div class="col-12 col-md-4">
    <div class="card h-100 shadow-sm">
        <div class="card-body">
            <p class="card-text">"El mejor desayuno del barrio."</p>
            <p class="mb-0 fw-semibold">Ana</p>
        </div>
    </div>
</div>
~~~

La repetición es una ventaja: una vez entendido el componente, podemos utilizarlo con contenido diferente.

## Paso 21. Crear el formulario

### Escribe este código

~~~html
<form class="card shadow-sm p-4" id="formulario-contacto">
    <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre"
               name="nombre" placeholder="Tu nombre">
    </div>

    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email"
               name="email" placeholder="tu@email.com">
    </div>

    <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea class="form-control" id="mensaje" name="mensaje"
                  rows="4" placeholder="Escribe tu mensaje"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
    <div class="alert alert-info mt-3 d-none" id="mensaje-formulario"
         role="alert"></div>
</form>
~~~

### ¿Qué significa?

- form-label da estilo al texto de cada etiqueta.
- form-control da estilo a inputs y textarea.
- btn btn-primary prepara el botón.
- for="nombre" conecta la etiqueta con el elemento cuyo id es nombre.

La relación for e id es importante para accesibilidad: al pulsar la etiqueta, el cursor puede ir al campo correspondiente y las tecnologías de asistencia entienden la relación.

---

# BLOQUE 12. JavaScript y formulario

## Paso 22. Detectar el envío

### Escribe este código

~~~javascript
const formularioContacto = document.querySelector("#formulario-contacto");
const inputNombre = document.querySelector("#nombre");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

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

formularioContacto.addEventListener("submit", procesarFormulario);
~~~

### ¿Qué significa?

click ocurre cuando se pulsa un botón. submit ocurre cuando se envía un formulario, por ejemplo al pulsar su botón de envío.

Normalmente el formulario intentaría enviar los datos y recargar la página. Como todavía no tenemos servidor, escribimos:

~~~javascript
event.preventDefault();
~~~

Esto impide el comportamiento automático del navegador.

.value lee el contenido escrito en un input. .trim() elimina espacios sobrantes al principio y al final.

La condición:

~~~javascript
if (nombre === "") {
~~~

significa “si el nombre está vacío”.

~~~text
SI el nombre está vacío
↓
mostrar un aviso

SI no
↓
mostrar un mensaje personalizado
~~~

textContent cambia el texto de un elemento. Por eso puede aparecer:

~~~text
Gracias, Laura. Hemos recibido tu mensaje.
~~~

reset() limpia el formulario después de mostrar la respuesta.

### Comprueba el resultado

1. Pulsa Enviar sin escribir nombre. Debe aparecer un aviso amarillo.
2. Escribe un nombre y envía de nuevo.
3. Debe aparecer un mensaje personalizado.

Este formulario no envía todavía un correo real. Para eso necesitaríamos un servidor o un servicio externo, contenidos que aún no forman parte de este proyecto.

---

# BLOQUE 13. Responsive y documentación

## Paso 23. Probar móvil y escritorio

Revisa en distintos anchos:

- el menú navbar;
- la imagen principal;
- las tarjetas;
- la tabla;
- el formulario;
- el modal.

Vuelve a leer col-12 col-md-4: en pequeño una tarjeta ocupa todo el ancho; desde md, cuatro de doce partes.

Bootstrap resuelve una gran parte del responsive, pero todavía debemos comprobar que los textos no sean demasiado largos, que las imágenes tengan alt y que los botones se puedan pulsar cómodamente.

## Paso 24. Aprender a consultar Bootstrap

Un desarrollador no memoriza todas las clases. Aprende a consultar documentación.

Si queremos crear algo, el proceso es:

1. Decidimos qué necesitamos.
2. Buscamos el componente en la documentación.
3. Observamos el ejemplo.
4. Identificamos sus clases principales.
5. Adaptamos el ejemplo a nuestro contenido.
6. Quitamos las partes que no entendemos o que no necesitamos.

Búsquedas útiles:

~~~text
Bootstrap buttons
Bootstrap cards
Bootstrap navbar
Bootstrap spacing
Bootstrap grid
Bootstrap modal
Bootstrap forms
~~~

No conviene copiar componentes enormes sin comprenderlos. Es mejor copiar una estructura pequeña, leer sus clases y cambiarla poco a poco.

## Paso 25. Leer un fragmento de Bootstrap

Intenta traducir este código:

~~~html
<div class="container py-5">
    <div class="row g-4">
        <div class="col-12 col-md-4">
            Contenido
        </div>
    </div>
</div>
~~~

La traducción es:

- container: limita y centra el contenido.
- py-5: añade padding arriba y abajo.
- row: crea una fila.
- g-4: añade separación entre elementos de la fila.
- col-12: ocupa todo el ancho en móvil.
- col-md-4: ocupa cuatro de doce columnas desde md.

Entender estas frases es más importante que memorizar los nombres aislados.

---

# BLOQUE 14. Responsabilidades de cada herramienta

## Paso 26. Bootstrap frente a CSS propio

### CSS propio

Ventajas:

- control total;
- diseño completamente personalizado;
- libertad para crear reglas propias.

### Bootstrap

Ventajas:

- rapidez;
- responsive preparado;
- componentes reutilizables;
- estilos coherentes.

Limitaciones:

- algunas webs pueden parecer similares;
- hay que aprender sus clases;
- puede ser necesario escribir CSS propio para personalizar.

La pregunta no es “¿qué es mejor?”. La pregunta es “¿qué herramienta me ayuda mejor en esta parte?”

## Paso 27. Bootstrap frente a JavaScript

| Necesidad | Herramienta |
|---|---|
| Dar color a un botón | Bootstrap |
| Crear columnas | Bootstrap |
| Mostrar una card | Bootstrap |
| Detectar un clic | JavaScript |
| Leer un input | JavaScript |
| Cambiar contenido | JavaScript |
| Abrir un modal Bootstrap | JavaScript de Bootstrap |

Una forma de recordarlo:

~~~text
Bootstrap CSS → aspecto
Bootstrap JS  → comportamiento de componentes Bootstrap
Nuestro JS    → comportamiento específico de nuestra página
~~~

---

# BLOQUE 15. Errores frecuentes y depuración

## Paso 28. Errores frecuentes de Bootstrap

### Bootstrap no funciona

Revisa:

- que exista conexión a Internet;
- que el link esté dentro de head;
- que la dirección CDN esté escrita correctamente;
- que la consola no muestre errores.

### El modal no abre

Revisa:

- que esté cargado bootstrap.bundle.min.js;
- que data-bs-target="#ofertaModal" coincida con id="ofertaModal";
- que el botón y el modal estén escritos correctamente.

### Las columnas no se colocan bien

Revisa el orden:

~~~text
container
↓
row
↓
col
~~~

### Una clase no hace nada

Revisa el nombre exacto, los guiones y la documentación. btn-primary no es igual que btn primary.

## Paso 29. Errores frecuentes de JavaScript

### JavaScript no funciona

Comprueba:

~~~html
<script src="js/script.js"></script>
~~~

La ruta debe ser correcta y el archivo debe existir.

### querySelector da problemas

Comprueba que el id de HTML coincide con el selector. Por ejemplo, #boton-ver-mas necesita un elemento con id="boton-ver-mas".

### El botón no hace nada

Revisa addEventListener, el evento "click", el nombre de la función y el selector.

### El texto sigue oculto

Comprueba si conserva la clase d-none. Recuerda que classList.remove("d-none") la quita y classList.toggle("d-none") la cambia.

## Paso 30. Depuración básica

console.log() sirve para comprobar qué está ocurriendo.

~~~javascript
console.log("JavaScript funciona");
~~~

También puedes comprobar un valor:

~~~javascript
console.log(inputNombre.value);
~~~

Abre la consola del navegador con las herramientas de desarrollo. Los mensajes aparecen allí, no dentro de la página.

---

# BLOQUE 16. Revisión final

## Paso 31. Checklist

### HTML

- [ ] La estructura HTML es correcta.
- [ ] Los enlaces internos apuntan a secciones existentes.
- [ ] Los textos describen el negocio.
- [ ] La imagen tiene alt.
- [ ] Los id no están repetidos.

### Bootstrap

- [ ] El CDN CSS está cargado.
- [ ] El CDN JavaScript está cargado antes de nuestro script.
- [ ] Se utiliza container.
- [ ] Existe un navbar.
- [ ] Se entiende el grid row y col.
- [ ] Las cards se adaptan a móvil.
- [ ] Los botones tienen clases Bootstrap.
- [ ] Se han utilizado clases de spacing.
- [ ] La tabla y el formulario utilizan estilos Bootstrap.
- [ ] El modal abre y cierra correctamente.

### JavaScript

- [ ] js/script.js está enlazado.
- [ ] El botón Ver más funciona.
- [ ] La promoción aparece al pulsar su botón.
- [ ] El formulario evita la recarga.
- [ ] El formulario muestra un mensaje.
- [ ] La consola no muestra errores.

---

# BLOQUE 17. Qué hemos aprendido

## Bootstrap

- Es un framework CSS.
- Puede cargarse mediante CDN.
- Sus clases se combinan.
- Incluye componentes reutilizables.
- container organiza el ancho.
- row y col forman el grid.
- El grid se divide en doce partes.
- Las clases col-* permiten responsive.
- m-* y p-* ayudan con el espaciado.
- btn, card, navbar, table, form-control, alert y modal son recursos preparados.

## JavaScript

- Variables con const.
- Selección con querySelector.
- Eventos con addEventListener.
- Funciones.
- classList.remove() y classList.toggle().
- Lectura con .value.
- Cambio de contenido con textContent.
- Prevención con preventDefault().
- Condiciones sencillas con if.

La idea final es:

> En el primer proyecto aprendí a construir y diseñar una web.
>
> Ahora Bootstrap me permite construir interfaces más rápidamente con soluciones preparadas.
>
> JavaScript permite que mi página responda a lo que hace el usuario.

---

# BLOQUE 18. Retos para el alumno

## Nivel 1

- Cambiar Café La Plaza por otro negocio.
- Cambiar los textos de las secciones.
- Probar btn-success, btn-warning o btn-dark.
- Cambiar el texto de los botones.
- Cambiar las opiniones.

## Nivel 2

- Añadir una cuarta card.
- Cambiar col-md-4 por otra distribución.
- Añadir una nueva opinión.
- Cambiar alert-success por alert-warning.
- Cambiar el contenido del modal.

## Nivel 3

- Crear un nuevo botón interactivo.
- Mostrar y ocultar otro contenido con d-none.
- Crear otro modal con un id diferente.
- Adaptar completamente la landing a un negocio real.

No introduzcas todavía arrays, localStorage ni APIs. El objetivo es practicar HTML, Bootstrap y JavaScript básico.

---

# BLOQUE 19. Proyecto personal

Antes de adaptar la landing, responde:

- ¿Qué negocio es?
- ¿Quién es su cliente?
- ¿Qué necesita saber el cliente?
- ¿Qué acción queremos que realice?
- ¿Qué tres servicios debemos destacar?

Después cambia el nombre, la descripción, los servicios, los horarios, las opiniones, la promoción, los datos de contacto y la imagen.

Esto convierte una práctica técnica en un ejercicio de digitalización de un pequeño negocio.

---

# BLOQUE 20. Código final del proyecto

## Estructura

~~~text
Landing/
├── index.html
├── js/
│   └── script.js
├── img/
│   ├── cafe-la-plaza-hero.png
│   └── README.txt
└── manual-aprendizaje.md
~~~

## index.html

El archivo final se encuentra en index.html dentro de esta carpeta. Debe contener:

- la estructura HTML;
- el enlace CDN de Bootstrap 5.3.8;
- el navbar responsive;
- el hero;
- las secciones de negocio, servicios, horario y opiniones;
- la promoción con alert;
- el contacto y formulario;
- el modal de oferta;
- primero el JavaScript de Bootstrap y después js/script.js.

## js/script.js

El archivo final contiene este código:

~~~javascript
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
~~~

El siguiente proyecto podrá partir de esta base y añadir:

~~~text
datos
↓
arrays
↓
recorrer
↓
crear
↓
editar
↓
eliminar
↓
localStorage
~~~

Pero esos contenidos no forman parte todavía de esta landing.

