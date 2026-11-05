function AppearancePreview() {
  return <div className="appearance-preview" aria-label="Demostradores visuales de apariencia">
    <article className="preview-card appearance-card"><p className="appearance-label">Curso inicial</p><h2>HTML y CSS</h2><p>Una combinación de color, fondo, familia y altura de línea hace que el contenido se recorra con más comodidad.</p></article>
    <div className="appearance-demo-grid">
      <section className="appearance-demo"><h3 className="preview-spacing">Espaciado</h3><p className="preview-leading">Esta frase tiene más aire entre líneas.</p><p className="preview-words">Palabras con espacio controlado.</p></section>
      <section className="appearance-demo"><p className="preview-transform">texto visualmente transformado</p><a className="preview-decoration" href="#apariencia-preview">Enlace con subrayado visible</a><h3 className="preview-shadow">Sombra sutil</h3></section>
      <section className="appearance-demo"><p className="preview-wrap">https://academia.example/curso-con-un-enlace-demasiado-largo-para-la-tarjeta</p><p className="preview-truncate">Este título es deliberadamente largo y se corta con puntos suspensivos</p></section>
    </div>
    <div className="gradient-preview-row"><div className="gradient-linear">Gradiente lineal</div><div className="gradient-radial">Gradiente radial</div><div className="gradient-image">Texto sobre imagen decorativa</div></div>
    <div className="pseudo-preview"><h2>Manual CSS</h2><p>La primera línea tiene un peso diferente. <span className="pseudo-notice">Aviso decorativo</span></p></div>
  </div>;
}

function UnitsPreview() {
  return <div className="units-preview" aria-label="Demostradores visuales de unidades CSS">
    <section className="unit-rem"><p>1rem · tamaño general</p><h2>2rem · título</h2><span>1.5rem · espacio consistente</span></section>
    <section className="unit-em"><p>El mismo padding en em:</p><button className="unit-button small">Botón pequeño</button><button className="unit-button large">Botón grande</button></section>
    <section className="unit-percent"><div>80% del contenedor</div></section>
    <section className="unit-vh"><div>Hero · min-height: 100vh</div></section>
  </div>;
}

export default function LessonPreview({ id }) {
  if (id === 'primera-regla') return <div className="lesson-preview"><h1 style={{color:'blue'}}>Academia Nova</h1></div>;
  if (id === 'unidades') return <UnitsPreview />;
  if (id === 'apariencia') return <AppearancePreview />;
  if (id === 'caja') return <div className="lesson-preview box-preview"><div className="box-margin">margin<div className="box-border">border<div className="box-padding">padding<div className="box-content">content</div></div></div></div></div>;
  if (id.startsWith('flexbox')) return <div className="lesson-preview preview-flex"><b>Academia Nova</b><span>Cursos</span><span>Contacto</span></div>;
  if (id.startsWith('grid')) return <div className="lesson-preview preview-grid"><span>HTML</span><span>CSS</span><span>JS</span></div>;
  if (id === 'responsive') return <div className="lesson-preview preview-responsive"><span>Academia</span><span>Cursos</span><span>Contacto</span></div>;
  if (id === 'interaccion') return <div className="lesson-preview"><button className="preview-button">Solicitar información</button></div>;
  if (id === 'variables') return <div className="lesson-preview"><button className="preview-variable">Información</button></div>;
  return null;
}
