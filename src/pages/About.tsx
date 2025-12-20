import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Calculator, CheckCircle2, Target, Workflow, Zap } from 'lucide-react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <PageLoader />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tentang JurusanKu - Metode Certainty Factor</title>
        <meta name="description" content="Pelajari tentang metode Certainty Factor yang digunakan dalam JurusanKu untuk membantu pemilihan jurusan kuliah." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                Tentang Sistem Pendukung Keputusan
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Sistem ini menggunakan metode <strong>Certainty Factor (CF)</strong> untuk memberikan 
                rekomendasi jurusan kuliah berdasarkan analisis minat, kemampuan, dan prestasi akademik.
              </p>
            </div>

            {/* What is CF */}
            <section className="max-w-4xl mx-auto mb-16">
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

            {/* How it works */}
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in">Cara Kerja Sistem</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-110">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">1. Pengumpulan Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Sistem mengumpulkan data melalui serangkaian pertanyaan tentang minat, 
                      kemampuan, dan prestasi akademik pengguna.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-110">
                      <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">2. Perhitungan CF</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Setiap jawaban dikalikan dengan nilai CF aturan, kemudian dikombinasikan 
                      menggunakan rumus CF kombinasi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-110">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">3. Rekomendasi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Sistem menampilkan daftar jurusan dengan nilai CF tertinggi sebagai 
                      rekomendasi terbaik untuk pengguna.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CF Combination Formula */}
            <section className="max-w-4xl mx-auto mb-16">
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

            {/* Advantages */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in">Keunggulan Metode CF</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Menangani Ketidakpastian', desc: 'Dapat mengelola informasi yang tidak pasti dan tidak lengkap dengan baik.' },
                  { title: 'Mudah Diinterpretasi', desc: 'Hasil berupa persentase kepastian yang mudah dipahami pengguna.' },
                  { title: 'Fleksibel', desc: 'Dapat disesuaikan dengan menambah atau mengubah aturan dan nilai CF.' },
                  { title: 'Berbasis Pengetahuan Pakar', desc: 'Nilai CF ditentukan berdasarkan pengetahuan dan pengalaman pakar.' },
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
