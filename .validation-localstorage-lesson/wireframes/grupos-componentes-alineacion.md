# Lección: grupos, componentes y líneas de alineación en Penpot

Cuando empezamos a diseñar en Penpot es habitual crear muchos elementos independientes:

* rectángulos;
* textos;
* iconos;
* imágenes;
* botones;
* tarjetas.

Al principio puede parecer suficiente colocarlos “a ojo”, pero conforme el diseño crece necesitamos **organizar, mover y alinear** esos elementos de forma más controlada.

En esta lección vamos a trabajar tres conceptos importantes:

* los **grupos**;
* los **componentes**;
* las **líneas y referencias de alineación**.

---

# 1. ¿Qué es un grupo?

Un **grupo** es una forma de reunir varios elementos para tratarlos como una sola unidad.

Imagina que tenemos un título de sección formado por:

* un rectángulo gris;
* el texto `¿Quién soy?`.

Podemos tener inicialmente:

```text
Rectangle

¿Quién soy?
```

como dos elementos independientes.

Si movemos uno, el otro puede quedarse atrás.

Si los agrupamos, tendremos:

```text
Seccion-Quién-soy
├── Rectangle
└── ¿Quién soy?
```

Ahora podemos mover el conjunto completo.

## Idea clave

> Un grupo sirve para mantener juntos varios elementos que forman una misma unidad visual o funcional.

---

# 2. ¿Para qué sirve un grupo?

Un grupo nos ayuda a:

* mover varios elementos a la vez;
* mantener su relación visual;
* organizar mejor el panel de capas;
* evitar que las partes de una misma sección se separen;
* seleccionar un conjunto completo de forma rápida.

Por ejemplo, podemos agrupar:

```text
Foto + nombre + profesión
```

o:

```text
Icono + texto
```

o:

```text
Fondo de una tarjeta + título + descripción
```

---

# 3. Cómo crear un grupo

Supongamos que queremos agrupar:

* un rectángulo;
* el texto `¿Quién soy?`.

## Paso 1

Selecciona el rectángulo.

## Paso 2

Mantén pulsada la tecla:

```text
Shift
```

y selecciona el texto.

Ahora ambos elementos deben quedar seleccionados.

## Paso 3

Pulsa:

```text
Ctrl + G
```

en Windows o Linux.

En macOS:

```text
Cmd + G
```

## Paso 4

Mira el panel de capas.

Ahora debería aparecer algo parecido a:

```text
Group
├── Rectangle
└── ¿Quién soy?
```

## Paso 5

Renombra el grupo.

Por ejemplo:

```text
Titulo-Seccion
```

o:

```text
Seccion-Quién-soy
```

---

# 4. ¿Cómo sé que realmente están agrupados?

El panel de capas es la mejor forma de comprobarlo.

Antes:

```text
movil
├── Rectangle
└── ¿Quién soy?
```

Después:

```text
movil
└── Titulo-Seccion
    ├── Rectangle
    └── ¿Quién soy?
```

El sangrado indica que los elementos están dentro del grupo.

---

# 5. Qué NO hace un grupo

Un grupo mantiene los elementos juntos, pero **no organiza automáticamente el espacio entre ellos**.

Por ejemplo, si tenemos:

```text
Texto

Botón

Icono
```

el grupo no decide:

* separación;
* dirección;
* padding;
* alineación;
* comportamiento responsive.

Para eso utilizaremos más adelante **Layouts**.

## Recuerda

> Grupo = mantiene elementos juntos.

No significa:

> Grupo = sistema automático de distribución.

---

# 6. Grupo y componente no son lo mismo

Esta diferencia es muy importante.

Un **grupo** sirve para organizar elementos.

Un **componente** sirve para crear una pieza reutilizable.

---

# 7. Ejemplo de grupo

Supongamos:

```text
Titulo-Seccion
├── Rectangle
└── ¿Quién soy?
```

Lo agrupamos porque queremos moverlo como una sola unidad.

