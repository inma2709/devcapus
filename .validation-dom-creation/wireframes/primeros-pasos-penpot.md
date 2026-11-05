# Primeros pasos en Penpot: lienzo, Board, capas y rectángulos

Antes de empezar a diseñar una web en Penpot, hay cuatro conceptos que conviene entender muy bien:

**lienzo, Board, capas y rectángulos**.

Si estos conceptos quedan claros desde el principio, después será mucho más fácil trabajar con prototipos, responsive, componentes y layouts.

---

# 1. El lienzo: nuestra mesa de trabajo

Al abrir un archivo de Penpot vemos una gran zona de trabajo.

Esa zona es el **lienzo**.

Podemos imaginarlo como una **mesa enorme** sobre la que colocamos nuestros diseños.

El lienzo:

* no representa una pantalla concreta;
* no es un móvil;
* no es un portátil;
* no es una página web;
* simplemente es el espacio donde organizamos todo.

Podemos colocar en él varios diseños a la vez.

Por ejemplo:

```text
LIENZO
│
├── CV - Mobile
├── CV - Tablet
└── CV - Desktop
```

Los tres diseños pueden estar visibles al mismo tiempo dentro del mismo lienzo.

## Idea clave

> **El lienzo es la mesa de trabajo.**

No diseñamos “la web” directamente sobre el lienzo.

Sobre él colocamos los **Boards**.

---

# 2. ¿Qué es un Board?

Un **Board** es una zona que representa una **pantalla o vista concreta**.

Por ejemplo, si queremos diseñar nuestro CV para móvil, podemos crear:

```text
CV - Mobile
360 × 780
```

Ese Board representa aproximadamente la pantalla sobre la que queremos diseñar.

Después podemos crear otro:

```text
CV - Desktop
1440 × 1024
```

Ahora tendríamos:

```text
LIENZO
│
├── Board: CV - Mobile
│
└── Board: CV - Desktop
```

Cada Board es independiente.

---

# 3. El Board ya es la pantalla

Este punto es muy importante.

Si hemos creado un Board de:

```text
360 × 780
```

para móvil, **no necesitamos crear otro rectángulo blanco de 360 × 780 dentro del Board**.

El propio Board ya representa la pantalla.

A partir de ahí empezamos a colocar dentro:

* header;
* textos;
* imágenes;
* botones;
* tarjetas;
* footer.

Por ejemplo:

```text
CV - Mobile
├── Header
├── Hero
├── Sobre mí
├── Tecnologías
├── Experiencia
├── Proyectos
├── Contacto
└── Footer
```

---

# 4. Board no significa “sección”

Otro error frecuente es crear un Board para cada parte de la página.

Por ejemplo:

```text
Board Header
Board Hero
Board Proyectos
Board Footer
```

Eso no es lo normal.

Para nuestro CV, lo habitual será tener:

```text
1 Board = 1 pantalla
```

y dentro de ese Board colocar las distintas secciones.

---

# 5. Entonces, ¿para qué sirve un rectángulo?

Un **rectángulo** es simplemente una **forma visual**.

Puede utilizarse para representar:

* el fondo de un header;
* una tarjeta;
* un botón;
* una imagen provisional;
* una sección de color;
* un bloque decorativo.

Por ejemplo:

```text
CV - Mobile   ← BOARD
│
├── Header    ← RECTÁNGULO
├── Hero
├── Card proyecto   ← RECTÁNGULO
└── Footer
```

---

# 6. Diferencia fundamental: Board vs Rectángulo

Esta es la comparación que el alumno debe recordar:

| Board                                             | Rectángulo                                   |
| ------------------------------------------------- | -------------------------------------------- |
| Representa una pantalla o vista                   | Representa una forma visual                  |
| Puede contener otros elementos                    | Es un elemento del diseño                    |
| Se usa para móvil, desktop, modal, pantalla, etc. | Se usa para header, tarjeta, botón, fondo... |
| Participa directamente en prototipado             | No representa una pantalla completa          |
| Organiza elementos                                | Dibuja elementos                             |

## Regla sencilla

> **Board = pantalla.**

> **Rectángulo = pieza visual dentro de la pantalla.**

---

