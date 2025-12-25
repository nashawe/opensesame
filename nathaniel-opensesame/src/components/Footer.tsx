import { Container } from './Container';
export const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-12">
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Nathaniel Shawe — OpenSesame Internship Project</p>
      </div>
    </Container>
  </footer>
);
