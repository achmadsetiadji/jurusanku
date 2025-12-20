import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Target, Award, Sparkles, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-shift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.2),transparent)] animate-pulse-slow" />
      
      {/* Moving gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-gradient-x" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-gradient-y" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-full blur-3xl animate-float animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-bl from-secondary/30 to-primary/10 rounded-full blur-3xl animate-float animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-tl from-secondary/25 to-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Floating decorative icons */}
      <div className="absolute top-32 left-[15%] hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-14 h-14 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center rotate-12">
          <GraduationCap className="w-7 h-7 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-[12%] hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-12 h-12 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center -rotate-12">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-[10%] hidden lg:block animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="w-10 h-10 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center rotate-6">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[18%] hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center -rotate-6">
          <Brain className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sistem Pendukung Keputusan Berbasis AI</span>
          </div>

          {/* Main heading with gradient text */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Temukan Jurusan
              <span className="block bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                Kuliah Impianmu
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Analisis minat, kemampuan, dan prestasi akademikmu dengan metode 
            <span className="font-semibold text-foreground"> Certainty Factor </span>
            untuk menemukan jurusan kuliah yang paling sesuai denganmu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gap-2 group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => navigate('/assessment')}
            >
              Mulai Asesmen Gratis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-muted/50"
              onClick={() => navigate('/about')}
            >
              Pelajari Metode CF
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">16</p>
              <p className="text-sm text-muted-foreground">Jurusan Tersedia</p>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">63</p>
              <p className="text-sm text-muted-foreground">Pertanyaan Asesmen</p>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">95%</p>
              <p className="text-sm text-muted-foreground">Akurasi Rekomendasi</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div 
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-card hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Metode Certainty Factor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Algoritma cerdas yang mengukur tingkat kepastian rekomendasi berdasarkan setiap jawaban Anda
              </p>
            </div>

            <div 
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-card hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analisis Komprehensif</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mengevaluasi minat, kemampuan, dan prestasi akademik Anda secara menyeluruh dan akurat
              </p>
            </div>

            <div 
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-card hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Rekomendasi Personal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hasil dipersonalisasi dengan persentase kepastian untuk setiap jurusan yang direkomendasikan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
