import { useEffect, useMemo, useState } from "react";

export default function V30_Tablas_CSS() {
  useEffect(() => {
    document.title =
      "V30 · Tablas en HTML + CSS: accesibles, responsive y profesionales";
  }, []);

  // ====== Mini test ======
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué elemento describe el propósito de una tabla para usuarios y lectores de pantalla?",
        options: ["thead", "caption", "tbody", "colgroup"],
        correct: "caption",
        why:
          "<caption> aporta el título/propósito de la tabla y es una ayuda clave para accesibilidad.",
      },
      {
        id: "q2",
        q: "¿Qué atributo es recomendable en <th> para indicar si el encabezado es de columna o de fila?",
        options: ["role", "scope", "axis", "target"],
        correct: "scope",
        why:
          "scope='col' o scope='row' ayuda a relacionar encabezados con celdas en tablas simples.",
      },
      {
        id: "q3",
        q: "¿Qué propiedad CSS controla el espacio entre bordes: separados vs colapsados?",
        options: ["border-collapse", "border-spacing", "outline", "gap"],
        correct: "border-collapse",
        why:
          "border-collapse: collapse une bordes; separate mantiene bordes separados (con border-spacing).",
      },
      {
        id: "q4",
        q: "¿Cuál es un patrón CSS común para hacer una tabla usable en móvil sin romper semántica?",
        options: [
          "Convertir table en div",
          "Usar overflow-x:auto en un contenedor",
          "Eliminar thead",
          "Poner display:flex en tr",
        ],
        correct: "Usar overflow-x:auto en un contenedor",
        why:
          "Envolver la tabla en un contenedor con overflow-x permite scroll horizontal sin destruir la estructura semántica.",
      },
      {
        id: "q5",
        q: "¿Cuándo es un error usar tablas en HTML?",
        options: [
          "Para datos tabulares (correcto)",
          "Para maquetar toda la página",
          "Para comparar precios",
          "Para listar horarios",
        ],
        correct: "Para maquetar toda la página",
        why:
          "Las tablas son para datos tabulares; para layout se usan Grid/Flex.",
      },
      {
        id: "q6",
        q: "¿Qué selector suele usarse para zebra striping (filas alternas) de forma segura?",
        options: ["tr:nth-child(even)", "td:nth-child(odd)", "thead:nth-child(2)", "table:nth-child(even)"],
        correct: "tr:nth-child(even)",
        why:
          "tr:nth-child(even) alterna filas. Conviene aplicarlo dentro de tbody para no afectar thead.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of questions) if (answers[q.id] === q.correct) ok++;
    return ok;
  }, [answers, questions]);

  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">V18 · Componentes UI</p>
        <h1>Tablas en HTML + CSS: accesibles, legibles y responsive (nivel PRO)</h1>

        <p className="doc-lead">
          Las tablas se usan para datos, comparativas, listados y resultados. Una tabla profesional
          no solo “se ve bien”: se lee rápido, se entiende, funciona en móvil, y es accesible
          para teclado y lectores de pantalla.
        </p>

        <div className="callout tip">
          🎯 Objetivos:
          <ul style={{ marginBottom: 0 }}>
            <li>Construir tablas semánticas (caption, thead/tbody, th con scope).</li>
            <li>Aplicar estilo profesional: padding, alineación, zebra, hover.</li>
            <li>Controlar bordes: collapse vs separate.</li>
            <li>Hacer tablas responsive sin romper semántica.</li>
            <li>Aplicar patrones reales: sticky header, columnas numéricas, estados.</li>
          </ul>
        </div>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>🧭 Índice</h2>
          <ol>
            <li><a href="#concepto">1) Qué es una tabla y cuándo usarla</a></li>
            <li><a href="#semantica">2) Semántica profesional: caption, thead/tbody, th</a></li>
            <li><a href="#estilo-base">3) Estilo base: legibilidad, padding, alineación</a></li>
            <li><a href="#bordes">4) Bordes: collapse vs separate</a></li>
            <li><a href="#patrones">5) Patrones PRO: zebra, hover, sticky header, números</a></li>
            <li><a href="#responsive">6) Responsive: scroll horizontal, tablas “card”, prioridades</a></li>
            <li><a href="#accesibilidad">7) Accesibilidad y usabilidad</a></li>
            <li><a href="#gotchas">8) Errores comunes</a></li>
            <li><a href="#retos">9) Retos prácticos</a></li>
            <li><a href="#test">10) Test final</a></li>
          </ol>
        </nav>
      </header>

      {/* ================= 1) CONCEPTO ================= */}
      <section className="doc-section" id="concepto">
        <details className="dd" open>
          <summary>1) Qué es una tabla y cuándo usarla (regla de oro)</summary>
          <div className="dd-body">
            <div className="callout warn">
              Regla de oro:
              <br />
              ✅ Tablas = datos con relación fila/columna.
              <br />
              ❌ Tablas ≠ layout de la página.
            </div>

            <div className="table-wrap" role="region" aria-label="Cuándo usar tablas" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Correcto (sí)</th>
                    <th>Incorrecto (no)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Comparativa de precios</td>
                    <td>Maquetar el footer en columnas</td>
                  </tr>
                  <tr>
                    <td>Horarios (día/hora)</td>
                    <td>Crear la estructura completa de la página</td>
                  </tr>
                  <tr>
                    <td>Resultados, listados, informes</td>
                    <td>Hacer “tarjetas” visuales</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Una tabla se elige cuando los datos tienen una lectura natural en dos ejes:
              <strong> filas (registros)</strong> y <strong>columnas (campos)</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* ================= 2) SEMÁNTICA ================= */}
      <section className="doc-section" id="semantica">
        <details className="dd" open>
          <summary>2) Semántica profesional: caption, thead/tbody, th + scope</summary>
          <div className="dd-body">
            <div className="callout tip">
              La semántica de una tabla es “arquitectura de datos”. El CSS viene después.
            </div>

            <details className="dd dd-nested" open>
              <summary>Estructura recomendada</summary>
              <div className="dd-body">
                <pre>
                  <code>{`<div class="table-wrap" role="region" aria-label="Tabla de precios" tabindex="0">
  <table class="table">
    <caption>Comparativa de planes (mensual)</caption>

    <thead>
      <tr>
        <th scope="col">Plan</th>
        <th scope="col">Usuarios</th>
        <th scope="col">Soporte</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">Starter</th>
        <td>1</td>
        <td>Email</td>
        <td>9 €</td>
      </tr>
      <tr>
        <th scope="row">Pro</th>
        <td>5</td>
        <td>Email + chat</td>
        <td>29 €</td>
      </tr>
      <tr>
        <th scope="row">Business</th>
        <td>20</td>
        <td>Prioritario</td>
        <td>99 €</td>
      </tr>
    </tbody>
  </table>
</div>`}</code>
                </pre>

                <div className="callout">
                  Claves:
                  <ul style={{ marginBottom: 0 }}>
                    <li><code>&lt;caption&gt;</code> describe la tabla (muy útil para accesibilidad).</li>
                    <li><code>&lt;thead&gt;</code> y <code>&lt;tbody&gt;</code> separan encabezados de datos.</li>
                    <li><code>&lt;th scope="col"&gt;</code> para encabezados de columnas.</li>
                    <li><code>&lt;th scope="row"&gt;</code> para encabezados de filas (primera columna suele serlo).</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>¿Cuándo usar colgroup?</summary>
              <div className="dd-body">
                <p>
                  <code>&lt;colgroup&gt;</code> es útil cuando quieres aplicar estilos por columnas
                  (anchos, alineación, fondo suave) sin repetir clases en muchas celdas.
                </p>

                <pre>
                  <code>{`<table class="table">
  <colgroup>
    <col>
    <col style="width:120px">
    <col>
    <col style="width:120px">
  </colgroup>
  ...
</table>`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 3) ESTILO BASE ================= */}
      <section className="doc-section" id="estilo-base">
        <details className="dd" open>
          <summary>3) Estilo base: legibilidad, padding, alineación</summary>
          <div className="dd-body">
            <p>
              El error típico de tablas “feas” es falta de: padding, alineación consistente y jerarquía visual.
            </p>

            <pre>
              <code>{`/* =========================
   Estilo base de tablas (PRO)
   ========================= */

.table-wrap{
  overflow-x: auto;
  border-radius: .9rem;
  border: 1px solid rgba(0,0,0,.10);
  background: #fff;
}

/* Tabla */
.table{
  width: 100%;
  border-collapse: collapse;
  min-width: 680px; /* fuerza scroll horizontal en móvil si hace falta */
}

/* Caption */
.table caption{
  caption-side: top;
  text-align: left;
  font-weight: 900;
  padding: .85rem 1rem;
  color: #111;
}

/* Head */
.table thead th{
  text-align: left;
  font-weight: 900;
  font-size: .95rem;
  padding: .75rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,.12);
  background: rgba(0,0,0,.02);
}

/* Celdas */
.table td,
.table tbody th{
  padding: .75rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,.08);
  vertical-align: top;
}

/* Encabezado de fila (scope=row) */
.table tbody th{
  font-weight: 850;
  color: #111;
  text-align: left;
}`}</code>
            </pre>

            <div className="callout tip">
              <strong>min-width</strong> + <strong>overflow-x</strong> = patrón limpio para móvil.
              No destruyes semántica y mantienes tabla real.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 4) BORDES ================= */}
      <section className="doc-section" id="bordes">
        <details className="dd" open>
          <summary>4) Bordes: border-collapse vs separate (y cuándo usar cada uno)</summary>
          <div className="dd-body">
            <div className="table-wrap" role="region" aria-label="Comparativa border-collapse" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Modo</th>
                    <th>Cómo se ve</th>
                    <th>Cuándo usarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>collapse</code></td>
                    <td>Bordes unidos, aspecto “compacto”</td>
                    <td>Tablas de datos, documentación, admin dashboards</td>
                  </tr>
                  <tr>
                    <td><code>separate</code></td>
                    <td>Celdas con separación (gap visual)</td>
                    <td>Tablas tipo “cards”, diseño más “suave”</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <pre>
              <code>{`/* Separate + spacing */
.table.is-separated{
  border-collapse: separate;
  border-spacing: 0 .5rem;
}

.table.is-separated tbody tr{
  background: #fff;
}

.table.is-separated td,
.table.is-separated th{
  border-bottom: 0;
}`}</code>
            </pre>

            <div className="callout warn">
              En modo separate, el striping/hover y bordes requieren más cuidado para no “romper” la estética.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 5) PATRONES PRO ================= */}
      <section className="doc-section" id="patrones">
        <details className="dd" open>
          <summary>5) Patrones PRO: zebra, hover, sticky header, números</summary>
          <div className="dd-body">
            <details className="dd dd-nested" open>
              <summary>Zebra striping (filas alternas) + hover</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Zebra: solo tbody para no afectar thead */
