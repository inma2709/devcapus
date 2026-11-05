import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function TemaImagenesPorURL() {
  useEffect(() => {
    document.title = "UF1841 · Tema · Imágenes por URL (CDN, hosting y random)";
  }, []);

  // Para la demo de "random" sin APIs con key: cambiamos un parámetro "seed"
  const [_seed, _setSeed] = useState(() => Date.now());

  const _randomPicsum = useMemo(() => {
    // Picsum = imágenes aleatorias libres para demos
    return `https://picsum.photos/seed/${_seed}/900/520`;
  }, [_seed]);

  const randomPlaceholders = useMemo(
    () => [
      `https://placehold.co/900x520/png?text=Placeholder+900x520`,
      `https://placehold.co/900x520/webp?text=WEBP+900x520`,
      `https://dummyimage.com/900x520/111827/ffffff.png&text=DummyImage`,
    ],
    []
  );

  return (
    <main className="doc">
      {/* =========================
          TEMA · IMÁGENES POR URL
         ========================= */}
      <section className="estructura-formativa" id="ud02-imagenes-url">
        {/* HERO */}
        <header className="doc-hero" id="intro-imagenes-url">
          <p className="doc-kicker">Tema 12 · Imágenes por URL (CDN, hosting y random)</p>
          <h1>Insertar imágenes desde URL: CDN, hosting (Cloudinary/Imgur/Uploadcare) y random</h1>
          <p className="doc-lead">
            En la vida real, la mayoría de imágenes de una web no “viven” dentro del proyecto:
            se sirven desde <strong>URLs</strong> (CDN, servicios de hosting, o bancos de imágenes).
            En este tema aprenderás desde cero a insertar imágenes por URL en HTML/React, a evitar errores
            típicos (CORS, hotlink, tamaños, formato), y a trabajar de forma profesional con{" "}
            <strong>Cloudinary, Imgur y Uploadcare</strong>. También verás cómo poner imágenes{" "}
            <strong>aleatorias</strong> para prototipos (tipo “random”) con servicios gratuitos.
          </p>

          <div className="callout tip">
            Objetivo real: que sepas <strong>elegir</strong> una fuente de imagen (local vs URL),
            optimizarla (tamaño/formato), y usarla con accesibilidad y rendimiento.
          </div>
        </header>

        {/* ÍNDICE */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Contenido</h2>
          <ol>
            <li><a href="#conceptos">1. Conceptos clave: URL, CDN, hotlinking y formatos</a></li>
            
            <li><a href="#insertar-html">2. Insertar una imagen por URL en HTML</a></li>
            <li><a href="#insertar-react">3. Insertar una imagen por URL en React</a></li>
            <li><a href="#buenas-practicas">4. Nivel pro: rendimiento, accesibilidad y seguridad</a></li>
            <li><a href="#cloudinary">5. Cloudinary (pro): subir, obtener URL y optimizar</a></li>
            <li><a href="#imgur">6. Imgur: enlaces y buenas prácticas</a></li>
            <li><a href="#uploadcare">7. Uploadcare: CDN + transformaciones</a></li>
            <li><a href="#random">8. Imágenes random para prototipos (Picsum, Placeholders)</a></li>
            <li><a href="#bancos">9. Bancos de imágenes gratuitos y de pago</a></li>
            
            <li><a href="#errores">10. Errores típicos y cómo solucionarlos</a></li>
            <li><a href="#ejercicio">11. Ejercicio guiado (desde cero)</a></li>
            <li><a href="#checklist">12. Checklist profesional</a></li>
          </ol>
        </nav>

        {/* 1) CONCEPTOS */}
        <section className="doc-section" id="conceptos">
          <h2>1) Conceptos clave: URL, CDN, hotlinking y formatos</h2>

          <details className="dd" open>
            <summary>URL de imagen</summary>
            <div className="dd-body">
              <p>
                Una <strong>URL de imagen</strong> es un enlace directo que devuelve un archivo de imagen
                (por ejemplo, <code>.jpg</code>, <code>.png</code>, <code>.webp</code>).
                Si pegas esa URL en el navegador y se ve la imagen “sola”, normalmente es una URL válida
                para usar en <code>&lt;img src="..."&gt;</code>.
              </p>
              <div className="callout warn">
                Ojo: muchas páginas muestran una imagen “dentro de una web” pero su URL no es un enlace directo al archivo.
                Tú necesitas la URL del archivo final.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>CDN</summary>
            <div className="dd-body">
              <p>
                Un <strong>CDN</strong> (Content Delivery Network) distribuye tu imagen por servidores en distintos
                lugares del mundo para servirla más rápido. Cloudinary y Uploadcare son típicos porque además
                permiten transformar la imagen (tamaño, formato, recorte).
              </p>
              <div className="callout tip">
                En proyectos serios: <strong>CDN + optimización automática</strong> = web más rápida y profesional.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Hotlinking</summary>
            <div className="dd-body">
              <p>
                <strong>Hotlinking</strong> es usar en tu web la imagen alojada en otra web (sin permiso).
                Muchas webs lo bloquean por costes y derechos. Resultado: la imagen “no carga” o sale un error 403.
              </p>
              <div className="callout warn">
                Regla docente: si no es tu imagen o no tienes permiso/licencia clara, no la uses por URL en tu proyecto.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Formatos recomendados (JPG/PNG/WebP/SVG)</summary>
            <div className="dd-body">
              <ul>
                <li><strong>JPG</strong>: fotos (peso moderado, buena compatibilidad).</li>
                <li><strong>PNG</strong>: transparencia y gráficos con bordes limpios (más pesado).</li>
                <li><strong>WebP</strong>: excelente compresión (ideal para web moderna).</li>
                <li><strong>SVG</strong>: iconos y gráficos vectoriales (escala perfecto).</li>
              </ul>
              <div className="callout tip">
                Para fotos: si puedes, usa <strong>WebP</strong> o un servicio que lo entregue automáticamente.
              </div>
            </div>
          </details>
        </section>

        {/* 2) HTML */}
        <section className="doc-section" id="insertar-html">
          <h2>2) Insertar una imagen por URL en HTML</h2>

          <details className="dd" open>
            <summary>Ejemplo mínimo</summary>
            <div className="dd-body">
              <pre className="esquema-textual">
                <code>{`<img
  src="https://ejemplo.com/imagen.webp"
  alt="Descripción de la imagen"
  loading="lazy"
  decoding="async"
/>`}</code>
              </pre>
              <ul>
                <li><code>src</code>: URL directa al archivo.</li>
                <li><code>alt</code>: texto alternativo (accesibilidad).</li>
                <li><code>loading="lazy"</code>: carga diferida (mejor rendimiento).</li>
                <li><code>decoding="async"</code>: decodifica sin bloquear.</li>
              </ul>
              <div className="callout tip">
                <strong>Siempre</strong> pon <code>alt</code>. Si es decorativa: <code>alt=""</code>.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Controlar tamaño sin deformar</summary>
            <div className="dd-body">
              <pre className="esquema-textual">
                <code>{`<img
  src="https://ejemplo.com/foto.jpg"
  alt="Foto de ejemplo"
  width="900"
  height="520"
  style="max-width:100%; height:auto;"
/>`}</code>
              </pre>
              <div className="callout tip">
                Si pones <code>width</code> y <code>height</code>, el navegador reserva espacio y evita saltos de layout (CLS).
              </div>
            </div>
          </details>
        </section>

        {/* 3) React */}
        <section className="doc-section" id="insertar-react">
          <h2>3) Insertar una imagen por URL en React</h2>

          <details className="dd" open>
            <summary>Ejemplo básico en JSX</summary>
            <div className="dd-body">
              <pre className="esquema-textual">
                <code>{`<img
  src="https://ejemplo.com/imagen.webp"
  alt="Imagen por URL en React"
  loading="lazy"
  decoding="async"
/>`}</code>
              </pre>

              <div className="callout warn">
                En React no usas <code>class</code>, usas <code>className</code>. Y si pones estilos inline, es un objeto:
                <code>{` style={{ maxWidth: "100%", height: "auto" }}`}</code>.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Manejando errores: fallback si la imagen falla</summary>
            <div className="dd-body">
              <p>
                En proyectos reales, una URL puede fallar. Puedes poner un fallback con <code>onError</code>.
              </p>
              <pre className="esquema-textual">
                <code>{`<img
  src="https://servidor.com/imagen-que-puede-fallar.webp"
  alt="Imagen con fallback"
  loading="lazy"
  decoding="async"
  onError={(e) => {
    e.currentTarget.src = "/img/placeholder.png"; // imagen local de tu /public/img
  }}
/>`}</code>
              </pre>
              <div className="callout tip">
                Esto mejora UX: si falla el enlace, el alumno ve algo “bien” y no un hueco roto.
              </div>
            </div>
          </details>
        </section>

        {/* 4) BUENAS PRÁCTICAS PRO */}
        <section className="doc-section" id="buenas-practicas">
          <h2>4) Nivel pro: rendimiento, accesibilidad y seguridad</h2>

          <details className="dd" open>
            <summary>Accesibilidad (alt correcto)</summary>
            <div className="dd-body">
              <ul>
                <li>
                  Imagen informativa: <code>alt</code> describe lo importante. Ej:{" "}
                  <em>“Captura del formulario de contacto con validación”</em>.
                </li>
                <li>
                  Imagen decorativa: <code>alt=""</code> (vacío) y no molesta a lectores de pantalla.
                </li>
              </ul>
              <div className="callout tip">
                Si el texto del <code>alt</code> repite literalmente el texto de al lado, suele sobrar.
              </div>
            </div>
          </details>

         <details className="dd">
  <summary>Rendimiento: tamaño, formatos y carga diferida (lazy)</summary>
  <div className="dd-body">
    <p>
      Cuando trabajamos con imágenes en la web, no solo importa que “se vean bien”,
      sino que <strong>carguen rápido</strong> y no ralenticen la página.
      Aquí entran tres conceptos clave: tamaño, formato y carga diferida.
    </p>

    <h4>1) Tamaño de la imagen (muy importante)</h4>
    <ul>
      <li>
        Evita imágenes gigantes: si la imagen se va a mostrar a unos <strong>800–900px</strong>,
        no tiene sentido subir una de <strong>4000 o 5000px</strong>.
      </li>
      <li>
        Cuanto más grande es la imagen, <strong>más tarda en descargarse</strong>
        y peor será la experiencia del usuario.
      </li>
    </ul>

    <div className="callout warn">
      Regla sencilla: <strong>la imagen no debería ser mucho más grande que el tamaño
      al que se muestra en pantalla</strong>.
    </div>

    <h4>2) ¿Qué es WebP y por qué es recomendable?</h4>
    <p>
      <strong>WebP</strong> es un formato moderno de imagen pensado específicamente para la web.
      Ofrece <strong>mucha mejor compresión</strong> que JPG o PNG manteniendo una calidad visual muy alta.
    </p>

    <ul>
      <li>Ocupa menos espacio que JPG y PNG.</li>
      <li>Carga más rápido.</li>
      <li>Está soportado por todos los navegadores modernos.</li>
    </ul>

    <pre className="esquema-textual">
      <code>{`<!-- Ejemplo de imagen en formato WebP -->
<img
  src="https://res.cloudinary.com/demo/image/upload/sample.webp"
  alt="Imagen optimizada en WebP"
  width="800"
  height="500"
/>`}</code>
    </pre>

    <div className="callout tip">
      Servicios como <strong>Cloudinary</strong> o <strong>Uploadcare</strong>
      pueden convertir automáticamente tus imágenes a WebP usando solo la URL.
    </div>

    <h4>3) ¿Qué es loading="lazy"?</h4>
    <p>
      Por defecto, el navegador intenta cargar <strong>todas las imágenes a la vez</strong>,
      incluso las que están muy abajo en la página y aún no se ven.
    </p>

    <p>
      El atributo <code>loading="lazy"</code> le dice al navegador:
      <em>“esta imagen se cargará solo cuando esté a punto de aparecer en pantalla”</em>.
    </p>

    <pre className="esquema-textual">
      <code>{`<img
  src="https://picsum.photos/800/500"
  alt="Imagen que se carga solo cuando se necesita"
  loading="lazy"
  width="800"
  height="500"
/>`}</code>
    </pre>

    <ul>
      <li>Mejora la velocidad inicial de la página.</li>
      <li>Ahorra datos (especialmente en móvil).</li>
      <li>No requiere JavaScript: es nativo de HTML.</li>
    </ul>

    <div className="callout">
      Usa <code>loading="lazy"</code> en imágenes que <strong>no estén en el primer pantallazo</strong>
      (por ejemplo, imágenes más abajo en la página).
    </div>

    <h4>4) Un CSS muy básico y seguro para imágenes (nivel inicial)</h4>
    <p>
      Aunque aún no hayamos visto CSS en profundidad, es buena idea aplicar
      unas reglas mínimas para que las imágenes se comporten bien.
    </p>

    <pre className="esquema-textual">
      <code>{`/* CSS básico recomendado para imágenes */
img {
  max-width: 100%;
  height: auto;
  display: block;
}`}</code>
    </pre>

    <ul>
      <li><code>max-width: 100%</code> → evita que la imagen se salga de su contenedor.</li>
      <li><code>height: auto</code> → mantiene la proporción original.</li>
      <li><code>display: block</code> → elimina espacios raros debajo de la imagen.</li>
    </ul>

    <div className="callout tip">
      Este CSS es <strong>seguro incluso para principiantes</strong> y se usa
      prácticamente en todos los proyectos reales.
    </div>

    <h4>5) Por qué indicar width y height en HTML</h4>
    <p>
      Cuando especificas <code>width</code> y <code>height</code>, el navegador
      reserva el espacio antes de cargar la imagen.
      Esto evita los molestos <strong>saltos de contenido</strong> (CLS).
    </p>

    <pre className="esquema-textual">
      <code>{`<img
  src="https://picsum.photos/800/500"
  alt="Imagen sin saltos de diseño"
  width="800"
  height="500"
  loading="lazy"
/>`}</code>
    </pre>

    <div className="callout warn">
      Aunque luego la imagen se adapte con CSS, <strong>width y height deben reflejar
      el tamaño real de la imagen</strong>.
    </div>
  </div>
