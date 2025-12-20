import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Calculator, CheckCircle2, Target, Workflow, Shield, BarChart3, Settings2, GraduationCap } from 'lucide-react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <PageLoader variant="about" />
      </>
    );
  }

  const caraKerjaCards = [
    { 
      title: '1. Pengumpulan Data', 
      desc: 'Sistem mengumpulkan data melalui serangkaian pertanyaan tentang minat, kemampuan, dan prestasi akademik pengguna.',
      icon: Target,
      iconAnimation: 'group-hover:scale-125 group-hover:rotate-12',
      delay: '0.1s'
    },
    { 
      title: '2. Perhitungan CF', 
      desc: 'Setiap jawaban dikalikan dengan nilai CF aturan, kemudian dikombinasikan menggunakan rumus CF kombinasi.',
      icon: Calculator,
      iconAnimation: 'group-hover:animate-bounce',
      delay: '0.2s'
    },
    { 
      title: '3. Rekomendasi', 
      desc: 'Sistem menampilkan daftar jurusan dengan nilai CF tertinggi sebagai rekomendasi terbaik untuk pengguna.',
      icon: CheckCircle2,
      iconAnimation: 'group-hover:scale-110 group-hover:rotate-[360deg]',
      delay: '0.3s'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang JurusanKu - Metode Certainty Factor</title>
        <meta name="description" content="Pelajari tentang metode Certainty Factor yang digunakan dalam JurusanKu untuk membantu pemilihan jurusan kuliah." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden" ref={containerRef}>
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header with Animated Gradient & Parallax */}
            <div className="relative text-center mb-12 max-w-3xl mx-auto overflow-hidden rounded-2xl p-8 md:p-12">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/20 animate-gradient-shift" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent animate-pulse-slow" />
              
              {/* Floating Orbs with Parallax */}
              <div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-float-delayed"
                style={{ transform: `translateY(${scrollY * -0.08}px)` }}
              />
              <div 
                className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float-slow"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
                  Tentang Sistem Pendukung Keputusan
                </h1>
                <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Sistem ini menggunakan metode <strong className="text-primary">Certainty Factor (CF)</strong> untuk memberikan 
                  rekomendasi jurusan kuliah berdasarkan analisis minat, kemampuan, dan prestasi akademik.
                </p>
              </div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
            </div>

            {/* What is CF - with Parallax */}
            <section 
              className="max-w-4xl mx-auto mb-16"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in-up">
                <CardHeader className="bg-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Apa itu Certainty Factor?</CardTitle>
                      <CardDescription>Metode penalaran dalam sistem pakar</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Certainty Factor (CF)</strong> adalah metode yang dikembangkan oleh 
                    Shortliffe dan Buchanan pada tahun 1975 untuk menangani ketidakpastian dalam 
                    sistem pakar MYCIN. Metode ini menggunakan nilai kepercayaan (belief) dan 
                    ketidakpercayaan (disbelief) untuk mengukur tingkat kepastian suatu hipotesis.
                  </p>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border transition-all duration-300 hover:bg-muted/70 hover:border-primary/30">
                    <p className="font-mono text-sm text-center">
                      CF[H,E] = MB[H,E] - MD[H,E]
                    </p>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      Dimana MB = Measure of Belief, MD = Measure of Disbelief
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How it works - with Parallax & Interactive Cards */}
            <section 
              className="max-w-4xl mx-auto mb-16"
              style={{ transform: `translateY(${scrollY * 0.015}px)` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in">Cara Kerja Sistem</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caraKerjaCards.map((card) => {
                  const CardIcon = card.icon;
                  return (
                    <Card 
                      key={card.title}
                      className="group transition-all duration-500 hover:shadow-xl hover:-translate-y-3 hover:border-primary/40 animate-fade-in-up cursor-pointer" 
                      style={{ animationDelay: card.delay }}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                          <CardIcon className={`w-6 h-6 text-primary transition-all duration-500 group-hover:text-primary-foreground ${card.iconAnimation}`} />
                        </div>
                        <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {card.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* CF Combination Formula - with Parallax */}
            <section 
              className="max-w-4xl mx-auto mb-16"
              style={{ transform: `translateY(${scrollY * 0.01}px)` }}
            >
              <Card className="transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
                      <Workflow className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Rumus Kombinasi CF</CardTitle>
                      <CardDescription>Menggabungkan nilai CF dari berbagai evidens</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-muted/50 border border-border transition-all duration-300 hover:bg-muted/70 hover:border-primary/30">
                      <p className="text-sm text-muted-foreground mb-2">Jika CF1 ≥ 0 dan CF2 ≥ 0:</p>
                      <p className="font-mono text-sm text-center">CF_combine = CF1 + CF2 × (1 - CF1)</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border transition-all duration-300 hover:bg-muted/70 hover:border-primary/30">
                      <p className="text-sm text-muted-foreground mb-2">Jika CF1 &lt; 0 dan CF2 &lt; 0:</p>
                      <p className="font-mono text-sm text-center">CF_combine = CF1 + CF2 × (1 + CF1)</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border transition-all duration-300 hover:bg-muted/70 hover:border-primary/30">
                      <p className="text-sm text-muted-foreground mb-2">Jika tanda berbeda:</p>
                      <p className="font-mono text-sm text-center">CF_combine = (CF1 + CF2) / (1 - min(|CF1|, |CF2|))</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Advantages - with Parallax */}
            <section 
              className="max-w-4xl mx-auto"
              style={{ transform: `translateY(${scrollY * 0.005}px)` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in">Keunggulan Metode CF</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Menangani Ketidakpastian', desc: 'Dapat mengelola informasi yang tidak pasti dan tidak lengkap dengan baik.', icon: Shield, animation: 'group-hover:animate-pulse' },
                  { title: 'Mudah Diinterpretasi', desc: 'Hasil berupa persentase kepastian yang mudah dipahami pengguna.', icon: BarChart3, animation: 'group-hover:scale-125 group-hover:-translate-y-0.5' },
                  { title: 'Fleksibel', desc: 'Dapat disesuaikan dengan menambah atau mengubah aturan dan nilai CF.', icon: Settings2, animation: 'group-hover:rotate-180' },
                  { title: 'Berbasis Pengetahuan Pakar', desc: 'Nilai CF ditentukan berdasarkan pengetahuan dan pengalaman pakar.', icon: GraduationCap, animation: 'group-hover:rotate-12 group-hover:scale-110' },
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                  <div 
                    key={item.title}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/40 animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                      <ItemIcon className={`w-6 h-6 text-primary transition-all duration-500 group-hover:text-primary-foreground ${item.animation}`} />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
