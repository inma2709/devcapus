# El flujo de trabajo en diseño web: de la idea al código

Cuando abrimos Penpot por primera vez aparecen varias opciones:

* **Wireframing**
* **Diseño UX/UI**
* **Sistemas de diseño**
* **Prototipado**
* **Generación de código a partir del diseño**

Es importante entender que estas opciones no representan trabajos aislados.

En realidad forman parte de un mismo proceso.

Podemos imaginar el desarrollo de una web así:

> **Idea → Wireframe → Diseño UX/UI → Sistema de diseño → Prototipo → Código**

No siempre todos los proyectos siguen exactamente este orden ni todos necesitan la misma profundidad, pero para aprender desarrollo web es un flujo muy útil.

---

# 1. Primero: definir qué queremos hacer

Antes de abrir Penpot deberíamos poder responder algunas preguntas.

Por ejemplo, en nuestro caso queremos construir un **CV digital**.

Entonces debemos preguntarnos:

* ¿Quién va a visitar esta web?
* ¿Qué queremos que sepa de nosotros?
* ¿Qué información debemos mostrar?
* ¿Qué queremos que haga el visitante?
* ¿Contactarnos?
* ¿Ver nuestros proyectos?
* ¿Descargar nuestro currículum?
* ¿Visitar nuestro GitHub?

Todavía no estamos pensando en colores ni en código.

Estamos pensando en el **objetivo**.

## Ejemplo

Nuestro objetivo podría ser:

> Crear un CV digital que permita a una empresa conocer rápidamente nuestro perfil profesional, nuestros conocimientos y nuestros proyectos.

A partir de aquí podemos decidir qué contenido necesitamos:

```text
Nombre

Profesión

Sobre mí

Tecnologías

Experiencia

Formación

Proyectos

Contacto
```

Esta es siempre la primera fase:

## **pensar antes de diseñar.**

---

# 2. Wireframing: decidir la estructura

La primera opción que vamos a utilizar en Penpot es:

# **Wireframing**

Un **wireframe** es un esquema visual muy sencillo de una página.

Podemos compararlo con el plano de una vivienda.

Antes de decidir:

* el color de las paredes;
* los muebles;
* las lámparas;

un arquitecto decide:

* dónde estará la cocina;
* dónde estará el salón;
* dónde estarán las habitaciones.

En una web ocurre algo parecido.

Antes de decidir:

* colores;
* tipografías;
* fotografías;
* sombras;

decidimos:

* dónde estará el menú;
* dónde aparecerá el nombre;
* dónde irá la fotografía;
* dónde estarán los proyectos;
* dónde estará el contacto.

---

## Ejemplo de wireframe

Nuestro CV podría comenzar así:

```text
┌──────────────────────────────────────────┐
│ NOMBRE                    MENÚ           │
├──────────────────────────────────────────┤
│                                          │
│ PRESENTACIÓN                  FOTO       │
│                                          │
│ [VER PROYECTOS] [CONTACTAR]              │
│                                          │
├──────────────────────────────────────────┤
│              SOBRE MÍ                    │
├──────────────────────────────────────────┤
│             TECNOLOGÍAS                  │
├──────────────────────────────────────────┤
│             EXPERIENCIA                  │
├──────────────────────────────────────────┤
│              PROYECTOS                   │
├──────────────────────────────────────────┤
│               CONTACTO                   │
└──────────────────────────────────────────┘
```

No importa todavía que sea bonito.

Lo importante es comprobar:

> **¿Está bien organizada la información?**

---

# 3. ¿Qué debemos decidir durante el wireframing?

Principalmente cuatro cosas.

### Qué información aparece

Por ejemplo:

```text
Experiencia
Formación
Proyectos
Tecnologías
```

### En qué orden

Quizá decidimos que:

```text
Proyectos
```

debe aparecer antes que:

```text
Formación
```

porque estamos buscando empleo como desarrolladores.

### Qué importancia tiene cada elemento

Por ejemplo:

```text
Laura Martín
Desarrolladora Web
```

debe tener mucha más importancia que:

```text
© 2026 Laura Martín
```

### Cómo se distribuye la información

Por ejemplo:

```text
Texto | Fotografía
```

o:

```text
Texto
Fotografía
```

---

# 4. UX: pensar en la experiencia del usuario

Después aparece otra expresión muy utilizada:

# **UX**

Significa:

> **User Experience**

o:

> **Experiencia de Usuario**

UX no significa simplemente que una página sea bonita.

UX se pregunta:

