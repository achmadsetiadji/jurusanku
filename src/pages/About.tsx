import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Calculator, CheckCircle2, Target, Workflow, Zap } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Sistem - SPK Pemilihan Jurusan Kuliah</title>
        <meta name="description" content="Pelajari tentang metode Certainty Factor yang digunakan dalam Sistem Pendukung Keputusan Pemilihan Jurusan Kuliah." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Tentang Sistem Pendukung Keputusan
              </h1>
              <p className="text-lg text-muted-foreground">
                Sistem ini menggunakan metode <strong>Certainty Factor (CF)</strong> untuk memberikan 
                rekomendasi jurusan kuliah berdasarkan analisis minat, kemampuan, dan prestasi akademik.
              </p>
            </div>

            {/* What is CF */}
            <section className="max-w-4xl mx-auto mb-16">
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
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
              <h2 className="text-2xl font-bold mb-6 text-center">Cara Kerja Sistem</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
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

                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
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

                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
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
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Jika CF1 ≥ 0 dan CF2 ≥ 0:</p>
                      <p className="font-mono text-sm text-center">CF_combine = CF1 + CF2 × (1 - CF1)</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Jika CF1 &lt; 0 dan CF2 &lt; 0:</p>
                      <p className="font-mono text-sm text-center">CF_combine = CF1 + CF2 × (1 + CF1)</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Jika tanda berbeda:</p>
                      <p className="font-mono text-sm text-center">CF_combine = (CF1 + CF2) / (1 - min(|CF1|, |CF2|))</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Advantages */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Keunggulan Metode CF</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Menangani Ketidakpastian</h3>
                    <p className="text-sm text-muted-foreground">
                      Dapat mengelola informasi yang tidak pasti dan tidak lengkap dengan baik.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mudah Diinterpretasi</h3>
                    <p className="text-sm text-muted-foreground">
                      Hasil berupa persentase kepastian yang mudah dipahami pengguna.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fleksibel</h3>
                    <p className="text-sm text-muted-foreground">
                      Dapat disesuaikan dengan menambah atau mengubah aturan dan nilai CF.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Berbasis Pengetahuan Pakar</h3>
                    <p className="text-sm text-muted-foreground">
                      Nilai CF ditentukan berdasarkan pengetahuan dan pengalaman pakar.
                    </p>
                  </div>
                </div>
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
