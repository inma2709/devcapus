# Manual didáctico: Currículum Digital

## Proyecto práctico IFCD0210

Este manual acompaña la creación de un currículum digital sencillo utilizando únicamente HTML5 y CSS3.

Está pensado para personas que empiezan desde cero. No es necesario haber creado antes una página web. Iremos construyendo el proyecto poco a poco, comprobando cada cambio antes de continuar.

La idea principal es:

> Comprender primero, programar después.

No vamos a copiar una página completa sin saber qué hace cada parte. En cada bloque añadiremos una pieza pequeña, explicaremos su función y observaremos el resultado.

---

## 1. Qué vamos a construir

### Qué es un currículum digital

Un currículum digital es una página web que presenta información profesional: quiénes somos, qué hemos estudiado, qué sabemos hacer, qué experiencia tenemos y cómo pueden contactarnos otras personas.

En lugar de entregar solamente un documento de texto, construiremos una página que se puede abrir en un navegador y compartir como portfolio inicial.

### Qué aspecto tendrá

La página tendrá:

- una cabecera con una fotografía, un nombre y una profesión;
- un menú para desplazarnos por la página;
- las secciones Sobre mí, Formación, Habilidades, Experiencia, Proyectos y Contacto;
- un pie de página;
- un diseño adaptado a móvil y a pantallas grandes.

Al principio la página se verá muy sencilla, porque comenzaremos creando únicamente su estructura. Después añadiremos los colores, los espacios, las tarjetas y la distribución.

### Qué aprenderemos

Durante el proyecto aprenderemos a:

- crear una carpeta de trabajo;
- crear y guardar archivos;
- escribir una estructura HTML básica;
- utilizar etiquetas, atributos y contenido;
- enlazar un archivo CSS con un archivo HTML;
- aplicar colores, tamaños, espacios y bordes;
- utilizar clases e identificadores;
- colocar elementos con Flexbox;
- adaptar una página a distintos tamaños de pantalla;
- localizar y corregir errores sencillos.

### Tecnologías utilizadas

Usaremos exclusivamente:

- **HTML5**, para la estructura y el contenido;
- **CSS3**, para los colores, tamaños, espacios y distribución.

No utilizaremos JavaScript, Bootstrap, Tailwind, frameworks ni librerías externas.

### HTML y CSS en una comparación sencilla

Si una página web fuera una casa, HTML sería la estructura: las paredes, las puertas y las habitaciones. HTML indica qué elementos existen y qué contenido contienen.

CSS sería la parte visual: los colores de las paredes, el tamaño de los muebles, los espacios y la distribución.

Primero construiremos la estructura y después trabajaremos la apariencia. Esta separación es una idea fundamental del desarrollo web.

---

## 2. Antes de programar: entender cómo funciona una web

### Qué es una página web

Una página web es un documento que el navegador puede mostrar en pantalla. Puede contener texto, imágenes, enlaces, listas y otros elementos.

En nuestro caso, la página estará guardada en nuestro propio ordenador. No necesitaremos conexión a Internet para abrirla.

### Qué es un archivo `.html`

Un archivo con extensión `.html` contiene la estructura y el contenido de una página.

La extensión es la parte final del nombre del archivo. En `index.html`, la extensión es `.html`. Ayuda al ordenador y al navegador a saber qué tipo de archivo estamos utilizando.

### Qué es un archivo `.css`

Un archivo con extensión `.css` contiene reglas visuales. Por ejemplo, puede indicar que el fondo sea de color crema, que un texto sea grande o que una imagen tenga forma circular.

### Qué hace el navegador

El navegador, como Chrome, Edge o Firefox, lee nuestros archivos. Interpreta las etiquetas HTML y las reglas CSS y después dibuja el resultado en una ventana.

Cuando decimos que el navegador “interpreta” el código, queremos decir que lo lee y lo convierte en una página visible.

El navegador no ve nuestra intención. Solo puede utilizar los nombres de archivos, las rutas, las etiquetas y las reglas que estén escritas correctamente.

### Una costumbre importante

Trabajaremos en ciclos pequeños:

1. hacemos un cambio;
2. guardamos el archivo;
3. actualizamos el navegador;
4. observamos el resultado;
5. corregimos si algo no funciona.

Así evitamos cambiar veinte cosas a la vez sin saber cuál ha provocado un problema.

---

## 3. Crear nuestro proyecto

### Paso 1. Crear la carpeta principal

#### Qué vamos a hacer

Crearemos una carpeta llamada `curriculum-digital`. Será la carpeta que contendrá todo el proyecto.

#### Para qué sirve

Una carpeta de proyecto mantiene juntos los archivos que forman una misma página. Esto facilita abrir, mover y compartir el trabajo.

#### Cómo hacerlo

1. Abre el Explorador de archivos.
2. Elige un lugar fácil de localizar, por ejemplo Documentos.
3. Crea una carpeta nueva.
4. Escribe exactamente `curriculum-digital`.

Los nombres de carpetas y archivos deben escribirse con cuidado. En programación, `curriculum-digital` y `Curriculum-Digital` pueden considerarse nombres diferentes.

#### Comprueba el resultado

Debes tener una carpeta vacía con este nombre.

#### Error frecuente

No añadas espacios ni una extensión como `.html` al nombre de la carpeta. La extensión corresponde a los archivos, no a la carpeta principal.

### Paso 2. Abrir la carpeta en Visual Studio Code

#### Qué vamos a hacer

Abriremos la carpeta del proyecto en Visual Studio Code.

#### Para qué sirve

Visual Studio Code es un editor de código. Nos permite crear archivos, escribir código y ver la estructura del proyecto.

#### Cómo hacerlo

1. Abre Visual Studio Code.
2. Selecciona **Archivo > Abrir carpeta**.
3. Busca y selecciona `curriculum-digital`.
4. Confirma la selección.

En la parte izquierda aparecerá el explorador de archivos. Al principio no mostrará ningún archivo.

#### Comprueba el resultado

