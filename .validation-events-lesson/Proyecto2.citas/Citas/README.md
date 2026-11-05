# Gestor de citas

## 1. Objetivo del proyecto

Este proyecto es una aplicación web muy sencilla para practicar cómo pasar de una web informativa a una pequeña aplicación interactiva.

El ejemplo usa una peluquería, pero la idea se puede adaptar después a otros negocios como academia, taller, veterinaria o estética.

## 2. Archivos

- `index.html`: estructura de la página.
- `styles.css`: estilos visuales.
- `app.js`: lógica JavaScript, CRUD y persistencia.

## 3. Cómo ejecutarlo

Abre la carpeta con Visual Studio Code y lanza `Live Server` sobre `index.html`.

No hace falta backend, ni instalación de dependencias, ni base de datos.

## 4. Conceptos JavaScript que trabaja

- Arrays
- Objetos
- `push()`
- `forEach()`
- `find()`
- `filter()`
- `reduce()`
- DOM con `document.querySelector()`
- Eventos con `addEventListener()`
- Formularios con `submit` y `preventDefault()`
- Persistencia con `localStorage`
- JSON con `JSON.stringify()` y `JSON.parse()`

## 5. Cómo funciona `localStorage`

La aplicación guarda el array de citas en `localStorage` bajo la clave `citas`.

Al cargar la página:

1. se comprueba si ya hay datos guardados
2. si existen, se leen con `localStorage.getItem()`
3. se convierten a objeto JavaScript con `JSON.parse()`

Cuando se cambia algo:

1. se modifica el array en memoria
2. se guarda otra vez con `JSON.stringify()`
3. se actualiza `localStorage.setItem()`

## 6. Limitaciones de `localStorage`

`localStorage` no es una base de datos.

- Los datos solo pertenecen a ese navegador.
- No se sincronizan entre dispositivos.
- Pueden borrarse si se limpia el navegador.
- No debe usarse para guardar información sensible real.

