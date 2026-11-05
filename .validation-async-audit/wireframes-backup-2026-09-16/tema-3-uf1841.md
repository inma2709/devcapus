Sí. Este tema puede convertirse en una de las piezas centrales de **UF1841**, porque permite introducir una idea que quiero que el alumnado interiorice desde el principio:

> **Una web no empieza escribiendo HTML. Empieza definiendo qué queremos comunicar, a quién, qué contenido necesitamos y cómo debe organizarse.**

Además, **Penpot encaja especialmente bien en vuestro curso** porque no es solamente una herramienta para “dibujar pantallas”. Sus sistemas de **Flex Layout y Grid Layout están basados en CSS Flexbox y CSS Grid**, por lo que el alumno puede empezar a pensar visualmente con conceptos que después encontrará al programar. ([Centro de ayuda Penpot][1])

He planteado el tema para que pueda utilizarse prácticamente como **manual autodidacta**, no simplemente como apoyo a una explicación en clase.

---

# TEMA 3. DISEÑO DE INTERFACES WEB CON PENPOT

## De la idea al prototipo de un CV digital

### Proyecto del tema

Durante este tema vas a diseñar tu primera página web completa.

Todavía **no vamos a programarla**.

Nuestro objetivo será crear el diseño de un:

# **CV digital / Portfolio profesional**

Al finalizar tendrás preparado un prototipo que posteriormente podremos convertir en una página real utilizando:

* HTML
* CSS
* Flexbox
* Grid
* diseño responsive
* y, más adelante, otras herramientas del curso.

La secuencia que seguiremos será:

**Idea → contenido → estructura → wireframe → diseño visual → diseño responsive → componentes → prototipo → programación**

Esta secuencia será importante durante todo el curso.

---

# 1. Antes de programar hay que diseñar

Imagina que alguien te dice:

> “Hazme una página web para mostrar mi currículum.”

Podríamos abrir Visual Studio Code inmediatamente y empezar:

```html
<header>
...
</header>
```

Pero enseguida aparecerían preguntas.

¿Dónde ponemos la fotografía?

¿Qué información debe aparecer primero?

¿Ponemos la experiencia profesional antes que los estudios?

¿Necesitamos menú?

¿Qué colores utilizamos?

¿Habrá un botón para descargar el currículum?

¿Cómo se verá en un móvil?

¿Mostramos todos los proyectos o solamente algunos?

¿Dónde ponemos GitHub o LinkedIn?

¿La página tendrá una sola columna o varias?

Es decir:

**el problema todavía no es de programación.**

Es un problema de **diseño**.

---

# 2. Diseñar no significa decorar

Uno de los primeros errores cuando empezamos en desarrollo web consiste en identificar:

> diseño = colores bonitos.

No es así.

El diseño web incluye decisiones sobre:

* objetivos;
* usuarios;
* información;
* jerarquía;
* navegación;
* estructura;
* distribución;
* tipografía;
* color;
* accesibilidad;
* comportamiento;
* adaptación a diferentes dispositivos.

El aspecto visual es solamente una parte.

Podemos considerar que una interfaz tiene varias capas:

| Capa         | Pregunta                           |
| ------------ | ---------------------------------- |
| Objetivo     | ¿Qué queremos conseguir?           |
| Contenido    | ¿Qué debemos comunicar?            |
| Arquitectura | ¿Cómo organizamos la información?  |
| UX           | ¿Cómo utilizará la web el usuario? |
| UI           | ¿Cómo se verá?                     |
| Responsive   | ¿Cómo se adaptará?                 |
| Desarrollo   | ¿Cómo la programaremos?            |

---

# 3. ¿Por qué diseñar antes de programar?

Diseñar previamente tiene varias ventajas.

## 3.1. Detectamos problemas antes

Mover una sección en Penpot puede llevar unos segundos.

Cambiar una estructura cuando ya hemos construido:

* HTML;
* CSS;
* JavaScript;
* responsive;

puede implicar modificar muchos archivos.

---

## 3.2. Podemos probar alternativas

Podemos comparar:

### Diseño A

```text
FOTO
NOMBRE
DESCRIPCIÓN
EXPERIENCIA
ESTUDIOS
PROYECTOS
```

con:

### Diseño B

```text
NOMBRE                     FOTO

DESARROLLADOR WEB

SOBRE MÍ

EXPERIENCIA | TECNOLOGÍAS

PROYECTOS

CONTACTO
```

Sin necesidad de programar ninguna de las dos.

---

# 4. Diseño y programación son dos formas de resolver el mismo problema

Esta idea será especialmente importante en nuestro curso.

Una estructura que diseñamos visualmente podría convertirse después en:

```html
<section class="hero">
    <div class="hero-content">
        ...
    </div>

    <img src="foto.jpg">
</section>
```

Y una disposición visual de dos columnas podría convertirse posteriormente en:

```css
.hero {
    display: grid;
    grid-template-columns: 2fr 1fr;
}
```

Penpot resulta especialmente interesante para desarrolladores porque sus herramientas de layouts utilizan conceptos directamente relacionados con **CSS Flexbox y CSS Grid**. ([Centro de ayuda Penpot][1])

Por tanto, no estamos aprendiendo algo aislado.

Estamos preparando la programación posterior.

---

# 5. ¿Qué es Penpot?

**Penpot** es una plataforma de diseño de interfaces y prototipado que funciona en el navegador y es de código abierto.

Permite trabajar con:

* wireframes;
* interfaces;
* diseños responsive;
* componentes;
* variantes;
* design tokens;
* Flex Layout;
* Grid Layout;
* prototipos interactivos;
* inspección del diseño;
* exportación de recursos.