Debes ver el nombre `curriculum-digital` en el explorador de Visual Studio Code.

### Paso 3. Crear `index.html`

#### Qué vamos a hacer

En el explorador, pulsa el botón para crear un archivo nuevo y escribe `index.html`.

#### Para qué sirve

`index.html` será la página principal del proyecto. Muchos servidores y navegadores buscan este nombre como página inicial.

#### Error frecuente

Comprueba que el archivo no se llame `index.html.txt`. Si Windows oculta las extensiones, activa la opción para mostrarlas en el Explorador de archivos.

### Paso 4. Crear la carpeta `css` y el archivo `style.css`

1. En el explorador de Visual Studio Code, crea una carpeta llamada `css`.
2. Selecciona la carpeta `css`.
3. Dentro de ella, crea un archivo llamado `style.css`.

El archivo CSS debe estar dentro de `css`, no al mismo nivel que `index.html`.

### Paso 5. Crear la carpeta `img`

Crea una carpeta llamada `img` dentro de `curriculum-digital`. Más adelante colocaremos dentro una imagen llamada `perfil.jpg`.

La estructura inicial será:

```text
curriculum-digital/
├── index.html
├── css/
│   └── style.css
└── img/
```

La carpeta `css` está dentro de la carpeta principal y contiene `style.css`. La carpeta `img` también está dentro de la carpeta principal y guardará las imágenes.

---

## 4. Crear nuestro primer HTML

### Qué es una etiqueta

Una etiqueta HTML es una palabra escrita entre los signos `<` y `>`. Las etiquetas informan al navegador sobre el tipo de contenido.

Observa este ejemplo:

```html
<p>Hola</p>
```

- `<p>` es la etiqueta de apertura;
- `Hola` es el contenido;
- `</p>` es la etiqueta de cierre.

Todo junto forma un **elemento HTML**.

La barra `/` de `</p>` indica que estamos cerrando el elemento.

### Escribe este código

Abre `index.html` y escribe:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículum de Ana López</title>
</head>
<body>

</body>
</html>
```

### ¿Qué significa?

`<!DOCTYPE html>` indica que el documento utiliza HTML5. No es una etiqueta visual; es una declaración para el navegador.

`<html lang="es">` es el elemento que contiene toda la página. El atributo `lang="es"` informa de que el idioma principal es español.

`<head>` contiene información sobre la página que normalmente no se muestra como contenido principal.

`<meta charset="UTF-8">` permite mostrar correctamente letras, tildes y otros caracteres.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` ayuda a que la página se adapte a la anchura del dispositivo, especialmente en móviles.

`<title>` define el texto que aparece en la pestaña del navegador.

`<body>` contiene lo que veremos dentro de la página.

Observa también el **anidamiento**. `<head>` y `<body>` están dentro de `<html>`. Un elemento está anidado cuando se encuentra dentro de otro.

### Comprueba el resultado

Guarda el archivo con `Ctrl + S`. Todavía no verás contenido en la página, porque el `<body>` está vacío. Sí deberías ver el título “Currículum de Ana López” en la pestaña del navegador cuando abras el archivo.

### Error frecuente

Revisa que cada etiqueta tenga sus signos `<` y `>`. También comprueba que las etiquetas de cierre incluyan la barra: `</body>` y `</html>`.

---

## 5. Nuestra primera prueba en el navegador

### Qué vamos a hacer

Añadiremos un nombre y una profesión dentro de `<body>`.

### Escribe este código

Coloca estas dos líneas entre `<body>` y `</body>`:

```html
<h1>Ana López</h1>
<p>Diseñadora web en formación</p>
```

### ¿Qué significa?

`<h1>` es el encabezado principal de la página. Normalmente se utiliza para el título más importante, que en este caso es el nombre.

`<p>` significa párrafo. Se utiliza para escribir un texto normal.

El navegador aplica estilos básicos por defecto. Por eso `h1` suele aparecer más grande y `p` con un tamaño normal.

### Comprueba el resultado

1. Guarda `index.html`.
2. Localiza el archivo en la carpeta del proyecto.
3. Haz doble clic para abrirlo en el navegador.

Debes ver el nombre grande y debajo la profesión.

### Si no aparece

Comprueba estos puntos:

- el archivo está guardado;
- has abierto el `index.html` de `curriculum-digital` y no otro archivo;
- las etiquetas están escritas como `<h1>...</h1>` y `<p>...</p>`;
- el contenido está dentro de `<body>`;
- no has borrado accidentalmente una etiqueta.

---

## 6. Entender los encabezados

HTML ofrece varios niveles de encabezado:

```html
<h1>Título principal</h1>
<h2>Sección principal</h2>
<h3>Subsección</h3>
```

No son simplemente tamaños de letra. Indican la importancia y la organización del contenido.

En nuestro proyecto utilizaremos esta jerarquía:

```text
h1 → nombre principal del currículum
h2 → grandes secciones, como Formación o Proyectos
h3 → apartados dentro de una sección
```

Una página debe tener un solo `h1` principal. Después podemos utilizar varios `h2` y `h3` cuando la estructura lo necesite.

Los encabezados también ayudan a las personas que utilizan lectores de pantalla para comprender la página.

---

## 7. Crear la cabecera del currículum

### Paso 1. Crear el elemento `header`

#### Qué vamos a hacer

Sustituiremos la prueba inicial por una cabecera que agrupe la presentación principal.

#### Escribe este código

Dentro de `<body>`, sustituye las dos líneas anteriores por:

```html
<header>
    <p>Curriculum digital</p>
    <h1>Ana López</h1>
    <p>Diseñadora web en formación</p>
</header>
```

#### ¿Qué significa?

`<header>` representa una cabecera. Puede contener el nombre, el logotipo, una presentación o la navegación inicial de una página.

Agrupar elementos relacionados dentro de una etiqueta semántica hace que el código sea más fácil de leer.

### Paso 2. Añadir la fotografía

Coloca esta línea dentro de `<header>`, antes del primer párrafo:

