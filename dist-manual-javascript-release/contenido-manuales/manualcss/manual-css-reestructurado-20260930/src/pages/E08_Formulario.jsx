import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E08 · Formulario accesible estilizado
// Objetivo: construir un formulario de contacto bien
// estructurado con label, input, textarea y botón,
// estilizarlo con :focus-visible y hacer accesibles
// los mensajes de error.
// =====================================================

export default function E08_Formulario() {
  useEffect(() => {
    document.title = "E08 · Formulario accesible — Ejercicios CSS";
  }, []);

  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const datos = new FormData(e.target);
    const nuevosErrores = {};
    if (!datos.get("nombre")) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!datos.get("email") || !datos.get("email").includes("@")) nuevosErrores.email = "Escribe un email válido";
    if (!datos.get("mensaje") || datos.get("mensaje").length < 10) nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres";
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
    } else {
      setErrores({});
      setEnviado(true);
    }
  }

  const inputBase = {
    display: "block",
    width: "100%",
    padding: "0.6rem 0.75rem",
    fontSize: "1rem",
    border: "1.5px solid #cbd5e1",
    borderRadius: "8px",
    fontFamily: "inherit",
    background: "white",
    color: "#1e293b",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E08 · Nivel básico · Formularios</p>
        <h1>Formulario accesible estilizado</h1>
        <p className="doc-lead">
          Los formularios son los elementos <strong>más difíciles de estilizar bien</strong>{" "}
          porque tienen que verse bien, funcionar en todos los navegadores{" "}
          <em>y</em> ser accesibles. En este ejercicio construyes un formulario
          de contacto con todos esos requisitos cubiertos.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> estructura semántica <code>label + input</code>,
          reset de estilos nativos, <code>:focus-visible</code>, mensajes de error accesibles
          con <code>aria-describedby</code>, <code>:disabled</code> y <code>:invalid</code>.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · Estructura semántica del formulario</a></li>
            <li><a href="#paso-2">Paso 2 · Reset de inputs — tabula rasa</a></li>
            <li><a href="#paso-3">Paso 3 · :focus-visible — el estado de foco</a></li>
            <li><a href="#paso-4">Paso 4 · Mensajes de error accesibles</a></li>
            <li><a href="#paso-5">Paso 5 · :invalid y :valid — validación visual</a></li>
            <li><a href="#paso-6">Paso 6 · Formulario completo interactivo</a></li>
            <li><a href="#paso-7">Paso 7 · Código final + reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · Estructura semántica del formulario</summary>
          <div className="dd-body">
            <p>
              La regla más importante de los formularios: <strong>cada input debe tener
              su label vinculado</strong>. Hay dos formas de hacerlo:
            </p>

            <pre><code>{`<!-- ✅ Forma 1: for + id (la más universal) -->
<label for="nombre">Tu nombre</label>
<input type="text" id="nombre" name="nombre" />

<!-- ✅ Forma 2: label envuelve el input (sin for ni id) -->
<label>
  Tu nombre
  <input type="text" name="nombre" />
</label>

<!-- ❌ NUNCA hagas esto: input sin label -->
<p>Tu nombre</p>
<input type="text" name="nombre" />
<!-- El lector de pantalla no sabe a qué campo corresponde el texto -->`}</code></pre>

            <h3>Estructura base del formulario de contacto</h3>

            <pre><code>{`<form class="form" novalidate>

  <!-- Grupo: label + input + error -->
  <div class="campo">
    <label class="campo__label" for="nombre">
      Nombre completo
      <span class="campo__required" aria-hidden="true">*</span>
    </label>
    <input
      class="campo__input"
      type="text"
      id="nombre"
      name="nombre"
      autocomplete="name"
      required
      aria-required="true"
      aria-describedby="nombre-error"   /* ← vincula el input con su error */
    />
    <span class="campo__error" id="nombre-error" role="alert">
      El nombre es obligatorio
    </span>
  </div>

  <!-- Email -->
  <div class="campo">
    <label class="campo__label" for="email">Correo electrónico *</label>
    <input class="campo__input" type="email" id="email" name="email"
           autocomplete="email" required aria-describedby="email-error" />
    <span class="campo__error" id="email-error" role="alert"></span>
  </div>

  <!-- Textarea -->
  <div class="campo">
    <label class="campo__label" for="mensaje">Mensaje *</label>
    <textarea class="campo__input campo__textarea"
              id="mensaje" name="mensaje" rows="5"
              required aria-describedby="mensaje-error"></textarea>
    <span class="campo__error" id="mensaje-error" role="alert"></span>
  </div>

  <button class="btn-enviar" type="submit">Enviar mensaje</button>

</form>`}</code></pre>

            <div className="callout">
              <code>aria-describedby</code> crea una conexión invisible entre el input y
              su mensaje de error. Los lectores de pantalla leen el error automáticamente
              cuando el usuario llega al campo.{" "}
              <code>role="alert"</code> anuncia el error en vivo cuando aparece.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · Reset de inputs — tabula rasa</summary>
          <div className="dd-body">
            <p>
              Cada navegador aplica sus propios estilos a los inputs. El primer paso
              es <strong>resetear esos estilos</strong> y construir desde cero:
            </p>

            <pre><code>{`/* Reset base para todos los campos */
.campo__input {
  /* 1. Tipografía: hereda la fuente del documento */
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;

  /* 2. Box model predecible */
  box-sizing: border-box;
  display: block;
  width: 100%;

  /* 3. Padding interior y borde */
  padding: 0.6rem 0.75rem;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;

  /* 4. Background */
  background: white;
  color: #1e293b;

  /* 5. Quitar el outline nativo (lo reemplazaremos con :focus-visible) */
  outline: none;

  /* 6. Transiciones suaves */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* resize: vertical para textarea — el usuario puede agrandar el alto pero no el ancho */
.campo__textarea {
  resize: vertical;
  min-height: 120px;
}`}</code></pre>

            <div className="callout warn">
              ⚠️ <strong>Nunca elimines el foco sin reemplazarlo</strong>. Quitar el{" "}
              <code>outline</code> y no añadir nada es un error de accesibilidad grave
              — los usuarios de teclado pierden la referencia de dónde están.
              El siguiente paso muestra cómo hacerlo bien con <code>:focus-visible</code>.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · :focus-visible — el estado de foco</summary>
          <div className="dd-body">
            <p>
              <code>:focus-visible</code> es la nueva forma correcta de estilizar el foco.
              A diferencia de <code>:focus</code>, solo activa los estilos cuando el usuario
              navega con teclado, no cuando hace clic con el ratón. Mejor experiencia
              visual para todos.
            </p>

            <h3>Comparativa: :focus vs :focus-visible</h3>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead><tr><th>Pseudo-clase</th><th>Con ratón</th><th>Con teclado</th><th>Cuándo usar</th></tr></thead>
                <tbody>
                  <tr><td><code>:focus</code></td><td>✅ Se activa</td><td>✅ Se activa</td><td>Para cambios funcionales (no visuales)</td></tr>
                  <tr><td><code>:focus-visible</code></td><td>❌ No se activa</td><td>✅ Se activa</td><td>Para el anillo de foco visual — úsalo siempre</td></tr>
                </tbody>
              </table>
            </div>

            <pre><code>{`/* ✅ El patrón correcto de foco */
.campo__input:focus-visible {
  border-color: #6366f1;                   /* borde de color */
  box-shadow: 0 0 0 3px rgba(99,102,241,.25); /* anillo exterior semitransparente */
}

/* Para el modo oscuro y preferencias de contraste alto */
@media (prefers-color-scheme: dark) {
  .campo__input {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #475569;
  }
  .campo__input:focus-visible {
    border-color: #818cf8;
    box-shadow: 0 0 0 3px rgba(129,140,248,.3);
  }
}`}</code></pre>

            {/* Demo interactivo del foco */}
            <h3>Prueba el input — haz clic y luego navega con Tab</h3>
            <div style={{ border: "2px dashed var(--border-medium)", borderRadius: "12px", padding: "1.5rem", background: "white" }}>
              <label htmlFor="demo-focus" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                Nombre (prueba el foco)
              </label>
              <input
                id="demo-focus"
                type="text"
                placeholder="Haz clic aquí..."
                style={{
                  ...inputBase,
                  border: "1.5px solid #cbd5e1",
                  outline: "none",
                }}
                onFocus={e => {
                  e.target.style.borderColor = "#6366f1";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,.25)";
                }}
                onBlur={e => {
                  e.target.style.borderColor = "#cbd5e1";
                  e.target.style.boxShadow = "none";
                }}
              />
              <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: "0.5rem", marginBottom: 0 }}>
                El borde púrpura y el anillo exterior se activan al enfocar el campo.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · Mensajes de error accesibles</summary>
          <div className="dd-body">
            <p>
              Los mensajes de error deben ser <strong>visualmente claros</strong> y{" "}
              <strong>accesibles para lectores de pantalla</strong>. El truco: siempre
              están en el DOM (para mantener el layout estable), pero se muestran u
              ocultan con CSS según el estado.
            </p>

            <pre><code>{`/* El mensaje de error: siempre en el DOM, oculto por defecto */
.campo__error {
  display: block;
  font-size: 0.8rem;
  color: #dc2626;
  margin-top: 0.3rem;
  min-height: 1.2em;   /* reserva espacio para que el layout no salte */

  /* Oculto visualmente (pero legible por lectores de pantalla): */
  visibility: hidden;
}

/* Cuando hay un error, se muestra */
.campo--error .campo__error {
  visibility: visible;
}

/* El input con error tiene borde rojo */
.campo--error .campo__input {
  border-color: #dc2626;
  background-color: #fef2f2;
}

.campo--error .campo__input:focus-visible {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220,38,38,.2);
}`}</code></pre>

            <div className="callout tip">
              <strong>Por qué <code>visibility: hidden</code> y no <code>display: none</code>:</strong>{" "}
              con <code>display: none</code>, el elemento sale del flujo y el layout "salta"
              cuando aparece el error. Con <code>visibility: hidden</code>, el espacio se
              reserva siempre y el desplazamiento es 0.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · :invalid y :valid — validación con CSS puro</summary>
          <div className="dd-body">
            <p>
              El navegador tiene pseudo-clases que detectan el estado de validación{" "}
              del campo <em>automáticamente</em>, sin JavaScript:
            </p>

            <pre><code>{`/* Cuidado: :invalid se activa desde que la página carga */
/* Por eso se combina con :not(:placeholder-shown) */

/* Solo muestra rojo DESPUÉS de que el usuario ha escrito algo */
.campo__input:not(:placeholder-shown):invalid {
  border-color: #dc2626;
}

/* Verde cuando el valor es válido */
.campo__input:not(:placeholder-shown):valid {
  border-color: #16a34a;
  background-image: url("data:image/svg+xml,...");  /* opcional: ✓ */
}

/* Para inputs required vacíos: most navegadores los marcan :invalid
   al agregar :not(:placeholder-shown) evitamos el rojo inmediato */`}</code></pre>

            <div className="callout warn">
              ⚠️ La validación CSS con <code>:invalid</code> / <code>:valid</code> es útil pero
              limitada. Para mensajes de error personalizados (como en este ejercicio),
              necesitas JavaScript. Usa <code>novalidate</code> en el <code>{"<form>"}</code>{" "}
              para desactivar la validación nativa del navegador y gestionar todo desde JS.
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 — FORMULARIO INTERACTIVO ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Formulario completo interactivo</summary>
          <div className="dd-body">
            <p>
              Aquí tienes el formulario real con validación en React (los mismos
              principios aplican con JavaScript puro). Prueba a enviar sin rellenar
              los campos para ver los errores.
            </p>

            {/* Formulario interactivo */}
            <div style={{
              border: "2px dashed var(--border-medium)",
              borderRadius: "16px",
              padding: "2rem",
              background: "white",
              maxWidth: "480px",
            }}>
              {enviado ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ margin: "0 0 0.5rem", color: "#16a34a" }}>¡Mensaje enviado!</h3>
                  <p style={{ color: "#64748b", margin: "0 0 1.5rem" }}>Gracias por contactar. Te respondemos en 24h.</p>
                  <button onClick={() => setEnviado(false)} style={{ padding: "0.6rem 1.25rem", background: "#6366f1", color: "white", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Nombre */}
                  <div>
                    <label htmlFor="form-nombre" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.35rem" }}>
                      Nombre completo <span style={{ color: "#dc2626" }} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre"
                      aria-describedby="form-nombre-error"
                      style={{
                        ...inputBase,
                        borderColor: errores.nombre ? "#dc2626" : "#cbd5e1",
                        background: errores.nombre ? "#fef2f2" : "white",
                      }}
                      onFocus={e => { e.target.style.boxShadow = `0 0 0 3px ${errores.nombre ? "rgba(220,38,38,.2)" : "rgba(99,102,241,.25)"}`; e.target.style.borderColor = errores.nombre ? "#dc2626" : "#6366f1"; }}
                      onBlur={e => { e.target.style.boxShadow = "none"; e.target.style.borderColor = errores.nombre ? "#dc2626" : "#cbd5e1"; }}
                    />
                    <span id="form-nombre-error" role="alert" style={{ display: "block", fontSize: "0.78rem", color: "#dc2626", marginTop: "0.25rem", minHeight: "1.2em", visibility: errores.nombre ? "visible" : "hidden" }}>
                      {errores.nombre || " "}
                    </span>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.35rem" }}>
                      Correo electrónico <span style={{ color: "#dc2626" }} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@email.com"
                      aria-describedby="form-email-error"
                      style={{
                        ...inputBase,
                        borderColor: errores.email ? "#dc2626" : "#cbd5e1",
                        background: errores.email ? "#fef2f2" : "white",
                      }}
                      onFocus={e => { e.target.style.boxShadow = `0 0 0 3px ${errores.email ? "rgba(220,38,38,.2)" : "rgba(99,102,241,.25)"}`; e.target.style.borderColor = errores.email ? "#dc2626" : "#6366f1"; }}
                      onBlur={e => { e.target.style.boxShadow = "none"; e.target.style.borderColor = errores.email ? "#dc2626" : "#cbd5e1"; }}
                    />
                    <span id="form-email-error" role="alert" style={{ display: "block", fontSize: "0.78rem", color: "#dc2626", marginTop: "0.25rem", minHeight: "1.2em", visibility: errores.email ? "visible" : "hidden" }}>
                      {errores.email || " "}
                    </span>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="form-mensaje" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.35rem" }}>
                      Mensaje <span style={{ color: "#dc2626" }} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="form-mensaje"
                      name="mensaje"
                      rows={4}
                      placeholder="Escribe tu mensaje aquí (mínimo 10 caracteres)..."
                      aria-describedby="form-mensaje-error"
                      style={{
                        ...inputBase,
                        resize: "vertical",
                        minHeight: "100px",
                        borderColor: errores.mensaje ? "#dc2626" : "#cbd5e1",
                        background: errores.mensaje ? "#fef2f2" : "white",
                      }}
                      onFocus={e => { e.target.style.boxShadow = `0 0 0 3px ${errores.mensaje ? "rgba(220,38,38,.2)" : "rgba(99,102,241,.25)"}`; e.target.style.borderColor = errores.mensaje ? "#dc2626" : "#6366f1"; }}
                      onBlur={e => { e.target.style.boxShadow = "none"; e.target.style.borderColor = errores.mensaje ? "#dc2626" : "#cbd5e1"; }}
                    />
                    <span id="form-mensaje-error" role="alert" style={{ display: "block", fontSize: "0.78rem", color: "#dc2626", marginTop: "0.25rem", minHeight: "1.2em", visibility: errores.mensaje ? "visible" : "hidden" }}>
                      {errores.mensaje || " "}
                    </span>
                  </div>

                  <button type="submit" style={{ padding: "0.75rem 1.5rem", background: "#6366f1", color: "white", border: "none", borderRadius: "8px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", transition: "background 0.2s" }}
                    onMouseEnter={e => e.target.style.background = "#4f46e5"}
                    onMouseLeave={e => e.target.style.background = "#6366f1"}>
                    Enviar mensaje →
                  </button>
                </form>
              )}
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
                <li>Estructura semántica <code>label</code> + <code>input</code> con <code>for/id</code></li>
                <li>Reset de estilos nativos de los inputs</li>
                <li><code>:focus-visible</code> para un anillo de foco accesible</li>
                <li>Mensajes de error con <code>aria-describedby</code> y <code>role="alert"</code></li>
                <li>Validación en JavaScript con feedback visual</li>
                <li><code>visibility</code> vs <code>display</code> para reservar espacio</li>
              </ul>
            </div>

            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Añade un campo de teléfono</strong> con <code>type="tel"</code> y <code>autocomplete="tel"</code>.</li>
                <li><strong>Crea un select estilizado</strong>: resetea la apariencia con <code>appearance: none</code> y añade un ícono de flecha con <code>background-image</code>.</li>
                <li><strong>Checkbox accesible</strong>: crea un grupo de opciones con <code>fieldset</code> + <code>legend</code> + checkboxes personalizados visualmente.</li>
                <li><strong>Estado de carga</strong>: al enviar, cambia el texto del botón a "Enviando…" y añade <code>disabled</code> para evitar doble envío.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e07-galeria-flex" className="btn">← E07 Galería Flex</Link>
          <Link to="/ejercicios/e09-grid-galeria" className="btn btn-primary">Siguiente: E09 Grid Galería →</Link>
        </div>
      </section>
    </main>
  );
}