.table tbody tr:nth-child(even){
  background: rgba(0,0,0,.02);
}

/* Hover: ayuda a leer filas */
.table tbody tr:hover{
  background: rgba(228,77,38,.08);
}`}</code>
                </pre>

                <div className="callout tip">
                  Zebra + hover mejora muchísimo la lectura en tablas con muchas filas.
                </div>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Columnas numéricas: alineación a la derecha</summary>
              <div className="dd-body">
                <p>
                  En datos numéricos (precio, cantidad, %), alinear a la derecha facilita comparar magnitudes.
                </p>

                <pre>
                  <code>{`/* Clase para columnas numéricas */
.td-num{
  text-align: right;
  font-variant-numeric: tabular-nums; /* números monoespaciados */
}`}</code>
                </pre>

                <pre>
                  <code>{`<td class="td-num">99 €</td>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>Sticky header (tablas largas)</summary>
              <div className="dd-body">
                <p>
                  Muy útil en listas largas: el usuario mantiene contexto de columnas.
                </p>

                <pre>
                  <code>{`/* Sticky encabezado: ojo con z-index y background */
.table thead th{
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff; /* importante para que no sea transparente */
}

/* Si la tabla está en un contenedor scrollable */
.table-wrap{
  max-height: 420px;
  overflow: auto; /* vertical + horizontal */
}`}</code>
                </pre>

                <div className="callout warn">
                  Sticky header funciona si el scroll está en el contenedor (table-wrap).
                  Si no, puede no comportarse como esperas.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Estados visuales (p.ej. OK / Warning / Error)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Badges dentro de tabla */