> **¿Es fácil utilizar esta página?**

---

## Ejemplo

Supongamos que visitamos un CV digital porque queremos contratar a esa persona.

Queremos encontrar rápidamente:

```text
¿Quién es?

¿Qué sabe hacer?

¿Qué experiencia tiene?

¿Qué proyectos ha realizado?

¿Cómo puedo contactar?
```

Si tenemos que buscar durante cinco minutos dónde está el email:

tenemos un problema de UX.

Si los proyectos están escondidos:

tenemos un problema de UX.

Si el menú es confuso:

tenemos un problema de UX.

---

# 5. Una pregunta fundamental de UX

Siempre podemos preguntarnos:

> **¿Qué quiere hacer el usuario ahora?**

Por ejemplo, en nuestro CV:

```text
Usuario
   ↓
entra en la web
   ↓
entiende quién somos
   ↓
consulta tecnologías
   ↓
ve proyectos
   ↓
decide contactar
```

Nuestro diseño debería facilitar ese recorrido.

A este recorrido se le suele llamar **flujo de usuario** o **user flow**.

---

# 6. UI: decidir cómo se verá

Después aparece:

# **UI**

Significa:

> **User Interface**

o:

> **Interfaz de Usuario**

Aquí empezamos a trabajar la apariencia visual.

Decidimos:

* colores;
* tipografías;
* botones;
* iconos;
* bordes;
* tarjetas;
* tamaños;
* espaciado;
* fotografías.

---

# 7. Diferencia entre UX y UI

Es una diferencia importante.

Podemos resumirla así:

### UX

Pregunta:

> **¿Funciona bien para el usuario?**

### UI

Pregunta:

> **¿Cómo se presenta visualmente?**

---

## Un ejemplo sencillo

Imagina un botón:

```text
CONTACTAR
```

### UX decide:

* que debe existir;
* dónde colocarlo;
* cuándo debe aparecer;
* qué ocurrirá al pulsarlo.

### UI decide:

* su color;
* su tamaño;
* su tipografía;
* su borde;
* su forma.

---

# 8. Diseño UX/UI

Cuando Penpot muestra:

> **Diseñando el UX/UI de una aplicación**

está hablando precisamente de estas dos dimensiones.

En nuestro curso las trabajaremos juntas.

Primero:

```text
¿qué necesita el usuario?
```

Después:

```text
¿cómo se lo presentamos?
```

---

# 9. Sistemas de diseño

Otra de las opciones iniciales de Penpot es:

# **Creando sistemas de diseño**

Puede parecer algo muy avanzado, pero la idea básica es sencilla.

Supongamos que nuestra web tiene diez botones.

Podríamos diseñarlos así:

```text
botón 1 → azul

botón 2 → azul algo diferente

botón 3 → otro azul

botón 4 → tamaño distinto
```

El resultado será inconsistente.

---

# 10. Un sistema de diseño establece reglas

Por ejemplo:

```text
COLOR PRINCIPAL
#2563EB

TIPOGRAFÍA
Inter

BOTÓN PRINCIPAL
fondo azul
texto blanco
border-radius 8px

ESPACIADO
8 / 16 / 24 / 32 / 48

TARJETAS
border-radius 12px
padding 24px
```

Ahora todos los elementos siguen el mismo criterio.

---

# 11. Podemos pensar en un sistema de diseño como un vocabulario

Definimos previamente:

```text
qué aspecto tiene un botón

qué aspecto tiene una tarjeta

qué aspecto tiene un título

qué colores podemos utilizar

qué distancias utilizamos
```

Y después reutilizamos esas reglas.

---

# 12. Componentes

Los sistemas de diseño utilizan mucho el concepto de:

# **componente**

Un componente es una pieza reutilizable.

Por ejemplo:

```text
[ CONTACTAR ]
```

Podemos convertirlo en un componente:

```text
Button
```

Y utilizarlo muchas veces.

Otro ejemplo:

```text
┌────────────────────┐
│ Imagen             │
│ Proyecto           │
│ Descripción        │
│ [Ver proyecto]     │
└────────────────────┘
```

podría convertirse en:

```text
CardProyecto
```

---

# 13. Esto se parece mucho a programación

Más adelante podríamos crear algo parecido en código:

```html
<button class="btn-primary">
    Contactar
</button>
```

o en determinados frameworks:

```jsx
<Button>
    Contactar
</Button>
```

Es decir:

> **el concepto de componente existe tanto en diseño como en desarrollo.**

---

# 14. Prototipado