Penpot está especialmente orientado a conectar **diseño y desarrollo**, utilizando estándares web abiertos como CSS, HTML y SVG. ([Penpot][2])

![Image](https://penpot.app/blog/content/images/2024/02/Penpot_workspace.png)

![Image](https://penpot.app/blog/content/images/size/w1200/2024/02/PenpotUI-flexlayout.png)

![Image](https://penpot.app/blog/content/images/2024/04/Design_System_in-_Penpot.webp)

---

# 6. ¿Por qué vamos a utilizar Penpot?

Existen otras herramientas profesionales, como:

* Figma;
* Sketch;
* Adobe XD en proyectos históricos;
* herramientas de wireframing;
* Canva para determinados trabajos gráficos.

Pero Penpot tiene una característica especialmente interesante para un curso de desarrollo web:

## **utiliza una lógica muy próxima a la web real.**

Podremos relacionar posteriormente:

| Penpot        | CSS               |
| ------------- | ----------------- |
| Flex Layout   | Flexbox           |
| Grid Layout   | CSS Grid          |
| Gap           | `gap`             |
| Padding       | `padding`         |
| Align         | `align-items`     |
| Justify       | `justify-content` |
| Width         | `width`           |
| Height        | `height`          |
| Border radius | `border-radius`   |
| Shadow        | `box-shadow`      |

Esto nos permitirá hacer constantemente una pregunta:

> **¿Cómo programaría después aquello que estoy diseñando?**

---

# 7. Crear una cuenta

Accede a:

[Penpot](https://penpot.app/?utm_source=chatgpt.com)

Crea una cuenta gratuita.

Después accederás al **Dashboard**.

Desde allí podrás:

* crear proyectos;
* crear archivos;
* organizar diseños;
* trabajar en equipo.

---

# 8. Nuestro primer proyecto

Crea un proyecto llamado:

> **Curso Desarrollo Web**

Dentro del proyecto crea un archivo:

> **CV Digital – Nombre Apellidos**

Este pequeño hábito de nombrar correctamente los archivos es importante.

Evita:

```text
proyecto1

proyecto-final

proyecto-final-bueno

proyecto-final-ahora-si
```

Utiliza nombres descriptivos.

---

# 9. Conocer la interfaz de Penpot

Antes de empezar debemos identificar las zonas principales.

La interfaz de trabajo contiene, entre otros elementos:

* lienzo;
* barra de herramientas;
* páginas;
* panel de capas;
* panel de propiedades;
* modo diseño;
* modo prototipo;
* modo inspección;
* assets;
* design tokens.

La documentación oficial describe estas áreas dentro del **Workspace**. ([Centro de ayuda Penpot][3])

---

# 10. El lienzo infinito

El espacio central es un lienzo prácticamente ilimitado.

Puedes utilizarlo para colocar:

```text
Wireframe móvil

Wireframe escritorio

Diseño móvil

Diseño escritorio

Componentes

Pruebas

Notas
```

No debes intentar meter todo dentro de una única pantalla.

Piensa en el lienzo como si fuera una enorme mesa de trabajo.

---

# 11. Boards: nuestras futuras pantallas

Dentro del lienzo trabajaremos principalmente utilizando **Boards**.

Un board puede representar:

* una página;
* una pantalla móvil;
* un modal;
* una vista concreta;
* una variante.

Por ejemplo:

```text
CV – Desktop
CV – Tablet
CV – Mobile
```

Un board es conceptualmente parecido al viewport que posteriormente veremos en el navegador.

---

# 12. Las capas

Cada elemento que añades al diseño se convierte en una capa.

Por ejemplo:

```text
CV Desktop
│
├── Header
│   ├── Logo
│   ├── Inicio
│   ├── Experiencia
│   └── Contacto
│
├── Hero
│   ├── Nombre
│   ├── Profesión
│   ├── Descripción
│   └── Fotografía
│
└── Experiencia
```

Esto empieza a parecerse mucho a la estructura de un documento HTML.

Y no es casualidad.

---

# 13. Primera regla profesional: nombra las capas

No dejes esto:

```text
Rectangle 17
Rectangle 18
Text 24
Group 5
```

Cámbialo por:

```text
header
hero
foto-perfil
titulo-principal
boton-contacto
experiencia
proyectos
footer
```

Esto facilita:

* localizar elementos;
* modificarlos;
* crear componentes;
* pasar posteriormente a desarrollo.

---

# 14. Nuestro proyecto: CV digital

Antes de tocar Penpot vamos a definir el problema.

Supongamos que somos:

> **Laura Martín — Desarrolladora Web Junior**

Quiere buscar empleo y necesita una página web que pueda incluir en:

* LinkedIn;
* currículum;
* candidaturas;
* email;
* GitHub.

---

# 15. Objetivo de la web

Completa:

### Objetivo principal

> Conseguir que una empresa conozca rápidamente el perfil profesional de Laura y pueda contactar con ella.

Objetivos secundarios:

* mostrar conocimientos;
* presentar experiencia;
* mostrar proyectos;
* facilitar contacto;
* permitir descargar CV;
* enlazar GitHub;
* enlazar LinkedIn.

---

# 16. ¿Quién es nuestro usuario?

Nuestro visitante podría ser:

* responsable de RR. HH.;
* técnico de selección;
* desarrollador senior;
* responsable de una empresa;
* posible cliente.

Todos tienen una característica:

## disponen de poco tiempo.

Por tanto, nuestro CV debe responder rápidamente:

```text
¿Quién eres?

¿Qué haces?

¿Qué sabes hacer?

¿Qué experiencia tienes?

¿Qué has creado?

¿Cómo contacto contigo?
```

---

# 17. Definimos el contenido antes de diseñar

Vamos a crear nuestro inventario de contenido.

## Cabecera

* nombre o logotipo;
* enlace Inicio;
* Sobre mí;
* Experiencia;
* Proyectos;
* Contacto.

## Presentación

* fotografía;
* nombre;
* profesión;
* descripción breve;
* botón “Ver proyectos”;
* botón “Contactar”.

## Sobre mí

Texto breve.

## Tecnologías

* HTML;
* CSS;
* JavaScript;
* Git;
* GitHub;
* Bootstrap.

## Experiencia

Por cada puesto:

* empresa;
* puesto;
* fechas;
* descripción.

## Formación

* titulación;
* centro;
* fechas.

## Proyectos

Por proyecto:

* imagen;
* título;
* descripción;
* tecnologías;
* enlace.

## Contacto

* email;
* LinkedIn;
* GitHub.

## Footer

* copyright;
* redes profesionales.

---

# 18. Actividad 1 — El contenido

Antes de continuar, crea tu propio documento con estas preguntas:

```text
Nombre:

Profesión:

Descripción profesional:

Tecnologías:

Experiencia:

Estudios:

Proyectos:

Email:

LinkedIn:

GitHub:
```

### No abras todavía Penpot.

Primero define el contenido.

Esta será nuestra primera regla:

> **Diseñamos para el contenido, no inventamos contenido para rellenar el diseño.**

---

# 19. Arquitectura de información

Ahora debemos decidir qué información será más importante.

Podemos establecer esta jerarquía:

```text
1. Quién soy
2. Qué hago
3. Qué tecnologías conozco
4. Mi experiencia
5. Mis proyectos
6. Mi formación
7. Cómo contactar conmigo
```

Esto se traducirá en nuestra página:

```text
HEADER

HERO

SOBRE MÍ

TECNOLOGÍAS

EXPERIENCIA

PROYECTOS

FORMACIÓN

CONTACTO

FOOTER
```

Ya tenemos la primera estructura de nuestra web.

Todavía no hemos escrito una línea de código.

---

# 20. Antes del diseño visual: wireframe

Ahora crearemos un **wireframe**.

Un wireframe es una representación simplificada de la estructura de una interfaz.

No intenta decidir todavía:

* colores definitivos;
* fotografías finales;
* sombras;
* efectos;
* detalles visuales.

Busca responder:

> **¿Dónde va cada cosa?**

---

# 21. Wireframe de nuestro CV

Podemos representar inicialmente esto:

```text
┌──────────────────────────────────────────┐
│ LAURA        Inicio Experiencia Proyectos│
├──────────────────────────────────────────┤
│                                          │
│ Hola, soy Laura              [ FOTO ]    │
│ Desarrolladora web                       │
│                                          │
│ Creo interfaces web...                   │
│                                          │
│ [VER PROYECTOS] [CONTACTAR]              │
│                                          │
├──────────────────────────────────────────┤
│                SOBRE MÍ                  │
│                                          │
│          texto texto texto               │
├──────────────────────────────────────────┤
│             TECNOLOGÍAS                  │
│                                          │
│ HTML  CSS  JS  GIT  BOOTSTRAP            │
├──────────────────────────────────────────┤
│              EXPERIENCIA                 │
│                                          │
│ [ trabajo ]         [ trabajo ]          │
├──────────────────────────────────────────┤
│               PROYECTOS                  │
│                                          │
│ [ proyecto ][ proyecto ][ proyecto ]     │
├──────────────────────────────────────────┤
│               CONTACTO                   │
└──────────────────────────────────────────┘
```

Eso ya es diseño.

Aunque solamente sean cajas.

---

# 22. Crear el wireframe en Penpot

Crea una página llamada:

> `01 - Wireframes`

Crea un board:

> `CV - Wireframe Desktop`

Puedes empezar con un ancho aproximado de:

```text
1440 px
```

No te obsesiones todavía con las medidas exactas.

---

# 23. Crear el Header

Añade un rectángulo superior.

Dentro añade:

```text
Laura Martín

Inicio

Experiencia

Proyectos

Contacto
```

No uses todavía colores elaborados.

Puedes trabajar únicamente con:

* blanco;
* negro;
* grises.

---

# 24. Crear el Hero

Debajo de la cabecera crea dos zonas.

```text
┌───────────────────────────────────┐
│                                   │
│   TEXTO                FOTO       │
│                                   │
└───────────────────────────────────┘
```

En la izquierda:

```text
Hola, soy Laura

Desarrolladora Web

Creo aplicaciones web modernas...

[Ver proyectos]

[Contactar]
```

En la derecha:

```text
[FOTO]
```

---

# 25. Empieza a pensar en jerarquía

No todos los textos deben tener el mismo tamaño.

Una jerarquía básica podría ser:

```text
Laura Martín
48 px

Desarrolladora Web
28 px

Texto
18 px

Botón
16 px
```

La finalidad es que el visitante comprenda visualmente qué información tiene mayor importancia.

---

# 26. Diseña las secciones

Continúa construyendo:

### Sobre mí

Una pequeña introducción.

### Tecnologías

Representa las tecnologías mediante pequeñas tarjetas.

```text
[ HTML ]

[ CSS ]

[ JavaScript ]

[ Git ]

[ Bootstrap ]
```

---

# 27. Experiencia profesional

Puedes diseñarla inicialmente como tarjetas:

```text
┌─────────────────────────────┐
│ Desarrolladora Web          │
│ Empresa ABC                 │
│ 2025 – actualidad           │
│                             │
│ Desarrollo de interfaces... │
└─────────────────────────────┘
```

---

# 28. Proyectos

Cada proyecto puede representarse:

```text
┌─────────────────────────┐
│                         │
│        IMAGEN           │
│                         │
├─────────────────────────┤
│ Portfolio personal      │
│ HTML · CSS · JS         │
│                         │
│ [Ver proyecto]          │
└─────────────────────────┘
```

---

# 29. Contacto

Diseña una sección final:

```text
¿Trabajamos juntos?

Puedes contactar conmigo:

correo@email.com

[LinkedIn]

[GitHub]
```

---

# 30. Revisión del wireframe

Antes de añadir colores debes ser capaz de contestar afirmativamente:

### Comprueba

* ¿Está clara la información?
* ¿Sé quién es esta persona?
* ¿Sé a qué se dedica?
* ¿puedo localizar rápidamente su experiencia?
* ¿veo sus proyectos?
* ¿puedo contactar con ella?
* ¿puedo navegar por la página?

Si una respuesta es negativa:

**todavía no debes empezar el diseño visual.**

---

# 31. Actividad 2 — Test de cinco segundos

Enseña el wireframe durante cinco segundos a un compañero.

Después escóndelo.

Pregúntale:

1. ¿Cómo se llama la persona?
2. ¿A qué se dedica?
3. ¿Qué recuerdas de la página?
4. ¿Qué acción podrías realizar?

Si no puede responder:

**la jerarquía necesita mejorar.**

---

# 32. Del wireframe al diseño visual

Ahora crearemos otra página:

> `02 - Diseño`

Duplica el wireframe.

Renombra el board:

> `CV - Desktop`

Ahora sí vamos a trabajar:

* tipografía;
* color;
* espacios;
* imágenes;
* botones;
* tarjetas.

---

# 33. Diseña un sistema antes de decorar

No deberíamos elegir aleatoriamente:

```text
un azul aquí

otro azul allí

18 px aquí

23 px allí

14 px aquí
```

Crearemos un pequeño **sistema de diseño**.

---

# 34. Paleta de colores

Por ejemplo:

```text
Color principal
#2563EB

Color oscuro
#111827

Texto secundario
#4B5563

Fondo
#F9FAFB

Blanco
#FFFFFF
```

No necesitamos veinte colores.

Para empezar:

* un color principal;
* varios neutros;
* blanco.

es suficiente.

---

# 35. Tipografía

Selecciona como máximo una o dos familias tipográficas.

Por ejemplo:

```text
Inter
```

Después establece una escala.

```text
H1 → 48 px

H2 → 36 px

H3 → 24 px

Texto grande → 20 px

Texto → 16 px

Texto pequeño → 14 px
```

Esto produce coherencia.

---

# 36. Espaciado

También debemos crear una lógica para los espacios.

Podemos utilizar múltiplos de 8:

```text
8

16

24

32

48

64

80
```

En vez de crear:

```text
13

27

41

19
```

sin criterio.

---

# 37. Lo que acabamos de construir

Sin darnos cuenta hemos definido:

```text
COLORES

TIPOGRAFÍAS

TAMAÑOS

ESPACIADOS
```

Es decir:

# un pequeño sistema de diseño.

Penpot dispone además de herramientas específicas para trabajar con componentes, librerías y design tokens en sistemas mayores. ([Centro de ayuda Penpot][4])

---

# 38. Flex Layout: uno de los conceptos más importantes

Hasta ahora podemos mover objetos manualmente.

Pero una web real no funciona así.

Imagina un botón:

```text
[ Contactar ]
```

y ahora cambia el texto:

```text
[ Ponte en contacto conmigo ]
```

Si el botón tiene una anchura fija, tendremos que modificarlo manualmente.

Lo ideal sería que:

```text
contenido cambia
        ↓
botón se adapta automáticamente
```

Eso es precisamente el tipo de problema que resuelven los layouts flexibles.

---

# 39. Flex Layout y CSS Flexbox

Penpot incorpora **Flex Layout**, basado directamente en el estándar CSS Flexbox. ([Centro de ayuda Penpot][1])

Cuando posteriormente programemos:

```css
display: flex;
```

ya habremos trabajado visualmente conceptos como:

```text
direction

align

justify

gap

padding

wrap
```

---

# 40. Nuestro primer Flex Layout: botón

Selecciona:

```text
texto “Contactar”
```

y crea alrededor su contenedor.

Configura un Flex Layout.

Añade:

```text
padding horizontal: 24

padding vertical: 12
```

Ahora modifica:

```text
Contactar
```

por:

```text
Contacta conmigo
```

Observa qué ocurre.

El botón se adapta.

---

# 41. El equivalente conceptual en CSS

Lo que estás haciendo se parece a:

```css
.boton {
    display: flex;
    padding: 12px 24px;
}
```

No tienes que memorizar todavía el código.

Pero empieza a relacionar:

```text
Penpot → CSS
```

---

# 42. Segundo Flex Layout: navegación

Selecciona:

```text
Inicio
Sobre mí
Experiencia
Proyectos
Contacto
```

Conviértelos en un Flex Layout.

Dirección:

```text
horizontal
```

Añade:

```text
gap: 24
```

Ahora tenemos una navegación flexible.

---

# 43. Tercer Flex Layout: header

Nuestro header podría contener:

```text
LAURA                  MENÚ
```

Creamos un contenedor horizontal.

Después aplicamos una distribución equivalente conceptualmente a:

```css
justify-content: space-between;
```

Penpot permite controlar dirección, alineación, justificación, gap, padding y comportamiento del tamaño usando conceptos equivalentes a Flexbox. ([Centro de ayuda Penpot][1])

---

# 44. Flex dentro de Flex

Aquí aparece una idea fundamental.

Podemos tener:

```text
HEADER
│
├── LOGO
│
└── NAV
    │
    ├── Inicio
    ├── Experiencia
    ├── Proyectos
    └── Contacto
```

El `HEADER` puede ser Flex.

Y el `NAV` también.

Esto es exactamente lo que ocurre continuamente en desarrollo web.

---

# 45. Grid Layout

Flexbox resulta especialmente útil para distribuir elementos en una dimensión:

```text
→ → → →
```

o:

```text
↓
↓
↓
```

Grid permite construir estructuras bidimensionales:

```text
┌──────┬──────┬──────┐
│      │      │      │
├──────┼──────┼──────┤
│      │      │      │
└──────┴──────┴──────┘
```

Penpot dispone también de **Grid Layout**, basado en CSS Grid. ([Centro de ayuda Penpot][1])

---

# 46. Utilizar Grid para nuestros proyectos

Selecciona la zona donde aparecerán los proyectos.

Vamos a crear:

```text
Proyecto 1

Proyecto 2

Proyecto 3
```

En escritorio podrían formar:

```text
┌────────┐ ┌────────┐ ┌────────┐
│        │ │        │ │        │
│   1    │ │   2    │ │   3    │
│        │ │        │ │        │
└────────┘ └────────┘ └────────┘
```

Utiliza un Grid Layout con tres columnas.

---

# 47. Flex o Grid

Una regla sencilla inicialmente:

### Flex

Cuando pienses:

> quiero distribuir elementos en una fila o columna.

### Grid

Cuando pienses:

> quiero controlar filas y columnas.

Posteriormente veremos que ambos sistemas pueden resolver problemas más complejos.

---

# 48. Actividad 3 — Detectar Flex y Grid

Observa tu CV e identifica qué utilizarías.

| Elemento                | Flex o Grid   |
| ----------------------- | ------------- |
| Navegación              | Flex          |
| Botones del Hero        | Flex          |
| Hero texto + fotografía | Flex o Grid   |
| Tecnologías             | Flex con wrap |
| Tarjetas de proyectos   | Grid          |
| Redes sociales          | Flex          |
| Footer                  | Flex/Grid     |

---

# 49. Componentes

Supongamos que tenemos tres proyectos.

Podríamos dibujar tres tarjetas independientes.

Pero si mañana decidimos cambiar:

```text
border-radius: 8
```

por:

```text
border-radius: 16
```

tendríamos que modificar las tres.

Los sistemas de diseño utilizan **componentes reutilizables**.

---

# 50. Crear nuestro primer componente

Selecciona una tarjeta de proyecto.

Contendrá:

```text
imagen

nombre

descripción

tecnologías

botón
```

Crea un componente:

> `Card / Proyecto`

Penpot distingue entre un **componente principal** y sus copias o instancias. Las copias heredan las propiedades del componente principal, lo que permite mantener consistencia. ([Centro de ayuda Penpot][5])

---

# 51. Crear tres instancias

Duplica el componente.

Crea:

```text
Portfolio

Tienda online

Aplicación tareas
```

Cada instancia puede cambiar determinados contenidos manteniendo la estructura visual.

Ahora modifica el componente principal.

Comprueba cómo se propagan los cambios.

---

# 52. Segundo componente: botón

Crea:

> `Button / Primary`

Con:

```text
fondo azul

texto blanco

padding

border-radius
```

Después crea:

> `Button / Secondary`

Puedes reutilizarlos en todo el CV.

---

# 53. Tercer componente: tecnología

Ejemplo:

```text
[ HTML ]
```

Crea un componente:

> `Tag / Tecnología`

Después genera:

```text
HTML
CSS
JavaScript
Git
Bootstrap
```

---

# 54. Empieza a pensar como desarrollador

Fíjate en la relación:

```text
COMPONENTE PENPOT

Card / Proyecto
```

podría convertirse posteriormente en:

```html
<article class="project-card">
```

o incluso, si trabajáramos con componentes:

```text
<ProjectCard />
```

Diseño y programación vuelven a encontrarse.

---

# 55. Mobile First

Ahora llegamos a una de las partes fundamentales del curso.

Una página no se diseña únicamente para un monitor.

Debe funcionar en:

* móvil;
* tablet;
* portátil;
* monitor grande.

Vamos a diseñar también nuestro CV para móvil.

---

# 56. Crear el diseño móvil

Duplica nuestro board.

Renómbralo:

> `CV - Mobile`

Puedes trabajar con una anchura aproximada de:

```text
390 px
```

No importa memorizar un dispositivo concreto.

Queremos comprobar qué ocurre cuando disponemos de mucho menos espacio.

---

# 57. Problema 1: el menú no cabe

En escritorio teníamos:

```text
LAURA       Inicio Sobre mí Experiencia Proyectos Contacto
```

En móvil eso podría no caber.

Tenemos que tomar una decisión de diseño.

Por ejemplo:

```text
LAURA                         ☰
```

Acabamos de descubrir algo fundamental:

> **responsive no significa reducir proporcionalmente un diseño de escritorio.**

Significa **adaptarlo**.

---

# 58. Problema 2: Hero

En escritorio:

```text
TEXTO                 FOTO
```

En móvil podemos utilizar:

```text
FOTO

TEXTO

BOTONES
```

O:

```text
TEXTO

FOTO

BOTONES
```

Debemos decidir qué información queremos priorizar.

---

# 59. Problema 3: proyectos

En escritorio:

```text
[1] [2] [3]
```

En móvil:

```text
[1]

[2]

[3]
```

El contenido es el mismo.

Lo que cambia es su distribución.

---

# 60. Problema 4: botones

En escritorio:

```text
[Ver proyectos] [Contactar]
```

En móvil podríamos mantenerlos juntos:

```text
[Ver proyectos] [Contactar]
```

o convertirlos en:

```text
[   Ver proyectos   ]

[     Contactar     ]
```

Dependiendo del espacio disponible.

---

# 61. Diseñar responsive es tomar decisiones

Ahora podemos comprender algo que posteriormente veremos en CSS.

Responsive no consiste únicamente en escribir:

```css
@media (...)
```

Primero hay que decidir:

> **qué debe ocurrir cuando cambia el espacio disponible.**

CSS solamente implementará la decisión.

---

# 62. Utilizar Flex para adaptar el diseño

Un Flex Layout puede permitir:

```text
Desktop

[FOTO] [TEXTO]
```

y posteriormente:

```text
Mobile

[FOTO]

[TEXTO]
```

cambiando la dirección.

Esa lógica tiene correspondencia directa con Flexbox.

---

# 63. Wrap

Supongamos nuestras tecnologías:

```text
HTML CSS JavaScript Git GitHub Bootstrap Node
```

En escritorio podrían ocupar una línea.

En móvil no.

Con `wrap` podemos permitir:

```text
HTML CSS JavaScript

Git GitHub Bootstrap

Node
```

Penpot permite aplicar wrapping dentro de Flex Layout de forma equivalente al comportamiento de Flexbox. ([Centro de ayuda Penpot][1])

---

# 64. Actividad 4 — Responsive

Compara ambas versiones:

```text
Desktop

Mobile
```

Para cada sección escribe:

| Sección     | Qué cambia                        |
| ----------- | --------------------------------- |
| Header      | menú completo → menú compacto     |
| Hero        | 2 columnas → 1 columna            |
| Tecnologías | fila → wrap                       |
| Proyectos   | 3 columnas → 1                    |
| Contacto    | disposición horizontal → vertical |

Esto te obliga a **pensar antes de programar**.

---

# 65. Prototipado

Hasta ahora hemos creado pantallas estáticas.

Pero las webs tienen comportamiento.

Por ejemplo:

```text
hacer clic

abrir menú

navegar

mostrar información

cerrar ventana
```

Penpot permite crear **prototipos interactivos conectando boards y elementos**. ([Centro de ayuda Penpot][6])

![Image](https://penpot.app/blog/content/images/2024/05/Overlay_-Close-overlay.png)

![Image](https://penpot.app/blog/content/images/2024/05/toggle-close-overlay-663df75379f09.webp)

---

# 66. Nuestro primer prototipo

Vamos a crear una segunda pantalla:

> `Proyecto - Detalle`

Diseña una página sencilla con:

```text
nombre del proyecto

captura

descripción

tecnologías

[Volver]
```

---

# 67. Crear la interacción

En el CV:

Selecciona:

> `Ver proyecto`

Accede al modo:

> **Prototype**

Conecta el botón con:

> `Proyecto - Detalle`

Penpot permite seleccionar un elemento y arrastrar una conexión hacia otro board para definir la navegación. ([Centro de ayuda Penpot][6])

---

# 68. Probar el prototipo

Pulsa el botón de reproducción.

Ahora podrás navegar:

```text
CV

↓ clic

Proyecto

↓ volver

CV
```

Ya no tienes simplemente un dibujo.

Tienes un:

# **prototipo interactivo**

---

# 69. ¿Por qué prototipar?

Porque podemos descubrir errores antes de programarlos.

Por ejemplo:

* botón poco visible;
* navegación confusa;
* pantalla sin forma de volver;
* contenido excesivo;
* elementos demasiado pequeños.

Corregirlos aquí resulta mucho más sencillo que corregirlos después.

---

# 70. Inspect Mode

Ahora entraremos en una característica especialmente interesante para desarrolladores.

Penpot dispone de un modo:

> **Inspect**

Desde ahí podemos consultar:

* dimensiones;
* distancias;
* propiedades;
* estilos;
* código;
* recursos exportables.

El modo Inspect puede mostrar especificaciones y snippets de CSS, HTML y SVG. ([Centro de ayuda Penpot][3])

---

# 71. Inspecciona un botón

Selecciona nuestro botón.

Observa:

```text
ancho

alto

padding

color

tipografía

border radius
```

Después observa el código asociado.

No copies el código todavía.

Intenta comprender:

> **qué decisión visual representa cada propiedad.**

---

# 72. Inspecciona el Header

Selecciona el contenedor.

Busca propiedades relacionadas con:

```text
display

flex

gap

padding

align

justify
```

Ahora empieza a resultar evidente por qué hemos aprendido Penpot antes de CSS avanzado.

---

# 73. Diseño y código empiezan a hablar el mismo idioma

Nuestra evolución será:

```text
Penpot

Flex Layout

↓

CSS

display: flex
```

Y:

```text
Penpot

Grid Layout

↓

CSS

display: grid
```

Por tanto, diseñar también nos ayuda a **comprender posteriormente el código**.

---

# 74. Accesibilidad

Un diseño bonito no necesariamente es un buen diseño.

También debemos considerar accesibilidad.

---

# 75. Contraste

Evita combinaciones como:

```text
gris claro sobre blanco
```

si el texto resulta difícil de leer.

Los textos deben tener suficiente contraste con el fondo.

---

# 76. Tamaño de texto

Evita utilizar textos extremadamente pequeños.

Para contenido general, un punto de partida habitual será aproximadamente:

```text
16 px
```

Aunque dependerá del diseño y la tipografía.

---

# 77. Botones reconocibles

Un usuario debe poder identificar qué elementos son interactivos.

Evita diseñar botones que parezcan simplemente texto decorativo.

---

# 78. No dependas únicamente del color

No hagas:

```text
verde = correcto

rojo = incorrecto
```

sin proporcionar información adicional.

Algunas personas tienen dificultades para distinguir determinados colores.

---

# 79. Jerarquía semántica

Nuestro diseño debería anticipar:

```text
H1

H2

H3

p
```

Ejemplo:

```text
H1
Laura Martín

H2
Experiencia

H2
Proyectos

H3
Portfolio personal
```

Más adelante traduciremos esta jerarquía a HTML.

---

# 80. Diseño avanzado: Design Tokens

Cuando nuestros diseños aumentan podemos querer definir conceptos reutilizables como:

```text
color-primary

color-text

space-small

space-medium

radius-card
```

Estos valores se denominan frecuentemente **design tokens**.

Penpot incorpora soporte para design tokens dentro de sus herramientas de sistemas de diseño. ([Centro de ayuda Penpot][4])

---

# 81. Pensar mediante tokens

En vez de pensar:

```text
#2563EB
```

podemos pensar:

```text
primary
```

En vez de:

```text
16 px
```

podemos pensar:

```text
spacing-medium
```

Eso hace que el sistema sea más mantenible.

---

# 82. La relación con CSS

Posteriormente podríamos crear:

```css
:root {
    --color-primary: #2563eb;
    --color-text: #111827;
    --spacing-md: 16px;
    --radius-card: 12px;
}
```

Otra vez:

```text
diseño

↓

programación
```

---

# 83. Organización profesional del archivo

Nuestro archivo debería terminar parecido a:

```text
CV Digital
│
├── 00 - Contenido
│
├── 01 - Wireframes
│
│   ├── Desktop
│   └── Mobile
│
├── 02 - Diseño
│
│   ├── Desktop
│   └── Mobile
│
├── 03 - Componentes
│
│   ├── Buttons
│   ├── Cards
│   └── Tags
│
└── 04 - Prototype
```

Esto será mucho más útil que tener veinte pantallas desperdigadas por el lienzo.

---

# 84. Proyecto final del tema

Ahora debes diseñar **tu propio CV digital**.

No copies exactamente el ejemplo.

Adáptalo a tu perfil profesional.

---

# 85. Requisitos mínimos

El proyecto debe contener:

### Contenido

* nombre;
* profesión;
* presentación;
* tecnologías;
* experiencia;
* formación;
* proyectos;
* contacto.

### Wireframe

* versión escritorio;
* versión móvil.

### Diseño visual

* paleta coherente;
* tipografía coherente;
* jerarquía visual;
* sistema de espaciado.

### Layout

Utilizar:

* Flex Layout;
* Grid Layout.

### Componentes

Como mínimo:

* botón;
* tarjeta de proyecto;
* etiqueta de tecnología.

### Responsive

Diseñar:

* desktop;
* mobile.

### Prototipo

Como mínimo una interacción.

---

# 86. Restricción importante

Antes de programar el CV deberás ser capaz de explicar:

```text
¿Por qué esta información está aquí?

¿Por qué utilizas este tamaño?

¿Por qué utilizas este color?

¿Por qué esta sección aparece antes?

¿Qué ocurre en móvil?

¿Qué elementos son reutilizables?

¿Qué partes utilizarán Flex?

¿Qué partes utilizarán Grid?
```

Si puedes responderlas:

has diseñado.

Si la respuesta es:

> “porque quedaba bonito”,

todavía podemos mejorar el razonamiento.

---

# 87. Checklist final

Antes de considerar terminado el diseño comprueba:

### Contenido

* [ ] El nombre se identifica inmediatamente.
* [ ] La profesión se entiende.
* [ ] El texto introductorio es breve.
* [ ] Se encuentran fácilmente experiencia y proyectos.
* [ ] Existe una forma clara de contacto.

### Jerarquía

* [ ] Existe un único título principal dominante.
* [ ] Los títulos de sección tienen coherencia.
* [ ] El texto secundario no compite con el principal.

### Diseño

* [ ] Utilizo pocos colores.
* [ ] Mantengo una escala tipográfica.
* [ ] Los espacios siguen un sistema.
* [ ] No existen elementos decorativos innecesarios.

### Componentes

* [ ] Los botones son componentes.
* [ ] Las tarjetas reutilizadas son componentes.
* [ ] Las tecnologías utilizan un patrón común.

### Responsive

* [ ] Existe versión móvil.
* [ ] No he reducido simplemente la versión desktop.
* [ ] He reconsiderado columnas.
* [ ] El menú funciona conceptualmente en móvil.
* [ ] Los textos continúan siendo legibles.
* [ ] Los botones son utilizables.

### Desarrollo

* [ ] Puedo identificar qué partes utilizarán Flex.
* [ ] Puedo identificar qué partes utilizarán Grid.
* [ ] Puedo reconocer posibles elementos HTML.
* [ ] El diseño parece realizable mediante HTML y CSS.

---

# 88. Autoevaluación

Contesta sin consultar apuntes.

### Nivel 1

1. ¿Qué diferencia existe entre wireframe y diseño visual?
2. ¿Qué es un board?
3. ¿Qué son las capas?
4. ¿Por qué debemos nombrarlas?

### Nivel 2

5. ¿Qué problema resuelve Flex Layout?
6. ¿Qué problema resuelve Grid Layout?
7. ¿Qué es un componente?
8. ¿Qué ventaja proporciona?

### Nivel 3

9. ¿Qué diferencia existe entre responsive y simplemente reducir una página?
10. ¿Por qué un menú puede necesitar cambiar en móvil?
11. ¿Cómo pueden ayudarnos los design tokens?
12. ¿Qué utilidad tiene un prototipo?

### Nivel 4

13. ¿Cómo traducirías un Flex Layout de Penpot a CSS?
14. ¿Qué partes de tu CV implementarías con Grid?
15. ¿Qué elementos convertirías en componentes?
16. ¿Qué información debería ser prioritaria en móvil?

---

# 89. Reto avanzado

Cuando hayas terminado tu CV:

## Modifica el contenido.

Cambia:

```text
Laura Martín
```

por un nombre mucho más largo.

Añade otro proyecto.

Añade cinco tecnologías.

Haz más larga la descripción profesional.

Después observa:

> ¿se rompe el diseño?

Un buen diseño debería soportar razonablemente cambios en el contenido.

---

# 90. Reto avanzado 2

Reduce manualmente el ancho del diseño.

Observa:

* qué elementos dejan de caber;
* cuándo deberían cambiar las columnas;
* cuándo necesita adaptarse la navegación;
* cuándo las tarjetas deberían reorganizarse.

Estás empezando a descubrir visualmente los futuros:

# **breakpoints responsive.**

---

# 91. Reto avanzado 3

Abre Inspect y selecciona distintas zonas.

Intenta encontrar equivalencias:

```text
Penpot                  CSS

Flex Layout             display:flex

Gap                     gap

Padding                 padding

Grid Layout             display:grid

Color                   color/background

Border radius           border-radius
```

No memorices todavía.

Relaciona conceptos.

---

# 92. Recursos recomendados

La referencia principal debe ser siempre la documentación oficial:

[Guía oficial de Penpot](https://help.penpot.app/user-guide/?utm_source=chatgpt.com)

Especialmente:

[Flexible Layouts: Flex y Grid](https://help.penpot.app/user-guide/designing/flexible-layouts/?utm_source=chatgpt.com)

[Componentes en Penpot](https://help.penpot.app/user-guide/design-systems/components/?utm_source=chatgpt.com)

[Prototipado](https://help.penpot.app/user-guide/prototyping-testing/prototyping/?utm_source=chatgpt.com)

[Herramientas para desarrollo e Inspect](https://help.penpot.app/user-guide/dev-tools/?utm_source=chatgpt.com)

Y merece especialmente la pena este tutorial oficial de Flex Layout:

[Penpot Flex Layout tutorial](https://www.youtube.com/watch?v=0FY0HlYm2ck&utm_source=chatgpt.com)

Para avanzar después a un nivel mayor:

[Introduction to Flex and CSS Grid Layouts — Penpot Hands-On Demo](https://www.youtube.com/watch?v=64O8qi51Jqc&utm_source=chatgpt.com)

---

# 93. Qué debe haber aprendido el alumno

Al terminar este tema el alumno ya no debería pensar:

> **“Voy a hacer una web, voy a abrir Visual Studio Code.”**

Debería pensar:

```text
¿Qué quiero conseguir?

↓

¿Quién utilizará la página?

↓

¿Qué contenido necesito?

↓

¿Cómo organizo ese contenido?

↓

Creo un wireframe

↓

Defino la jerarquía

↓

Creo el sistema visual

↓

Construyo componentes

↓

Diseño responsive

↓

Pruebo el prototipo

↓

Entonces programo
```

Ese cambio de mentalidad es más importante que aprender dónde está cada botón de Penpot.

---

# 94. Conexión con el siguiente trabajo del curso

Nuestro CV ya tendrá:

```text
HEADER
HERO
SOBRE MÍ
TECNOLOGÍAS
EXPERIENCIA
PROYECTOS
FORMACIÓN
CONTACTO
FOOTER
```

En las siguientes unidades podremos convertirlo progresivamente en:

```html
<header>

<nav>

<main>

<section>

<article>

<footer>
```

Después aplicaremos CSS.

Después Flexbox.

Después Grid.

Después responsive.

Y más adelante podremos comparar nuestra solución con Bootstrap.

Así, **Penpot no será una actividad aislada**: el diseño que realice cada alumno puede convertirse directamente en el proyecto que irá programando durante el curso.

### Propuesta didáctica

Yo dedicaría a este tema bastante más peso que a una simple introducción a una herramienta. Lo plantearía como **“Diseño antes de código”**, utilizando Penpot como vehículo. El CV permitiría mantener un único proyecto durante varias unidades:

**Penpot → HTML semántico → CSS → Flex → Grid → responsive → Bootstrap → Portfolio final.**

De ese modo el alumno verá físicamente cómo una decisión que tomó en el diseño termina convertida semanas después en código. Esa conexión puede ser uno de los hilos conductores más sólidos de toda la UF1841.

[1]: https://help.penpot.app/user-guide/designing/flexible-layouts/?utm_source=chatgpt.com "Flexible Layouts"
[2]: https://penpot.app/?utm_source=chatgpt.com "Penpot: The open-source design platform for teams."
[3]: https://help.penpot.app/user-guide/first-steps/the-interface/?utm_source=chatgpt.com "Interface tour"
[4]: https://help.penpot.app/user-guide/?utm_source=chatgpt.com "User guide"
[5]: https://help.penpot.app/user-guide/design-systems/components/?utm_source=chatgpt.com "Components"
[6]: https://help.penpot.app/user-guide/prototyping-testing/prototyping/?utm_source=chatgpt.com "Prototyping"