Eso es suficiente si solo lo vamos a usar una vez.

---

# 8. Ejemplo de componente

Ahora imaginemos que queremos repetir el mismo diseño en varias secciones:

```text
¿Quién soy?

Experiencia

Proyectos

Contacto
```

Todas tendrán:

* el mismo fondo;
* la misma tipografía;
* el mismo tamaño;
* el mismo espaciado.

En ese caso interesa crear un **componente reutilizable**.

Por ejemplo:

```text
Componente: Titulo-Seccion
├── Rectangle
└── Texto
```

Después podemos crear varias instancias:

```text
¿Quién soy?

Experiencia

Proyectos

Contacto
```

---

# 9. Diferencia entre grupo y componente

| Grupo                                       | Componente                                                     |
| ------------------------------------------- | -------------------------------------------------------------- |
| Organiza elementos                          | Crea una pieza reutilizable                                    |
| Sirve para mover varios elementos juntos    | Sirve para repetir un mismo patrón                             |
| No tiene una lógica de reutilización global | Puede tener instancias relacionadas                            |
| Ideal para estructuras únicas               | Ideal para elementos repetidos                                 |
| Cambiar un grupo no afecta a otros          | Cambiar el componente principal puede afectar a sus instancias |

## Regla sencilla

> Si quiero **juntar**, uso un grupo.

> Si quiero **reutilizar**, creo un componente.

---

# 10. Un ejemplo muy claro

Tenemos una tarjeta de proyecto:

```text
┌──────────────────────┐
│ Imagen               │
│ Proyecto             │
│ Descripción          │
│ [Ver proyecto]       │
└──────────────────────┘
```

Si aparece una sola vez, podríamos agrupar sus elementos.

Si aparece varias veces:

```text
Proyecto 1
Proyecto 2
Proyecto 3
```

lo más lógico es crear un componente.

---

# 11. ¿Puede un componente contener grupos?

Sí.

Una estructura puede ser perfectamente:

```text
Componente: Card-Proyecto
├── Grupo Imagen
├── Grupo Contenido
│   ├── Título
│   └── Descripción
└── Botón
```

Los grupos y los componentes no compiten entre sí.

Sirven para cosas diferentes.

---

# 12. ¿Qué son las líneas de alineación?

Mientras movemos o seleccionamos elementos, Penpot puede mostrar:

* líneas rosas;
* cruces;
* marcas;
* referencias.

Estas ayudas visuales sirven para entender cómo se relacionan los objetos entre sí.

Por ejemplo:

* si comparten un borde;
* si están centrados;
* si tienen el mismo eje;
* si existe una determinada distancia entre ellos.

---

# 13. Las cruces rosas

Las cruces indican puntos geométricos importantes.

Por ejemplo:

* esquinas;
* centro del lado superior;
* centro del lado inferior;
* centro del lado izquierdo;
* centro del lado derecho;
* centro del elemento.

Podemos imaginarlo así:

```text
┌─────X─────┐
X           X
X     +     X
X           X
└─────X─────┘
```

Estas marcas **no forman parte del diseño**.

Son solamente referencias.

---

# 14. Las líneas rosas

Las líneas suelen indicar relaciones entre elementos.

Por ejemplo:

```text
[ TARJETA 1 ] ───── [ TARJETA 2 ]
```

Penpot puede mostrar una línea cuando detecta:

* alineación;
* coincidencia de centros;
* coincidencia de bordes;
* distancia entre objetos.

---

# 15. ¿Las X aparecen solo cuando los elementos están alineados?

No.

Las X también pueden aparecer porque el elemento está seleccionado y Penpot está mostrando sus puntos geométricos.

Cuando además existen relaciones de alineación con otros elementos, pueden aparecer líneas adicionales.

## Regla práctica

> X rosas = puntos de referencia.

> Líneas rosas = relaciones entre elementos.

---

# 16. Ejemplo: alinear dos tarjetas

Tenemos:

```text
┌──────────┐     ┌──────────┐
│ Tarjeta  │     │ Tarjeta  │
│    A     │     │    B     │
└──────────┘     └──────────┘
```

Queremos que:

* tengan la misma altura;
* empiecen a la misma altura;
* estén centradas;
* mantengan una separación uniforme.

Al mover una de ellas, Penpot mostrará referencias que nos ayudan a conseguirlo.

---

# 17. Alinear a ojo vs usar referencias

Podemos colocar elementos simplemente observando:

```text
parece que están alineados
```

Pero puede haber diferencias de:

```text
2 px
4 px
7 px
```

que terminan dando sensación de desorden.

Las ayudas de alineación nos permiten trabajar con mayor precisión.

---

# 18. X e Y no son márgenes

Otro concepto importante.

En el panel de propiedades podemos encontrar:

```text
X
Y
```

Eso indica la posición del elemento.

Por ejemplo:

```text
X = 24
Y = 120
```

significa que el elemento está ubicado en una posición concreta respecto a su contenedor.

No significa:

```text
margin-left: 24px;
margin-top: 120px;
```

aunque conceptualmente pueda servir para situar algo con precisión.

---

# 19. Entonces, ¿cómo controlo el espacio?

En una primera fase podemos utilizar:

* X;
* Y;
* guías;
* referencias de alineación.

Más adelante utilizaremos:

* padding;
* gap;
* Flex Layout;
* Grid Layout.

Eso será más robusto.

---

# 20. Ejemplo práctico: título de sección

Queremos construir:

```text
[ ¿Quién soy? ]
```

con fondo gris.

Podemos crear:

```text
Rectangle
+
Texto
```

## Opción A: grupo

Si solo lo usaremos una vez:

```text
Titulo-Quién-soy
├── Rectangle
└── ¿Quién soy?
```

## Opción B: componente

Si queremos repetirlo:

```text
Componente: Titulo-Seccion
├── Rectangle
└── Texto
```

y crear instancias:

```text
¿Quién soy?

Experiencia

Proyectos

Contacto
```

---

# 21. Error frecuente

Crear todo como componente.

No todo necesita reutilizarse.

Si algo aparece una sola vez, un grupo puede ser suficiente.

---

# 22. Otro error frecuente

Crear todo como grupo.

Si un patrón aparece muchas veces:

* botones;
* tarjetas;
* títulos;
* etiquetas;

conviene estudiar si debe ser componente.

---

# 23. Resumen

## Grupo

Sirve para:

> mantener varios elementos juntos.

## Componente

Sirve para:

> crear una pieza reutilizable.

## Líneas de alineación

Sirven para:

> colocar elementos con precisión.

## Cruces rosas

Sirven como:

> referencias geométricas.

---

# 24. Actividad práctica

Crea en tu Board móvil:

1. un rectángulo gris;
2. un texto `¿Quién soy?`;
3. selecciona ambos;
4. crea un grupo;
5. renómbralo como:

```text
Titulo-Seccion
```

Después:

6. duplica el grupo;
7. cambia el texto a:

```text
Experiencia
```

Ahora reflexiona:

> Si voy a repetir este patrón muchas veces, ¿seguirías usando grupos o lo convertirías en componente?

La respuesta más adecuada sería:

> Si va a repetirse y quiero mantener consistencia, sería mejor convertirlo en componente.

---

# 25. Autoevaluación

1. ¿Para qué sirve un grupo?
2. ¿Qué diferencia existe entre grupo y componente?
3. ¿Qué significa el sangrado en el panel de capas?
4. ¿Qué representan las cruces rosas?
5. ¿Qué indican las líneas rosas?
6. ¿X e Y representan márgenes?
7. ¿Cuándo utilizarías un componente en lugar de un grupo?
8. ¿Qué ventajas tiene alinear elementos con referencias en lugar de hacerlo a ojo?

La idea que debe quedar clara es:

> **Agrupar organiza. Alinear da precisión. Componentizar permite reutilizar.**