Otra opción que aparece en Penpot es:

# **Prototipado**

Hasta ahora nuestro diseño puede ser simplemente una imagen estática.

Pero una página web tiene comportamiento.

El usuario:

* pulsa botones;
* abre menús;
* cambia de página;
* cierra ventanas;
* completa formularios.

Un prototipo nos permite simular parte de ese comportamiento antes de programarlo.

---

# 15. Ejemplo de prototipo

Podríamos diseñar dos pantallas:

```text
CV
```

y:

```text
DETALLE DE PROYECTO
```

Después conectamos:

```text
[Ver proyecto]
       ↓
Detalle del proyecto
```

Al ejecutar el prototipo podremos pulsar el botón y navegar.

Todavía no existe HTML.

Todavía no existe JavaScript.

Pero podemos comprobar si el flujo tiene sentido.

---

# 16. ¿Para qué sirve un prototipo?

Nos permite detectar problemas muy pronto.

Por ejemplo:

```text
¿Está claro dónde hay que pulsar?

¿Existe una forma de volver?

¿El menú resulta comprensible?

¿El usuario sabe dónde está?

¿El proceso requiere demasiados pasos?
```

Es mucho más barato modificar esto en Penpot que después de programar toda la aplicación.

---

# 17. Generación de código a partir del diseño

Penpot también muestra:

# **Generando código a partir de diseños**

Esta opción puede resultar muy atractiva.

Pero debemos entenderla correctamente.

Un diseño puede contener información que posteriormente se expresa mediante:

```text
HTML

CSS

SVG
```

Por ejemplo, si tenemos:

```text
padding: 24px

gap: 16px

display: flex
```

Penpot puede ayudarnos a consultar esas propiedades.

---

# 18. Pero el diseño no sustituye al desarrollador

No debemos pensar:

> diseño → pulsar botón → aplicación terminada.

El código generado o inspeccionado puede servir como:

* referencia;
* punto de partida;
* ayuda;
* documentación para desarrollo.

Pero tendremos que entender:

* HTML;
* CSS;
* responsive;
* accesibilidad;
* semántica;
* JavaScript.

Ese será precisamente el resto del curso.

---

# 19. Nuestro flujo completo

Vamos a utilizar este proceso:

```text
1. IDEA
   ↓
2. OBJETIVO
   ↓
3. CONTENIDO
   ↓
4. WIREFRAME
   ↓
5. UX
   ↓
6. UI
   ↓
7. SISTEMA DE DISEÑO
   ↓
8. RESPONSIVE
   ↓
9. PROTOTIPO
   ↓
10. DESARROLLO
```

---

# 20. Aplicándolo a nuestro CV

Nuestro proyecto recorrerá todas estas fases.

## Fase 1. Idea

Queremos:

> crear un CV digital.

---

## Fase 2. Objetivo

Queremos que una empresa pueda:

```text
conocernos

ver nuestros conocimientos

consultar proyectos

contactarnos
```

---

## Fase 3. Contenido

Necesitaremos:

```text
Nombre

Profesión

Sobre mí

Tecnologías

Experiencia

Formación

Proyectos

Contacto
```

---

## Fase 4. Wireframe

Decidiremos:

```text
dónde aparece cada sección

qué aparece primero

qué ocupa más espacio

cómo se organiza
```

---

## Fase 5. UX

Comprobaremos:

```text
¿se entiende quién soy?

¿se encuentran los proyectos?

¿el contacto es visible?

¿la navegación es sencilla?
```

---

## Fase 6. UI

Elegiremos:

```text
colores

tipografías

tamaños

botones

tarjetas

imágenes
```

---

## Fase 7. Sistema de diseño

Crearemos reglas para:

```text
botones

colores

espaciado

tipografía

tarjetas
```

---

## Fase 8. Responsive

Diseñaremos como mínimo:

```text
Desktop

Mobile
```

Y veremos que no tienen por qué ser exactamente iguales.

---

## Fase 9. Prototipo

Crearemos interacciones.

Por ejemplo:

```text
CV
 ↓
Ver proyecto
 ↓
Proyecto
 ↓
Volver
 ↓
CV
```

---

## Fase 10. Programación

Entonces podremos abrir Visual Studio Code.

Transformaremos nuestro diseño en:

```text
HTML
+
CSS
+
Flexbox
+
Grid
+
Responsive
+
JavaScript cuando sea necesario
```

---

# 21. Una comparación útil

Podemos imaginarlo como construir una casa.

