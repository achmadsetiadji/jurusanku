import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Mail, MapPin, GraduationCap, Brain, Target } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/assessment', label: 'Mulai Asesmen' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/faq', label: 'FAQ' },
  ];

  const features = [
    { icon: Brain, label: 'Metode Certainty Factor' },
    { icon: Target, label: 'Rekomendasi Akurat' },
    { icon: GraduationCap, label: 'Berbagai Jurusan' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img 
                src={logo} 
                alt="JurusanKu Logo" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="font-bold text-xl">JurusanKu</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Sistem Pendukung Keputusan untuk membantu siswa memilih jurusan kuliah yang tepat 
              menggunakan metode Certainty Factor.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Fitur Unggulan</h4>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontak</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@jurusanku.id" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                hello@jurusanku.id
              </a>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs text-muted-foreground">
                Dikembangkan dengan ❤️ untuk membantu generasi muda Indonesia 
                menemukan jalan karier yang tepat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} JurusanKu. Semua hak dilindungi.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Metode Certainty Factor
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
