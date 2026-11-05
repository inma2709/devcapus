# Estándar didáctico de los manuales MF0492_3

Esta guía es obligatoria para los manuales de **MF0492_3 — Programación web en el entorno servidor**. Está dirigida a alumnado de formación profesional de nivel 3 con experiencias previas heterogéneas: parte del grupo puede conocer JavaScript, React y Git; otra parte puede empezar desde conocimientos muy básicos.

## Propósito y secuencia

Cada manual debe hacer avanzar el proyecto transversal **Gestor de citas full stack** sin dar por dominados conocimientos no presentados. La secuencia del módulo es:

1. Fundamentos de Node.js — 30 h.
2. APIs REST con Express — 45 h.
3. Arquitectura y calidad del backend — 15 h.
4. Bases de datos relacionales y SQL — 45 h.
5. PostgreSQL desde Node.js — 30 h.
6. Autenticación y seguridad — 15 h.
7. Servicios web y aplicaciones distribuidas — 35 h.
8. Integración y proyecto full stack — 25 h.

Las horas describen la planificación; no equivalen por sí mismas a contenido completado. Actualmente están implementados los once capítulos de las Jornadas 1 a 4 del Manual 1; las jornadas 5 y 6 y los demás manuales siguen pendientes y deben mantener ese estado hasta que sus capítulos y prácticas existan.

## Estructura de cada capítulo

Antes de escribir código, identificar conocimientos previos y enlazar a la lección correspondiente cuando exista. Cada capítulo debe desarrollar, con explicaciones completas:

1. **Problema:** situación concreta que el concepto resuelve en una aplicación de servidor.
2. **Significado:** definición comprensible y el papel de cada término nuevo.
3. **Funcionamiento:** qué sucede paso a paso, incluyendo el recorrido de los datos cuando sea relevante.
4. **Uso:** sintaxis, decisiones de diseño y un ejemplo progresivo.
5. **Errores habituales:** causa, señal observable y cómo diagnosticarlos.
6. **Criterio de uso:** cuándo conviene aplicarlo, cuándo no y qué alternativa se verá más adelante.
7. **Práctica y comprobación:** actividad que pueda resolverse únicamente con lo aprendido hasta ese punto.

No sustituir estas explicaciones por una presentación, un listado de definiciones o un temario. Los capítulos activos de Node proporcionan el patrón mínimo: objetivos, comparación navegador/servidor, código con salida esperada, experimentación, errores, práctica guiada, pistas, solución razonada y pregunta de comprensión.

## Progresión y enlaces previos

- Introducir una idea nueva por vez y explicar el vocabulario antes de usarlo.
- No usar librerías, métodos, patrones de arquitectura o seguridad que el alumnado todavía no haya visto.
- Cuando un capítulo dependa de JavaScript, enlazar a una ruta existente de `/manuales/javascript` o a un `topicSlug` comprobado; no inventar destinos.
- Indicar explícitamente qué conocimiento previo se necesita y por qué.
- Recuperar lo aprendido en prácticas posteriores, aumentando solo una dificultad cada vez.
- Diferenciar claramente lo que ejecuta el navegador de lo que ejecuta Node.js o el servidor.

## Código y resultados

Los ejemplos deben ser correctos, reproducibles y proporcionales al objetivo.

- Incluir archivos, comandos y contexto de ejecución cuando sean necesarios.
- Mostrar la salida esperada y explicar cómo comprobarla.
- Construir el código en pasos pequeños; cada paso debe aportar una idea.
- Comentar el código solo cuando el comentario aclara una decisión o una consecuencia que no se ve a simple vista.
- Evitar introducir paquetes, atajos o abstracciones antes de explicar el problema que solucionan.
- Explicar los errores previsibles: mensajes de terminal, puertos ocupados, rutas no encontradas, datos inválidos o respuestas HTTP incorrectas, según el capítulo.

## Prácticas y evaluación formativa

Cada bloque relevante debe combinar varias de estas actividades:

- **Experimentación guiada:** modificar un valor, ejecutar y observar el cambio.
- **Práctica paso a paso:** aplicar una técnica nueva con instrucciones y criterios de comprobación.
- **Reto individual:** resolver una variación con requisitos claros.
- **Depuración:** partir de un fallo intencionado y explicar el diagnóstico.
- **Preguntas de comprensión:** comprobar el razonamiento, no solo la memoria.
- **Pistas progresivas:** desbloquear el trabajo sin revelar de inicio toda la respuesta.
- **Solución razonada:** explicar por qué funciona y qué errores evita.

Las prácticas deben poder resolverse con los contenidos ya desarrollados. No presentar la solución como un bloque opaco: relacionarla con los objetivos, mostrar el resultado esperado y proponer una comprobación autónoma.

## Redacción

Usar español claro, preciso y adecuado a formación profesional de nivel 3.

- Desarrollar las ideas con párrafos completos y ejemplos situados en el gestor de citas cuando ayuden a comprender.
- Preferir términos técnicos correctos, definidos en el momento en que aparecen.
- Evitar definiciones sin desarrollo, ambigüedades, saltos de dificultad y repeticiones sin valor pedagógico.
- No usar expresiones como «esto es muy sencillo» o «como ya sabes».
- No asumir que el alumnado recuerda una sintaxis si no se ha utilizado o enlazado antes.

## Diseño y accesibilidad

El manual debe facilitar lectura prolongada, no convertir cada párrafo en una tarjeta visual.

- Priorizar HTML semántico, una jerarquía de títulos consecutiva y regiones de navegación con etiquetas accesibles.
- Mantener párrafos legibles, ancho de línea razonable, espacio vertical suficiente y contraste adecuado.
- Usar bloques de código con nombre de archivo o contexto, desplazamiento horizontal cuando sea necesario y salida separada si procede.
- Ofrecer navegación responsive: índice lateral en pantallas amplias y acceso equivalente en móvil.
- No depender únicamente de color, iconos o animación para transmitir información.
- Dar prioridad a la claridad del contenido frente a efectos visuales o tarjetas decorativas.

## Revisión previa a publicar un manual

- [ ] Los objetivos, prerrequisitos y enlaces previos son verificables.
- [ ] Cada concepto responde qué problema resuelve, qué significa, cómo funciona y cuándo se usa.
- [ ] El código se puede ejecutar con las instrucciones proporcionadas y muestra un resultado esperado.
- [ ] Hay prácticas, pistas, solución razonada y comprobación acordes con el capítulo.
- [ ] No hay dependencias conceptuales no explicadas ni enlaces rotos.
- [ ] La navegación es accesible y funciona en móvil y escritorio.
- [ ] El contenido realmente desarrollado justifica el estado `Disponible`.
