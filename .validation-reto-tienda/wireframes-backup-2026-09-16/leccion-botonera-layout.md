# Lección: crear una botonera con Layout en Penpot

Hasta ahora hemos trabajado colocando elementos manualmente dentro del Board:

* rectángulos;
* textos;
* imágenes;
* grupos.

Ese sistema sirve para aprender la base, pero tiene un límite: cuando el diseño crece, **mover y separar elementos “a mano” se vuelve poco práctico**.

Aquí aparece uno de los conceptos más importantes de Penpot:

# **Layout**

Un Layout es un contenedor que no solo agrupa elementos, sino que también **controla cómo se colocan y se separan entre sí**.

---

# 1. El problema que queremos resolver

Queremos crear una botonera con dos accesos:

```text
[ PROYECTOS ]

[ FORMACIÓN ]
```

Podríamos colocar los dos botones manualmente.

Pero entonces tendríamos que controlar nosotros:

* la distancia entre ellos;
* si están centrados;
* si cambiamos el tamaño;
* si añadimos un tercer botón;
* si modificamos el texto;
* si pasamos de vertical a horizontal.

Un Layout permite que Penpot gestione esas relaciones automáticamente.

---

# 2. Antes de continuar: diferencia entre grupo y Layout

Ya sabemos que un **grupo** sirve para mantener elementos juntos.

Por ejemplo:

```text
Botonera
├── Boton-Proyectos
└── Boton-Formacion
```

Eso permite mover ambos botones como una unidad.

Pero el grupo **no controla automáticamente**:

* la separación;
* la dirección;
* la alineación;
* el espacio interior.

Un Layout sí.

Podemos resumirlo así:

| Grupo                        | Layout                          |
| ---------------------------- | ------------------------------- |
| Agrupa elementos             | Agrupa y organiza               |
| Permite moverlos juntos      | Distribuye automáticamente      |
| Mantiene posiciones manuales | Puede calcular posiciones       |
| No controla gap              | Puede controlar gap             |
| No controla padding          | Puede controlar padding         |
| No define dirección          | Puede ser horizontal o vertical |

La idea clave es:

> **Grupo = organización. Layout = organización + distribución.**

---

# 3. ¿Qué debe ser la botonera?

La botonera completa debería ser un **contenedor**.

Dentro tendrá los botones.

Conceptualmente:

```text
Botonera
├── Boton-Proyectos
└── Boton-Formacion
```

Y cada botón puede tener:

```text
Boton-Proyectos
├── Fondo
└── PROYECTOS
```

```text
Boton-Formacion
├── Fondo
└── FORMACIÓN
```

---

# 4. El rectángulo gris no debería ser el contenedor principal

Esto es importante.

Podemos tener visualmente:

```text
┌───────────────────────┐
│    [PROYECTOS]        │
│                       │
│    [FORMACIÓN]        │
└───────────────────────┘
```

Ese rectángulo gris puede ser el **fondo** de la botonera.

Pero no debería ser el elemento estructural que contiene a los botones.

Mejor:

```text
Botonera
├── Fondo-gris
├── Boton-Proyectos
└── Boton-Formacion
```

Aquí:

* `Botonera` = contenedor;
* `Fondo-gris` = aspecto visual;
* botones = contenido.

---

# 5. Primer paso: crear cada botón

Vamos a crear primero un botón.

## Paso 1

Crea un rectángulo.

Por ejemplo:

```text
140 × 48 px
```

## Paso 2

Añade dentro el texto:

```text
PROYECTOS
```

## Paso 3

Selecciona rectángulo + texto.

## Paso 4

Agrúpalos con:

```text
Ctrl + G
```

## Paso 5

Renombra el grupo:

```text
Boton-Proyectos
```

La estructura queda:

```text
Boton-Proyectos
├── Rectangle
└── PROYECTOS
```

---

# 6. Crea el segundo botón

Puedes duplicar el primero.

Después cambia el texto por:

```text
FORMACIÓN
```

Renombra:

```text
Boton-Formacion
```

Ahora tienes:

```text
Boton-Proyectos
Boton-Formacion
```

---

# 7. Agrupa los dos botones

