import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// EJERCICIO E14 · Bootstrap: formulario con validación visual
// Objetivo: dominar los controles de formulario de Bootstrap,
// la retroalimentación visual de validación con is-valid /
// is-invalid y las clases de agrupación de campos.
// =====================================================

// Demo interactiva de validación
const campos = [
  { id: "nombre", label: "Nombre completo", tipo: "text", placeholder: "Ana García", validar: v => v.trim().length >= 3 ? "" : "El nombre debe tener al menos 3 caracteres" },
  { id: "email", label: "Correo electrónico", tipo: "email", placeholder: "ana@ejemplo.com", validar: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Introduce un email válido" },
  { id: "password", label: "Contraseña", tipo: "password", placeholder: "Mínimo 8 caracteres", validar: v => v.length >= 8 ? "" : "La contraseña debe tener al menos 8 caracteres" },
];

export default function E14_Bootstrap_Forms() {
  useEffect(() => {
    document.title = "E14 · Bootstrap Formularios — Ejercicios CSS";
  }, []);

  const [valores, setValores] = useState({ nombre: "", email: "", password: "" });
  const [tocados, setTocados] = useState({});
  const [enviado, setEnviado] = useState(false);

  const errores = Object.fromEntries(
    campos.map(c => [c.id, c.validar(valores[c.id] || "")])
  );
  const todosValidos = Object.values(errores).every(e => e === "");

  function handleChange(e) {
    setValores(v => ({ ...v, [e.target.id]: e.target.value }));
  }
  function handleBlur(e) {
    setTocados(t => ({ ...t, [e.target.id]: true }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTocados(Object.fromEntries(campos.map(c => [c.id, true])));
    if (todosValidos) setEnviado(true);
  }

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">Saltar al contenido</a>

      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Ejercicio E14 · Nivel intermedio · Bootstrap 5</p>
        <h1>Bootstrap: formulario con validación visual</h1>
        <p className="doc-lead">
          Bootstrap incluye un sistema completo de estilos para formularios accesibles:
          controles uniformes, selects, checkboxes, textareas y{" "}
          <strong>validación visual con colores y mensajes de error</strong>{" "}
          usando las clases <code>is-valid</code> e <code>is-invalid</code>.
        </p>
        <div className="callout tip">
          🎯 <strong>Qué aprenderás:</strong> <code>form-control</code>,{" "}
          <code>form-label</code>, <code>form-select</code>, <code>form-check</code>,{" "}
          <code>input-group</code>, <code>is-valid</code>, <code>is-invalid</code>,{" "}
          <code>valid-feedback</code>, <code>invalid-feedback</code> y <code>was-validated</code>.
        </div>
        <nav className="doc-index" aria-label="Pasos del ejercicio">
          <h2>🧭 Pasos</h2>
          <ol>
            <li><a href="#paso-1">Paso 1 · form-control: el control base</a></li>
            <li><a href="#paso-2">Paso 2 · form-select, form-check, textarea</a></li>
            <li><a href="#paso-3">Paso 3 · input-group: iconos y addons</a></li>
            <li><a href="#paso-4">Paso 4 · is-valid e is-invalid</a></li>
            <li><a href="#paso-5">Paso 5 · Demo interactiva de validación</a></li>
            <li><a href="#paso-6">Paso 6 · Bootstrap vs E08 (CSS puro)</a></li>
            <li><a href="#paso-7">Paso 7 · Tu HTML copiable</a></li>
            <li><a href="#paso-8">Paso 8 · Reto extra</a></li>
          </ol>
        </nav>
      </header>

      {/* ════════════ PASO 1 ════════════ */}
      <section className="doc-section" id="paso-1">
        <details className="dd" open>
          <summary>Paso 1 · form-control: el control base</summary>
          <div className="dd-body">
            <p>
              Bootstrap normaliza el aspecto de todos los inputs con <code>.form-control</code>.
              El patrón es siempre el mismo: label arriba, input debajo, mensaje de ayuda opcional.
            </p>
            <pre><code>{`<!-- El patrón básico (se repite igual para todos los campos) -->
<div class="mb-3">                                      <!-- mb-3: espacio entre campos -->
  <label for="email" class="form-label">               <!-- form-label: estilos del label -->
    Correo electrónico
  </label>
  <input
    type="email"
    class="form-control"                              <!-- form-control: el estilo del input -->
    id="email"
    placeholder="tu@correo.com"
    aria-describedby="emailAyuda"                     <!-- conecta con el texto de ayuda -->
  />
  <div id="emailAyuda" class="form-text">             <!-- form-text: texto de ayuda (gris) -->
    Nunca compartiremos tu email.
  </div>
</div>

<!-- Tamaños -->
<input class="form-control form-control-lg" type="text" placeholder="Grande" />
<input class="form-control" type="text" placeholder="Normal" />
<input class="form-control form-control-sm" type="text" placeholder="Pequeño" />`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 2 ════════════ */}
      <section className="doc-section" id="paso-2">
        <details className="dd" open>
          <summary>Paso 2 · form-select, form-check y textarea</summary>
          <div className="dd-body">
            <p>
              Bootstrap incluye clases para cada tipo de control. Todos mantienen
              el mismo aspecto visual coherente.
            </p>
            <pre><code>{`<!-- Select (desplegable) -->
<div class="mb-3">
  <label for="pais" class="form-label">País</label>
  <select id="pais" class="form-select">
    <option value="">Selecciona tu país</option>
    <option value="es">España</option>
    <option value="mx">México</option>
    <option value="ar">Argentina</option>
  </select>
</div>

<!-- Textarea -->
<div class="mb-3">
  <label for="mensaje" class="form-label">Mensaje</label>
  <textarea id="mensaje" class="form-control" rows="4"
    placeholder="Escribe tu mensaje..."></textarea>
</div>

<!-- Checkbox -->
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="terminos" />
  <label class="form-check-label" for="terminos">
    Acepto los términos y condiciones
  </label>
</div>

<!-- Radio buttons -->
<div class="mb-3">
  <div class="form-check">
    <input class="form-check-input" type="radio" name="plan" id="planGratis" value="gratis" />
    <label class="form-check-label" for="planGratis">Plan gratuito</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="plan" id="planPro" value="pro" />
    <label class="form-check-label" for="planPro">Plan profesional</label>
  </div>
</div>

<!-- Switch (toggle) -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="notificaciones" />
  <label class="form-check-label" for="notificaciones">Recibir notificaciones</label>
</div>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 3 ════════════ */}
      <section className="doc-section" id="paso-3">
        <details className="dd" open>
          <summary>Paso 3 · input-group: iconos, prefijos y sufijos</summary>
          <div className="dd-body">
            <p>
              Los <code>input-group</code> permiten añadir texto, iconos o botones
              pegados al input, muy útiles para campos de búsqueda, precios o URLs.
            </p>
            <pre><code>{`<!-- Prefijo de texto -->
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="usuario" />
</div>

<!-- Prefijo de URL -->
<div class="input-group mb-3">
  <span class="input-group-text">https://</span>
  <input type="text" class="form-control" placeholder="tusitio.com" />
</div>

<!-- Sufijo de moneda -->
<div class="input-group mb-3">
  <input type="number" class="form-control" placeholder="0.00" />
  <span class="input-group-text">€</span>
</div>

<!-- Con botón (búsqueda) -->
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Buscar cursos..." />
  <button class="btn btn-primary" type="button">Buscar</button>
</div>

<!-- Con botón al principio -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Acción</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opción 1</a></li>
  </ul>
  <input type="text" class="form-control" />
</div>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 4 ════════════ */}
      <section className="doc-section" id="paso-4">
        <details className="dd" open>
          <summary>Paso 4 · is-valid e is-invalid: retroalimentación visual</summary>
          <div className="dd-body">
            <p>
              Bootstrap usa las clases <code>is-valid</code> e <code>is-invalid</code>
              en el input para cambiar el borde de color. Los mensajes de retroalimentación
              usan <code>valid-feedback</code> e <code>invalid-feedback</code>.
            </p>
            <pre><code>{`<!-- Campo válido -->
<div class="mb-3">
  <label for="campo-ok" class="form-label">Nombre</label>
  <input type="text" class="form-control is-valid" id="campo-ok" value="Ana García" />
  <div class="valid-feedback">
    ¡Perfecto! El nombre es válido.
  </div>
</div>

<!-- Campo inválido -->
<div class="mb-3">
  <label for="campo-error" class="form-label">Email</label>
  <input type="email" class="form-control is-invalid" id="campo-error" value="no es un email" />
  <div class="invalid-feedback">
    Introduce un email válido (ejemplo: ana@correo.com).
  </div>
</div>

<!-- Validación nativa del navegador con was-validated -->
<!-- (Bootstrap muestra is-valid/is-invalid automáticamente) -->
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="nombre-nativo" class="form-label">Nombre (requerido)</label>
    <input type="text" class="form-control" id="nombre-nativo" required />
    <div class="invalid-feedback">Este campo es obligatorio.</div>
    <div class="valid-feedback">¡Correcto!</div>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>

<script>
// Bootstrap: activar validación nativa con was-validated
document.querySelector('.needs-validation').addEventListener('submit', e => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  e.target.classList.add('was-validated');
});
</script>`}</code></pre>
            <div className="callout">
              <strong>Dos formas de validar con Bootstrap:</strong>
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Manual (recomendada para React/JS propio)</strong>: añades y quitas <code>is-valid</code> / <code>is-invalid</code> tú mismo con JavaScript.</li>
                <li><strong>Nativa del navegador</strong>: usas el atributo <code>required</code>, <code>pattern</code>, etc., y añades la clase <code>was-validated</code> al <code>form</code> al enviar. Bootstrap CSS se encarga del resto.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 5 ════════════ */}
      <section className="doc-section" id="paso-5">
        <details className="dd" open>
          <summary>Paso 5 · Demo interactiva de validación</summary>
          <div className="dd-body">
            <div className="callout warn">
              ⚠️ Esta demo usa React para mostrar la validación en tiempo real.
              En tu archivo HTML copiable (Paso 7) encontrarás la versión equivalente
              con Bootstrap nativo y unas líneas de JavaScript.
            </div>

            {enviado ? (
              <div style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: "8px", padding: "1.25rem", color: "#166534", textAlign: "center" }}>
                <div style={{ fontSize: "2rem" }}>✅</div>
                <strong>¡Formulario enviado correctamente!</strong>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ maxWidth: "480px" }}>
                {campos.map(c => {
                  const tocado = tocados[c.id];
                  const error = errores[c.id];
                  const valido = tocado && !error;
                  const invalido = tocado && !!error;
                  return (
                    <div key={c.id} style={{ marginBottom: "1.25rem" }}>
                      <label htmlFor={c.id} style={{ display: "block", fontWeight: 600, marginBottom: "0.35rem", fontSize: "0.9rem" }}>{c.label}</label>
                      <input
                        type={c.tipo}
                        id={c.id}
                        placeholder={c.placeholder}
                        value={valores[c.id]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "100%", padding: "0.5rem 0.75rem", borderRadius: "6px",
                          border: `1.5px solid ${invalido ? "#dc2626" : valido ? "#16a34a" : "#cbd5e1"}`,
                          outline: "none", fontSize: "0.9rem", boxSizing: "border-box",
                          background: invalido ? "#fef2f2" : valido ? "#f0fdf4" : "white",
                        }}
                        aria-describedby={`${c.id}-msg`}
                        aria-invalid={invalido || undefined}
                      />
                      {valido && <div id={`${c.id}-msg`} style={{ color: "#16a34a", fontSize: "0.8rem", marginTop: "0.3rem" }}>✓ ¡Correcto!</div>}
                      {invalido && <div id={`${c.id}-msg`} role="alert" style={{ color: "#dc2626", fontSize: "0.8rem", marginTop: "0.3rem" }}>✗ {error}</div>}
                    </div>
                  );
                })}
                <button type="submit" style={{ background: "#6366f1", color: "white", border: "none", borderRadius: "6px", padding: "0.6rem 1.5rem", fontSize: "0.9rem", cursor: "pointer", fontWeight: 600 }}>
                  Crear cuenta
                </button>
              </form>
            )}
          </div>
        </details>
      </section>

      {/* ════════════ PASO 6 ════════════ */}
      <section className="doc-section" id="paso-6">
        <details className="dd" open>
          <summary>Paso 6 · Bootstrap vs E08 (CSS puro): comparación</summary>
          <div className="dd-body">
            <p>
              En el ejercicio E08 construiste un formulario accesible con CSS puro.
              Compara el enfoque de Bootstrap:
            </p>
            <div className="table-wrap" role="region" tabIndex={0}>
              <table className="table">
                <thead><tr><th>Aspecto</th><th>E08: CSS puro</th><th>E14: Bootstrap</th></tr></thead>
                <tbody>
                  <tr><td>Estilo del input</td><td>CSS propio (<code>border</code>, <code>padding</code>…)</td><td><code>.form-control</code></td></tr>
                  <tr><td>Label</td><td>CSS con <code>display:block</code></td><td><code>.form-label</code></td></tr>
                  <tr><td>Input inválido</td><td><code>:invalid</code> en CSS + clase custom</td><td><code>.is-invalid</code></td></tr>
                  <tr><td>Mensaje de error</td><td>Elemento propio con estilos</td><td><code>.invalid-feedback</code></td></tr>
                  <tr><td>Icono en el input</td><td><code>position: relative + absolute</code></td><td><code>.input-group</code></td></tr>
                  <tr><td>Responsive</td><td>Media queries propios</td><td>Automático con el grid</td></tr>
                  <tr><td>Tiempo de desarrollo</td><td>Más lento (más control)</td><td>Más rápido (menos control)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout tip">
              <strong>¿Cuándo usar cada uno?</strong> Bootstrap es ideal para proyectos
              rápidos o cuando el equipo no tiene diseñador. CSS puro cuando necesitas
              un diseño muy específico, una identidad de marca fuerte o rendimiento
              máximo (Bootstrap pesa ~200 KB).
            </div>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 7 — HTML COPIABLE ════════════ */}
      <section className="doc-section" id="paso-7">
        <details className="dd" open>
          <summary>Paso 7 · Tu HTML copiable: practica ya</summary>
          <div className="dd-body">
            <p>Formulario completo de registro con validación Bootstrap nativa. Cópialo, ábrelo en el navegador e intenta enviarlo con campos vacíos.</p>
            <pre><code>{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E14 · Formulario Bootstrap</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
</head>
<body class="bg-light">

  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">

        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h2 class="card-title mb-1">Crear cuenta</h2>
            <p class="text-muted small mb-4">Todos los campos son obligatorios</p>

            <!-- Formulario con validación Bootstrap nativa -->
            <form id="formRegistro" class="needs-validation" novalidate>

              <!-- Nombre -->
              <div class="mb-3">
                <label for="nombre" class="form-label fw-semibold">Nombre completo</label>
                <input type="text" class="form-control" id="nombre"
                  placeholder="Ana García" required minlength="3" />
                <div class="invalid-feedback">El nombre debe tener al menos 3 caracteres.</div>
                <div class="valid-feedback">¡Perfecto!</div>
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label fw-semibold">Correo electrónico</label>
                <div class="input-group">
                  <span class="input-group-text">@</span>
                  <input type="email" class="form-control" id="email"
                    placeholder="ana@ejemplo.com" required />
                  <div class="invalid-feedback">Introduce un email válido.</div>
                  <div class="valid-feedback">¡Correcto!</div>
                </div>
              </div>

              <!-- Contraseña -->
              <div class="mb-3">
                <label for="password" class="form-label fw-semibold">Contraseña</label>
                <input type="password" class="form-control" id="password"
                  minlength="8" required placeholder="Mínimo 8 caracteres" />
                <div class="form-text">Usa letras, números y símbolos.</div>
                <div class="invalid-feedback">Mínimo 8 caracteres.</div>
                <div class="valid-feedback">¡Contraseña segura!</div>
              </div>

              <!-- País -->
              <div class="mb-3">
                <label for="pais" class="form-label fw-semibold">País</label>
                <select id="pais" class="form-select" required>
                  <option value="">Selecciona tu país...</option>
                  <option value="es">España</option>
                  <option value="mx">México</option>
                  <option value="ar">Argentina</option>
                  <option value="co">Colombia</option>
                  <option value="cl">Chile</option>
                </select>
                <div class="invalid-feedback">Selecciona tu país.</div>
              </div>

              <!-- Plan -->
              <div class="mb-3">
                <p class="form-label fw-semibold mb-1">Plan</p>
                <div class="form-check">
                  <input class="form-check-input" type="radio"
                    name="plan" id="planGratis" value="gratis" checked />
                  <label class="form-check-label" for="planGratis">Gratuito</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"
                    name="plan" id="planPro" value="pro" />
                  <label class="form-check-label" for="planPro">Profesional (9€/mes)</label>
                </div>
              </div>

              <!-- Notificaciones -->
              <div class="mb-3 form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="notif" checked />
                <label class="form-check-label" for="notif">Recibir novedades por email</label>
              </div>

              <!-- Términos -->
              <div class="mb-4 form-check">
                <input type="checkbox" class="form-check-input" id="terminos" required />
                <label class="form-check-label" for="terminos">
                  Acepto los <a href="#">términos y condiciones</a>
                </label>
                <div class="invalid-feedback">Debes aceptar los términos para continuar.</div>
              </div>

              <button type="submit" class="btn btn-primary w-100">Crear mi cuenta</button>

            </form>

          </div>
        </div>

      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Activar validación nativa de Bootstrap
    const form = document.getElementById('formRegistro');
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault(); // En producción: enviarías al servidor
        alert('¡Formulario enviado correctamente!');
      }
      form.classList.add('was-validated');
    });
  </script>