</details>


          <details className="dd">
            <summary>Seguridad y privacidad (ojo con URLs de terceros)</summary>
            <div className="dd-body">
              <ul>
                <li>Si una imagen está en un dominio externo, ese dominio “ve” visitas (tracking).</li>
                <li>No uses imágenes con derechos sin licencia.</li>
                <li>Evita depender de un enlace “cualquiera”: usa hosting estable o tu propio CDN.</li>
              </ul>
              <div className="callout warn">
                Pro: en producción, lo correcto es servir imágenes desde tu propio dominio/CDN o uno de confianza.
              </div>
            </div>
          </details>
        </section>

        {/* 5) CLOUDINARY */}
        <section className="doc-section" id="cloudinary">
          <h2>5) Cloudinary (pro): subir, obtener URL y optimizar</h2>

          <details className="dd" open>
            <summary>Qué te aporta Cloudinary</summary>
            <div className="dd-body">
              <ul>
                <li>Subes imágenes y te da una URL estable (CDN).</li>
                <li>Transformaciones por URL: tamaño, recorte, formato.</li>
                <li>Entrega optimizada (por ejemplo WebP) según navegador.</li>
              </ul>
              <div className="callout tip">
                Idea clave: con Cloudinary, tu <code>src</code> no es “un archivo fijo”, es una URL “inteligente”.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Cómo se usa en HTML/React (concepto)</summary>
            <div className="dd-body">
              <p>
                Cloudinary te da una URL con tu <strong>cloud name</strong> y el <strong>public id</strong> del recurso.
                Luego puedes añadir transformaciones en la URL.
              </p>
              <pre className="esquema-textual">
                <code>{`// URL típica (ejemplo)
https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1234567890/carpeta/mi_foto.jpg

// Con transformaciones (ejemplo: ancho 900, recorte, formato auto)
https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/c_fill,w_900,f_auto,q_auto/carpeta/mi_foto.jpg`}</code>
              </pre>
              <div className="callout warn">
                En clase: no memorices la URL. Entiende la idea: <strong>upload</strong> + <strong>transformaciones</strong>.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Ejemplo en JSX (Cloudinary optimizado)</summary>
            <div className="dd-body">
              <pre className="esquema-textual">
                <code>{`<img
  src="https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/c_fill,w_900,f_auto,q_auto/curso/tema-imagenes.jpg"
  alt="Imagen optimizada servida desde Cloudinary"
  width="900"
  height="520"
  loading="lazy"
  decoding="async"
/>`}</code>
              </pre>
              <div className="callout tip">
                <code>f_auto</code> intenta servir WebP/AVIF si el navegador lo soporta.
                <code>q_auto</code> ajusta calidad para reducir peso sin perder demasiado.
              </div>
            </div>
          </details>
        </section>

        {/* 6) IMGUR */}
        <section className="doc-section" id="imgur">
          <h2>6) Imgur: enlaces y buenas prácticas</h2>

          <details className="dd" open>
            <summary>Cómo obtener un enlace directo en Imgur</summary>
            <div className="dd-body">
              <p>
                Imgur se usa mucho para compartir imágenes rápido. Pero tú necesitas un enlace directo al archivo:
                normalmente acaba en <code>.jpg</code>, <code>.png</code> o <code>.gif</code>.
              </p>
              <div className="callout warn">
                Si la URL no termina en extensión de imagen, probablemente no es un enlace directo.
              </div>
              <pre className="esquema-textual">
                <code>{`<img
  src="https://i.imgur.com/ID_DE_IMAGEN.jpg"
  alt="Imagen alojada en Imgur"
/>`}</code>
              </pre>
            </div>
          </details>

          <details className="dd">
            <summary>Cuándo usar Imgur (y cuándo no)</summary>
            <div className="dd-body">
              <ul>
                <li>✅ Demos rápidas, prototipos, pruebas en clase.</li>
                <li>❌ Producción seria (pueden cambiar políticas, borrarse, etc.).</li>
              </ul>
              <div className="callout tip">
                Para proyectos finales: mejor Cloudinary/Uploadcare o tu propio hosting.
              </div>
            </div>
          </details>
        </section>

        {/* 7) UPLOADCARE */}
        <section className="doc-section" id="uploadcare">
          <h2>7) Uploadcare: CDN + transformaciones por URL</h2>

          <details className="dd" open>
            <summary>Qué te aporta Uploadcare</summary>
            <div className="dd-body">
              <ul>
                <li>Subida fácil y entrega por CDN.</li>
                <li>Transformaciones por URL (resize, crop, format).</li>
                <li>Muy cómodo para proyectos estáticos o sin backend.</li>
              </ul>
              <div className="callout tip">
                Igual que Cloudinary: el truco es “subir una vez” y después controlar tamaño/formato por URL.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Ejemplo de uso (concepto)</summary>
            <div className="dd-body">
              <pre className="esquema-textual">
                <code>{`// URL típica con UUID (ejemplo)
https://ucarecdn.com/UUID_DE_TU_ARCHIVO/

// Transformación (ejemplo: resize a 900)
https://ucarecdn.com/UUID_DE_TU_ARCHIVO/-/resize/900x/`}</code>
              </pre>

              <pre className="esquema-textual">
                <code>{`<img
  src="https://ucarecdn.com/UUID_DE_TU_ARCHIVO/-/resize/900x/-/format/auto/"
  alt="Imagen servida desde Uploadcare con optimización"
  width="900"
  height="520"
  loading="lazy"
  decoding="async"
/>`}</code>
              </pre>
            </div>
          </details>
        </section>