```html
<img src="img/perfil.jpg" alt="Retrato de Ana López">
```

`<img>` sirve para insertar una imagen. Es una etiqueta que no necesita una etiqueta de cierre como `<p>`.

`src` significa “source”, es decir, origen. Indica al navegador dónde está el archivo de imagen.

`alt` contiene una descripción alternativa. Si la imagen no carga o una persona utiliza un lector de pantalla, este texto explica qué representa.

### ¿Qué es una ruta?

Una ruta es una indicación para encontrar un archivo.

En `src="img/perfil.jpg"`:

- `img` es la carpeta;
- `/` significa que entraremos en esa carpeta;
- `perfil.jpg` es el nombre del archivo.

La ruta es relativa porque parte de la ubicación de `index.html`. Como `img` está al mismo nivel que `index.html`, escribimos `img/perfil.jpg`.

Coloca una imagen propia dentro de la carpeta `img` y llámala `perfil.jpg`. Si todavía no tienes una fotografía, puedes conservar el archivo provisional del proyecto.

### Comprueba el resultado

Debes ver la imagen, el texto de presentación, el nombre y la profesión. Todavía no tendrá el diseño final.

### Error frecuente

Si la imagen no aparece, compara el nombre real del archivo con la ruta. `perfil.jpg`, `Perfil.jpg` y `perfil.jpeg` no tienen por qué ser el mismo nombre.

---

## 8. Crear el menú de navegación

### Qué vamos a hacer

Añadiremos un menú para saltar a las diferentes partes del currículum.

### Escribe este código

Coloca este bloque después de `</header>`:

```html
<nav aria-label="Navegación principal">
    <a href="#sobre-mi">Sobre mí</a>
    <a href="#formacion">Formación</a>
    <a href="#habilidades">Habilidades</a>
    <a href="#experiencia">Experiencia</a>
    <a href="#proyectos">Proyectos</a>
    <a href="#contacto">Contacto</a>
</nav>
```

### ¿Qué significa?

`<nav>` identifica una zona de navegación.

`<a>` crea un enlace. El texto entre la apertura y el cierre es lo que se puede pulsar.

`href` indica el destino del enlace.

En `href="#sobre-mi"`, el símbolo `#` indica que buscamos un identificador dentro de la página. Todavía debemos crear el elemento que tenga `id="sobre-mi"`.

Por ejemplo, estas dos partes están relacionadas:

```html
<a href="#sobre-mi">Sobre mí</a>
<section id="sobre-mi">
```

El valor después de `#` debe coincidir exactamente con el valor de `id`. Esta navegación funciona sin JavaScript.

### Comprueba el resultado

Los enlaces aparecerán uno debajo de otro con los estilos básicos del navegador. Es posible que todavía no puedan llevar a ningún sitio porque las secciones aún no existen.

---

## 9. Crear el contenido principal

### Qué vamos a hacer

Agruparemos el contenido central dentro de `<main>`.

### Escribe este código

Después de `</nav>`, añade:

```html
<main>

</main>
```

### ¿Qué significa?

`<main>` contiene el contenido principal y único de la página. La cabecera y el menú presentan la página; el contenido de `main` desarrolla la información.

Dentro de `main` añadiremos seis secciones, una por una:

```text
main
 ├── sobre mí
 ├── formación
 ├── habilidades
 ├── experiencia
 ├── proyectos
 └── contacto
```

Es buena práctica utilizar etiquetas que expliquen el papel de cada bloque. Esto se llama estructura semántica.

---

## 10. Crear la sección Sobre mí

### Qué vamos a hacer

Añadiremos la primera sección dentro de `<main>`.

### Escribe este código

Dentro de `<main>` coloca:

```html
<section id="sobre-mi">
    <h2>Sobre mí</h2>
    <p>Estoy aprendiendo a crear páginas web claras, accesibles y adaptadas a distintos dispositivos.</p>
    <p>Me gusta transformar ideas sencillas en experiencias digitales útiles.</p>
</section>
```

### ¿Qué significa?

`<section>` agrupa contenido relacionado. `id="sobre-mi"` permite que el enlace del menú encuentre esta sección.

El `h2` es el título de esta gran sección. Los párrafos contienen la explicación.

La jerarquía se lee así:

```text
h1 → nombre principal
h2 → Sobre mí
p  → texto de la sección
```

### Comprueba el resultado

Al pulsar “Sobre mí” en el menú, el navegador debería desplazarse hasta esta sección.

### Error frecuente

Si el enlace no funciona, compara letra por letra `href="#sobre-mi"` con `id="sobre-mi"`.

---

## 11. Crear Formación

### Qué vamos a hacer

Añadiremos los estudios o cursos realizados.

### Escribe este código

Después de la sección Sobre mí y todavía dentro de `<main>`, añade:

```html
<section id="formacion">
    <h2>Formación</h2>
    <ul>
        <li>2026 - IFCD0210: Desarrollo de páginas web</li>
        <li>2024 - Curso de herramientas digitales</li>
    </ul>
</section>
```

### ¿Qué significa?

`<ul>` significa lista no ordenada. El navegador suele mostrar sus elementos con viñetas.

`<li>` significa elemento de lista. Cada formación debe estar dentro de su propio `li`.

La lista funciona como un contenedor: `ul` contiene varios elementos `li`.

### Comprueba el resultado

Verás el título “Formación” y dos elementos con viñetas.

---

## 12. Crear Habilidades

### Qué vamos a hacer

Crearemos una lista de habilidades. Más adelante CSS hará que parezcan pequeñas etiquetas o badges.

### Escribe este código

Añade otra sección después de Formación:

```html
<section id="habilidades">
    <h2>Habilidades</h2>
    <ul>
        <li>HTML5 semántico</li>
        <li>CSS3 y Flexbox</li>
        <li>Diseño responsive</li>
        <li>Accesibilidad web</li>
        <li>Trabajo en equipo</li>
        <li>Aprendizaje continuo</li>
    </ul>
</section>
```

