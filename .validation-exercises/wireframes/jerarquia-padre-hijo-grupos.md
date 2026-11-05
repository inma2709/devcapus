# Jerarquía en Penpot: relación padre-hijo y grupos

Cuando empezamos a trabajar con Penpot no basta con colocar elementos visualmente sobre un Board. También necesitamos **organizar la estructura del diseño**.

Para ello es importante entender dos conceptos:

* la relación **padre-hijo**;
* los **grupos**.

Aunque están relacionados, no significan exactamente lo mismo.

---

# 1. ¿Qué significa padre e hijo?

En Penpot hablamos de relación **padre-hijo** cuando un elemento contiene a otro.

Por ejemplo:

```text
CV - Mobile
├── Header
├── Hero
└── Footer
```

En esta estructura:

* `CV - Mobile` es el **padre**;
* `Header`, `Hero` y `Footer` son sus **hijos**.

La relación padre-hijo sirve para entender **quién contiene a quién** dentro del diseño.

## Idea clave

> **Padre = elemento que contiene.**

> **Hijo = elemento contenido.**

---

# 2. Cómo reconocer una relación padre-hijo

La forma más sencilla de comprobarlo es mirar el **panel de capas**.

Si vemos:

```text
CV - Mobile
    Header
    Hero
    Footer
```

el sangrado hacia la derecha indica que esos elementos están dentro del Board.

En cambio, si vemos:

```text
Header
Hero
Footer
CV - Mobile
```

todos están al mismo nivel.

Eso significa que son elementos independientes entre sí.

---

# 3. Un elemento puede parecer estar dentro y no estarlo

Este es un error muy frecuente.

Podemos tener visualmente:

```text
┌──────────────────────────────┐
│                              │
│        [ BOTÓN ]             │
│                              │
└──────────────────────────────┘
```

y pensar que el botón pertenece al Board.

Pero en el panel de capas podría aparecer:

```text
PAGE
├── Botón
└── CV - Mobile
```

En ese caso el botón **no es hijo del Board**.

Solo está colocado encima visualmente.

La estructura correcta sería:

```text
PAGE
└── CV - Mobile
    └── Botón
```

Por eso el panel de capas es tan importante.

> **La posición visual no determina necesariamente la estructura.**

---

# 4. ¿Cómo se crea una relación padre-hijo?

Hay varias formas.

## Crear el elemento directamente dentro del padre

Si estás trabajando dentro de un Board y creas allí un texto, una imagen o una forma, Penpot puede colocarlo como hijo del Board.

Después debes comprobarlo en el panel de capas.

---

## Arrastrar una capa dentro de otra

Si un elemento ya existe fuera del Board:

```text
PAGE
├── Botón
└── CV - Mobile
```

puedes arrastrar `Botón` sobre `CV - Mobile` desde el panel de capas.

Debe quedar:

```text
PAGE
└── CV - Mobile
    └── Botón
```

Ahora existe una relación padre-hijo.

---

# 5. ¿Solo los Boards pueden tener hijos?

No.

La relación padre-hijo puede existir en diferentes estructuras.

Por ejemplo:

```text
Board
└── elementos
```

```text
Group
└── elementos
```

```text
Layout
└── elementos
```

```text
Component
└── elementos
```

Por tanto, **padre-hijo es un concepto general de jerarquía**.

No es una herramienta concreta.

---

# 6. ¿Qué es un grupo?

Un **grupo** es una herramienta que permite reunir varios elementos para tratarlos como una sola unidad.

Por ejemplo, tenemos:

```text
Rectangle

¿Quién soy?
```

Son dos objetos independientes.

Si movemos uno, el otro puede quedarse en su sitio.

Podemos agruparlos y obtener:

```text
Titulo-Seccion
├── Rectangle
└── ¿Quién soy?
```

Ahora ambos forman parte de un mismo conjunto.

---

# 7. Qué relación hay entre grupo y padre-hijo

Cuando creamos un grupo, estamos creando también una relación padre-hijo.

Por ejemplo:

```text
Titulo-Seccion
├── Rectangle
└── ¿Quién soy?
```

Aquí:

* `Titulo-Seccion` es el **grupo**;
* el grupo es también el **padre**;
* `Rectangle` y `¿Quién soy?` son sus **hijos**.

Por tanto:

> **Todo grupo crea una relación padre-hijo.**

Pero:

> **No toda relación padre-hijo implica que exista un grupo.**

Por ejemplo:

```text
CV - Mobile
├── Header
└── Hero
```

Aquí existe relación padre-hijo, pero `CV - Mobile` es un Board, no un grupo.

---

# 8. Entonces, ¿cuál es la diferencia?

La diferencia fundamental es:

> **Padre-hijo describe una relación de estructura.**

> **Grupo es una herramienta concreta para reunir elementos.**

Podemos resumirlo así:

| Concepto   | Qué significa                         |
| ---------- | ------------------------------------- |
| Padre-hijo | Quién contiene a quién                |
| Grupo      | Reunir varios elementos en una unidad |

---

# 9. ¿Para qué sirve un grupo?

Un grupo es útil cuando varios elementos forman una misma unidad visual o funcional.

Por ejemplo:

```text
Presentacion
├── Foto
├── Nombre
├── Profesión
└── Descripción
```

Si seleccionamos `Presentacion` y lo movemos, todos sus hijos se moverán juntos.

Esto nos ayuda a:

* mover varios elementos a la vez;
* mantenerlos relacionados;
* evitar que se descoloquen;
* organizar mejor las capas;
* seleccionar conjuntos completos;
* crear una estructura más comprensible.

---

# 10. Cómo crear un grupo

Supongamos que tenemos:

```text
Rectangle
¿Quién soy?
```

## Paso 1

Selecciona el primer elemento.

## Paso 2

Mantén pulsada:

```text
Shift
```

y selecciona el segundo.

## Paso 3

Con ambos seleccionados, pulsa:

```text
Ctrl + G
```

en Windows o Linux.

En macOS:

```text
Cmd + G
```

## Paso 4

Penpot creará un grupo:

```text
Group
├── Rectangle
└── ¿Quién soy?
```

## Paso 5

Renómbralo.

Por ejemplo:

```text
Titulo-Quien-soy
```

No conviene dejar nombres como:

```text
Group
Group 2
Group 3
```

porque dificultan la lectura del proyecto.

---

# 11. Un grupo no fusiona los elementos

Agrupar no convierte varios objetos en uno solo.

Si tenemos:

```text
Titulo-Quien-soy
├── Rectangle
└── ¿Quién soy?
```

seguimos pudiendo:

* editar el texto;
* cambiar el color del rectángulo;
* modificar el tamaño de cada elemento;
* mover un hijo dentro del grupo.

La ventaja es que también podemos seleccionar el grupo completo y mover todo junto.

> **Agrupar organiza, pero no fusiona.**

---

# 12. Los grupos pueden contener otros grupos

Podemos construir estructuras más complejas.

Por ejemplo:

```text
Seccion-Quien-soy
├── Titulo-Seccion
│   ├── Fondo
│   └── ¿Quién soy?
│
└── Presentacion
    ├── Foto
    ├── Nombre
    ├── Profesión
    └── Descripción
```

Aquí tenemos varios niveles de relación padre-hijo.

Esto se llama **jerarquía**.

---

# 13. Padre, hijo y hermano

Además de padre e hijo, podemos hablar de **hermanos**.

Por ejemplo:

```text
Presentacion
├── Foto
├── Nombre
└── Profesión
```

`Foto`, `Nombre` y `Profesión` tienen el mismo padre.

Por tanto, son **hermanos** entre sí.

## Resumen

```text
Presentacion        ← padre
├── Foto            ← hijo
├── Nombre          ← hijo
└── Profesión       ← hijo
```

Y los tres hijos son hermanos.

---

# 14. Grupo y componente no son lo mismo

No debemos confundirlos.

## Grupo

Sirve principalmente para organizar y mover elementos juntos.

Ejemplo:

```text
Presentacion
├── Foto
├── Nombre
└── Profesión
```

## Componente

Sirve para crear una pieza que queremos reutilizar.

Por ejemplo:

```text
Componente: Titulo-Seccion
├── Fondo
└── Texto
```

Podríamos reutilizarlo para:

```text
¿Quién soy?
Experiencia
Proyectos
Contacto
```

La diferencia esencial es:

> **Grupo = organizar.**

> **Componente = reutilizar.**

---

# 15. Grupo y Layout tampoco son lo mismo

Un grupo mantiene elementos juntos, pero no organiza automáticamente cómo se distribuyen.

Por ejemplo:

```text
Presentacion
├── Foto
├── Nombre
├── Profesión
└── Descripción
```

Al crear el grupo, Penpot mantiene las posiciones que ya tenían.

El grupo no define automáticamente:

* separación;
* padding;
* alineación;
* dirección;
* distribución.

Para eso utilizaremos más adelante **Layouts**.

Podemos resumir:

| Elemento   | Qué aporta                |
| ---------- | ------------------------- |
| Padre-hijo | Jerarquía                 |
| Grupo      | Agrupación                |
| Layout     | Agrupación + distribución |
| Componente | Reutilización             |

---

# 16. Ejemplo en nuestro CV digital

Podemos organizar nuestro Board móvil así:

```text
CV - Mobile
├── Header
├── Seccion-Quien-soy
│   ├── Titulo-Seccion
│   │   ├── Fondo
│   │   └── ¿Quién soy?
│   │
│   └── Presentacion
│       ├── Foto
│       ├── Nombre
│       ├── Profesión
│       └── Descripción
│
├── Experiencia
├── Proyectos
└── Footer
```

Esta estructura nos permite entender rápidamente:

* qué pertenece al Board;
* qué elementos forman cada sección;
* qué grupos existen;
* qué relación tiene cada elemento con los demás.

---

# 17. Relación con HTML

Más adelante encontraremos una idea muy similar en HTML.

Por ejemplo:

```html
<section>
    <h2>¿Quién soy?</h2>

    <p>Desarrolladora web...</p>
</section>
```

Aquí:

```text
section
├── h2
└── p
```

También existe una relación padre-hijo.

Por eso aprender a leer la jerarquía en Penpot nos ayudará después a comprender mejor la estructura de una página web.

---

# 18. Error frecuente

No agrupes elementos simplemente porque están cerca.

Antes de crear un grupo pregúntate:

> **¿Estos elementos forman realmente una misma unidad?**

Si la respuesta es sí, el grupo tiene sentido.

Por ejemplo:

```text
Foto + Nombre + Profesión
```

sí pueden formar un grupo `Presentacion`.

Pero quizá no tenga sentido agrupar:

```text
Header + Proyecto 2
```

solo porque visualmente están próximos.

---

# 19. Actividad práctica

Crea:

1. un rectángulo;
2. un texto `¿Quién soy?`.

Comprueba primero las capas:

```text
Rectangle
¿Quién soy?
```

Después:

1. selecciona ambos;
2. pulsa `Ctrl + G`;
3. renombra el grupo como `Titulo-Quien-soy`.

La estructura deberá quedar:

```text
Titulo-Quien-soy
├── Rectangle
└── ¿Quién soy?
```

Ahora:

* mueve el grupo;
* comprueba que ambos elementos se desplazan juntos;
* selecciona solo el texto;
* modifica su tamaño;
* comprueba que sigue siendo editable.

---

# 20. Lo que debes recordar

> **Padre-hijo es una relación de jerarquía.**

> **Un grupo es una herramienta para reunir elementos y crear una unidad organizada.**

> **Todo grupo crea relaciones padre-hijo, pero no todas las relaciones padre-hijo proceden de un grupo.**

Y una última fórmula útil:

```text
PADRE-HIJO
= estructura

GRUPO
= organización

LAYOUT
= distribución

COMPONENTE
= reutilización
```

Esta distinción será especialmente importante cuando empecemos a trabajar con **Flex Layout, Grid y componentes reutilizables**.
