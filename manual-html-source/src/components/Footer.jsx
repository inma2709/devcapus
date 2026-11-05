export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <small>© {year} · Manual UF1841 (uso educativo)</small>
        <small>Hecho con React · Accesible · Escalable</small>
      </div>
    </footer>
  );
}