.badge{
  display: inline-flex;
  align-items: center;
  padding: .25rem .55rem;
  border-radius: 999px;
  font-weight: 800;
  font-size: .85rem;
}

.badge.ok{ background: rgba(16,185,129,.15); color: #065f46; }
.badge.warn{ background: rgba(245,158,11,.18); color: #92400e; }
.badge.err{ background: rgba(239,68,68,.18); color: #991b1b; }`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 6) RESPONSIVE ================= */}
      <section className="doc-section" id="responsive">
        <details className="dd" open>
          <summary>6) Responsive: scroll horizontal, “tabla-card” y priorización</summary>
          <div className="dd-body">
            <p>
              No hay una única solución. Depende de cuántas columnas tengas y del tipo de datos.
              Te dejo los 3 patrones más usados.
            </p>

            <details className="dd dd-nested" open>
              <summary>Patrón 1 (recomendado): scroll horizontal (sin romper tabla)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Ya lo tenemos: .table-wrap { overflow-x:auto; } */
.table{ min-width: 680px; }`}</code>
                </pre>

                <div className="callout tip">
                  Ideal para documentación y admin: mantiene semántica y esfuerzo bajo.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón 2: ocultar columnas menos importantes en móvil</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Ocultar columnas opcionales en móvil */
@media (max-width: 520px){
  .col-optional{ display:none; }
}`}</code>
                </pre>

                <pre>
                  <code>{`<th class="col-optional" scope="col">Soporte</th>
<td class="col-optional">Email + chat</td>`}</code>
                </pre>

                <div className="callout warn">
                  Si ocultas columnas, asegúrate de no ocultar información crítica.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Patrón 3: “tabla-card” (avanzado) — solo si es imprescindible</summary>
              <div className="dd-body">
                <p>
                  Este patrón convierte filas en “tarjetas” en móvil. Es útil cuando la tabla tiene muchas columnas
                  y el scroll horizontal no es deseable. OJO: requiere más CSS y disciplina.
                </p>

                <pre>
                  <code>{`/* Tabla-card: versión móvil */
@media (max-width: 520px){
  .table{
    min-width: 0;
  }

  .table thead{
    display: none; /* ocultamos encabezado visual (semántica sigue estando en el DOM) */
  }

  .table,
  .table tbody,
  .table tr,
  .table td,
  .table th{
    display: block;
    width: 100%;
  }

  .table tbody tr{
    border: 1px solid rgba(0,0,0,.10);
    border-radius: .9rem;
    padding: .75rem;
    margin: .75rem 0;
    background: #fff;
  }

  .table td,
  .table tbody th{
    border-bottom: 0;
    padding: .4rem 0;
  }

  /* Etiqueta antes del valor */
  .table td[data-label]::before{
    content: attr(data-label);
    display: block;
    font-size: .85rem;
    font-weight: 850;
    opacity: .75;
    margin-bottom: .15rem;
  }
}`}</code>
                </pre>

                <pre>
                  <code>{`<!-- Requiere data-label en celdas -->
<tr>
  <th scope="row">Pro</th>
  <td data-label="Usuarios">5</td>
  <td data-label="Soporte" class="col-optional">Email + chat</td>
  <td data-label="Precio" class="td-num">29 €</td>
</tr>`}</code>
                </pre>

                <div className="callout warn">
                  Este patrón es didáctico y útil, pero úsalo con criterio: es más “frágil” y requiere mantener data-label.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 7) ACCESIBILIDAD ================= */}
      <section className="doc-section" id="accesibilidad">
        <details className="dd" open>
          <summary>7) Accesibilidad y usabilidad: lo que diferencia una tabla amateur de una pro</summary>
          <div className="dd-body">
            <div className="callout tip">
              Checklist pro:
              <ul style={{ marginBottom: 0 }}>
                <li><code>&lt;caption&gt;</code> describe propósito</li>
                <li><code>&lt;th scope="col/row"&gt;</code> en tablas simples</li>
                <li>Hover/foco que ayudan a seguir filas</li>
                <li>Columnas numéricas alineadas</li>
                <li>En móvil: scroll o estrategia clara</li>
              </ul>
            </div>

            <details className="dd dd-nested" open>
              <summary>Mejoras de foco dentro de la tabla (cuando hay links/botones en celdas)</summary>
              <div className="dd-body">
                <pre>
                  <code>{`/* Si hay enlaces/botones dentro de tabla */
.table a:focus,
.table button:focus{
  outline: none;
}

.table a:focus-visible,
.table button:focus-visible{
  outline: 3px solid rgba(0,0,0,.85);
  outline-offset: 2px;
  border-radius: .4rem;
}`}</code>
                </pre>

                <div className="callout">
                  Si una tabla tiene acciones por fila (“Editar”, “Eliminar”), el foco visible es obligatorio.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ================= 8) GOTCHAS ================= */}
      <section className="doc-section" id="gotchas">
        <details className="dd" open>
          <summary>8) Errores comunes (y cómo evitarlos)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Sin caption</strong> → el usuario no entiende qué está viendo.
              </li>
              <li>
                <strong>Sin th / scope</strong> → peor accesibilidad y lectura.
              </li>
              <li>
                <strong>Sin padding</strong> → tabla “apretada” e ilegible.
              </li>
              <li>
                <strong>Sin estrategia móvil</strong> → en móvil se rompe todo.
              </li>
              <li>
                <strong>Números alineados a la izquierda</strong> → comparaciones difíciles.
              </li>
            </ul>

            <div className="callout warn">
              Nunca uses <code>display:flex</code> en <code>tr</code> como “hack”: rompe el modelo de tabla.
              Si necesitas layout, usa Grid/Flex fuera de la tabla.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 9) RETOS ================= */}
      <section className="doc-section" id="retos">
        <details className="dd" open>
          <summary>9) Retos prácticos (con soluciones)</summary>
          <div className="dd-body">
            <div className="callout">
              🚀 Reto progresivo: intenta hacerlo sin mirar. Después compara con solución.
            </div>

            <details className="dd dd-nested" open>
              <summary>🟢 Reto 1: crea una tabla con caption + zebra + hover</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución (CSS)</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.table caption{ font-weight:900; padding:.85rem 1rem; text-align:left; }