# 7. Ejemplo práctico

Queremos diseñar un CV para móvil.

Primero creamos:

```text
Board
360 × 780
```

Lo renombramos:

```text
CV - Mobile
```

Ahora añadimos un rectángulo en la parte superior.

Ese rectángulo podría ser:

```text
Header
```

La estructura sería:

```text
CV - Mobile
└── Header
```

El Board representa el móvil.

El rectángulo representa la cabecera.

---

# 8. Cómo saber si algo es un Board o un rectángulo

Puedes comprobarlo en el panel de capas.

Por ejemplo:

```text
PAGE 1
└── CV - Mobile
    ├── Header
    ├── Foto
    ├── Botón
    └── Footer
```

El elemento principal es el Board.

Los demás están dentro.

Si tienes:

```text
PAGE 1
├── Botón
└── CV - Mobile
```

significa que el botón está fuera del Board.

Aunque visualmente parezca estar encima.

---

# 9. Las capas: cómo se organiza el diseño

Penpot organiza todos los elementos mediante **capas**.

Cada vez que creamos algo, aparece una nueva capa.

Por ejemplo:

```text
CV - Mobile
├── Header
├── Título
├── Foto
├── Botón
└── Footer
```

Esto representa la estructura real del diseño.

El panel de capas es importante porque permite saber:

* qué contiene cada Board;
* qué elemento está dentro de otro;
* qué elemento está fuera;
* en qué orden están;
* qué podemos seleccionar;
* qué podemos bloquear u ocultar.

---

# 10. La jerarquía padre-hijo

Un Board puede contener elementos.

En ese caso decimos que existe una relación:

```text
padre
└── hijo
```

Por ejemplo:

```text
CV - Mobile
└── Header
    ├── Logo
    └── Menú
```

Aquí:

* `CV - Mobile` es padre de `Header`;
* `Header` contiene a `Logo` y `Menú`.

Esta forma de pensar será muy útil más adelante cuando trabajemos con HTML.

---

# 11. Parece estar dentro, pero puede no estarlo

Este es uno de los errores más frecuentes en Penpot.

Podemos tener visualmente:

```text
┌──────────────────────────┐
│                          │
│       [ BOTÓN ]          │
│                          │
└──────────────────────────┘
```

y pensar:

> “El botón está dentro del Board”.

Pero en capas podemos tener:

```text
PAGE
├── Botón
└── Board
```

Eso significa que **no está realmente dentro**.

Solo está colocado encima visualmente.

---

# 12. La estructura correcta

Debe aparecer así:

```text
PAGE
└── Board
    └── Botón
```

El sangrado en el panel de capas indica que el botón es hijo del Board.

Esto es especialmente importante para:

* prototipos;
* navegación;
* exportación;
* organización;
* layouts.

---

# 13. Cómo meter un elemento dentro de un Board

Una forma sencilla es utilizar el panel de capas.

1. Localiza el elemento.
2. Arrástralo sobre el Board.
3. Espera a que Penpot indique que quedará contenido dentro.
4. Suéltalo.
5. Comprueba el sangrado.

Debería quedar:

```text
Board
    Botón
```

y no:

```text
Botón
Board
```

---

# 14. ¿Qué ocurre con el prototipado?

Penpot utiliza los Boards como pantallas del prototipo.

Por ejemplo:

```text
CV
   ↓
Proyecto
   ↓
Contacto
```

Cada una de esas vistas puede ser un Board.

Después podemos crear interacciones entre ellas.

Por eso es importante que los elementos interactivos pertenezcan correctamente al Board.

---

# 15. Ejemplo con un botón

Supongamos que tenemos:

```text
CV - Mobile
└── Botón "Ver proyecto"
```

Al seleccionar el botón en modo Prototipo podemos definir:

```text
En click
   ↓
Navegar a
   ↓
Proyecto - Detalle
```

Pero si el botón está fuera del Board, podemos tener problemas al construir el flujo.

---

# 16. Board para diferentes tamaños

En el mismo lienzo podemos crear varios Boards.

Por ejemplo:

```text
LIENZO
│
├── CV - Mobile
│   360 × 780
│
├── CV - Tablet
│   768 × 1024
│
└── CV - Desktop
    1440 × 1024
```