### ¿Qué debemos recordar?

HTML describe qué es el contenido. En este momento son habilidades dentro de una lista.

CSS decidirá cómo se ve esa lista: si aparece en fila, con bordes redondeados o con colores.

### Comprueba el resultado

Las habilidades aparecerán como una lista sencilla. Es normal que todavía no parezcan tarjetas.

---

## 13. Crear Experiencia

### Qué vamos a hacer

Añadiremos una experiencia utilizando un elemento `<article>`.

### Escribe este código

Después de Habilidades, añade:

```html
<section id="experiencia">
    <h2>Experiencia</h2>
    <article>
        <h3>Proyecto personal de aprendizaje web</h3>
        <p>2025 - Actualidad</p>
        <p>Creación de ejercicios y pequeñas páginas informativas para practicar HTML y CSS.</p>
    </article>
</section>
```

### ¿Qué significa?

`<article>` representa un contenido independiente dentro de una sección. En este caso, una experiencia concreta.

`h3` es adecuado porque está dentro de una sección con `h2`.

No necesitamos aprender toda la teoría de `article` ahora. Basta con recordar que ayuda a marcar un bloque de contenido relacionado y completo.

---

## 14. Crear Proyectos

### Qué vamos a hacer

Crearemos dos proyectos. Todavía no tendrán estilos.

### Escribe este código

Después de Experiencia, añade:

```html
<section id="proyectos">
    <h2>Proyectos</h2>
    <article>
        <h3>Portfolio de aprendizaje</h3>
        <p>Una página para mostrar formación, habilidades y objetivos profesionales.</p>
    </article>
    <article>
        <h3>Ficha de negocio local</h3>
        <p>Una página informativa con datos de contacto y servicios principales.</p>
    </article>
</section>
```

### Comprueba el resultado

Los proyectos aparecerán como bloques de texto. Esto es normal.

> HTML no intenta hacer bonita la página. Primero estamos creando la estructura.

Antes de diseñar, comprobamos que el contenido y el orden son correctos.

---

## 15. Crear Contacto

### Qué vamos a hacer

Añadiremos formas de contacto y enlaces externos.

### Escribe este código

Después de Proyectos, añade:

```html
<section id="contacto">
    <h2>Contacto</h2>
    <p>Puedes escribirme para conocer mi trabajo.</p>
    <a href="mailto:ana.lopez@example.com">ana.lopez@example.com</a>
    <a href="https://www.linkedin.com/">LinkedIn</a>
    <a href="https://github.com/">GitHub</a>
</section>
```

### ¿Qué significa?

`mailto:` abre el programa de correo electrónico del dispositivo.

`https://` indica una dirección completa de Internet.

La diferencia es:

```html
href="#sobre-mi"
```

busca una sección dentro de la página, mientras que:

```html
href="https://www.linkedin.com/"
```

lleva a otra dirección web.

### Comprueba el resultado

Al pulsar el correo, el navegador intentará abrir una aplicación de correo. Los enlaces de LinkedIn y GitHub abrirán sus páginas.

---

## 16. Crear el footer

### Qué vamos a hacer

Añadiremos la parte final de la página.

### Escribe este código

Después de `</main>` y antes de `</body>`, añade:

```html
<footer>
    <p>&copy; 2026 Ana López</p>
    <a href="#inicio">Volver al inicio</a>
</footer>
```

Para que el enlace funcione, añade `id="inicio"` a la etiqueta de apertura de `header`:

```html
<header id="inicio">
```

`<footer>` representa el pie de página. Suele contener información legal, autoría o enlaces finales.

`&copy;` es una entidad HTML que representa el símbolo de copyright.

---

## 17. Nuestro HTML ya está terminado

En este momento tenemos:

- estructura;
- contenido;
- navegación interna;
- imagen;
- enlaces;
- pie de página.

Todavía falta el diseño. Antes de empezar CSS, conviene revisar la organización:

```text
header
nav
main
 ├── sobre mí
 ├── formación
 ├── habilidades
 ├── experiencia
 ├── proyectos
 └── contacto
footer
```

El archivo final utiliza algunas clases para poder aplicar estilos de forma cómoda, pero la idea es la misma. Las etiquetas semánticas siguen indicando qué función tiene cada bloque.

Guarda el archivo y prueba todos los enlaces del menú. Si todavía no funciona alguno, corrígelo antes de continuar.

---

## 18. Nuestro primer CSS

### Qué vamos a hacer

Abriremos `css/style.css` y escribiremos una primera regla.

### Escribe este código

```css
body {
    background-color: white;
}
```

### ¿Qué significa?

Una regla CSS tiene esta forma:

```text
body             → selector
background-color → propiedad
white            → valor
```

`body` es el selector. Indica sobre qué elemento trabajamos.

`background-color` es la propiedad. Indica qué aspecto queremos cambiar.

`white` es el valor. Indica el color elegido.

Las llaves contienen las declaraciones y el punto y coma termina cada declaración.

### Comprueba el resultado

Guarda `style.css`. Todavía tenemos que conectar CSS con HTML para que el navegador lea esta regla.

---

## 19. Conectar HTML y CSS

### Qué vamos a hacer

Indicaremos a `index.html` dónde está el archivo de estilos.

### Escribe este código

Dentro de `<head>`, antes de `</head>`, añade:

```html
<link rel="stylesheet" href="css/style.css">
```

### ¿Qué significa?

`<link>` conecta un recurso externo con el documento HTML.

`rel="stylesheet"` indica que el recurso es una hoja de estilos.

`href="css/style.css"` es la ruta del archivo. Partimos de la ubicación de `index.html`, entramos en la carpeta `css` y buscamos `style.css`.

Es la misma idea de ruta que usamos con la imagen:

```text
index.html → css → style.css
index.html → img → perfil.jpg
```

### Comprueba el resultado

Guarda ambos archivos y actualiza el navegador. El fondo debería aparecer blanco. Si ya era blanco, el cambio puede no ser muy visible; lo importante es que el enlace esté funcionando.

