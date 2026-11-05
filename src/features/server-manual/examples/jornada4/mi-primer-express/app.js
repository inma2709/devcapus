import express from 'express';

const app = express();
const port = 3000;

const servicios = [
  { id: 1, nombre: 'Corte', precio: 15 },
  { id: 2, nombre: 'Peinado', precio: 25 },
  { id: 3, nombre: 'Color', precio: 40 },
];

const profesionales = [
  { id: 1, nombre: 'Lucía', especialidad: 'Color' },
  { id: 2, nombre: 'Marcos', especialidad: 'Corte' },
];

app.get('/', (req, res) => {
  res.send('Bienvenida a la API de la peluquería');
});

app.get('/health', (req, res) => {
  res.json({ estado: 'ok' });
});

app.get('/servicios', (req, res) => {
  res.json(servicios);
});

app.get('/contacto', (req, res) => {
  res.send('Peluquería DevCampus · contacto@ejemplo.test');
});

app.get('/profesionales', (req, res) => {
  res.json(profesionales);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor disponible en http://localhost:${port}`);
});