<section className="doc-section" id ="bancos">
  <h2>8) Bancos de imágenes: dónde buscar imágenes para tu web</h2>

  <p>
    Cuando creamos una página web no solo trabajamos con textos y bloques, también con
    <strong>imágenes</strong>. Elegir bien las imágenes es fundamental para que una web se vea
    profesional, clara y cuidada. Pero no vale cualquier imagen que encontremos en internet.
  </p>

  <p>
    Por eso, en este manual vamos a utilizar <strong>bancos de imágenes gratuitos y legales</strong>,
    que nos permiten usar fotografías sin problemas de derechos de autor.
  </p>

  <details className="dd">
    <summary>🥇 Pexels (el mejor para empezar)</summary>
    <div className="dd-body">
      <p>
        <strong>Pexels</strong> es el banco de imágenes que utilizaremos principalmente en clase.
      </p>

      <p>
        🔗 <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">https://www.pexels.com</a>
      </p>

      <p><strong>¿Por qué lo usamos en clase?</strong></p>

      <ul>
        <li>Imágenes gratuitas</li>
        <li>Uso comercial permitido</li>
        <li>No requiere atribución</li>
        <li>Muy buena calidad</li>
        <li>Ideal para temáticas de comida y familias</li>
      </ul>

      <p><strong>Búsquedas recomendadas:</strong></p>
      <ul>
        <li><code>healthy food</code></li>
        <li><code>family cooking</code></li>
        <li><code>vegetarian food</code></li>
        <li><code>healthy breakfast</code></li>
      </ul>
    </div>
  </details>

  <details className="dd">
    <summary>🥈 Unsplash</summary>
    <div className="dd-body">
      <p>
        <strong>Unsplash</strong> es un banco de imágenes muy popular por su estilo visual.
      </p>

      <p>
        🔗 <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">https://unsplash.com</a>
      </p>

      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Fotos muy estéticas</li>
        <li>Estilo moderno y profesional</li>
        <li>Perfecto para imágenes grandes</li>
      </ul>

      <p><strong>⚠️ Criterio didáctico:</strong></p>
      <p>
        A veces las imágenes pueden resultar demasiado “publicitarias” o poco realistas.
        Úsalo con criterio.
      </p>

      <p><strong>Úsalo especialmente para:</strong></p>
      <ul>
        <li>Hero</li>
        <li>Galerías</li>
      </ul>
    </div>
  </details>

  <details className="dd">
    <summary>🥉 Pixabay</summary>
    <div className="dd-body">
      <p>
        <strong>Pixabay</strong> es un banco de imágenes muy amplio y fácil de usar.
      </p>

      <p>
        🔗 <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">https://pixabay.com</a>
      </p>

      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Gran cantidad de imágenes</li>
        <li>Incluye iconos e ilustraciones</li>
        <li>Interfaz sencilla</li>
      </ul>

      <p><strong>Uso recomendado:</strong></p>
      <p>
        Utilízalo como apoyo cuando no encuentres una imagen adecuada en Pexels o Unsplash.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>🔹 Iconos para categorías</summary>
    <div className="dd-body">
      <p>
        Además de fotografías, en una web también usamos <strong>iconos</strong>, por ejemplo,
        para representar categorías o secciones.
      </p>

      <p><strong>Flaticon</strong></p>
      <p>
        🔗 <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">https://www.flaticon.com</a>
      </p>

      <p><strong>Reglas importantes:</strong></p>
      <ul>
        <li>Usar iconos gratuitos</li>
        <li>Elegir iconos del mismo estilo</li>
        <li>Indicar autor si lo exige la licencia (o elegir “sin atribución”)</li>
      </ul>

      <p><strong>Alternativas recomendadas:</strong></p>
      <ul>
        <li>Heroicons (estilo limpio y moderno)</li>
        <li>Bootstrap Icons</li>
      </ul>
    </div>
  </details>

  <details className="dd">
    <summary>🚫 Lo que NO se puede usar</summary>
    <div className="dd-body">
      <p>
        Aunque estén en internet, <strong>no todas las imágenes se pueden usar libremente</strong>.
      </p>

      <ul>
        <li>❌ Google Imágenes</li>
        <li>❌ Pinterest</li>
        <li>❌ Instagram</li>
        <li>❌ Fotos de webs ajenas</li>
      </ul>

      <p>
        Usar imágenes sin permiso puede traer problemas legales y demuestra poca profesionalidad.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>🧠 Frase clave para el alumnado</summary>
    <div className="dd-body">
      <p>
        <strong>No todas las imágenes de internet se pueden usar.</strong><br />
        Un buen diseñador sabe dónde buscar.
      </p>
    </div>
  </details>
