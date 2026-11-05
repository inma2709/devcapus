import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E06 · Flexbox: centra y distribuye
// Objetivo: entender el modelo mental de Flexbox:
// eje principal, eje cruzado y las propiedades
// justify-content, align-items, gap y flex-direction.
// =====================================================

export default function E06_Flexbox_Centra() {
  useEffect(() => {
    document.title = "E06 · Flexbox: centra y distribuye — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E06 · Nivel básico · Flexbox</p>
        <h1>Flexbox: centra y distribuye</h1>
        <p className="doc-lead">
          Flexbox resuelve de una vez el problema más frustrante del CSS clásico:{" "}
          <strong>centrar cosas y distribuirlas en una fila o columna</strong>.
          En este ejercicio construirás un hero section y aprenderás el modelo
          mental que hay detrás de Flexbox.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>display: flex</code>, eje principal
          vs eje cruzado, <code>justify-content</code>, <code>align-items</code>,{" "}
          <code>flex-direction</code>, <code>gap</code> y <code>flex-wrap</code>.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · El modelo mental de Flexbox</a></li>
            <li><a href="#paso-2">Paso 2 · display: flex — activar el modo</a></li>
            <li><a href="#paso-3">Paso 3 · justify-content — eje principal</a></li>
            <li><a href="#paso-4">Paso 4 · align-items — eje cruzado</a></li>
            <li><a href="#paso-5">Paso 5 · flex-direction — cambiar el eje</a></li>
            <li><a href="#paso-6">Paso 6 · gap — espaciado entre hijos</a></li>
            <li><a href="#paso-7">Paso 7 · Hero section completo</a></li>
            <li><a href="#paso-8">Paso 8 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · El modelo mental de Flexbox</summary>
          <div className="dd-body">
            <p>
              Antes de escribir código, necesitas entender <strong>cómo piensa Flexbox</strong>.
              Hay dos actores: el <strong>contenedor</strong> (el padre, donde se activa Flexbox)
              y los <strong>ítems</strong> (los hijos directos que se organizan).
            </p>

            <div className="callout tip">
              <strong>La regla fundamental:</strong> <code>display: flex</code> se pone
              en el <em>padre</em>. Los <em>hijos</em> se convierten automáticamente en
              flex items y siguen las reglas del contenedor. No necesitas tocar el CSS de
              los hijos para posicionarlos.
            </div>

            <p>
              Flexbox organiza los hijos en <strong>dos ejes perpendiculares</strong>:
            </p>

            {/* Diagrama de ejes */}
            <div style={{ background: "white", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "1.5rem", margin: "1rem 0" }}>
              <div style={{ position: "relative", background: "#eef2ff", borderRadius: "8px", padding: "1.5rem 1.5rem 2.5rem", border: "2px dashed #6366f1" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6366f1", marginBottom: "1rem" }}>CONTENEDOR FLEX (el padre)</div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {["Ítem 1", "Ítem 2", "Ítem 3"].map(i => (
                    <div key={i} style={{ background: "#6366f1", color: "white", padding: "0.5rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 600 }}>{i}</div>
                  ))}
                </div>
                {/* Flecha eje principal */}
                <div style={{ position: "absolute", bottom: "0.5rem", left: "1.5rem", right: "1.5rem", fontSize: "0.7rem", color: "#6366f1", fontWeight: 700 }}>
                  ←————————— Eje principal (row por defecto) —————————→
                </div>
              </div>
              <div style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                <span style={{ background: "#6366f1", color: "white", borderRadius: "4px", padding: "0.1rem 0.4rem", marginRight: "0.5rem" }}>Eje principal (main axis)</span>
                Dirección de los ítems: horizontal por defecto (<code>row</code>). Se controla con <code>justify-content</code>.<br />
                <span style={{ background: "#0891b2", color: "white", borderRadius: "4px", padding: "0.1rem 0.4rem", margin: "0.5rem 0.5rem 0 0" }}>Eje cruzado (cross axis)</span>
                Perpendicular al principal: vertical por defecto. Se controla con <code>align-items</code>.
              </div>
            </div>

            <div className="callout">
              💡 Todo Flexbox gira en torno a estos dos ejes. Si entiendes cuál es el eje
              principal en cada momento, sabrás exactamente qué propiedad usar.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · display: flex — activar el modo</summary>
          <div className="dd-body">
            <p>
              Todo empieza con una sola línea en el <strong>padre</strong>:
            </p>

            <pre><code>{`/* HTML */
<div class="contenedor">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>

/* CSS */
.contenedor {
  display: flex;    /* ← activa Flexbox en este elemento */
  /* Los hijos (A, B, C) pasan a ser flex items automáticamente */
}`}</code></pre>

            {/* Comparativa visual */}
            <h3>Comparación: sin y con display: flex</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ef4444", marginBottom: "0.5rem" }}>❌ Sin display: flex (bloques apilados)</div>
                <div style={{ border: "2px dashed #fca5a5", padding: "0.75rem", borderRadius: "8px", background: "white" }}>
                  {["A", "B", "C"].map(l => (
                    <div key={l} style={{ background: "#fee2e2", border: "1px solid #fca5a5", padding: "0.5rem", marginBottom: "0.25rem", borderRadius: "4px", textAlign: "center", fontWeight: 700, color: "#991b1b" }}>{l}</div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", marginBottom: "0.5rem" }}>✅ Con display: flex (en fila)</div>
                <div style={{ border: "2px dashed #86efac", padding: "0.75rem", borderRadius: "8px", background: "white", display: "flex", gap: "0.25rem" }}>
                  {["A", "B", "C"].map(l => (
                    <div key={l} style={{ background: "#dcfce7", border: "1px solid #86efac", padding: "0.5rem 1rem", borderRadius: "4px", fontWeight: 700, color: "#15803d" }}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginTop: "0.5rem" }}>
              Solo añadiendo <code>display: flex</code> al padre, los hijos pasan de columna a fila.
            </p>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · justify-content — controlar el eje principal</summary>
          <div className="dd-body">
            <p>
              <code>justify-content</code> distribuye el espacio{" "}
              <strong>en el eje principal</strong> (horizontal por defecto). Es la
              propiedad que más usarás para separar, centrar o repartir ítems.
            </p>

            <pre><code>{`.contenedor {
  display: flex;
  justify-content: flex-start;    /* por defecto: todos al inicio */
  justify-content: flex-end;      /* todos al final */
  justify-content: center;        /* centrados */
  justify-content: space-between; /* primero al inicio, último al final, resto repartidos */
  justify-content: space-around;  /* espacio igual alrededor de cada ítem */
  justify-content: space-evenly;  /* espacio exactamente igual entre todos */
}`}</code></pre>

            {/* Demos de justify-content */}
            {[
              { val: "flex-start", label: "flex-start" },
              { val: "center", label: "center" },
              { val: "flex-end", label: "flex-end" },
              { val: "space-between", label: "space-between" },
              { val: "space-around", label: "space-around" },
              { val: "space-evenly", label: "space-evenly" },
            ].map(({ val, label }) => (
              <div key={val} style={{ marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>
                  justify-content: <strong>{label}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: val, gap: "0.4rem", background: "#eef2ff", borderRadius: "6px", padding: "0.5rem", border: "1px solid #a5b4fc" }}>
                  {["1", "2", "3"].map(n => (
                    <div key={n} style={{ background: "#6366f1", color: "white", width: "36px", height: "36px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{n}</div>
                  ))}
                </div>
              </div>
            ))}

            <div className="callout tip">
              <strong>El más usado en proyectos reales:</strong> <code>space-between</code>{" "}
              (logo a la izquierda, opciones a la derecha en una navbar) y <code>center</code>
              (centra el contenido de un hero o una modal).
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · align-items — controlar el eje cruzado</summary>
          <div className="dd-body">
            <p>
              <code>align-items</code> controla cómo se alinean los ítems en el{" "}
              <strong>eje cruzado</strong> (vertical cuando el eje principal es horizontal).
            </p>

            <pre><code>{`.contenedor {
  display: flex;
  align-items: stretch;     /* por defecto: los hijos se estiran a la altura del más alto */
  align-items: flex-start;  /* alineados arriba */
  align-items: flex-end;    /* alineados abajo */
  align-items: center;      /* centrados verticalmente ← el más usado */
  align-items: baseline;    /* alineados por la línea base del texto */
}`}</code></pre>

            {/* Demo de align-items */}
            <h3>Centrado perfecto: justify-content + align-items</h3>
            <p>
              Combinando las dos propiedades, centras cualquier cosa vertical y
              horizontalmente con 3 líneas de CSS:
            </p>
            <pre><code>{`.caja-centrada {
  display: flex;
  justify-content: center;   /* horizontal */
  align-items: center;       /* vertical */
  height: 200px;             /* necesitas altura para que el centro vertical sea visible */
}`}</code></pre>

            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "160px", background: "#f1f5f9" }}>
                <div style={{ background: "#6366f1", color: "white", padding: "1rem 2rem", borderRadius: "10px", fontWeight: 700 }}>
                  ¡Este elemento está perfectamente centrado!
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginTop: "0.5rem" }}>
              Centrar con CSS siempre fue complicado antes de Flexbox. Ahora son 3 líneas.
            </p>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · flex-direction — cambiar el eje principal</summary>
          <div className="dd-body">
            <p>
              Por defecto los ítems van en fila (<code>row</code>). Con{" "}
              <code>flex-direction: column</code> el eje principal pasa a ser
              vertical y los ítems se apilan hacia abajo.
            </p>

            <pre><code>{`.contenedor {
  display: flex;
  flex-direction: row;         /* por defecto: izquierda → derecha */
  flex-direction: row-reverse; /* derecha → izquierda */
  flex-direction: column;      /* arriba → abajo */
  flex-direction: column-reverse; /* abajo → arriba */
}`}</code></pre>

            <div className="callout warn">
              ⚠️ <strong>Importante:</strong> cuando cambias a <code>column</code>, los ejes
              se intercambian. <code>justify-content</code> pasa a controlar el eje{" "}
              <em>vertical</em> y <code>align-items</code> el <em>horizontal</em>.
              Eso confunde al principio — recuerda que <code>justify</code> siempre
              es el <strong>eje principal</strong>, sea cual sea la dirección.
            </div>

            <h3>Comparativa row vs column</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ border: "2px dashed var(--border-medium)", padding: "0.75rem", borderRadius: "8px" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "0.5rem", fontFamily: "monospace" }}>flex-direction: row</div>
                <div style={{ display: "flex", flexDirection: "row", gap: "0.4rem" }}>
                  {["A", "B", "C"].map(l => <div key={l} style={{ background: "#6366f1", color: "white", padding: "0.5rem 0.75rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.85rem" }}>{l}</div>)}
                </div>
              </div>
              <div style={{ border: "2px dashed var(--border-medium)", padding: "0.75rem", borderRadius: "8px" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "0.5rem", fontFamily: "monospace" }}>flex-direction: column</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {["A", "B", "C"].map(l => <div key={l} style={{ background: "#0891b2", color: "white", padding: "0.4rem 0.75rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.85rem" }}>{l}</div>)}
                </div>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · gap — espaciado limpio entre hijos</summary>
          <div className="dd-body">
            <p>
              <code>gap</code> es la forma moderna de separar los flex items. Antes se
              usaban márgenes en los hijos, pero eso creaba problemas en el primer y
              último elemento. <code>gap</code> solo aplica el espacio{" "}
              <strong>entre ítems</strong>, nunca en los bordes exteriores.
            </p>

            <pre><code>{`.contenedor {
  display: flex;
  gap: 1rem;              /* mismo espacio horizontal y vertical */
  gap: 1rem 2rem;         /* primera fila/columna, después entre columnas */
  row-gap: 1rem;          /* solo entre filas */
  column-gap: 1.5rem;     /* solo entre columnas */
}`}</code></pre>

            <h3>gap vs margin: la diferencia</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ef4444", marginBottom: "0.5rem" }}>❌ Con margin (margen en el último)</div>
                <div style={{ display: "flex", background: "#fef2f2", padding: "0.5rem", borderRadius: "8px", border: "1px solid #fca5a5" }}>
                  {["A", "B", "C"].map(l => <div key={l} style={{ background: "#ef4444", color: "white", padding: "0.4rem 0.7rem", marginRight: "0.5rem", borderRadius: "4px", fontWeight: 700 }}>{l}</div>)}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.25rem" }}>El último tiene margen derecho sobrante</div>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#16a34a", marginBottom: "0.5rem" }}>✅ Con gap (solo entre ítems)</div>
                <div style={{ display: "flex", gap: "0.5rem", background: "#f0fdf4", padding: "0.5rem", borderRadius: "8px", border: "1px solid #86efac" }}>
                  {["A", "B", "C"].map(l => <div key={l} style={{ background: "#16a34a", color: "white", padding: "0.4rem 0.7rem", borderRadius: "4px", fontWeight: 700 }}>{l}</div>)}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.25rem" }}>Espacio limpio, solo entre ítems</div>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Hero section completo</summary>
          <div className="dd-body">
            <p>
              Ahora aplicamos todo lo aprendido a un <strong>hero section</strong>:
              imagen a la derecha, texto a la izquierda, todo perfectamente alineado.
            </p>

            <pre><code>{`<!-- HTML del hero -->
<section class="hero">

  <div class="hero__texto">
    <p class="hero__kicker">Bienvenida/o</p>
    <h1 class="hero__titulo">Aprende CSS de verdad</h1>
    <p class="hero__desc">
      De los fundamentos al layout moderno,
      paso a paso y con práctica real.
    </p>
    <a href="#cursos" class="hero__cta">Empezar ahora →</a>
  </div>

  <div class="hero__imagen">
    <img src="portada.png" alt="Ilustración del manual CSS" />
  </div>

</section>`}</code></pre>

            <pre><code>{`/* CSS del hero */
.hero {
  display: flex;
  align-items: center;         /* texto e imagen alineados al centro vertical */
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.hero__texto {
  flex: 1;                     /* ocupa el espacio disponible */
  max-width: 520px;
}

.hero__imagen {
  flex-shrink: 0;              /* la imagen no se encoge */
  width: 340px;
}

.hero__imagen img {
  width: 100%;
  border-radius: 16px;
}

.hero__kicker {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6366f1;
  margin: 0 0 0.5rem;
}

.hero__titulo {
  font-size: clamp(2rem, 4vw, 3rem);  /* responsivo automático con clamp() */
  font-weight: 800;
  margin: 0 0 1rem;
}

.hero__desc {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0 0 2rem;
}

.hero__cta {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #6366f1;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease;
}

.hero__cta:hover { background: #4f46e5; }

/* Responsive: en móvil, columna */
@media (max-width: 640px) {
  .hero {
    flex-direction: column;      /* cambia a columna en móvil */
  }
  .hero__imagen {
    width: 100%;
  }
}`}</code></pre>

            {/* Vista previa del hero */}
            <h3>Vista previa</h3>
            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "12px", overflow: "hidden", background: "white" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", padding: "2.5rem 2rem" }}>
                <div style={{ flex: 1, maxWidth: "420px" }}>
                  <p style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6366f1", margin: "0 0 0.5rem" }}>Bienvenida/o</p>
                  <h2 style={{ fontSize: "2rem", fontWeight: 800, margin: "0 0 0.75rem", color: "#1e293b", lineHeight: 1.2 }}>Aprende CSS de verdad</h2>
                  <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                    De los fundamentos al layout moderno, paso a paso y con práctica real.
                  </p>
                  <span style={{ display: "inline-block", padding: "0.65rem 1.25rem", background: "#6366f1", color: "white", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem" }}>
                    Empezar ahora →
                  </span>
                </div>
                <div style={{ flexShrink: 0, width: "220px" }}>
                  <div style={{ background: "linear-gradient(135deg, #eef2ff, #e0e7ff)", borderRadius: "16px", height: "160px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                    🎨
                  </div>
                </div>
              </div>
            </div>

            <div className="callout tip">
              <code>flex: 1</code> en el texto le dice: "ocupa todo el espacio que
              sobre después de que la imagen tome el suyo". Es la forma más sencilla
              de hacer que un ítem "llene el hueco disponible".
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 — CÓDIGO FINAL ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · Resumen y reto extra</summary>
          <div className="dd-body">
            <div
              className="table-wrap"
              role="region"
              aria-label="Chuleta de Flexbox"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Propiedad (en el padre)</th>
                    <th>Qué controla</th>
                    <th>Valores clave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>display: flex</code></td><td>Activa Flexbox</td><td>—</td></tr>
                  <tr><td><code>flex-direction</code></td><td>Dirección del eje principal</td><td><code>row</code>, <code>column</code></td></tr>
                  <tr><td><code>justify-content</code></td><td>Eje principal</td><td><code>center</code>, <code>space-between</code>, <code>flex-end</code></td></tr>
                  <tr><td><code>align-items</code></td><td>Eje cruzado</td><td><code>center</code>, <code>flex-start</code>, <code>stretch</code></td></tr>
                  <tr><td><code>gap</code></td><td>Espacio entre ítems</td><td><code>1rem</code>, <code>1rem 2rem</code></td></tr>
                  <tr><td><code>flex-wrap</code></td><td>Si los ítems se envuelven</td><td><code>wrap</code>, <code>nowrap</code></td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>El modelo mental contenedor / ítems</li>
                <li>Ejes principal y cruzado</li>
                <li><code>justify-content</code> y <code>align-items</code></li>
                <li><code>flex-direction</code> para cambiar el eje</li>
                <li><code>gap</code> para espaciado limpio</li>
                <li>Un hero section real con Flexbox</li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Navbar con logo + links:</strong> usa <code>justify-content: space-between</code> y <code>align-items: center</code> para el layout clásico de barra.</li>
                <li><strong>Footer de tres columnas</strong> usando Flexbox con <code>gap</code> y <code>flex: 1</code> en cada columna.</li>
                <li><strong>Centra un modal</strong> en la pantalla: el overlay tiene <code>display: flex; justify-content: center; align-items: center; height: 100vh;</code>.</li>
                <li><strong>Experimenta con <code>order</code>:</strong> cambia el orden visual de los ítems sin tocar el HTML usando la propiedad <code>order</code> en los hijos.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e05-variables-css" className="btn">← E05 Variables CSS</Link>
          <Link to="/ejercicios/e07-galeria-flex" className="btn btn-primary">Siguiente: E07 Galería Flex →</Link>
        </div>
      </section>
    </main>
  );
}