---

## 20. Comprobar que CSS funciona

### Qué vamos a hacer

Usaremos un color fácil de identificar.

### Escribe este código

Modifica la regla así:

```css
body {
    background-color: #f5f5f5;
}
```

### Comprueba el resultado

1. Guarda con `Ctrl + S`.
2. Vuelve al navegador.
3. Actualiza con `Ctrl + R`.
4. Comprueba que el fondo es gris muy claro.

### Si no cambia el color

Revisa:

- que `style.css` esté guardado;
- que la ruta sea `css/style.css`;
- que el archivo se llame exactamente `style.css`;
- que `<link>` esté dentro de `<head>`;
- que la regla tenga llaves y punto y coma.

Cuando algo falle, cambia una sola cosa cada vez y vuelve a comprobar.

---

## 21. Primeros estilos generales

### Qué vamos a hacer

Definiremos el aspecto general del documento.

### Escribe este código

Sustituye la regla anterior por:

```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333333;
}
```

### ¿Qué significa?

`margin: 0` elimina el margen que el navegador añade por defecto alrededor de la página.

`font-family` selecciona la familia tipográfica. `Arial` es la primera opción; `sans-serif` es una alternativa si no está disponible.

`background-color` cambia el color de fondo.

`color` cambia el color general del texto.

La versión final utiliza una fuente con serifas para el texto principal y otra sin serifas para algunos elementos. El concepto es el mismo: CSS separa el contenido de su apariencia.

---

## 22. Entender `margin` y `padding`

Estos dos conceptos aparecen constantemente en CSS.

```text
MARGIN
┌─────────────────────────┐
│       PADDING            │
│    ┌───────────────┐     │
│    │   CONTENIDO   │     │
│    └───────────────┘     │
│                          │
└─────────────────────────┘
```

`margin` es el espacio exterior de un elemento. Separa ese elemento de otros elementos.

`padding` es el espacio interior. Separa el contenido del borde del propio elemento.

Ejemplo:

```css
.ejemplo {
    margin: 20px;
    padding: 15px;
}
```

En el proyecto, `padding` aparece en la cabecera, las secciones y las tarjetas. `margin` se utiliza para separar títulos, párrafos y bloques.

La propiedad `box-sizing: border-box` que aparece en el CSS final hace que el tamaño declarado incluya el borde y el espacio interior. Es una regla práctica que evita cálculos inesperados.

---

## 23. Dar estilo a la cabecera

### Qué vamos a hacer

Aplicaremos un fondo oscuro, color claro y espacio interior a la cabecera.

### Escribe este código

Como nuestro `header` final tiene la clase `site-header`, utilizaremos ese nombre:

```css
.site-header {
    padding: 3rem 0 2.5rem;
    background: #17252b;
    color: #fffdf8;
}
```

El punto delante de `site-header` significa que estamos seleccionando una clase.

Para centrar el contenido y colocar la imagen junto al texto, utilizaremos dos clases de apoyo:

```css
.container {
    width: min(100% - 2rem, 980px);
    margin: 0 auto;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 1.25rem;
}
```

`margin: 0 auto` centra un bloque horizontalmente cuando tiene un ancho limitado.

`display: flex` activa Flexbox. Lo estudiaremos con más calma en el paso 29.

### Dar forma a la fotografía

```css
.profile-image {
    width: 88px;
    height: 88px;
    border: 4px solid #d9674f;
    border-radius: 50%;
    object-fit: cover;
}
```

`width` y `height` indican el tamaño.

`border` crea un borde.

`border-radius: 50%` redondea la imagen hasta convertirla en un círculo cuando su anchura y altura son iguales.

`object-fit: cover` ayuda a que la imagen ocupe el espacio sin deformarse.

---

## 24. Dar estilo al menú

### Qué vamos a hacer

Aplicaremos un color de fondo y estilos a los enlaces del menú.

### Escribe este código

```css
.site-nav {
    background: #d9674f;
}

.nav-list {
    display: flex;
    gap: 0.25rem;
    overflow-x: auto;
    padding: 0.8rem 0;
}

.nav-list a {
    padding: 0.3rem 0.65rem;
    color: #fffaf1;
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
}
```

Un selector como `.nav-list a` significa “los enlaces `a` que están dentro de un elemento con la clase `nav-list`”.

`text-decoration: none` elimina el subrayado habitual de los enlaces. El enlace sigue siendo un enlace; solo cambia su aspecto.

`overflow-x: auto` permite desplazarse horizontalmente si el menú no cabe en una pantalla pequeña.

---

## 25. Dar estilo a las secciones

### Qué es una clase

Una clase es un nombre reutilizable que podemos escribir en HTML y seleccionar en CSS.

Ejemplo:

```html
<section class="seccion">
    <h2>Sobre mí</h2>
</section>
```

```css
.seccion {
    padding: 3rem 0;
}
```

En nuestro proyecto utilizamos la clase `content-section` en las secciones principales.

### Escribe este código

```css
.content-section {
    padding: 3rem 0;
    border-bottom: 1px solid #d9d2c5;
}

.content-section h2 {
    margin-bottom: 1.25rem;
    font-size: 2rem;
}
```

`border-bottom` crea una línea inferior que separa visualmente las secciones.

Una clase permite aplicar el mismo diseño a Sobre mí, Formación, Habilidades y las demás secciones sin repetir una regla diferente para cada una.

---

## 26. Diferencia entre `class` e `id`

Mira este ejemplo:

```html
<section id="sobre-mi" class="content-section">
```

`id="sobre-mi"` identifica un elemento concreto. Lo utilizamos para que el enlace `href="#sobre-mi"` pueda encontrarlo.

`class="content-section"` indica que el elemento pertenece a un grupo que puede compartir estilos con otras secciones.

En CSS, una clase se selecciona con punto:

```css
.content-section {
}
```

Un `id` se selecciona con almohadilla:

```css
#sobre-mi {
}
```

