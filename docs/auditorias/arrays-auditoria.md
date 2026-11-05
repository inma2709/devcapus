# Auditoría de arrays · Material recuperado

Fecha de revisión: 24 de octubre de 2026. Alcance: inventario no destructivo de `src/features/javascript-manual` y referencias de navegación. No se ha modificado el bloque público durante esta auditoría.

## Mecanismos de recuperación comprobados

- **Git:** no hay un repositorio Git operativo en la raíz; `git` informa de que la carpeta no es un repositorio. No hay commits ni reflog recuperables desde este entorno.
- **Fuentes conservadas:** sí existen varios archivos JSX completos, aunque algunos ya no están importados por `JavaScriptManual.jsx`. Son la fuente principal recuperada.
- **Respaldos y artefactos:** hay directorios y bundles `dist-validation-*`, pero son salidas compiladas y no aportan una versión fuente más legible que los JSX conservados. Los tarballs examinados no han aportado una lección fuente adicional identificable de arrays.
- **Conclusión:** lo recuperado a continuación procede exclusivamente de archivos existentes. No se atribuye a ninguna fuente un contenido no localizado.

La vista local [arrays-versiones-revision.html](arrays-versiones-revision.html) permite seleccionar y leer el archivo completo de cada fuente. No está enlazada por la aplicación.

## Inventario de versiones y variantes

| ID | Título/conjunto | Archivo | Estado | Contenido, ejemplos y actividades | Diferencia relevante |
|---|---|---|---|---|---|
| A | Bloque actual: introducción, consulta, cambios, recorridos y tareas | `src/features/javascript-manual/ArrayBlockLessons.jsx` | Publicada: es la única familia importada por `JavaScriptManual.jsx` | 5 lecciones; notas, compra, turnos, cola, productos y tareas; una actividad con pista y solución por lección | Reduce el bloque a la base; menciona `map`, `find`, `filter` y `reduce` como consolidación |
| B | Lecciones reconstruidas | `src/features/javascript-manual/ArrayLessonsRebuilt.jsx` | Desconectada; fue una variante extensa | Índices, lectura, modificación, `length`, métodos, `for`, `for...of`, `forEach`, `map`, `filter/find/includes`, `while` y práctica | Explicaciones paso a paso, tablas y microprácticas; contiene la comparación `forEach`/`map` |
| C | Lecciones originales compactas | `src/features/javascript-manual/ArrayLessons.jsx` | Desconectada/alternativa | Mismo recorrido básico, `map`, `while` y práctica de horarios/panel de alumnos | Más breve que B; útil como antecedente, no como versión completa autónoma |
| D | Introducción independiente | `src/features/javascript-manual/ArrayIntroLesson.jsx` | Desconectada/duplicada | Problema de las variables de alumnos, array y guía visual; sin actividad | Es la introducción más corta; B y A amplían su explicación |
| E | Añadir y eliminar ampliado | `src/features/javascript-manual/ArrayMethodsLessonExpanded.jsx` | Desconectada/alternativa | `push`, `pop`, `unshift`, `shift`; cola interactiva por fases, HTML, JS, CSS y solución | La explicación más completa de operaciones de extremos; incorpora el complemento I |
| F | `for...of` ampliado | `src/features/javascript-manual/ForOfLessonExpanded.jsx` | Desconectada/alternativa | Recorrido visual por vueltas y explicación de `const` | Es más interactiva que B, pero se centra solo en `for...of` |
| G | Métodos avanzados | `src/features/javascript-manual/ArrayAdvancedLessons.jsx` | Desconectada/alternativa | Transición a callbacks, comparación de métodos, `reduce` desde acumulador y `splice` | Contiene la explicación recuperada más extensa de `reduce`; no incluye `map` como lección propia |
| H | Mini tienda escolar / carrito | `src/features/javascript-manual/ArrayCatalogPracticeLesson.jsx` | Desconectada; práctica completa recuperada | Productos como objetos, `map`, `join`, `push`, `forEach`, acumulador con `for`, HTML y solución parcial/fases | Es la práctica del carrito solicitada; no se ha alterado |
| I | Complemento de cola | `src/features/javascript-manual/ArrayMethodsPremiumAdditions.jsx` | Desconectado; dependía de E | Comprobaciones guiadas y autoevaluación sobre `push`, `pop`, `shift`, `unshift` | Complementa E, no funciona como lección independiente |
| J | Consolidación de arrays útiles | `src/features/javascript-manual/ConsolidationLessons.jsx` (`UsefulArraysLesson`) | Publicada en segunda vuelta | `map`, `find`, `filter`, `reduce` con arrays de objetos; tabla y micropráctica | Es la ubicación actual de `map` y `reduce`; no sustituye el desarrollo progresivo de G |

