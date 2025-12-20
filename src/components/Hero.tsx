import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Target, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
            <img src={logo} alt="JurusanKu" className="w-8 h-8 object-contain" />
            <span className="text-sm font-medium text-primary">Sistem Pendukung Keputusan</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Temukan Jurusan Kuliah
            <span className="block text-primary mt-2">Yang Tepat Untukmu</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong>JurusanKu</strong> adalah sistem rekomendasi cerdas berbasis <strong>Certainty Factor</strong> yang menganalisis 
            minat, kemampuan, dan prestasi akademik untuk membantu Anda memilih jurusan kuliah yang sesuai.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gap-2"
              onClick={() => navigate('/assessment')}
            >
              Mulai Asesmen
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/about')}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Metode Certainty Factor</h3>
              <p className="text-muted-foreground text-sm">
                Algoritma cerdas yang mengukur tingkat kepastian rekomendasi berdasarkan jawaban Anda
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analisis Komprehensif</h3>
              <p className="text-muted-foreground text-sm">
                Mengevaluasi minat, kemampuan, dan prestasi akademik secara menyeluruh
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Rekomendasi Akurat</h3>
              <p className="text-muted-foreground text-sm">
                Hasil yang dipersonalisasi dengan persentase kepastian untuk setiap jurusan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
