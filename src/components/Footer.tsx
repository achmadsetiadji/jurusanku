import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="JurusanKu Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-lg">JurusanKu</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link to="/assessment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Asesmen
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tentang
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 JurusanKu. Metode Certainty Factor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