## Métodos y formas de trabajo localizados

| Herramienta | Finalidad | Versiones/localización | Ejemplo recuperado | Dificultad | Estado actual |
|---|---|---|---|---|---|
| Índice `lista[i]` | Consultar/modificar posición | A, B, C | `notas[0]`, `tareas[1] = ...` | Inicial | Conservado en A |
| `length` | Contar y calcular último índice | A, B, C | `lista[lista.length - 1]` | Inicial | Conservado en A |
| `push`, `pop`, `shift`, `unshift` | Añadir/quitar en extremos | A, B, C, E, I, H | cola de atención | Inicial | Conservados en A; E es explicación ampliada recuperada |
| `for` | Recorrer con índice | A, B, C, G, H | suma de precios / posiciones | Inicial | Conservado en A |
| `for...of` | Recorrer valores | A, B, C, F, H | mostrar productos | Inicial | Conservado en A; F alternativa ampliada |
| `forEach` | Acción por elemento | A, B, C, G, H, J | mostrar nombres/productos | Intermedia | Conservado en A |
| `map` | Crear un array transformado | B, C, G (comparación), H, J | precios con IVA, tarjetas de productos | Intermedia | Trasladado a J; recuperable también desde B/H |
| `find` | Primer elemento que cumple | B, G, J | primer precio alto/alumno | Intermedia | Trasladado a J |
| `filter` | Varios elementos que cumplen | B, G, J | notas aprobadas | Intermedia | Trasladado a J |
| `reduce` | Acumular un único resultado | G, J | suma de precios e ingresos | Intermedia/alta | Trasladado a J; G aporta mejor progresión desde `for` |
| `includes` | Comprobar si existe un valor | B, C | lista de alumnos | Inicial/intermedia | Desconectado, no eliminado de fuente |
| `while` | Recorrer manualmente | B, C | índice manual | Inicial | Desconectado, no eliminado de fuente |
| `splice` | Eliminar por posición | G | producto en el centro | Intermedia | Desconectado, no eliminado de fuente |

## Recuperación específica: `map()` y `reduce()`

### `map()`

- **B** contiene una lección propia: transforma `[10, 20, 30]` en precios con IVA, explica que `return` aporta un valor al array nuevo y diferencia `map()` de `forEach()`.
- **C** tiene una versión más corta con precios e indica que el original no cambia.
- **H** usa `map()` para construir las tarjetas HTML del catálogo y después `join("")`; es una aplicación potente, pero presupone DOM, objetos, template literals y `innerHTML`.
- **J** utiliza `map()` con objetos para extraer nombres; es actualmente la explicación publicada, en consolidación.

### `reduce()`

- **G** es la fuente recuperada recomendada para evaluar: parte de un acumulador `total = 0` dentro de `for...of`, muestra la misma suma con una función con nombre, función anónima y flecha, e incluye una tabla vuelta a vuelta. Tiene micropráctica y solución.
- **J** presenta `reduce()` directamente para sumar ingresos de citas y añade una micropráctica conjunta. Es útil como aplicación, pero presupone arrays de objetos y no tiene el puente desde el acumulador conocido.

Ambos métodos están **trasladados, no perdidos**: sus fuentes continúan íntegras y la vista de revisión las enlaza.

## Prácticas comparadas