Por ahora, la regla sencilla es:

- `id`: una identificación concreta, normalmente única;
- `class`: un nombre reutilizable para varios elementos.

No utilices un `id` diferente para cada elemento si una clase resuelve el problema.

---

## 27. Crear las tarjetas

### Qué vamos a hacer

Daremos aspecto de tarjeta a las experiencias y proyectos.

### Escribe este código

```css
.timeline-item,
.experience-card,
.project-card {
    padding: 1.25rem;
    background: #fffdf8;
    box-shadow: 0 18px 40px rgba(23, 37, 43, 0.08);
}

.experience-card {
    border-left: 5px solid #d9674f;
}

.timeline-item + .timeline-item {
    margin-top: 1rem;
}
```

`background` da un fondo claro.

`padding` crea espacio entre el texto y el borde de la tarjeta.

`box-shadow` añade una sombra ligera.

`border-left` destaca la tarjeta de experiencia con una línea lateral.

El selector `.timeline-item + .timeline-item` selecciona un elemento que aparece inmediatamente después de otro del mismo tipo. Así separamos los elementos de la formación.

### Comprueba el resultado

Los bloques de formación, experiencia y proyectos deben verse como superficies claras sobre el fondo de la página.

---

## 28. Convertir las habilidades en etiquetas

### Qué vamos a hacer

La lista de habilidades seguirá siendo una lista HTML, pero visualmente parecerá un grupo de etiquetas.

### Escribe este código

```css
.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.skills-list li {
    padding: 0.45rem 0.7rem;
    border: 1px solid #d9d2c5;
    border-radius: 999px;
    background: #fffdf8;
    font-size: 0.8rem;
}
```

`list-style: none` elimina las viñetas porque el diseño ya presenta cada elemento como una etiqueta.

El contenido sigue siendo una lista. CSS solo cambia su presentación.

`border-radius: 999px` produce extremos muy redondeados.

---

## 29. Introducción a Flexbox

Flexbox es una herramienta de CSS para colocar varios elementos de forma ordenada en una fila o en una columna.

No intentaremos aprender todas sus posibilidades. En este proyecto utilizaremos principalmente:

```css
.elementos {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
```

`display: flex` activa Flexbox.

`gap` crea separación entre los elementos.

`flex-wrap: wrap` permite que los elementos pasen a otra línea si no caben.

`justify-content` organiza los elementos en el eje principal. `center` los coloca en el centro.

`align-items` organiza los elementos en el eje cruzado. `center` los alinea en el centro.

En el proyecto usamos Flexbox en la cabecera, el menú, la lista de habilidades y el pie de página. Una sola herramienta sirve para resolver varias necesidades parecidas.

---

## 30. Diseño Mobile First

### Qué significa

Mobile First significa comenzar el diseño pensando en una pantalla pequeña y después ampliar la distribución para pantallas grandes.

### Por qué lo utilizamos

- muchas personas navegan desde un móvil;
- una pantalla pequeña obliga a priorizar el contenido;
- el diseño inicial suele ser más sencillo;
- después podemos añadir mejoras para escritorio.

En el CSS principal del proyecto no suponemos que existe mucho espacio. Los bloques se colocan uno debajo de otro y el menú puede desplazarse horizontalmente si hace falta.

Diseñar primero para móvil no significa hacer una página peor. Significa empezar por el caso que tiene menos espacio.

---

## 31. Nuestra primera media query

### Qué vamos a hacer

Añadiremos reglas que solo funcionarán cuando la pantalla sea suficientemente ancha.

### Escribe este código

Al final de `style.css`, añade:

