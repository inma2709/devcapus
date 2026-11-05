import PageHero from '../components/content/PageHero';
import Container from '../components/layout/Container';
import aboutProfileImage from '../assets/about-profile.png';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        title="Inma Contreras"
      >
        Docente especializada en desarrollo web, programación y formación tecnológica.
      </PageHero>

      <Container className="py-12">
        <div className="mx-auto max-w-5xl space-y-16">

          {/* Presentación */}
          <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
               Desarrollo web y programación para abrir nuevos horizontes. 
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Soy <strong>docente y desarrolladora web</strong>, especializada
                  en formación práctica en programación, desarrollo web y
                  competencias digitales.
                </p>

                <p>
                  Mi trabajo se centra en acercar la tecnología a personas que
                  empiezan desde cero, sin renunciar por ello a una formación
                  técnicamente sólida y conectada con la realidad profesional.
                </p>

                <p>
                  Entiendo la programación como una disciplina que no se aprende
                  memorizando código, sino comprendiendo problemas, diseñando
                  soluciones y construyendo proyectos reales.
                </p>
              </div>
            </div>

            <figure className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm">
              <img
                src={aboutProfileImage}
                alt="Ilustración de Inma Contreras trabajando en su escritorio"
                className="h-full w-full object-cover"
              />
            </figure>
          </section>

          {/* Especialización */}
          <section>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-purple">
              Especialización
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
              Desarrollo web desde los fundamentos hasta proyectos reales
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Mi formación combina fundamentos de desarrollo web, diseño de
              interfaces, programación y herramientas profesionales utilizadas
              actualmente en proyectos digitales.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-black text-slate-900">
                  Desarrollo frontend
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  HTML, CSS, JavaScript, diseño responsive, accesibilidad,
                  Bootstrap, Tailwind CSS y desarrollo de interfaces web.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-black text-slate-900">
                  Desarrollo web
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Desarrollo de aplicaciones utilizando JavaScript, Node.js,
                  Express, bases de datos y tecnologías web modernas.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-black text-slate-900">
                  Proyectos digitales
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Diseño, desarrollo y publicación de proyectos web con una
                  visión completa del proceso, desde la idea inicial hasta el
                  despliegue.
                </p>
              </article>
            </div>
          </section>

          {/* Método docente */}
          <section className="rounded-3xl bg-brand-purple px-7 py-10 text-white sm:px-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
              Metodología
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Aprender haciendo, entendiendo lo que se hace
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-lavender">
              Mi metodología parte de una idea sencilla: el alumno debe saber
              siempre qué está construyendo, por qué lo está haciendo y qué
              problema está resolviendo.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-black text-white">
                  Comprender antes de copiar
                </h3>

                <p className="mt-2 leading-7 text-brand-lavender">
                  El código se introduce después de comprender el concepto y su
                  utilidad dentro de un proyecto.
                </p>
              </div>

              <div>
                <h3 className="font-black text-white">
                  Proyectos progresivos
                </h3>

                <p className="mt-2 leading-7 text-brand-lavender">
                  Cada proyecto incorpora nuevos conocimientos sobre una base
                  previamente trabajada.
                </p>
              </div>

              <div>
                <h3 className="font-black text-white">
                  Tecnología con propósito
                </h3>

                <p className="mt-2 leading-7 text-brand-lavender">
                  Antes de desarrollar una aplicación trabajamos sus objetivos,
                  usuarios, estructura, diseño y casos de uso.
                </p>
              </div>

              <div>
                <h3 className="font-black text-white">
                  Mentalidad profesional
                </h3>

                <p className="mt-2 leading-7 text-brand-lavender">
                  El alumnado trabaja con herramientas, procesos y buenas
                  prácticas próximas al entorno profesional.
                </p>
              </div>
            </div>
          </section>

          {/* Formación */}
          <section>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-purple">
              Formación tecnológica
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
              Una formación que conecta aula y profesión
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Imparto formación relacionada con el
                <strong> desarrollo de aplicaciones y tecnologías web</strong>,
                programación, diseño web y competencias digitales.
              </p>

              <p>
                Entre las áreas que trabajo se encuentran HTML, CSS,
                JavaScript, diseño responsive, UX/UI, WordPress, bases de datos,
                Node.js y herramientas profesionales de desarrollo.
              </p>

              <p>
                También desarrollo materiales didácticos, manuales y proyectos
                específicamente diseñados para facilitar el aprendizaje de
                programación a alumnado con diferentes niveles de experiencia.
              </p>
            </div>
          </section>

          {/* DevCampus */}
          <section className="border-t border-slate-200 pt-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-purple">
              DevCampus
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
              Un espacio para aprender desarrollo web construyendo
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              DevCampus nace como una plataforma educativa para reunir los
              manuales, recursos, ejercicios y proyectos que utilizamos durante
              mis formaciónes.Este material es 100% gratuito y de libre acceso, y está pensado para que cualquier persona pueda aprender desarrollo web desde cero.
              Su uso está limitado a fines educativos y no comerciales, y se ofrece bajo una licencia Creative Commons.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              El objetivo no es ofrecer una colección de fragmentos de código,
              sino crear un itinerario en el que cada recurso ayude a comprender
              cómo se piensa, se diseña y se desarrolla una aplicación web.
            </p>
          </section>

        </div>
      </Container>
    </>
  );
}
