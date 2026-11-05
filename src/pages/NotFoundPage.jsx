import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

export default function NotFoundPage() {
  return (
    <Container className="py-20">
      <p className="font-semibold text-teal-700">Error 404</p>
      <h1 className="mt-2 text-4xl font-bold">No hemos encontrado esta página</h1>
      <p className="mt-4 text-slate-600">
        Puede que el enlace no exista o que el contenido se haya movido.
      </p>
      <Link
        className="mt-7 inline-block rounded-md bg-teal-700 px-5 py-3 font-semibold text-white"
        to="/"
      >
        Volver al inicio
      </Link>
    </Container>
  );
}
