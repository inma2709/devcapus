import { Link } from 'react-router-dom';
import Container from './Container';

export default function SiteFooter() {
  return (
    <footer className="mt-8 border-t-4 border-brand-pink bg-brand-purple text-white sm:mt-12">
      <Container className="grid gap-6 py-6 sm:py-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-2xl font-black">DevCampus</p>
          <p className="mt-3 font-bold text-teal-200">
            Inma Contreras
          </p>
          <p className="text-sm text-teal-200">
            Docente y desarrolladora web
          </p>
        </div>

        <div>
          <h2 className="font-bold">Aprender haciendo</h2>

          <p className="mt-3 max-w-xs text-sm leading-6 text-teal-200">
            Recursos, manuales y proyectos para aprender desarrollo web
            mediante la práctica.
          </p>

          <Link
            className="mt-4 inline-block text-sm font-bold text-brand-pink hover:text-white"
            to="/sobre-mi"
          >
            Conoce a Inma
          </Link>
        </div>

        <div>
          <h2 className="font-bold">Uso de los materiales</h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-teal-200">
            Los contenidos, manuales, ejercicios y proyectos publicados en
            DevCampus están destinados exclusivamente a fines educativos y
            formativos.
          </p>

          <p className="mt-3 max-w-sm text-sm leading-6 text-teal-200">
            No está permitido su uso, reproducción o distribución con fines
            comerciales sin autorización previa.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/20">
        <Container className="py-2.5 text-sm text-teal-200">
          © 2025 Inma Contreras · Material para uso educativo
        </Container>
      </div>
    </footer>
  );
}