</section>

        {/* 8) RANDOM */}
        <section className="doc-section" id="random">
          <h2>9) Imágenes random para prototipos (tipo “random”)</h2>

         <details className="dd" open>
  <summary>Opción recomendada: imagen random con Picsum (muy simple)</summary>
  <div className="dd-body">
    <p>
      Cuando estamos aprendiendo o haciendo un prototipo, muchas veces no tenemos
      imágenes reales. En esos casos podemos usar servicios que devuelven
      <strong> imágenes aleatorias por URL</strong>.
    </p>

    <p>
      Un ejemplo muy usado es <strong>Picsum</strong>. Solo con poner su URL en el
      atributo <code>src</code>, el navegador carga una imagen distinta.
    </p>

    <div className="callout tip">
      Ventaja para principiantes: no necesitas subir archivos ni usar JavaScript.
      Es solo HTML.
    </div>

    <p>
      Ejemplo: debajo de este texto aparece una imagen aleatoria cargada desde una URL.
      Cada vez que recargues la página, puede cambiar.
    </p>

    <div className="imagen centrado">
      <img
        src="https://picsum.photos/900/520"
        alt="Imagen aleatoria de ejemplo"
        width="900"
        height="520"
        loading="lazy"
        decoding="async"
      />
    </div>

    <details className="dd" style={{ marginTop: "1rem" }}>
      <summary>Ver el código usado </summary>
      <div className="dd-body">
        <pre className="esquema-textual">
          <code>{`<p>
  Aquí hay un texto normal y justo debajo coloco una imagen.
</p>

<img
  src="https://picsum.photos/900/520"
  alt="Imagen aleatoria"
  width="900"
  height="520"
  loading="lazy"
/>`}</code>
        </pre>

       
      </div>
    </details>
  </div>
