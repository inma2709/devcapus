const Code=({children})=><pre className="jsm-code"><code>{children}</code></pre>;
const Goal=({children})=><section className="jsm-goal"><h2>Al terminar serás capaz de…</h2><p>{children}</p></section>;

export default function ArrayCatalogPracticeLesson(){return <>
  <p className="jsm-subtitle">Proyecto final · Mini tienda escolar: arrays, objetos, funciones y una interfaz visual.</p>
  <Goal>Crear un pequeño catálogo de productos, añadir productos a un carrito con <code>push()</code>, mostrar su contenido y calcular el total de la compra.</Goal>

  <section className="jsm-section"><h2>Antes de empezar: <code>textContent</code> e <code>innerHTML</code></h2>
    <p>Ya sabes mostrar texto con <code>textContent</code>:</p>
    <Code>{`const mensaje = document.querySelector("#mensaje");
mensaje.textContent = "Bienvenido a la tienda";`}</Code>
    <p>Si introduces etiquetas, <code>textContent</code> las muestra literalmente:</p>
    <Code>{`mensaje.textContent = "<strong>Oferta especial</strong>";
// Se ve: <strong>Oferta especial</strong>`}</Code>
    <p><code>innerHTML</code> interpreta las etiquetas y permite crear HTML dentro del contenedor:</p>
    <Code>{`mensaje.innerHTML = "<strong>Oferta especial</strong>";
// Se ve: Oferta especial en negrita`}</Code>
    <p>Las dos propiedades asignan contenido, pero <code>innerHTML = ...</code> reemplaza todo lo que había antes. Podemos combinarlo con variables.</p>
    <Code>{`const nombre = "Cuaderno";
const precio = 2.5;

// Concatenación
mensaje.innerHTML = "<h3>" + nombre + "</h3><p>Precio: " + precio + " €</p>";

// Template literal
mensaje.innerHTML = \`<h3>\${nombre}</h3><p>\${precio} €</p>\`;`}</Code>
    <p><strong>Advertencia:</strong> usa <code>innerHTML</code> con HTML preparado y controlado. Para texto escrito por usuarios utiliza <code>textContent</code>.</p>
    <h3>Micropráctica</h3><p>Crea un <code>&lt;div id="producto-prueba"&gt;</code> y muestra dentro «Mochila» y «18 €» usando concatenación y después un template literal.</p>
  </section>

  <section className="jsm-section"><h2>El array de productos</h2>
    <p>Cada posición contiene un producto. Cada producto agrupa varias propiedades; puedes acceder a él mediante su índice y consultar sus propiedades con el punto.</p>
    <Code>{`const productos = [
  { nombre: "Cuaderno", precio: 2.50, imagen: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400" },
  { nombre: "Lápiz", precio: 0.80, imagen: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=400" },
  { nombre: "Regla", precio: 1.20, imagen: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400" }
];

console.log(productos[0].nombre);
console.log(productos[1].precio);`}</Code>
    <p>Primero crea una tarjeta con un solo objeto; después usa <code>map()</code> para generar todas:</p>
    <Code>{`const tarjetas = productos.map((producto, indice) => \`
  <article class="tarjeta-producto">
    <img src="\${producto.imagen}" alt="\${producto.nombre}">
    <h3>\${producto.nombre}</h3>
    <p>\${producto.precio.toFixed(2)} €</p>
    <button onclick="agregarAlCarrito(\${indice})">Añadir al carrito</button>
  </article>\`).join("");

document.querySelector("#productos").innerHTML = tarjetas;`}</Code>
  </section>

  <section className="jsm-section"><h2>HTML preparado</h2><Code>{`<main class="mini-tienda">
  <h1>Mini tienda escolar</h1>
  <section id="productos" class="catalogo"></section>
  <aside id="carrito" class="carrito"></aside>
</main>`}</Code></section>

  <section className="jsm-section"><h2>El carrito: otro array</h2>
    <p>El catálogo no cambia. Creamos un segundo array vacío y guardamos en él los productos elegidos mediante <code>push()</code>.</p>
    <Code>{`const carrito = [];

function agregarAlCarrito(indice) {
  const producto = productos[indice];
  carrito.push(producto);
  mostrarCarrito();
}`}</Code>
    <p>Completa en orden: <code>mostrarProductos()</code>, <code>agregarAlCarrito(indice)</code>, <code>mostrarCarrito()</code> y <code>calcularTotal()</code>.</p>
    <Code>{`function mostrarCarrito() {
  const contenedor = document.querySelector("#carrito");
  let html = "<h2>Carrito (" + carrito.length + ")</h2>";

  if (carrito.length === 0) {
    html += "<p>El carrito está vacío.</p>";
  } else {
    carrito.forEach((producto) => {
      html += "<p>" + producto.nombre + " · " + producto.precio.toFixed(2) + " €</p>";
    });
    html += "<strong>Total: " + calcularTotal().toFixed(2) + " €</strong>";
  }
  contenedor.innerHTML = html;
}

function calcularTotal() {
  let total = 0;
  for (const producto of carrito) {
    total = total + producto.precio;
  }
  return total;
}

mostrarProductos();
mostrarCarrito();`}</Code>
  </section>

  <section className="jsm-section jsm-challenge"><h2>Reto final</h2><p>Añade un botón para vaciar el carrito. Debe dejar <code>carrito</code> vacío y volver a llamar a <code>mostrarCarrito()</code>.</p><details><summary>Pista</summary><Code>{`carrito.length = 0;
mostrarCarrito();`}</Code></details></section>
  <section className="jsm-section jsm-recap"><h2>Lo que acabas de descubrir</h2><p>El carrito vive en memoria. Si actualizas el navegador, se pierden las selecciones. Más adelante aprenderás a solucionar este problema con <code>localStorage</code>; todavía no lo implementamos.</p></section>
</>}
