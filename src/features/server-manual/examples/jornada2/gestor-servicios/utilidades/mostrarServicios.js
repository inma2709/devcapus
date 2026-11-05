export function mostrarServicios(servicios) {
  for (const servicio of servicios) {
    console.log(`${servicio.id}. ${servicio.nombre} — ${servicio.precio} €`);
  }
}