| Desarrollo web    | Construcción                    |
| ----------------- | ------------------------------- |
| Objetivos         | Necesidades del propietario     |
| Contenido         | Habitaciones necesarias         |
| Wireframe         | Plano                           |
| UX                | Cómo se utiliza la vivienda     |
| UI                | Acabados y estética             |
| Sistema de diseño | Normas de materiales y acabados |
| Prototipo         | Maqueta                         |
| HTML/CSS/JS       | Construcción                    |

Sería extraño comenzar a construir paredes y después preguntar:

> “¿Dónde ponemos la cocina?”

En desarrollo web deberíamos evitar hacer lo equivalente.

---

# 22. El error que queremos evitar durante el curso

Este:

```text
Tengo que hacer una web.

↓

Abro VS Code.

↓

Empiezo a escribir HTML.

↓

Ahora pienso dónde poner las cosas.

↓

Cambio el HTML.

↓

El CSS deja de funcionar.

↓

Cambio otra vez la estructura.

↓

Arreglo CSS.

↓

En móvil se rompe.

↓

Vuelvo a modificarlo todo.
```

---

# 23. El proceso que queremos aprender

Este:

```text
Tengo que hacer una web.

↓

Pienso qué necesito.

↓

Organizo el contenido.

↓

Creo el wireframe.

↓

Compruebo la UX.

↓

Diseño la interfaz.

↓

Preparo móvil y escritorio.

↓

Creo un prototipo.

↓

Tengo claro qué voy a construir.

↓

Empiezo a programar.
```

---

# 24. ¿Por qué empezamos por Wireframing en Penpot?

Ahora podemos entender por qué, en la pantalla inicial de Penpot, hemos elegido:

## **Wireframing**

No porque las demás opciones no nos interesen.

Todo lo contrario.

Las utilizaremos después.

Nuestro recorrido será:

```text
WIREFRAMING
     ↓
UX/UI
     ↓
SISTEMA DE DISEÑO
     ↓
PROTOTIPADO
     ↓
DESARROLLO
```

El alumno irá pasando progresivamente por cada una.

---

# 25. Importante: no son compartimentos aislados

En un proyecto profesional estos procesos pueden mezclarse.

Por ejemplo:

podemos descubrir durante el prototipado que el wireframe tenía un problema.

Entonces regresamos atrás:

```text
Wireframe
   ↓
Diseño
   ↓
Prototipo
   ↓
detectamos problema
   ↓
Wireframe
```

El diseño no siempre es un proceso completamente lineal.

Es un proceso:

# **iterativo**

---

# 26. ¿Qué significa iterar?

Significa:

```text
diseñar

↓

probar

↓

detectar problemas

↓

mejorar

↓

volver a probar
```

Y repetir tantas veces como sea necesario.

Esta forma de trabajar es habitual tanto en diseño como en desarrollo de software.

---

# 27. Lo que debe recordar el alumno

No necesitamos memorizar todavía todas las herramientas de Penpot.

Necesitamos comprender estas cinco palabras:

### **Wireframe**

Define la **estructura**.

### **UX**

Define cómo será la **experiencia de uso**.

### **UI**

Define la **apariencia visual**.

### **Sistema de diseño**

Define las **reglas y componentes reutilizables**.

### **Prototipo**

Permite **simular el funcionamiento**.

Y finalmente:

### **Desarrollo**

Convierte todas esas decisiones en **código real**.

---

# 28. Nuestro mapa durante el curso

Cada vez que tengamos dudas podremos volver a este esquema:

```text
                IDEA
                  │
                  ▼
              OBJETIVO
                  │
                  ▼
              CONTENIDO
                  │
                  ▼
             WIREFRAME
         "¿Dónde va cada cosa?"
                  │
                  ▼
                 UX
         "¿Es fácil utilizarlo?"
                  │
                  ▼
                 UI
           "¿Cómo se verá?"
                  │
                  ▼
        SISTEMA DE DISEÑO
      "¿Qué reglas reutilizamos?"
                  │
                  ▼
             RESPONSIVE
       "¿Qué ocurre en móvil?"
                  │
                  ▼
             PROTOTIPO
        "¿Cómo se comportará?"
                  │
                  ▼
             DESARROLLO
        HTML + CSS + JS
```

## Idea clave del tema

> **Diseñar no consiste en retrasar la programación. Diseñar consiste en decidir qué vamos a programar antes de empezar a construirlo.**

Ese será el enfoque que seguiremos con nuestro primer proyecto: **el CV digital**.