</body>
</html>`}</code></pre>
          </div>
        </details>
      </section>

      {/* ════════════ PASO 8 ════════════ */}
      <section className="doc-section" id="paso-8">
        <details className="dd" open>
          <summary>Paso 8 · Reto extra</summary>
          <div className="dd-body">
            <h3>🔥 Reto extra</h3>
            <div className="callout">
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Formulario de pago</strong>: añade campos de número de tarjeta (con icono de tarjeta), fecha de expiración y CVV usando <code>input-group</code>. Máscara de formato con JavaScript.</li>
                <li><strong>Formulario de contacto en dos columnas</strong>: nombre y apellidos en la misma fila (<code>col-md-6</code>), email y teléfono en otra.</li>
                <li><strong>Validación en tiempo real</strong>: añade un listener <code>input</code> para mostrar <code>is-valid</code> / <code>is-invalid</code> mientras el usuario escribe, sin esperar al submit.</li>
                <li><strong>Barra de fortaleza de contraseña</strong>: muestra una barra de progreso (<code>.progress</code>) bajo el campo de contraseña que se llena según la fortaleza.</li>
              </ol>
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section">
        <div className="doc-next">
          <Link to="/ejercicios/e13-bootstrap-cards" className="btn">← E13 Bootstrap Cards</Link>
          <Link to="/ejercicios/e15-bootstrap-landing" className="btn btn-primary">Siguiente: E15 Landing →</Link>
        </div>
      </section>
    </main>
  );
}
