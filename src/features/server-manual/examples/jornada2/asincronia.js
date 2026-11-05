function consultarDisponibilidad(disponible = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (disponible) {
        resolve('La cita de las 10:00 está disponible.');
        return;
      }

      reject(new Error('La cita ya no está disponible.'));
    }, 200);
  });
}

async function mostrarDisponibilidad() {
  console.log('Consultando disponibilidad...');

  try {
    const mensaje = await consultarDisponibilidad(true);
    console.log(mensaje);
  } catch (error) {
    console.error(`No se pudo completar la consulta: ${error.message}`);
  }
}

mostrarDisponibilidad();