</details>


          <details className="dd">
            <summary>Placeholders (rápidos para layout)</summary>
            <div className="dd-body">
              <p>
                Si solo quieres “bloques” para maquetar, usa placeholders.
                Aquí tienes 3 enlaces de ejemplo:
              </p>

              <ul>
                {randomPlaceholders.map((u) => (
                  <li key={u}>
                    <code>{u}</code>
                  </li>
                ))}
              </ul>

              <div className="two" style={{ marginTop: "1rem" }}>
                {randomPlaceholders.map((u) => (
                  <figure className="card" key={u} style={{ margin: 0 }}>
                    <img
                      src={u}
                      alt="Placeholder de ejemplo"
                      width="900"
                      height="520"
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                    />
                    <figcaption className="muted" style={{ paddingTop: ".5rem" }}>
                      Placeholder para prototipo
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="callout warn">
                Importante: esto es para prototipos, no para producción.
              </div>
            </div>
          </details>

          
        </section>

        {/* 10) ERRORES */}
        <section className="doc-section" id="errores">
          <h2>10) Errores típicos y cómo solucionarlos</h2>

          <details className="dd" open>
            <summary>La imagen “no carga” (404/403)</summary>
            <div className="dd-body">
              <ul>
                <li><strong>404</strong>: la URL está mal o el archivo no existe.</li>
                <li><strong>403</strong>: el servidor bloquea hotlinking (no permite que uses esa imagen desde tu web).</li>
              </ul>
              <div className="callout tip">
                Solución: usa un hosting/CDN propio (Cloudinary/Uploadcare) o descarga la imagen con permiso y súbela a tu proyecto.
              </div>
            </div>
          </details>

        <details className="dd">
  <summary>La imagen pesa mucho y la web va lenta</summary>
  <div className="dd-body">
    <p>
      Uno de los problemas más habituales en páginas web es usar imágenes demasiado
      pesadas. Aunque visualmente se vean bien, una imagen mal optimizada puede hacer
      que la web cargue lenta, especialmente en móvil.
    </p>

    <h4>1) Optimizar imágenes locales (cuando usas archivos propios)</h4>
    <p>
      Si trabajas con imágenes descargadas en tu ordenador, puedes reducir su peso
      antes de subirlas a la web usando herramientas online gratuitas:
    </p>

    <ul>
      <li>
        <strong>TinyPNG / TinyJPG</strong> – compresión muy sencilla:{" "}
        <a
          href="https://tinypng.com"
          target="_blank"
          rel="noreferrer"
        >
          tinypng.com
        </a>
      </li>
      <li>
        <strong>Squoosh</strong> – herramienta de Google para aprender formatos (WebP, AVIF):{" "}
        <a
          href="https://squoosh.app"
          target="_blank"
          rel="noreferrer"
        >
          squoosh.app
        </a>
      </li>
      <li>
        <strong>ILoveIMG</strong> – redimensionar y comprimir imágenes:{" "}
        <a
          href="https://www.iloveimg.com"
          target="_blank"
          rel="noreferrer"
        >
          iloveimg.com
        </a>
      </li>
    </ul>

    <div className="callout tip">
      Estas herramientas son útiles cuando subes imágenes a tu proyecto,
      pero requieren hacerlo <strong>imagen por imagen</strong>.
    </div>

    <h4>2) La opción más recomendable: usar una URL externa optimizada (CDN)</h4>
    <p>
      En proyectos reales, lo más habitual es <strong>no servir imágenes pesadas desde tu propia web</strong>,
      sino usar un servicio externo (CDN) que se encarga automáticamente de:
    </p>

    <ul>
      <li>Reducir el peso de la imagen.</li>
      <li>Servir el mejor formato para cada navegador (WebP, AVIF…).</li>
      <li>Ajustar la calidad de forma automática.</li>
      <li>Mejorar la velocidad de carga en cualquier dispositivo.</li>
    </ul>

    <p>Algunos servicios muy usados:</p>

    <ul>
      <li>
        <strong>Cloudinary</strong> – optimización automática con <code>f_auto</code> y <code>q_auto</code>
      </li>
      <li>
        <strong>Uploadcare</strong> – CDN con optimización y transformaciones por URL
      </li>
      <li>
        <strong>Picsum</strong> – ideal para pruebas y prototipos (imágenes ya optimizadas)
      </li>
    </ul>

    <pre className="esquema-textual">
      <code>{`<!-- Ejemplo con CDN (Cloudinary) -->
<img
  src="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/sample.jpg"
  alt="Imagen optimizada automáticamente"
  loading="lazy"
  width="900"
  height="520"
/>`}</code>
    </pre>

    <div className="callout warn">
      Recomendación docente: para aprender y para proyectos reales,
      <strong>usa URLs externas optimizadas siempre que puedas</strong>.
      Optimizar imágenes locales está bien, pero no escala.
    </div>

    <h4>3) Checklist rápida</h4>
    <ul>
      <li>✔️ ¿La imagen tiene el tamaño real adecuado?</li>
      <li>✔️ ¿Usa WebP o AVIF (o <code>f_auto</code>)?</li>
      <li>✔️ ¿Tiene <code>loading="lazy"</code> si no es visible al inicio?</li>
      <li>✔️ ¿Está servida desde una URL rápida (CDN)?</li>
    </ul>
  </div>
