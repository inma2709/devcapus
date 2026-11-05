import { useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E04 · Botones con todos sus estados
// Objetivo: aprender las pseudoclases de interacción
// y crear un sistema de botones accesible y completo.
// =====================================================

export default function E04_Botones() {
  useEffect(() => {
    document.title = "E04 · Botones con todos sus estados — Ejercicios CSS";
  }, []);

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ── HERO ── */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E04 · Nivel inicial</p>
        <h1>Botones con todos sus estados</h1>
        <p className="doc-lead">
          Un botón parece simple pero tiene <strong>5 estados</strong> que hay que diseñar:{" "}
          normal, hover, focus, active y disabled. Cada uno comunica algo diferente al
          usuario. Un botón bien hecho es accesible, claro y consistente.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>:hover</code>, <code>:focus-visible</code>,{" "}
          <code>:active</code>, <code>:disabled</code>, <code>cursor</code>,{" "}
          <code>transition</code>, <code>transform</code> y cómo crear variantes
          (primario, secundario, peligro, outline).
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · El HTML de un botón bien escrito</a></li>
            <li><a href="#paso-2">Paso 2 · La base del botón (reset + estilo propio)</a></li>
            <li><a href="#paso-3">Paso 3 · Los 5 estados con pseudoclases</a></li>
            <li><a href="#paso-4">Paso 4 · Variantes: primario, outline y peligro</a></li>
            <li><a href="#paso-5">Paso 5 · Tamaños: sm, md, lg</a></li>
            <li><a href="#paso-6">Paso 6 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · El HTML de un botón bien escrito</summary>
          <div className="dd-body">
            <p>
              Antes del CSS, la pregunta es: <strong>¿<code>button</code> o <code>a</code>?</strong>
            </p>
            <div
              className="table-wrap"
              role="region"
              aria-label="button vs a"
              tabIndex={0}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Usa <code>&lt;button&gt;</code> cuando…</th>
                    <th>Usa <code>&lt;a&gt;</code> cuando…</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Realiza una acción: abrir modal, enviar formulario, lanzar JS</td>
                    <td>Lleva al usuario a otra URL (navegación)</td>
                  </tr>
                  <tr>
                    <td>No hay URL destino</td>
                    <td>Tiene <code>href</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <pre><code>{`<!-- Botones de acción -->
<button class="btn btn--primary" type="button">
  Guardar cambios
</button>

<button class="btn btn--secondary" type="button">
  Cancelar
</button>

<button class="btn btn--danger" type="button">
  Eliminar cuenta
</button>

<button class="btn btn--outline" type="button">
  Ver más
</button>

<!-- Botón deshabilitado -->
<button class="btn btn--primary" type="button" disabled>
  Procesando...
</button>`}</code></pre>

            <div className="callout">
              💡 <code>type="button"</code> es importante dentro de un{" "}
              <code>&lt;form&gt;</code>: sin él, el botón tiene <code>type="submit"</code>{" "}
              por defecto y enviaría el formulario sin quererlo.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · La base del botón — reset + estilo propio</summary>
          <div className="dd-body">
            <p>
              Los botones tienen estilos por defecto muy feos y distintos entre navegadores
              (borde en relieve, fondo gris, fuente diferente…). Primero reseteamos,
              luego construimos.
            </p>

            <pre><code>{`.btn {
  /* ─── Reset del navegador ─── */
  appearance: none;           /* quita el estilo nativo del SO */
  border: 2px solid transparent;
  background: none;
  font-family: inherit;       /* ← sin esto el botón usa su propia fuente */
  cursor: pointer;            /* mano al pasar por encima */

  /* ─── Nuestro estilo base ─── */
  display: inline-flex;       /* permite alinear icono + texto */
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;      /* por si se usa en un <a> */
  white-space: nowrap;        /* evita que el texto se parta */
  transition: background-color 0.15s ease,
              border-color 0.15s ease,
              color 0.15s ease,
              transform 0.1s ease;
}`}</code></pre>

            <div className="callout tip">
              <strong>¿Por qué <code>font-family: inherit</code>?</strong> Los botones
              en HTML tienen su propio <code>font-family</code> por defecto (suele ser
              la fuente del sistema, no la tuya). Sin <code>inherit</code>, el texto del
              botón no usará Inter aunque lo hayas definido en <code>body</code>.
            </div>
            <div className="callout">
              <strong><code>display: inline-flex</code></strong> es mejor que{" "}
              <code>inline-block</code> para botones porque permite centrar vertical
              y horizontalmente el contenido (útil cuando añades iconos).
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · Los 5 estados con pseudoclases</summary>
          <div className="dd-body">
            <p>
              Un botón bien diseñado responde visualmente a cada interacción del usuario.
              Añadimos los estados sobre el botón primario como ejemplo:
            </p>

            <pre><code>{`/* ─── Estado normal ─── */
.btn--primary {
  background-color: #6366f1;  /* violeta */
  color: white;
  border-color: #6366f1;
}

/* ─── Estado 1: hover (ratón encima) ─── */
.btn--primary:hover {
  background-color: #4f46e5;  /* más oscuro */
  border-color: #4f46e5;
}

/* ─── Estado 2: focus-visible (teclado) ─── */
.btn--primary:focus-visible {
  outline: 3px solid #6366f1;
  outline-offset: 3px;
  /* El outline es EXTRA al borde; no lo sustituye */
}

/* ─── Estado 3: active (clic mantenido) ─── */
.btn--primary:active {
  background-color: #4338ca;          /* aún más oscuro */
  transform: translateY(1px);         /* baja 1px: sensación táctil */
}

/* ─── Estado 4: disabled ─── */
.btn--primary:disabled,
.btn--primary[aria-disabled="true"] {
  opacity: 0.45;
  cursor: not-allowed;            /* cursor de prohibido */
  pointer-events: none;           /* evita hover/active */
}`}</code></pre>

            <div className="callout tip">
              <strong><code>transform: translateY(1px)</code></strong> en el estado{" "}
              <code>:active</code> baja un píxel el botón cuando se hace clic.
              Es un detalle sutil que da sensación de que el botón "se presiona" físicamente.
            </div>
            <div className="callout warn">
              ⚠️ <strong>No uses solo el color</strong> para transmitir el estado deshabilitado.
              La <code>opacity</code> reduce también el contraste, lo que lo hace visible en
              contextos de alto contraste. Combínalo con un cambio de <code>cursor</code>.
            </div>

            {/* Vista previa de estados */}
            <h3>Vista previa — los 5 estados del botón (interactivo)</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1.5rem", borderRadius: "8px", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", background: "white" }}>
              {/* Normal */}
              <div style={{ textAlign: "center" }}>
                <button style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Normal</button>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.4rem" }}>Estado base</div>
              </div>
              {/* Hover simulado */}
              <div style={{ textAlign: "center" }}>
                <button style={{ background: "#4f46e5", color: "white", border: "2px solid #4f46e5", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Hover</button>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.4rem" }}>:hover</div>
              </div>
              {/* Focus simulado */}
              <div style={{ textAlign: "center" }}>
                <button style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem", outline: "3px solid #6366f1", outlineOffset: "3px" }}>Focus</button>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.4rem" }}>:focus-visible</div>
              </div>
              {/* Active simulado */}
              <div style={{ textAlign: "center" }}>
                <button style={{ background: "#4338ca", color: "white", border: "2px solid #4338ca", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem", transform: "translateY(1px)" }}>Active</button>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.4rem" }}>:active</div>
              </div>
              {/* Disabled */}
              <div style={{ textAlign: "center" }}>
                <button disabled style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "not-allowed", fontSize: "0.9rem", opacity: 0.45 }}>Disabled</button>
                <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "0.4rem" }}>:disabled</div>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Variantes: primario, outline y peligro</summary>
          <div className="dd-body">
            <p>
              Con la base definida, las variantes son solo cambios de color. No necesitas
              repetir todo el CSS — solo añades las propiedades que cambian.
            </p>

            <pre><code>{`/* ─── Secundario (gris neutro) ─── */
.btn--secondary {
  background-color: #f1f5f9;
  color: #334155;
  border-color: #e2e8f0;
}
.btn--secondary:hover {
  background-color: #e2e8f0;
}

/* ─── Outline (transparente con borde) ─── */
.btn--outline {
  background-color: transparent;
  color: #6366f1;
  border-color: #6366f1;
}
.btn--outline:hover {
  background-color: #6366f1;
  color: white;
}

/* ─── Peligro (rojo — acciones destructivas) ─── */
.btn--danger {
  background-color: #ef4444;
  color: white;
  border-color: #ef4444;
}
.btn--danger:hover {
  background-color: #dc2626;
  border-color: #dc2626;
}`}</code></pre>

            <div className="callout">
              💡 <strong>Por qué existe el botón de peligro:</strong> Las acciones
              destructivas (eliminar, borrar datos) necesitan una señal visual clara
              de que "esto no tiene vuelta atrás". El rojo es esa señal universal.
              Combínalo siempre con un texto descriptivo ("Eliminar cuenta"), nunca
              solo con el color.
            </div>

            {/* Vista previa variantes */}
            <h3>Vista previa — variantes</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1.5rem", borderRadius: "8px", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", background: "white" }}>
              <button style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Primario</button>
              <button style={{ background: "#f1f5f9", color: "#334155", border: "2px solid #e2e8f0", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Secundario</button>
              <button style={{ background: "transparent", color: "#6366f1", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Outline</button>
              <button style={{ background: "#ef4444", color: "white", border: "2px solid #ef4444", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Peligro</button>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Tamaños: sm, md y lg</summary>
          <div className="dd-body">
            <p>
              El sistema de tamaños solo cambia <code>padding</code> y{" "}
              <code>font-size</code>. Todo lo demás (colores, estados) se hereda de
              las clases base y variante.
            </p>

            <pre><code>{`/* ─── Pequeño ─── */
.btn--sm {
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
}

/* ─── Grande ─── */
.btn--lg {
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  border-radius: 10px;
}

/* ─── Full width (bloque completo) ─── */
.btn--block {
  display: flex;              /* de inline-flex a flex */
  width: 100%;
  justify-content: center;
}`}</code></pre>

            <div className="callout tip">
              La magia de este sistema: puedes combinar clases libremente.{" "}
              <code>class="btn btn--primary btn--lg"</code> te da un botón
              primario grande. <code>class="btn btn--danger btn--sm"</code> te
              da uno pequeño rojo. Sin repetir código.
            </div>

            {/* Vista previa tamaños */}
            <h3>Vista previa — tamaños</h3>
            <div style={{ border: "2px dashed var(--border-medium)", padding: "1.5rem", borderRadius: "8px", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", background: "white" }}>
              <button style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.35rem 0.75rem", fontWeight: 600, cursor: "pointer", fontSize: "0.8rem" }}>Pequeño</button>
              <button style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "8px", padding: "0.6rem 1.25rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>Normal</button>
              <button style={{ background: "#6366f1", color: "white", border: "2px solid #6366f1", borderRadius: "10px", padding: "0.85rem 1.75rem", fontWeight: 600, cursor: "pointer", fontSize: "1rem" }}>Grande</button>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — CÓDIGO FINAL ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Código final completo + reto extra</summary>
          <div className="dd-body">
            <pre><code>{`/* styles.css */
:root {
  --btn-primary:    #6366f1;
  --btn-primary-h:  #4f46e5;
  --btn-primary-a:  #4338ca;
  --btn-danger:     #ef4444;
  --btn-danger-h:   #dc2626;
}

.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: none;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.15s ease,
              border-color 0.15s ease,
              color 0.15s ease,
              transform 0.1s ease;
}

/* Variantes */
.btn--primary  { background: var(--btn-primary);  color: white; border-color: var(--btn-primary); }
.btn--secondary{ background: #f1f5f9; color: #334155; border-color: #e2e8f0; }
.btn--outline  { background: transparent; color: var(--btn-primary); border-color: var(--btn-primary); }
.btn--danger   { background: var(--btn-danger); color: white; border-color: var(--btn-danger); }

/* Estados */
.btn--primary:hover   { background: var(--btn-primary-h); border-color: var(--btn-primary-h); }
.btn--secondary:hover { background: #e2e8f0; }
.btn--outline:hover   { background: var(--btn-primary); color: white; }
.btn--danger:hover    { background: var(--btn-danger-h); border-color: var(--btn-danger-h); }

.btn:active           { transform: translateY(1px); }
.btn:focus-visible    { outline: 3px solid var(--btn-primary); outline-offset: 3px; }
.btn:disabled         { opacity: 0.45; cursor: not-allowed; pointer-events: none; }

/* Tamaños */
.btn--sm    { padding: 0.35rem 0.75rem; font-size: 0.8rem; }
.btn--lg    { padding: 0.85rem 1.75rem; font-size: 1rem; border-radius: 10px; }
.btn--block { display: flex; width: 100%; justify-content: center; }`}</code></pre>

            <div className="callout tip">
              ✅ <strong>Qué has practicado:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li><code>:hover</code>, <code>:focus-visible</code>, <code>:active</code>, <code>:disabled</code></li>
                <li><code>cursor: pointer</code> y <code>cursor: not-allowed</code></li>
                <li><code>transform: translateY()</code> para micro-interacciones</li>
                <li>Sistema de variantes con clases modificadoras</li>
                <li><code>transition</code> con múltiples propiedades</li>
                <li><code>appearance: none</code> para resetear estilos del SO</li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li>Crea un <strong>botón con icono</strong> (puedes usar un emoji o &gt;SVG). Usa <code>display: inline-flex; gap: 0.4rem;</code> para alinear icono y texto.</li>
                <li>Crea un <strong>botón circular de icono</strong> (solo icono, sin texto): mismo width y height, <code>border-radius: 50%</code>.</li>
                <li>Añade un <strong>estado de carga</strong>: clase <code>.btn--loading</code> que añade una animación <code>@keyframes</code> de rotación como spinner.</li>
                <li>Implementa el sistema en un <strong>formulario real</strong> con un botón "Enviar" y un "Cancelar".</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e03-menu-hover" className="btn">← E03 Menú hover</Link>
          <Link to="/ejercicios/e05-variables-css" className="btn btn-primary">Siguiente: E05 Variables →</Link>
        </div>
      </section>
    </main>
  );
}