| Criterio | Carrito de la compra (H) | Lista de tareas (A) |
|---|---|---|
| Conocimientos | Arrays, objetos, DOM, funciones y representación HTML | Operaciones y recorrido básicos de arrays |
| Métodos | `map`, `join`, `push`, `forEach`; suma con `for` y acumulador | `push`, `shift`, `for...of` |
| Dificultad | Alta e integradora | Inicial, inmediatamente practicable |
| Funciones | `agregarAlCarrito`, `mostrarCarrito`, `calcularTotal` | No exige definir funciones nuevas |
| HTML | Catálogo, tarjetas y carrito | Consola |
| Valor didáctico | Conecta operaciones con una miniinterfaz real | Aísla decisiones fundamentales sin sobrecarga |
| Complejidad | Objetos, template literals, `innerHTML`, DOM y acumulación | Baja; una operación por paso |

Pueden coexistir: la lista de tareas es una comprobación temprana y el carrito una práctica posterior de cierre, siempre que sus prerrequisitos estén enseñados antes. El carrito recuperado conserva en el mismo archivo el enunciado, HTML, fases, código de productos, funciones de carrito, solución disponible y reto de vaciado. No se ha creado un sustituto.

## Valoración didáctica (1–5)

| Versión | Concepto | Previos | Ejemplos | Autonomía | Progresión | Utilidad | Actividades | Evidencia |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| A | 4 | 4 | 3 | 4 | 5 | 4 | 4 | Secuencia clara y solución/pista en cada lección; pierde profundidad de `map`/`reduce`. |
| B | 4 | 4 | 4 | 4 | 3 | 4 | 4 | Tablas, salidas y microprácticas; adelanta varios métodos y alarga el primer contacto. |
| C | 3 | 3 | 3 | 3 | 3 | 3 | 3 | Cubre mucho con poco desarrollo; las actividades son más breves. |
| E + I | 5 | 4 | 5 | 5 | 4 | 5 | 5 | Cola completa con HTML, pasos, comprobación y autoevaluación; alcance deliberadamente estrecho. |
| F | 4 | 4 | 4 | 4 | 4 | 3 | 3 | Simulación por vueltas aclara `for...of`; no compara alternativas ni ofrece práctica extensa. |
| G | 4 | 5 | 5 | 4 | 3 | 5 | 4 | El puente acumulador-`reduce` es excelente; callbacks y varios métodos en la misma familia elevan la carga. |
| H | 4 | 3 | 5 | 4 | 3 | 5 | 4 | Proyecto significativo y guiado; combina demasiados conceptos para un primer ejercicio. |
| J | 4 | 3 | 4 | 3 | 4 | 5 | 3 | Uso real con objetos, pero la explicación presupone una base ya consolidada. |

## Propuesta futura, sin implementación

| Lección propuesta | Base recuperada | Incorporar de otras fuentes |
|---|---|---|
| 1. Problema, lista e índices | A + D | La guía visual de D y la explicación de índices de B |
| 2. Consultar, modificar y contar | A | Tablas y microprácticas de B |
| 3. Añadir y eliminar | E + I | La tabla de decisiones de A; conservar la cola completa como práctica guiada |
| 4. Recorrer y comparar | A + F | Misma lista de A y visualización de vueltas de F |
| 5. Transformar con `map()` | B | Empezar con transformación mediante `for`, después el ejemplo de IVA de B |
| 6. Acumular con `reduce()` | G | Mantener primero el acumulador con `for...of` y la tabla de vueltas; evitar mezclar callbacks como tema central |
| 7. Tabla comparativa | A | Añadir `map` y `reduce` con el nivel de detalle de B/G |
| 8. Práctica: lista de tareas | A | Mantenerla como práctica básica y corta |
| 9. Práctica integradora: carrito | H | Conservar fases y solución recuperadas; situarla solo tras DOM, objetos, `map` y acumuladores |

## Límites de recuperación

- No se ha localizado una versión fuente alternativa del carrito fuera de `ArrayCatalogPracticeLesson.jsx`; la recuperada está completa en ese archivo.
- No existe un historial Git local que permita fechar o recuperar versiones eliminadas antes de los archivos presentes.
- Los bundles compilados se han identificado como artefactos, no como fuentes didácticas recuperables fiables; por ello no se han usado para reconstruir texto.

## Archivos creados por esta auditoría

- `docs/auditorias/arrays-auditoria.md`
- `docs/auditorias/arrays-versiones-revision.html`

No se han modificado archivos de lección, estructura, estilos, rutas ni navegación pública.
