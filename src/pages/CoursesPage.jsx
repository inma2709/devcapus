import { useState } from 'react';
import { Calendar, FileText, CheckCircle, GraduationCap, ArrowUpRight, TrendingUp } from 'lucide-react';
import PageHero from '../components/content/PageHero';
import Container from '../components/layout/Container';
import SectionHeader from '../components/content/SectionHeader';
import { courses } from '../data/courses';

export default function CoursesPage() {
  const course = courses[0]; // El único curso certificado IFCD0210

  // Estado para ver la planificación del módulo 1
  const [showPlanning, setShowPlanning] = useState(false);

  return (
    <>
      <PageHero eyebrow="Formación Oficial" title="Certificado Profesional IFCD0210">
        La ruta oficial completa para convertirte en Desarrollador Web Full Stack. Aprende a crear de extremo a extremo interfaces modernas y dinámicas, lógica de servidor robusta e implantación segura en la nube.
      </PageHero>

      <Container className="space-y-16 py-12">
        {/* Bloque Informativo: Qué te aporta este certificado */}
        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
              <GraduationCap size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-brand-purple">Titulación Oficial</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Certificación de **Nivel 3** expedida oficialmente por el SEPE. Una cualificación profesional reconocida a nivel europeo que valida tus competencias completas en programación de tecnologías de la información.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-pink/20 bg-brand-pink/5 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pink text-white">
              <TrendingUp size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-brand-purple">Inserción Laboral</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              El mercado actual demanda más que nunca perfiles full stack formados con lógica de cliente-servidor sólida. Aprenderás las bases del desarrollo moderno capacitándote para incorporarte de forma competitiva a empresas de software.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-yellow/20 bg-brand-yellow/5 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-brand-purple font-bold">
              <CheckCircle size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-brand-purple">Aprendizaje Práctico</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Aprenderás mediante la creación de **proyectos de software reales**, consolidando las bases tecnológicas. Al culminar la teoría, asimilarás tus competencias mediante 80 horas adicionales de prácticas en empresas colaboradoras del sector.
            </p>
          </div>
        </section>

        {/* Bloque del Camino de Aprendizaje */}
        <section className="space-y-8">
          <SectionHeader
            eyebrow="El camino de aprendizaje"
            title="Módulos Formativos Oficiales"
            description="La formación está organizada en 3 grandes áreas modulares complementarias que te llevarán paso a paso desde cero hasta la implantación profesional."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Tarjeta 1: MF0491_3 */}
            <article className="flex flex-col rounded-2xl border-2 border-brand-blue bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-bold text-white">
                  MF0491_3 (180h)
                </span>
                <span className="text-xs font-extrabold text-brand-purple">Fase 1</span>
              </div>
              
              <h3 className="mt-4 text-xl font-extrabold text-slate-900 leading-tight">
                Programación web en entorno cliente
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Aprenderás a maquetar sitios web semánticos y crear interacciones ricas en el navegador utilizando lenguajes de marcas, estilos avanzados e interactividad en vivo mediante JavaScript.
              </p>

              <div className="mt-4 shrink-0 rounded-lg bg-brand-blue/5 p-3.5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Ejes de Estudio:</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['HTML5', 'CSS3 Layouts', 'Responsive', 'Flexbox/Grid', 'Bootstrap', 'JavaScript ES6', 'DOM & APIs'].map(tech => (
                    <span key={tech} className="rounded bg-white px-2 py-0.5 text-[11px] font-bold text-brand-blue border border-brand-blue/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenedor interactivo de Calendario y Programación integrado aquí, ya que solo refieren a este Módulo de Cliente */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <button
                  onClick={() => setShowPlanning(!showPlanning)}
                  className="flex w-full items-center justify-between rounded-lg bg-brand-blue px-4 py-2.5 text-xs font-bold text-white shadow transition-colors hover:bg-brand-blue/90"
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {showPlanning ? 'Ocultar Planificación Cliente' : 'Ver Planificación Cliente (Calendario/Guía)'}
                  </span>
                  <span className={`transition-transform duration-200 ${showPlanning ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {showPlanning && (
                  <div className="mt-4 space-y-4 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-opacity">
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase">Calendario Lectivo</p>
                      <a href="/calendario.png" target="_blank" rel="noreferrer" className="group relative mt-1 block overflow-hidden rounded border border-slate-200 bg-white">
                        <img src="/calendario.png" alt="Calendario" className="max-h-[120px] w-full object-contain p-1" />
                        <span className="absolute inset-0 flex items-center justify-center bg-slate-900/40 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                          Ver calendario 🔍
                        </span>
                      </a>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase">Programación Oficial</p>
                      <a href="/Programación_Web_Entorno_Cliente.png" target="_blank" rel="noreferrer" className="group relative mt-1 block overflow-hidden rounded border border-slate-200 bg-white">
                        <img src="/Programación_Web_Entorno_Cliente.png" alt="Guía Docente" className="max-h-[120px] w-full object-contain p-1" />
                        <span className="absolute inset-0 flex items-center justify-center bg-slate-900/40 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                          Ver guía completa 🔍
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </article>

            {/* Tarjeta 2: MF0492_3 */}
            <article className="flex flex-col rounded-2xl border-2 border-brand-pink bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="rounded-full bg-brand-pink px-3 py-1 text-xs font-bold text-white">
                  MF0492_3 (240h)
                </span>
                <span className="text-xs font-extrabold text-brand-purple">Fase 2</span>
              </div>
              
              <h3 className="mt-4 text-xl font-extrabold text-slate-900 leading-tight">
                Programación web en entorno servidor
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Descubrirás las lógicas internas del backend. Aprenderás a procesar peticiones, conectar bases de datos dinámicas de forma segura, gestionar sesiones de acceso de usuarios y estructurar APIs web orientadas a servicios.
              </p>

              <div className="mt-auto pt-6 shrink-0">
                <div className="rounded-lg bg-brand-pink/5 p-3.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-pink">Ejes de Estudio:</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Node.js', 'Express/PHP', 'SQL & NoSQL', 'Seguridad SQLi', 'Modelos MVC', 'APIs REST', 'Autenticación'].map(tech => (
                      <span key={tech} className="rounded bg-white px-2 py-0.5 text-[11px] font-bold text-brand-pink border border-brand-pink/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Tarjeta 3: MF0493_3 */}
            <article className="flex flex-col rounded-2xl border-2 border-brand-purple bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="rounded-full bg-brand-purple px-3 py-1 text-xs font-bold text-white">
                  MF0493_3 (90h)
                </span>
                <span className="text-xs font-extrabold text-brand-purple">Fase 3</span>
              </div>
              
              <h3 className="mt-4 text-xl font-extrabold text-slate-900 leading-tight">
                Implantación de aplicaciones web
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Instalarás y desplegarás tu software en servidores modernos de producción. Dominarás el empaquetado de contenedores, HTTPS seguros, parámetros de optimización para SEO y la automatización y agilización mediante integración continua.
              </p>

              <div className="mt-auto pt-6 shrink-0">
                <div className="rounded-lg bg-brand-purple/5 p-3.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-purple">Ejes de Estudio:</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Git / GitHub', 'Servidores Web', 'Docker', 'Certificados SSL', 'Nginx/Apache', 'CI/CD Pipelines'].map(tech => (
                      <span key={tech} className="rounded bg-white px-2 py-0.5 text-[11px] font-bold text-brand-purple border border-brand-purple/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Sección: Objetivos globales del curso de forma compacta */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold text-brand-purple md:text-2xl">¿Qué serás capaz de hacer al culminar?</h3>
            <p className="mt-2 text-sm text-slate-500">
              Las competencias estratégicas adquiridas a lo largo de este camino formativo oficial te dotarán de total autonomía técnica:
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="text-brand-blue font-bold">✓</span>
                <span>Crear plantillas de desarrollo e interfaces fluidas completamente optimizadas para móviles y responsive.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="text-brand-pink font-bold">✓</span>
                <span>Configurar lógica del servidor moderna con arquitecturas desacopladas e integradas de extremo a extremo.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="text-brand-purple font-bold">✓</span>
                <span>Construir consultas parametrizadas securizadas para resistir los ciberataques más comunes del desarrollo.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="text-brand-yellow font-bold">✓</span>
                <span>Publicar aplicaciones en producción automatizando flujos de compresión y despliegues con Docker.</span>
              </li>
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}