</details>

<details className="dd" open>
  <summary>Ejemplo: imagen con CSS bonito pero simple (estrella.png)</summary>
  <div className="dd-body">
    <p>
      Aquí tienes un ejemplo muy sencillo y “bonito” para mostrar una imagen debajo
      de un párrafo. La imagen se llama <code>estrella.png</code> y debe estar en{" "}
      <code>/public/img/estrella.png</code> (por eso la ruta es <code>/img/estrella.png</code>).
    </p>

    <div className="callout tip">
      Objetivo: aprender un CSS mínimo que casi siempre funciona:
      centrado, tamaño adaptable, bordes redondeados y sombra suave.
    </div>

    {/* =====================
        DEMO VISUAL
       ===================== */}
    <div className="img-demo">
      <p className="img-demo__text">
        Debajo de este texto aparece la imagen <strong>estrella.png</strong> con un estilo
        simple (sin deformarse y adaptándose al ancho disponible).
      </p>

      <figure className="img-demo__figure">
        <img
          className="img-demo__img"
          src={`${import.meta.env.BASE_URL}img/estrella.png`}
          alt="Estrella (imagen de ejemplo)"
          width="640"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="img-demo__caption">
          Imagen con borde, sombra suave y responsive básico.
        </figcaption>
      </figure>
    </div>

    {/* =====================
        CÓDIGO DEL EJEMPLO
       ===================== */}
    <details className="dd" style={{ marginTop: "1rem" }}>
      <summary>Ver el código de la imagen</summary>
      <div className="dd-body">
        <pre className="esquema-textual">
          <code>{`<p>
  Debajo de este texto aparece una imagen.
</p>

<figure class="img-demo__figure">
  <img
    class="img-demo__img"
    src="/img/estrella.png"
    alt="Estrella (imagen de ejemplo)"
    width="640"
    height="360"
    loading="lazy"
  />
  <figcaption class="img-demo__caption">
    Imagen con borde, sombra suave y responsive básico.
  </figcaption>
</figure>`}</code>
        </pre>

        <div className="callout">
          Fíjate en que <code>src</code> apunta a <code>/img/estrella.png</code>
          y que siempre incluimos <code>alt</code>, <code>width</code> y <code>height</code>.
        </div>
      </div>
    </details>
  </div>
