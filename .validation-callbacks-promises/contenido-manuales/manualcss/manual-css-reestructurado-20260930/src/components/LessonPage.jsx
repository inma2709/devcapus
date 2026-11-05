import { Link, useParams } from 'react-router-dom';
import MapaCSS from './MapaCSS';
import { coreLessons } from '../pages/coreLessons';
import LessonPreview from './LessonPreview';
import { Checks, LessonExtra } from './LessonExtras';

export default function LessonPage() {
  const { lessonId } = useParams();
  const index = coreLessons.findIndex((item) => item.id === lessonId);
  const item = coreLessons[index];
  if (!item) return null;
  const prev = coreLessons[index - 1]; const next = coreLessons[index + 1];
  return <article className="doc lesson-page"><header className="doc-hero"><p className="doc-kicker">{item.branch}</p><h1>{item.title}</h1><p className="doc-lead">{item.need}</p></header><MapaCSS branch={item.branch} />
    <section className="lesson-block need"><h2>Necesidad</h2><p>{item.need}</p></section>
    <section className="lesson-block"><h2>Ejemplo</h2><h3>HTML</h3><pre><code>{item.html}</code></pre><h3>CSS</h3><pre><code>{item.css}</code></pre></section>
    <section className="lesson-block result"><h2>Resultado esperado</h2><LessonPreview id={item.id}/><p>{item.result}</p></section>
    <section className="lesson-block"><h2>Explicación</h2><p>{item.explanation}</p></section>
    <section className="lesson-block"><h2>Sintaxis y variación</h2><p>{item.variation}</p><div className="callout tip"><strong>Mira lo que ocurre.</strong> Abre el inspector, selecciona el elemento y cambia temporalmente un valor. Después recarga: el cambio temporal desaparece si no lo guardas en CSS.</div></section>
    <LessonExtra id={item.id}/><section className="lesson-block practice"><h2>Ahora tú</h2><p><strong>Objetivo:</strong> {item.practice}</p><p><strong>Estado del proyecto:</strong> {item.project}</p><Checks id={item.id}/></section>
    <nav className="doc-next" aria-label="Navegación entre temas">{prev ? <Link className="btn" to={`/tema/${prev.id}`}>← {prev.title}</Link> : <Link className="btn" to="/">← Inicio</Link>}{next && <Link className="btn btn-primary" to={`/tema/${next.id}`}>{next.title} →</Link>}</nav>
  </article>;
}
