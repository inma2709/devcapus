import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E07 · Galería de tarjetas con Flexbox
// Objetivo: dominar flex-wrap, flex-grow, flex-shrink,
// flex-basis y min-width para crear un grid de tarjetas
// adaptable sin usar CSS Grid.
// =====================================================

const tarjetas = [
  { emoji: "🍕", nombre: "Pizza Napolitana", precio: "12,90 €", categoria: "Comida" },
  { emoji: "📸", nombre: "Cámara Retro", precio: "89,00 €", categoria: "Tech" },
  { emoji: "🎸", nombre: "Guitarra Clásica", precio: "240,00 €", categoria: "Música" },
  { emoji: "🌿", nombre: "Planta de Interior", precio: "24,50 €", categoria: "Hogar" },
  { emoji: "👟", nombre: "Zapatillas Running", precio: "65,00 €", categoria: "Deporte" },
  { emoji: "📚", nombre: "Pack de Libros", precio: "38,00 €", categoria: "Cultura" },
];

export default function E07_Galeria_Flex() {
  useEffect(() => {
    document.title = "E07 · Galería de tarjetas con Flexbox — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E07 · Nivel básico · Flexbox avanzado</p>
        <h1>Galería de tarjetas con Flexbox</h1>
        <p className="doc-lead">
          Flexbox no es solo para una fila. Con <strong>flex-wrap</strong> los ítems{" "}
          <em>se envuelven automáticamente</em> cuando no caben, creando un grid de
          tarjetas que funciona sin CSS Grid y sin media queries complicadas.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>flex-wrap</code>,{" "}
          <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>,
          el shorthand <code>flex</code>, <code>min-width</code> y cómo calcular
          anchos de tarjeta con <code>calc()</code>.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · El problema: ítems que desbordan</a></li>
            <li><a href="#paso-2">Paso 2 · flex-wrap: envolver ítems</a></li>
            <li><a href="#paso-3">Paso 3 · flex-basis: ancho "ideal"</a></li>
            <li><a href="#paso-4">Paso 4 · flex-grow y flex-shrink</a></li>
            <li><a href="#paso-5">Paso 5 · El shorthand flex: 0 0 calc(…)</a></li>
            <li><a href="#paso-6">Paso 6 · Galería de tarjetas completa</a></li>
            <li><a href="#paso-7">Paso 7 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · El problema: ítems que desbordan</summary>
          <div className="dd-body">
            <p>
              Por defecto, Flexbox mete todos los ítems en <strong>una sola línea</strong>{" "}
              aunque no quepan. Los aplasta para que entren. Esto se llama{" "}
              <code>flex-wrap: nowrap</code> y es el valor por defecto.
            </p>

            {/* Demo del problema */}
            <div style={{ marginTop: "1rem", border: "2px dashed #fca5a5", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ef4444", padding: "0.5rem 0.75rem", background: "#fef2f2" }}>
                ❌ flex-wrap: nowrap (por defecto) — las tarjetas se aplastan
              </div>
              <div style={{ display: "flex", flexWrap: "nowrap", gap: "0.5rem", padding: "0.75rem", background: "white", overflowX: "auto" }}>
                {tarjetas.map(t => (
                  <div key={t.nombre} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "0.75rem", minWidth: "100px", textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: "1.5rem" }}>{t.emoji}</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#1e293b", marginTop: "0.25rem" }}>{t.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>Con <code>nowrap</code>, las tarjetas se comprimen o salen del flujo.</p>

            <div className="callout">
              La solución es <code>flex-wrap: wrap</code>: cuando un ítem no cabe en
              la línea actual, <strong>salta a la siguiente</strong>. Como el texto
              en un párrafo, pero con bloques.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · flex-wrap: wrap — envolver ítems</summary>
          <div className="dd-body">
            <p>
              Con <code>flex-wrap: wrap</code> activado, los ítems que no caben en la
              fila actual <strong>caen a la siguiente línea</strong>.
            </p>

            <pre><code>{`.galeria {
  display: flex;
  flex-wrap: wrap;    /* ← permite que los ítems se envuelvan en varias filas */
  gap: 1rem;
}

/* flex-wrap: nowrap (por defecto) — todo en una fila, aplastando */
/* flex-wrap: wrap   — varias filas cuando no caben */
/* flex-wrap: wrap-reverse — varias filas, pero llenando de abajo a arriba */`}</code></pre>

            <div style={{ border: "2px dashed #86efac", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", padding: "0.5rem 0.75rem", background: "#f0fdf4" }}>
                ✅ flex-wrap: wrap — los ítems saltan a la siguiente línea
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: "0.75rem", background: "white" }}>
                {tarjetas.map(t => (
                  <div key={t.nombre} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "0.75rem 1rem", background: "#f8fafc", minWidth: "120px" }}>
                    <div style={{ fontSize: "1.5rem" }}>{t.emoji}</div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, marginTop: "0.25rem" }}>{t.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · flex-basis: el ancho "ideal" de cada ítem</summary>
          <div className="dd-body">
            <p>
              <code>flex-basis</code> es el <strong>tamaño inicial</strong> que quieres que
              tenga un ítem antes de que Flexbox lo estire o encoja. Piénsalo como el{" "}
              <code>width</code> "de partida".
            </p>

            <pre><code>{`.tarjeta {
  flex-basis: 200px;  /* el ítem intenta ser de 200px */
                      /* si hay espacio de sobra, puede crecer (flex-grow) */
                      /* si no cabe, puede encogerse (flex-shrink) */
}`}</code></pre>

            <div className="callout tip">
              La diferencia con <code>width</code>: <code>flex-basis</code> respeta
              el algoritmo de Flexbox — puede ser overrideado por <code>flex-grow</code>{" "}
              y <code>flex-shrink</code>. <code>width</code> es más rígido.
              En un flex item, usa <code>flex-basis</code> en lugar de <code>width</code>.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · flex-grow y flex-shrink</summary>
          <div className="dd-body">
            <p>
              Estas dos propiedades controlan cómo se reparte el espacio sobrante o
              faltante entre los ítems.
            </p>

            <pre><code>{`.item {
  flex-grow: 0;    /* por defecto: no crecer. 1 = sí crecer */
  flex-shrink: 1;  /* por defecto: sí encogerse. 0 = no encogerse nunca */
}`}</code></pre>

            <div className="table-wrap" role="region" aria-label="flex-grow vs flex-shrink" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Propiedad</th>
                    <th>Valor 0</th>
                    <th>Valor 1</th>
                    <th>Cuándo usarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>flex-grow</code></td>
                    <td>No crece (por defecto)</td>
                    <td>Ocupa el espacio sobrante</td>
                    <td>Cuando quieres que un ítem "llene el hueco"</td>
                  </tr>
                  <tr>
                    <td><code>flex-shrink</code></td>
                    <td>No se encoge — puede desbordar</td>
                    <td>Se encoge si no cabe (por defecto)</td>
                    <td><code>0</code> en imágenes o avatares que no deben aplastarse</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Ejemplo visual de flex-grow</h3>
            <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "8px", overflow: "hidden", background: "white" }}>
              {[
                { labels: ["grow: 0", "grow: 0", "grow: 0"], grows: [0, 0, 0], nota: "Sin crecer: los ítems mantienen su tamaño natural" },
                { labels: ["grow: 1", "grow: 1", "grow: 1"], grows: [1, 1, 1], nota: "flex-grow: 1 en todos: se reparten el espacio equitativamente" },
                { labels: ["grow: 2", "grow: 1", "grow: 1"], grows: [2, 1, 1], nota: "El primero crece el doble que los demás (2 partes vs 1 parte)" },
              ].map(({ labels, grows, nota }) => (
                <div key={nota} style={{ padding: "0.75rem", borderBottom: "1px solid var(--border-subtle)" }}>
                  <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.25rem" }}>
                    {labels.map((l, i) => (
                      <div key={i} style={{ flexGrow: grows[i], background: "#6366f1", color: "white", padding: "0.4rem 0.5rem", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 700, fontFamily: "monospace", textAlign: "center", minWidth: "60px" }}>{l}</div>
                    ))}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>{nota}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · El shorthand flex y calc() para tarjetas</summary>
          <div className="dd-body">
            <p>
              El shorthand <code>flex</code> combina las tres propiedades en una línea:
            </p>

            <pre><code>{`/* flex: flex-grow  flex-shrink  flex-basis */
.item { flex: 0 0 200px; }   /* No crece, no encoge, base de 200px */
.item { flex: 1; }           /* Equivale a flex: 1 1 0% — crece y encoge */
.item { flex: 1 0 auto; }    /* Crece todo lo posible, no encoge */`}</code></pre>

            <p>
              Para una galería con un número fijo de columnas (p.ej. 3), el truco es
              usar <code>calc()</code> en el <code>flex-basis</code>:
            </p>

            <pre><code>{`/* 3 tarjetas por fila con gap de 1rem */
.tarjeta {
  flex: 0 0 calc(33.333% - 0.667rem);
  /* 33.333% = un tercio del contenedor
     - 0.667rem = compensación del gap (1rem gap / 3 * 2) */
}

/* Una forma más sencilla con min-width: */
.tarjeta {
  flex: 1 1 240px;   /* crece, encoge, base de 240px */
  min-width: 200px;  /* nunca menos de 200px → en pantallas pequeñas salta de línea */
  max-width: 340px;  /* no se estira demasiado en pantallas grandes */
}`}</code></pre>

            <div className="callout tip">
              <strong>Truco moderno (sin media queries):</strong> usa <code>flex: 1 1 240px</code>
              y las tarjetas se adaptan solas: en móvil ocupan todo el ancho, en tablets van
              de a 2, en desktop de a 3-4. Es el "grid intrínseco" de Flexbox.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Galería de tarjetas completa</summary>
          <div className="dd-body">
            <p>Código final de la galería de productos con Flexbox:</p>

            <pre><code>{`<!-- HTML -->
<section class="galeria">

  <article class="tarjeta">
    <div class="tarjeta__imagen">🍕</div>
    <div class="tarjeta__cuerpo">
      <span class="tarjeta__cat">Comida</span>
      <h3 class="tarjeta__nombre">Pizza Napolitana</h3>
      <p class="tarjeta__precio">12,90 €</p>
      <button class="btn-comprar">Añadir al carrito</button>
    </div>
  </article>

  <!-- Repetir para cada tarjeta -->

</section>`}</code></pre>

            <pre><code>{`/* CSS */
.galeria {
  display: flex;
  flex-wrap: wrap;         /* varias filas */
  gap: 1.5rem;
  padding: 2rem;
}

.tarjeta {
  flex: 1 1 240px;         /* crece, encoge, mínimo de 240px */
  max-width: 320px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.tarjeta:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
  transform: translateY(-3px);
}

.tarjeta__imagen {
  height: 140px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
}

.tarjeta__cuerpo {
  padding: 1rem;
  display: flex;           /* ← Flexbox también dentro de la tarjeta */
  flex-direction: column;  /* apila cat, nombre, precio, botón en columna */
  gap: 0.4rem;
}

.tarjeta__cat {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #6366f1;
}

.tarjeta__nombre {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.tarjeta__precio {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.btn-comprar {
  margin-top: 0.5rem;
  padding: 0.55rem 1rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-comprar:hover { background: #4f46e5; }`}</code></pre>

            {/* Vista previa de la galería */}
            <h3>Vista previa</h3>
            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "12px", overflow: "hidden", background: "#f8fafc", padding: "1.5rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {tarjetas.map(t => (
                  <div key={t.nombre} style={{ flex: "1 1 180px", maxWidth: "220px", border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", background: "white", boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
                    <div style={{ height: "100px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>
                      {t.emoji}
                    </div>
                    <div style={{ padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6366f1" }}>{t.categoria}</span>
                      <strong style={{ fontSize: "0.85rem", color: "#1e293b" }}>{t.nombre}</strong>
                      <span style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a" }}>{t.precio}</span>
                      <button style={{ marginTop: "0.4rem", padding: "0.45rem 0.75rem", background: "#6366f1", color: "white", border: "none", borderRadius: "6px", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer" }}>
                        Añadir →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Resumen y reto extra</summary>
          <div className="dd-body">
            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li><code>flex-wrap: wrap</code> para galería de varias filas</li>
                <li><code>flex-basis</code> como ancho inicial</li>
                <li><code>flex-grow</code> y <code>flex-shrink</code></li>
                <li>El shorthand <code>flex: 1 1 240px</code></li>
                <li>Flexbox anidado (galería + interior de la tarjeta)</li>
                <li>Hover con <code>transform</code> y <code>box-shadow</code></li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Añade una etiqueta de oferta</strong> en la esquina de algunas tarjetas usando <code>position: absolute</code> dentro de <code>position: relative</code>.</li>
                <li><strong>Crea una variante horizontal</strong>: con <code>flex-direction: row</code> dentro de la tarjeta, la imagen va a la izquierda y el texto a la derecha.</li>
                <li><strong>Ordena las tarjetas</strong> por precio simula usando la propiedad <code>order</code> en CSS sin cambiar el HTML.</li>
                <li><strong>Fuerza 2 columnas en móvil</strong> usando <code>{"@media (max-width: 480px) { .tarjeta { flex: 1 1 calc(50% - 0.5rem); } }"}</code>.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e06-flexbox-basico" className="btn">← E06 Flexbox Básico</Link>
          <Link to="/ejercicios/e08-formulario" className="btn btn-primary">Siguiente: E08 Formulario →</Link>
        </div>
      </section>
    </main>
  );
}
