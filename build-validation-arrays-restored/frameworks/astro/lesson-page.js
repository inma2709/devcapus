const lessons = [
  ['01-por-que-astro', '¿Por qué aprender Astro?'],
  ['02-primer-proyecto', 'Mi primer proyecto Astro'],
  ['03-componentes-reutilizables', 'Mi primer componente reutilizable'],
  ['04-layouts-y-slot', 'Layouts y slot'],
  ['05-proyecto-multipagina', 'Proyecto multipágina'],
];

const current = Number(document.documentElement.dataset.lesson);
const currentLesson = lessons[current - 1];
const nav = document.querySelector('#lesson-nav');
const content = document.querySelector('#lesson-content');

nav.innerHTML = lessons
  .map(([slug, title], index) => `<a class="${index === current - 1 ? 'active' : ''}" href="../${slug}/index.html">${String(index + 1).padStart(2, '0')} · ${title}</a>`)
  .join('');

document.title = `${currentLesson[1]} | Astro · DevCampus`;

async function loadLesson() {
  // lessons-source.html es la única fuente de contenido de las cinco lecciones.
  // no-store evita reutilizar una respuesta antigua al navegar entre capítulos.
  const response = await fetch('../../lessons-source.html', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`No se ha podido cargar lessons-source.html (${response.status}).`);
  }

  const source = new DOMParser().parseFromString(await response.text(), 'text/html');
  const lesson = source.querySelector(`[data-lesson="${current}"]`);
  if (!lesson) {
    throw new Error(`No existe data-lesson="${current}" en lessons-source.html.`);
  }

  content.replaceChildren(lesson);
  content.querySelectorAll('table').forEach((table, index) => {
    const scroll = document.createElement('div');
    const heading = table.closest('section')?.querySelector('h2')?.textContent;

    scroll.className = 'table-scroll';
    scroll.setAttribute('role', 'region');
    scroll.setAttribute('aria-label', heading || `Tabla de la lección ${current}, ${index + 1}`);
    table.before(scroll);
    scroll.append(table);

    requestAnimationFrame(() => {
      if (scroll.scrollWidth > scroll.clientWidth) {
        scroll.tabIndex = 0;
      }
    });
  });

  const pager = document.createElement('nav');
  pager.id = 'pager';
  pager.className = 'pager';
  pager.setAttribute('aria-label', 'Navegación entre lecciones');
  content.after(pager);

  const enrich = document.createElement('script');
  enrich.src = '../../autonomous-learning.js';
  enrich.onload = () => {
    pager.innerHTML = `${current > 1 ? `<a href="../${lessons[current - 2][0]}/index.html">← Lección anterior</a>` : '<a href="../../index.html">← Portada</a>'}${current < lessons.length ? `<a href="../${lessons[current][0]}/index.html">Siguiente lección →</a>` : '<a href="../../index.html">Volver a la portada</a>'}`;
  };
  enrich.onerror = () => console.error('No se ha podido cargar autonomous-learning.js.');
  document.body.append(enrich);
}

loadLesson().catch((error) => {
  console.error(error);
  content.innerHTML = `<section class="lesson"><h1>No se ha podido cargar la lección</h1><p>${error.message}</p><p>Abre este manual mediante el servidor de DevCampus y vuelve a intentarlo.</p></section>`;
});