Selecciona ambos y crea un grupo:

```text
Botonera
├── Boton-Proyectos
└── Boton-Formacion
```

Hasta aquí solo tenemos agrupación.

Ahora viene el paso importante.

---

# 8. Convertir la botonera en Layout

Selecciona el grupo `Botonera`.

En el panel derecho busca la sección:

> **LAYOUT**

Pulsa el botón para añadir un Layout.

Penpot convertirá ese contenedor en un sistema de distribución.

Desde ese momento, sus hijos:

```text
Boton-Proyectos
Boton-Formacion
```

ya no estarán únicamente colocados “a mano”.

El Layout podrá decidir cómo se distribuyen.

---

# 9. Dirección del Layout

Para nuestra botonera móvil queremos:

```text
[ PROYECTOS ]

[ FORMACIÓN ]
```

Eso es una distribución vertical.

Por tanto, selecciona:

> **Dirección vertical / columna**

Conceptualmente equivale a:

```css
flex-direction: column;
```

No necesitamos memorizar todavía el CSS, pero sí entender la relación.

---

# 10. Qué es el gap

El `gap` es la separación entre los hijos del Layout.

Por ejemplo:

```text
[ PROYECTOS ]

      24 px

[ FORMACIÓN ]
```

Podemos definir:

```text
gap = 24
```

Ahora no necesitas mover manualmente el segundo botón.

Penpot mantiene automáticamente esa separación.

## Idea clave

> **Gap = distancia entre elementos hermanos.**

---

# 11. Gap no es margen

No confundas:

* gap;
* margin;
* padding.

Para empezar:

### Gap

Espacio entre elementos.

```text
[ botón ]

   gap

[ botón ]
```

### Padding

Espacio entre el contenido y los bordes del contenedor.

```text
┌──────────────────────────┐
│        padding           │
│   [ botón ]              │
│                          │
│   [ botón ]              │
│        padding           │
└──────────────────────────┘
```

---

# 12. Añadir padding a la botonera

Supongamos que queremos que los botones no toquen los bordes del contenedor.

Podemos poner:

```text
padding-top: 24
padding-bottom: 24
padding-left: 24
padding-right: 24
```

Conceptualmente:

```text
┌──────────────────────────┐
│                          │
│      [ PROYECTOS ]       │
│                          │
│      [ FORMACIÓN ]       │
│                          │
└──────────────────────────┘
```

---

# 13. Qué es la alineación

También debemos decidir dónde se colocan los hijos dentro del Layout.

Por ejemplo:

```text
izquierda
centro
derecha
```

Para nuestra botonera podemos elegir:

> **centrado horizontal**

Entonces ambos botones quedan centrados automáticamente.

---

# 14. Qué es justificar

En Layout también podemos controlar cómo se distribuyen los elementos a lo largo del eje principal.

Por ejemplo:

* inicio;
* centro;
* final;
* space-between;
* otras distribuciones.

En una botonera sencilla vertical, normalmente bastará con:

* dirección vertical;
* gap fijo;
* alineación centrada.

---

# 15. Así debería quedar la estructura

```text
Botonera
├── Boton-Proyectos
│   ├── Fondo
│   └── PROYECTOS
│
└── Boton-Formacion
    ├── Fondo
    └── FORMACIÓN
```

Y el Layout de `Botonera`:

```text
dirección: vertical
gap: 24 px
alineación: centro
padding: 24 px
```

---

# 16. ¿Qué ocurre si añadimos un tercer botón?

Supongamos que añadimos:

```text
EXPERIENCIA
```

En un diseño manual tendríamos que:

* colocarlo;
* medir la separación;
* alinearlo.

Con Layout simplemente lo añadimos como hijo:

```text
Botonera
├── Boton-Proyectos
├── Boton-Formacion
└── Boton-Experiencia
```

Penpot se encarga de mantener:

```text
gap = 24 px
```

entre todos.

---

# 17. Qué ocurre si cambiamos el texto

Supongamos:

```text
PROYECTOS
```

pasa a:

```text
VER MIS PROYECTOS
```

Si el botón está bien construido con Layout interno, puede crecer automáticamente para adaptarse.

Esto es importante porque los diseños reales cambian.