No necesitamos cambiar de archivo.

Todos pueden convivir en el mismo lienzo.

---

# 17. ¿Dónde colocamos los Boards?

Donde nos resulte cómodo.

Por ejemplo:

```text
[MOBILE]     [TABLET]         [DESKTOP]
```

o:

```text
[MOBILE]

[TABLET]

[DESKTOP]
```

El lienzo es prácticamente ilimitado.

---

# 18. El fondo del lienzo

El fondo que vemos alrededor de los Boards pertenece al **lienzo**.

Podemos cambiar su color para trabajar más cómodamente.

Por ejemplo:

* gris;
* azul;
* oscuro.

Ese color no forma parte de nuestra web.

Es únicamente el fondo del entorno de trabajo.

---

# 19. La barra de herramientas

La barra flotante negra que aparece sobre el lienzo pertenece a Penpot.

Contiene herramientas como:

* seleccionar;
* Board;
* rectángulo;
* texto;
* imagen;
* dibujo/vector.

No forma parte del diseño.

Aunque esté visualmente encima de nuestro Board:

> **no se exporta y no aparecerá en nuestra web.**

---

# 20. Primer ejercicio completo

Vamos a crear una estructura mínima.

## Paso 1. Crear el Board

Selecciona la herramienta Board.

Crea:

```text
360 × 780
```

Renómbralo:

```text
CV - Mobile
```

---

## Paso 2. Crear el Header

Selecciona Rectángulo.

Dibuja una franja en la parte superior.

Renómbrala:

```text
Header
```

---

## Paso 3. Crear un título

Selecciona Texto.

Escribe:

```text
Laura Martín
```

Renombra la capa:

```text
Nombre
```

---

## Paso 4. Crear un botón

Dibuja un rectángulo pequeño.

Añade texto:

```text
Ver proyectos
```

Agrupa ambos elementos o mantenlos organizados.

---

# 21. Comprueba las capas

La estructura debería parecerse a:

```text
CV - Mobile
├── Header
├── Nombre
├── Botón
└── ...
```

Si aparece:

```text
Header
Nombre
Botón
CV - Mobile
```

significa que están fuera del Board.

Corrígelo.

---

# 22. No confundir diseño con organización

Podemos tener dos diseños visualmente idénticos.

### Diseño A

```text
PAGE
├── Header
├── Botón
└── Board
```

### Diseño B

```text
PAGE
└── Board
    ├── Header
    └── Botón
```

Visualmente podrían verse igual.

Pero estructuralmente solo el segundo está correctamente organizado.

---

# 23. Relación con HTML

Más adelante veremos algo muy parecido.

No es lo mismo:

```html
<button>Contactar</button>

<header></header>
```

que:

```html
<header>
    <button>Contactar</button>
</header>
```

Puede que visualmente logremos colocarlos igual con CSS.

Pero la estructura no es la misma.

Penpot también trabaja con una jerarquía.

---

# 24. Resumen que debe recordar el alumno

```text
LIENZO
↓
Mesa de trabajo

BOARD
↓
Pantalla concreta

RECTÁNGULO
↓
Forma visual

CAPAS
↓
Organización de los elementos

JERARQUÍA
↓
Qué contiene a qué
```

Y la regla principal:

> **El lienzo contiene Boards.**

> **Los Boards contienen los elementos del diseño.**

> **Un rectángulo no sustituye a un Board.**

> **Un Board no debe utilizarse simplemente como una caja decorativa.**

---

# 25. Ejemplo final de estructura correcta

Para nuestro CV:

```text
PAGE 1
│
├── CV - Mobile
│   ├── Header
│   ├── Hero
│   ├── Sobre mí
│   ├── Tecnologías
│   ├── Experiencia
│   ├── Proyectos
│   ├── Contacto
│   └── Footer
│
└── CV - Desktop
    ├── Header
    ├── Hero
    ├── Sobre mí
    ├── Tecnologías
    ├── Experiencia
    ├── Proyectos
    ├── Contacto
    └── Footer
```

Esta es una buena base para continuar después con **Flex Layout, Grid, componentes, responsive y prototipado**.