.table tbody tr:nth-child(even){ background:rgba(0,0,0,.02); }
.table tbody tr:hover{ background:rgba(228,77,38,.08); }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested" open>
              <summary>🟡 Reto 2: columna numérica alineada a la derecha</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.td-num{ text-align:right; font-variant-numeric: tabular-nums; }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>🔴 Reto 3: sticky header + contenedor con scroll</summary>
              <div className="dd-body">
                <details className="dd dd-nested">
                  <summary>✅ Solución</summary>
                  <div className="dd-body">
                    <pre>
                      <code>{`.table-wrap{ max-height:420px; overflow:auto; }
.table thead th{ position:sticky; top:0; z-index:2; background:#fff; }`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </details>

            <div className="callout tip">
              Si un alumno implementa sticky header + zebra + columna numérica, ya maneja tablas “de empresa”.
            </div>
          </div>
        </details>
      </section>

      {/* ================= 10) TEST ================= */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>10) Test final (con feedback)</summary>
          <div className="dd-body">
            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3 style={{ marginTop: 0 }}>
                      {i + 1}. {q.q}
                    </h3>

                    <div
                      className="test-question"
                      role="group"
                      aria-label={`Pregunta ${i + 1}`}
                    >
                      {q.options.map((opt) => (
                        <label key={opt}>
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={picked === opt}
                            onChange={() => choose(q.id, opt)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok && (
                          <>
                            ✅ Correcta. <strong>{q.why}</strong>
                          </>
                        )}
                        {bad && (
                          <>
                            ❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next" style={{ gap: ".6rem" }}>
                {!submitted ? (
                  <button className="btn btn-primary" type="submit">
                    Corregir test
                  </button>
                ) : (
                  <>
                    <div className="badge" aria-live="polite">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>

              {submitted && (
                <div
                  className={`callout ${
                    score >= questions.length * 0.85
                      ? "tip"
                      : score >= questions.length * 0.65
                      ? ""
                      : "warn"
                  }`}
                  style={{ marginTop: "1rem" }}
                >
                  {score === questions.length && (
                    <>
                      🏆 <strong>Excelente.</strong> Ya manejas semántica, estilo y responsive de tablas.
                    </>
                  )}
                  {score >= questions.length * 0.85 &&
                    score < questions.length && (
                      <>
                        🎯 <strong>Muy bien.</strong> Repasa caption + scope: son claves.
                      </>
                    )}
                  {score >= questions.length * 0.65 &&
                    score < questions.length * 0.85 && (
                      <>
                        📚 <strong>Buen nivel.</strong> Practica sticky header y estrategias de móvil.
                      </>
                    )}
                  {score < questions.length * 0.65 && (
                    <>
                      🔥 <strong>Aún no.</strong> Vuelve a semántica y responsive: ahí está el núcleo.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </details>
      </section>

      {/* ================= CIERRE ================= */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Cierre PRO:
          <br />
          Una tabla profesional se reconoce porque:
          <strong> se entiende en 3 segundos</strong>, se puede leer con comodidad,
          funciona en móvil y respeta semántica (caption + th + scope).
        </div>

       
      </section>
    </main>
  );
}