</details>

        </section>

        {/* 10) EJERCICIO */}
        <section className="doc-section" id="ejercicio">
          <h2>10) Ejercicio guiado (desde cero)</h2>

          <p className="intro">
            Vas a crear una sección “Galería” con 3 imágenes:
            <strong> una local</strong>, <strong>una por URL</strong> (CDN) y{" "}
            <strong>una random</strong>. Además, pondrás fallback si falla.
          </p>

          <details className="dd">
            <summary>Paso 1 — Inserta una imagen local</summary>
            <div className="dd-body">
              <ol>
                <li>Copia una imagen a <code>/public/img/</code> (por ejemplo <code>local-demo.jpg</code>).</li>
                <li>Inserta:</li>
              </ol>
              <pre className="esquema-textual">
                <code>{`<img src="/img/local-demo.jpg" alt="Imagen local de prueba" loading="lazy" decoding="async" />`}</code>
              </pre>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 2 — Inserta una imagen por URL (Cloudinary/Uploadcare/Imgur)</summary>
            <div className="dd-body">
              <ol>
                <li>Consigue un enlace directo a una imagen que hayas subido a un hosting.</li>
                <li>Inserta:</li>
              </ol>
              <pre className="esquema-textual">
                <code>{`<img
  src="https://TU_CDN_O_HOSTING/tu-imagen.webp"
  alt="Imagen alojada en un servicio externo"
  width="900"
  height="520"
  loading="lazy"
  decoding="async"
/>`}</code>
              </pre>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 3 — Inserta una imagen random (Picsum) + botón</summary>
            <div className="dd-body">
              <ol>
                <li>Crea un estado <code>seed</code>.</li>
                <li>Crea la URL de Picsum con seed.</li>
                <li>Añade un botón para regenerar.</li>
              </ol>
              <div className="callout tip">
                Si lo dominas, ya sabes hacer demos con contenido “vivo” sin depender de archivos locales.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 4 — Fallback con onError</summary>
            <div className="dd-body">
              <p>Haz que la imagen por URL, si falla, cambie a una local:</p>
              <pre className="esquema-textual">
                <code>{`<img
  src="https://url-que-puede-fallar.com/foto.webp"
  alt="Con fallback"
  onError={(e) => (e.currentTarget.src = "/img/placeholder.png")}
/>`}</code>
              </pre>
            </div>
          </details>
        </section>

        {/* 11) CHECKLIST */}
        <section className="doc-section" id="checklist">
          <h2>11) Checklist profesional</h2>
          <ul>
            <li>✅ ¿La URL es directa a un archivo de imagen?</li>
            <li>✅ ¿Tiene <code>alt</code> correcto (o <code>alt=""</code> si es decorativa)?</li>
            <li>✅ ¿Tiene <code>loading="lazy"</code> si no está en el hero?</li>
            <li>✅ ¿Has puesto <code>width</code> y <code>height</code> si conoces el tamaño?</li>
            <li>✅ ¿Estás usando un hosting/CDN fiable (no hotlinking a terceros)?</li>
            <li>✅ ¿Tienes fallback si falla?</li>
            <li>✅ ¿Formato optimizado (WebP/AVIF) o CDN con auto-format?</li>
          </ul>

          <div className="resumen-final" style={{ marginTop: "1rem" }}>
            <p>
              <strong>Resumen:</strong> Insertar imágenes por URL es lo habitual en proyectos reales.
              La diferencia entre “principiante” y “pro” está en: elegir bien la fuente (CDN fiable),
              optimizar (tamaño/formato), y hacerlo accesible y robusto (alt + fallback + lazy + dimensiones).
            </p>
          </div>
        </section>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
