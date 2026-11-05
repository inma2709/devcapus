import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tema9TablasHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 9 · Tablas en HTML";
    // 👇 Si quieres que al entrar al tema se vea desde arriba siempre:
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <section className="doc-hero" aria-labelledby="tema-title">
        <p className="doc-kicker">Tema 9 · Tablas en HTML</p>
        <h1 id="tema-title">Tema 9 · Tablas en HTML</h1>
        <p className="doc-lead">
          Una tabla sirve para mostrar <strong>datos relacionados</strong> en{" "}
          <strong>filas</strong> y <strong>columnas</strong>. En este tema vas a
          aprender a crear tablas <strong>correctas, semánticas y accesibles</strong>,
          y sobre todo: <strong>cuándo sí</strong> y <strong>cuándo no</strong>.
        </p>

        <div className="callout">
          Recuerda: una tabla no es “para que se vea alineado”. Es para datos{" "}
          <strong>tabulares</strong>.
        </div>
      </section>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema Tablas">
        <h2>Índice</h2>
        <ol>
          <li><a href="#s1">¿Qué es una tabla y cuándo usarla?</a></li>
          <li><a href="#s2">Primer ejemplo: tabla SIN CSS (solo HTML)</a></li>
          <li><a href="#s3">Estructura semántica: caption, thead, tbody, tfoot</a></li>
          <li><a href="#s4">Accesibilidad: th y scope</a></li>
          <li><a href="#s5">Errores comunes</a></li>
          <li><a href="#s6">Decisión rápida: ¿tabla o no?</a></li>
          <li><a href="#s7">Ejemplo completo: horario</a></li>
          <li><a href="#resumen">Resumen</a></li>
        </ol>
      </nav>

      {/* 1 */}
      <section className="doc-section" id="s1">
        <h2>1) ¿Qué es una tabla en HTML y cuándo usarla?</h2>

        <p>
          Una <strong>tabla</strong> es una estructura para mostrar{" "}
          <strong>datos relacionados</strong> organizados en filas y columnas.
        </p>

        <div className="callout tip">
          <strong>Cuándo SÍ:</strong> cuando cruzas datos (por ejemplo: día × hora),
          comparas características o muestras listados con columnas.
        </div>

        <ul>
          <li>✅ Horarios</li>
          <li>✅ Listados de precios</li>
          <li>✅ Resultados académicos</li>
          <li>✅ Comparativas (móvil A vs móvil B)</li>
        </ul>

        <div className="callout warn">
          <strong>Cuándo NO:</strong> si lo que quieres es “colocar cajas” o maquetar.
          Para maquetar se usa <strong>CSS (Flex/Grid)</strong>, no tablas.
        </div>
      </section>

      {/* 2 */}
      <section className="doc-section" id="s2">
        <h2>2) Primer ejemplo: tabla SIN CSS (solo HTML)</h2>

        <p>
          Antes de hablar de estilos, vamos a lo importante:{" "}
          <strong>la estructura</strong>. Una tabla debe entenderse aunque no
          tenga CSS.
        </p>

        <details className="dd" open>
          <summary>2.1 Tabla mínima </summary>
          <div className="dd-body">
            <p>Este es el ejemplo para conocer los elementos básicos de una tabla:</p>

            <pre>
              <code>{`<table>
  <tr>
  <caption>Listado de personas</caption>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Juan</td>
    <td>30</td>
  </tr>
</table>`}</code>
            </pre>

            <ul>
              <li><code>&lt;table&gt;</code>: contenedor</li>
              <li><code>&lt;tr&gt;</code>: fila</li>
              <li><code>&lt;th&gt;</code>: encabezado (título)</li>
              <li><code>&lt;td&gt;</code>: dato</li>
            </ul>

            <div className="callout tip">
              <strong>Idea clave:</strong> aunque se vea “parecido”,{" "}
              <code>&lt;th&gt;</code> no significa lo mismo que <code>&lt;td&gt;</code>.
              <code>&lt;th&gt;</code> es un <strong>título</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2.2 Tabla básica con título (caption)</summary>
          <div className="dd-body">
            <p>
              <code>&lt;caption&gt;</code> es el <strong>título</strong> de la tabla.
              Para accesibilidad es muy importante.
            </p>

            <pre>
              <code>{`<table>
  <caption>Listado de alumnos</caption>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>`}</code>
            </pre>

            <div className="callout">
              Los lectores de pantalla leen el <code>caption</code> antes de leer la tabla.
              Ayuda a entender “de qué va”.
            </div>
          </div>
        </details>
      </section>

      {/* 3 */}
      <section className="doc-section" id="s3">
        <h2>3) Tablas “de verdad”: estructura semántica</h2>

        <p>
          En proyectos reales, separa la tabla en partes. No es obligatorio, pero
          es <strong>buena práctica</strong> y ayuda a accesibilidad y mantenimiento.
        </p>

        <details className="dd" open>
          <summary>3.1 thead, tbody y tfoot</summary>
          <div className="dd-body">
            <pre>
              <code>{`<table>
  <caption>Notas finales</caption>

  <thead>
    <tr>
      <th>Alumno</th>
      <th>Nota</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Lucía</td>
      <td>8,5</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">* Datos ficticios</td>
    </tr>
  </tfoot>
</table>`}</code>
            </pre>

            <ul>
              <li><code>&lt;thead&gt;</code>: encabezados</li>
              <li><code>&lt;tbody&gt;</code>: datos principales</li>
              <li><code>&lt;tfoot&gt;</code>: resumen, nota o totales</li>
            </ul>

            <div className="callout tip">
              Esto facilita que lectores de pantalla y herramientas entiendan la tabla.
            </div>
          </div>
        </details>
      </section>

      {/* 4 */}
      <section className="doc-section" id="s4">
        <h2>4) Accesibilidad: th y scope</h2>

        <p>
          Para que una tabla sea accesible, cada dato debe poder asociarse con su
          encabezado. Para eso usamos <code>scope</code>.
        </p>

        <details className="dd" open>
          <summary>4.1 scope="col" y scope="row"</summary>
          <div className="dd-body">
            <pre>
              <code>{`<table>
  <caption>Notas finales</caption>
  <thead>
    <tr>
      <th scope="col">Alumno</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lucía</th>
      <td>8,5</td>
    </tr>
    <tr>
      <th scope="row">Carlos</th>
      <td>6,2</td>
    </tr>
  </tbody>
</table>`}</code>
            </pre>

            <ul>
              <li><code>scope="col"</code>: ese <code>th</code> es título de columna </li>
              <li><code>scope="row"</code>: ese <code>th</code> es título de fila</li>
              <li>¿Qué aporta scope? Facilita la asociación entre datos y encabezados para lectores de pantalla.
                Es esencial para accesibilidad.
              </li>
            </ul>

           
          </div>
        </details>
      </section>

      {/* 5 */}
      <section className="doc-section" id="s5">
        <h2>5) Errores comunes</h2>

        <details className="dd" open>
          <summary>5.1 Lista rápida de “NO”</summary>
          <div className="dd-body">
            <ul>
              <li>❌ Usar tablas para maquetar</li>
              <li>❌ No usar <code>th</code> (todo en <code>td</code>)</li>
              <li>❌ Tabla sin <code>caption</code></li>
              <li>❌ Tablas enormes sin <code>thead</code>/<code>tbody</code></li>
            </ul>

            <pre>
              <code>{`<!-- ❌ Incorrecto: tabla usada para layout -->
<table>
  <tr>
    <td>Menú</td>
    <td>Contenido</td>
  </tr>
</table>`}</code>
            </pre>

            <div className="callout">
              Hoy el diseño se hace con <strong>CSS</strong> (Flex/Grid), no con tablas.
            </div>
          </div>
        </details>
      </section>

      {/* 6 */}
      <section className="doc-section" id="s6">
        <h2>6) Decisión rápida: ¿tabla o no?</h2>

        <div className="table-wrap" role="region" aria-label="Cuándo usar tablas" tabIndex={0}>
          <table className="table table-uf">
            <caption>Decisión rápida: ¿tabla o no?</caption>
            <thead>
              <tr>
                <th scope="col">Situación</th>
                <th scope="col">¿Tabla?</th>
                <th scope="col">Por qué</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Horarios</td>
                <td>✅ Sí</td>
                <td>Datos cruzados (hora × día)</td>
              </tr>
              <tr>
                <td>Formulario</td>
                <td>❌ No</td>
                <td>Es interacción, no datos tabulares</td>
              </tr>
              <tr>
                <td>Tarjetas de productos</td>
                <td>❌ No</td>
                <td>Son bloques independientes (mejor Grid)</td>
              </tr>
              <tr>
                <td>Comparativa técnica</td>
                <td>✅ Sí</td>
                <td>Comparación por columnas muy clara</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout tip">
          Regla de oro: si lo puedes explicar como lista o tarjetas, probablemente no necesitas tabla.
        </div>
      </section>

      {/* 7 */}
      <section className="doc-section" id="s7">
        <h2>7) Ejemplo completo: tabla de horario</h2>

        <p>
          Un uso típico de tablas es un <strong>horario</strong>. Aquí practicamos
          <code>caption</code>, <code>scope</code> y <code>colSpan</code>.
        </p>

        <div className="table-wrap" role="region" aria-label="Horario semanal" tabIndex={0}>
          <table className="table table-uf table-zebra">
            <caption>Horario semanal del curso UF1841</caption>

            <thead>
              <tr>
                <th scope="col">Hora</th>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miércoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">08:00 – 09:00</th>
                <td>HTML</td>
                <td>HTML</td>
                <td>CSS</td>
                <td>CSS</td>
                <td>Repaso</td>
              </tr>

              <tr>
                <th scope="row">09:00 – 10:00</th>
                <td>HTML</td>
                <td>Formularios</td>
                <td>CSS</td>
                <td>Maquetación</td>
                <td>Ejercicios</td>
              </tr>

              <tr>
                <th scope="row">10:00 – 11:00</th>
                <td>Tablas</td>
                <td>Formularios</td>
                <td>Responsive</td>
                <td>Grid</td>
                <td>Proyecto</td>
              </tr>

              <tr>
                <th scope="row">11:00 – 11:30</th>
                <td colSpan={5} className="cell-break">
                  ☕ Descanso
                </td>
              </tr>

              <tr>
                <th scope="row">11:30 – 12:30</th>
                <td>Práctica</td>
                <td>Práctica</td>
                <td>Práctica</td>
                <td>Práctica</td>
                <td>Evaluación</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={6} className="muted">
                  * Ejemplo didáctico para practicar caption, scope y colSpan.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <details className="dd" style={{ marginTop: "1rem" }}>
          <summary>Ver el código del horario (tal cual se usaría en HTML)</summary>
          <div className="dd-body">
            <pre>
              <code>{`<div class="table-wrap" role="region" aria-label="Horario semanal" tabindex="0">
  <table>
    <caption>Horario semanal del curso UF1841</caption>
    <thead>
      <tr>
        <th scope="col">Hora</th>
        <th scope="col">Lunes</th>
        <th scope="col">Martes</th>
        <th scope="col">Miércoles</th>
        <th scope="col">Jueves</th>
        <th scope="col">Viernes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">08:00 – 09:00</th>
        <td>HTML</td>
        <td>HTML</td>
        <td>CSS</td>
        <td>CSS</td>
        <td>Repaso</td>
      </tr>
      <tr>
        <th scope="row">11:00 – 11:30</th>
        <td colspan="5">☕ Descanso</td>
      </tr>
    </tbody>
  </table>
</div>`}</code>
            </pre>
          </div>
        </details>

        <div className="callout">
          Observa:
          <ul>
            <li>Hay <strong>caption</strong> descriptivo.</li>
            <li>Los días son <code>th scope="col"</code>.</li>
            <li>Las horas son <code>th scope="row"</code>.</li>
            <li>El descanso usa <code>colSpan</code>.</li>
            <li><code>.table-wrap</code> permite scroll en móvil sin romper el layout.</li>
          </ul>
        </div>
      </section>

      {/* RESUMEN */}
      <section className="doc-section" id="resumen" aria-labelledby="resumen-title">
        <h2 id="resumen-title">Resumen</h2>

        <div className="callout tip">
          <p>
            <strong>Las tablas</strong> se usan para datos estructurados en filas y columnas.
            Para hacerlas bien:
          </p>
         <ul>
  <li>
    <strong>&lt;caption&gt;</strong>: es el <strong>título de la tabla</strong>.  
    Explica de qué tratan los datos y se asocia semánticamente a la tabla.
    <ul>
      <li>Lo leen primero los lectores de pantalla.</li>
      <li>Ayuda a entender la tabla sin leerla entera.</li>
      <li>No es decoración: es información.Importante para accesibilidad.</li>
      <li> No es lo mismo que un h3 pertenece a la estructura de la tabla.</li>
    </ul>

    <pre><code>{`<table>
  <caption>Listado de alumnos y edades</caption>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>`}</code></pre>

    <p>
      👉 Piensa en <code>&lt;caption&gt;</code> como el <strong>título de un gráfico en un libro</strong>.
      Sin él, la tabla queda “huérfana”.
    </p>
  </li>

  <li>
    <strong>&lt;th&gt;</strong>: define una <strong>celda de encabezado</strong>, no una celda normal.
    <ul>
      <li>Describe a las demás celdas.</li>
      <li>Da contexto a los datos.</li>
      <li>Es clave para accesibilidad.</li>
    </ul>

    <p>
      <strong>No es lo mismo</strong> usar <code>&lt;th&gt;</code> que <code>&lt;td&gt;</code>,
      aunque visualmente se parezcan.
    </p>

    <pre><code>{`<tr>
  <th>Nombre</th>
  <th>Edad</th>
</tr>
<tr>
  <td>Ana</td>
  <td>25</td>
</tr>`}</code></pre>
  </li>

  <li>
    <strong>El atributo <code>scope</code></strong>: indica <strong>a qué afecta ese encabezado</strong>.
    Es lo que permite a un lector de pantalla decir:
    “Edad: 25” en lugar de solo “25”.
    <ul>
      <li><code>scope="col"</code> → encabezado de columna</li>
      <li><code>scope="row"</code> → encabezado de fila</li>
    </ul>

    <pre><code>{`<tr>
  <th scope="col">Nombre</th>
  <th scope="col">Edad</th>
</tr>
<tr>
  <th scope="row">Ana</th>
  <td>25</td>
</tr>`}</code></pre>

    <p>
      👉 Regla sencilla:
      <br />
      • Encabezados arriba → <code>scope="col"</code>  
      • Encabezados a la izquierda → <code>scope="row"</code>
    </p>
  </li>

  <li>
    <strong>Nunca uses tablas para maquetar</strong>.  
    Las tablas son para <strong>datos</strong>, no para diseño.
    <ul>
      <li>El diseño se hace con CSS (Grid / Flexbox).</li>
      <li>Las tablas mal usadas rompen accesibilidad.</li>
    </ul>
  </li>
</ul>

        </div>
      </section>

      {/* NEXT */}
      <div className="doc-next">
        <Link className="btn btn-primary" to="/tema/10">
          Siguiente tema <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