No deberíamos diseñar pensando:

> “este texto nunca va a cambiar”.

---

# 18. Layout dentro de Layout

Aquí aparece una idea muy importante.

La botonera puede ser un Layout.

Y cada botón también puede ser otro Layout.

Por ejemplo:

```text
Botonera          ← Layout vertical
├── Boton-Proyectos    ← Layout horizontal
└── Boton-Formacion    ← Layout horizontal
```

Dentro del botón:

```text
Boton-Proyectos
└── PROYECTOS
```

y podemos definir:

```text
padding horizontal: 24
padding vertical: 12
```

Así el botón se adapta al contenido.

---

# 19. Relación con CSS Flexbox

Esta parte es especialmente interesante para desarrollo web.

Penpot:

```text
Layout vertical
gap: 24
padding: 24
align: center
```

tiene una relación conceptual con:

```css
.botonera {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    align-items: center;
}
```

No se trata de memorizar todavía CSS.

Lo importante es entender que Penpot está enseñándonos visualmente conceptos que después implementaremos con código.

---

# 20. Responsive: por qué Layout es tan importante

Imagina que en móvil queremos:

```text
[ PROYECTOS ]

[ FORMACIÓN ]
```

pero en desktop queremos:

```text
[ PROYECTOS ]   [ FORMACIÓN ]
```

Con Layout podemos cambiar:

```text
vertical
```

por:

```text
horizontal
```

Eso corresponde conceptualmente a pasar de:

```css
flex-direction: column;
```

a:

```css
flex-direction: row;
```

Aquí vemos por qué Layout es tan importante para diseño responsive.

---

# 21. Cuándo usar grupo y cuándo Layout

### Usa grupo cuando:

* solo quieres mantener elementos juntos;
* las posiciones son simples;
* no necesitas distribución automática.

### Usa Layout cuando:

* quieres controlar separación;
* quieres padding;
* quieres alineación;
* quieres que los elementos se adapten;
* quieres un comportamiento más responsive.

---

# 22. Nuestra botonera: versión inicial y mejorada

### Versión manual

```text
Rectangle
Button
Button
```

Problemas:

* separación manual;
* alineación manual;
* difícil añadir más botones.

### Versión con grupo

```text
Botonera
├── Button
└── Button
```

Mejora:

* se mueve como una unidad.

Pero:

* la separación sigue siendo manual.

### Versión con Layout

```text
Botonera
├── Button
└── Button
```

con:

```text
direction: vertical
gap: 24
align: center
padding: 24
```

Ahora el sistema se organiza solo.

---

# 23. Error frecuente

Un error habitual es seguir moviendo cada botón con el ratón incluso después de crear un Layout.

Cuando trabajamos con Layout, debemos dejar que el contenedor gestione la posición.

La pregunta cambia de:

> “¿Dónde coloco este botón?”

a:

> **“¿Qué regla de distribución debe seguir esta botonera?”**

Ese cambio de mentalidad es fundamental.

---

# 24. Actividad práctica

Crea una botonera con:

```text
PROYECTOS
FORMACIÓN
CONTACTO
```

Debe cumplir:

* dirección vertical;
* gap de 24 px;
* botones centrados;
* padding de 24 px.

Después cambia la dirección a horizontal.

Observa qué ocurre.

---

# 25. Reto

Añade un botón nuevo:

```text
EXPERIENCIA
```

No lo coloques manualmente.

Comprueba que el Layout lo distribuye automáticamente.

Después cambia:

```text
PROYECTOS
```

por:

```text
VER TODOS MIS PROYECTOS
```

Comprueba qué ocurre con el botón.

---

# 26. Lo que debes recordar

```text
GRUPO
= junta elementos

LAYOUT
= junta + distribuye

GAP
= separación entre hijos

PADDING
= espacio interior del contenedor

ALIGN
= alineación de los hijos

DIRECTION
= fila o columna
```

Y la idea más importante:

> **Cuando utilizamos Layout dejamos de colocar elementos individualmente y empezamos a definir reglas de distribución.**

Ese paso es fundamental porque nos acerca mucho más a cómo funciona realmente una interfaz web responsive.