```css
@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### ¿Qué significa?

Una media query es una condición para CSS.

```css
@media (min-width: 768px) {
```

significa:

> Las reglas que escribamos aquí solo se aplicarán cuando la pantalla mida al menos 768 píxeles de ancho.

En el proyecto, `.projects-grid` tiene una separación vertical en móvil. En una pantalla amplia añadimos dos columnas para colocar los proyectos uno junto al otro.

La regla completa del proyecto también amplía la cabecera, la fotografía, el menú, la formación y el espacio interior de las secciones dentro de esta única media query.

### Comprueba el resultado

Reduce la ventana del navegador: los proyectos se verán en una columna. Amplíala: pasarán a dos columnas.

---

## 32. Probar el responsive

### Prueba sencilla

1. Abre la página en el navegador.
2. Haz la ventana más estrecha.
3. Observa que el contenido sigue siendo legible.
4. Haz la ventana más ancha.
5. Observa que los proyectos se colocan en dos columnas.

### Herramientas de desarrollador

Si el navegador lo permite, abre las herramientas de desarrollador con `F12` o con el menú contextual **Inspeccionar**.

Busca el icono de dispositivo móvil. Al activarlo podrás elegir tamaños habituales de teléfono y tablet.

No necesitas aprender todas las herramientas ahora. Solo comprueba que la página no queda cortada y que se puede leer.

### Qué debemos observar

- la cabecera conserva la imagen y el texto;
- el menú se puede recorrer en una pantalla estrecha;
- las secciones no se salen de la ventana;
- las etiquetas de habilidades pasan a nuevas líneas;
- los proyectos se organizan en una o dos columnas según el espacio.

---

## 33. Revisar nuestro proyecto

Utiliza esta checklist antes de dar el trabajo por terminado:

- [ ] `index.html` se abre en el navegador;
- [ ] `style.css` está dentro de la carpeta `css`;
- [ ] el CSS está enlazado con `<link>`;
- [ ] la fotografía aparece;
- [ ] el texto alternativo de la fotografía existe;
- [ ] el menú lleva a las secciones correctas;
- [ ] los enlaces de contacto funcionan;
- [ ] el diseño móvil es legible;
- [ ] el diseño de escritorio utiliza el espacio disponible;
- [ ] no se ha utilizado JavaScript ni un framework;
- [ ] los nombres de archivos y carpetas coinciden exactamente.

La comprobación es parte del desarrollo. No es necesario esperar al final para mirar si algo funciona.

---

## 34. Errores frecuentes

### La imagen no aparece

Compara la ruta del HTML:

```html
src="img/perfil.jpg"
```

Comprueba que:

- existe la carpeta `img`;
- el archivo se llama `perfil.jpg`;
- el archivo está dentro de `img`;
- no se ha escrito `images` en vez de `img`;
- no se ha utilizado `.jpeg` cuando el archivo es `.jpg`.

### El CSS no funciona

Revisa el enlace:

```html
<link rel="stylesheet" href="css/style.css">
```

Comprueba que el enlace está dentro de `<head>`, que la carpeta se llama `css` y que el archivo se llama `style.css`.

### Un enlace interno no funciona

Compara:

```html
href="#contacto"
```

con:

```html
id="contacto"
```

El texto debe coincidir exactamente, incluyendo guiones y acentos. Es mejor evitar acentos en los valores de `id`.

### He cambiado CSS pero no veo nada

Guarda el archivo y actualiza el navegador. Después revisa que el selector coincida con la clase del HTML.

Por ejemplo, esta clase:

```html
<section class="content-section">
```

se selecciona así:

```css
.content-section {
}
```

### Todo aparece desordenado

Revisa que las etiquetas HTML estén cerradas y anidadas correctamente. En CSS revisa que cada regla tenga sus llaves `{ }`.

### El menú no cabe en móvil

En este proyecto se utiliza `overflow-x: auto` para que el menú pueda desplazarse horizontalmente. No es necesario que todos los enlaces estén visibles a la vez si se puede recorrer el menú.

### Una tarjeta ocupa demasiado

Revisa el `padding`, el tamaño del texto y el ancho del contenedor. Haz un cambio pequeño, guarda y comprueba de nuevo.

---

## 35. Conceptos que hemos aprendido

### HTML

- etiquetas de apertura y cierre;
- elementos HTML;
- atributos;
- anidamiento;
- `h1`, `h2` y `h3`;
- párrafos;
- imágenes;
- rutas relativas;
- enlaces internos y externos;
- listas `ul` y `li`;
- estructura semántica con `header`, `nav`, `main`, `section`, `article` y `footer`;
- clases;
- identificadores.

### CSS

- selectores;
- propiedades y valores;
- colores;
- familias tipográficas;
- tamaños;
- `margin`;
- `padding`;
- bordes;
- `border-radius`;
- `box-shadow`;
- `display: flex`;
- `gap`;
- `flex-wrap`;
- `justify-content`;
- `align-items`;
- media queries;
- Mobile First.

También hemos practicado hábitos importantes: guardar con frecuencia, comprobar cambios pequeños, revisar rutas y utilizar la indentación para leer mejor el código.

---

## 36. Reto para el alumno

Realiza estos ejercicios sin buscar conceptos nuevos.

### Nivel 1: personalizar contenido

- cambia “Ana López” por tu nombre;
- cambia la profesión;
- sustituye los textos de Sobre mí;
- cambia el año de las formaciones;
- coloca tu fotografía en `img/perfil.jpg`.

### Nivel 2: personalizar el diseño

- cambia el color de fondo de `--paper`;
- cambia el color de acento de `--accent`;
- añade una habilidad;
- añade un tercer proyecto;
- modifica el texto de los enlaces de contacto.

### Nivel 3: ampliar la estructura

- añade una sección llamada Idiomas;
- crea una tarjeta de proyecto adicional;
- cambia la distribución de proyectos en escritorio;
- añade otro elemento de experiencia utilizando la misma estructura;
- crea un enlace del footer a una sección existente.

Haz un cambio cada vez. Si algo falla, vuelve a revisar el último cambio realizado.

---

## 37. Resultado final

### Estructura definitiva

```text
curriculum-digital/
├── index.html
├── css/
│   └── style.css
└── img/
    └── perfil.jpg
```

### HTML completo

El siguiente código corresponde al `index.html` del proyecto. Si has hecho los pasos anteriores, debe coincidir con este resultado:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Curriculum digital y portfolio de Ana López.">
  <title>Ana López | Curriculum digital</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Cabecera principal: presenta a la persona y su perfil profesional. -->
  <header class="site-header" id="inicio">
    <div class="container header-content">
      <img class="profile-image" src="img/perfil.jpg" alt="Retrato de Ana López">
      <div>
        <p class="eyebrow">Curriculum digital</p>
        <h1>Ana López</h1>
        <p class="subtitle">Diseñadora web en formación</p>
      </div>
    </div>
  </header>

  <!-- Navegación interna: cada enlace lleva a una sección de la misma página. -->
  <nav class="site-nav" aria-label="Navegación principal">
    <div class="container nav-list">
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#formacion">Formación</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </div>
  </nav>

  <main class="container page-content">
    <section class="content-section intro-section" id="sobre-mi" aria-labelledby="sobre-mi-title">
      <p class="section-label">01 / Perfil</p>
      <h2 id="sobre-mi-title">Sobre mí</h2>
      <p>Estoy aprendiendo a crear páginas web claras, accesibles y adaptadas a distintos dispositivos. Me gusta transformar ideas sencillas en experiencias digitales útiles.</p>
    </section>

    <section class="content-section" id="formacion" aria-labelledby="formacion-title">
      <p class="section-label">02 / Aprendizaje</p>
      <h2 id="formacion-title">Formación</h2>
      <div class="timeline">
        <article class="timeline-item">
          <p class="date">2026</p>
          <div>
            <h3>IFCD0210 - Desarrollo de páginas web</h3>
            <p>Formación en HTML5, CSS3, diseño responsive y buenas prácticas de accesibilidad.</p>
          </div>
        </article>
        <article class="timeline-item">
          <p class="date">2024</p>
          <div>
            <h3>Curso de herramientas digitales</h3>
            <p>Organización de contenidos, comunicación online y trabajo con herramientas ofimáticas.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="content-section" id="habilidades" aria-labelledby="habilidades-title">
      <p class="section-label">03 / Recursos</p>
      <h2 id="habilidades-title">Habilidades</h2>
      <ul class="skills-list">
        <li>HTML5 semántico</li>
        <li>CSS3 y Flexbox</li>
        <li>Diseño responsive</li>
        <li>Accesibilidad web</li>
        <li>Trabajo en equipo</li>
        <li>Aprendizaje continuo</li>
      </ul>
    </section>

    <section class="content-section" id="experiencia" aria-labelledby="experiencia-title">
      <p class="section-label">04 / Trayectoria</p>
      <h2 id="experiencia-title">Experiencia</h2>
      <article class="experience-card">
        <p class="date">2025 - Actualidad</p>
        <h3>Proyecto personal de aprendizaje web</h3>
        <p>Creación de ejercicios y pequeñas páginas informativas para practicar estructura, estilos y presentación de contenidos.</p>
      </article>
    </section>

    <section class="content-section" id="proyectos" aria-labelledby="proyectos-title">
      <p class="section-label">05 / Trabajo</p>
      <h2 id="proyectos-title">Proyectos</h2>
      <div class="projects-grid">
        <article class="project-card">
          <h3>Portfolio de aprendizaje</h3>
          <p>Una página sencilla para mostrar formación, habilidades y objetivos profesionales.</p>
          <span class="tag">HTML + CSS</span>
        </article>
        <article class="project-card">
          <h3>Ficha de negocio local</h3>
          <p>Diseño de una página informativa con datos de contacto y servicios principales.</p>
          <span class="tag">Responsive</span>
        </article>
      </div>
    </section>

    <section class="content-section contact-section" id="contacto" aria-labelledby="contacto-title">
      <p class="section-label">06 / Hablemos</p>
      <h2 id="contacto-title">Contacto</h2>
      <p>¿Quieres conocer mi trabajo o colaborar en un proyecto?</p>
      <address>
        <a href="mailto:ana.lopez@example.com">ana.lopez@example.com</a>
        <a href="tel:+34600000000">+34 600 000 000</a>
        <span>Madrid, España</span>
      </address>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <p>&copy; 2026 Ana López</p>
      <a href="#inicio">Volver al inicio</a>
    </div>
  </footer>
</body>
</html>
```

### CSS completo

El siguiente código corresponde a `css/style.css`:

```css
/* Variables: cambiar estos valores permite modificar el aspecto general. */
:root {
  --ink: #17252b;
  --muted: #5f7076;
  --paper: #f5f1e8;
  --card: #fffdf8;
  --accent: #d9674f;
  --accent-dark: #a94c3a;
  --line: #d9d2c5;
  --shadow: 0 18px 40px rgba(23, 37, 43, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.6;
}

a {
  color: inherit;
}

a:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}

.container {
  width: min(100% - 2rem, 980px);
  margin: 0 auto;
}

.site-header {
  padding: 3rem 0 2.5rem;
  background: var(--ink);
  color: var(--card);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.profile-image {
  width: 88px;
  height: 88px;
  border: 4px solid var(--accent);
  border-radius: 50%;
  object-fit: cover;
}

.eyebrow,
.section-label,
.date,
.tag {
  margin: 0;
  color: var(--accent);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0.2rem;
  font-size: clamp(2.5rem, 10vw, 4.8rem);
  line-height: 0.95;
}

h2 {
  margin-bottom: 1.25rem;
  font-size: 2rem;
  line-height: 1.1;
}

h3 {
  margin-bottom: 0.35rem;
  font-size: 1.2rem;
  line-height: 1.25;
}

.subtitle {
  margin-bottom: 0;
  color: #d8e0dd;
  font-family: Arial, Helvetica, sans-serif;
}

.site-nav {
  background: var(--accent);
}

.nav-list {
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;
  padding: 0.8rem 0;
  scrollbar-width: thin;
}

.nav-list a {
  flex: 0 0 auto;
  padding: 0.3rem 0.65rem;
  color: #fffaf1;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
}

.page-content {
  padding-top: 1rem;
}

.content-section {
  padding: 3rem 0;
  border-bottom: 1px solid var(--line);
}

.content-section > p:not(.section-label),
.timeline-item p:not(.date),
.experience-card p:not(.date),
.project-card p {
  max-width: 66ch;
  color: var(--muted);
}

.intro-section {
  padding-top: 2.5rem;
}

.timeline-item,
.experience-card,
.project-card {
  padding: 1.25rem;
  background: var(--card);
  box-shadow: var(--shadow);
}

.timeline-item + .timeline-item {
  margin-top: 1rem;
}

.date {
  margin-bottom: 0.45rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skills-list li,
.tag {
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--card);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
}

.experience-card {
  border-left: 5px solid var(--accent);
}

.projects-grid {
  display: grid;
  gap: 1rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-card .tag {
  margin-top: auto;
  color: var(--accent-dark);
}

.contact-section address {
  display: grid;
  gap: 0.55rem;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
}

.contact-section a {
  color: var(--accent-dark);
  font-weight: 700;
}

.site-footer {
  padding: 1.5rem 0;
  background: var(--ink);
  color: #d8e0dd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.footer-content p {
  margin-bottom: 0;
}

.footer-content a {
  color: #fffaf1;
}

/* En pantallas amplias, aprovechamos el espacio con columnas sencillas. */
@media (min-width: 768px) {
  .site-header {
    padding: 5rem 0 4rem;
  }

  .header-content {
    gap: 2rem;
  }

  .profile-image {
    width: 132px;
    height: 132px;
  }

  .nav-list {
    justify-content: center;
    gap: 1rem;
  }

  .content-section {
    padding: 4.5rem 2rem;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

El archivo `perfil.jpg` debe permanecer dentro de `img`. Si sustituyes la fotografía, conserva ese nombre o actualiza la ruta `src` del HTML.

Con esto tenemos un primer proyecto completo: una estructura HTML comprensible, un diseño CSS separado y una página que funciona en móvil y escritorio sin JavaScript.
