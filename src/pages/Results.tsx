import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResultCard from '@/components/ResultCard';
import { Button } from '@/components/ui/button';
import { CFResult } from '@/lib/certaintyFactor';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<CFResult[]>([]);

  useEffect(() => {
    const storedResults = sessionStorage.getItem('cfResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      navigate('/assessment');
    }
  }, [navigate]);

  const handleRetake = () => {
    sessionStorage.removeItem('cfResults');
    navigate('/assessment');
  };

  if (results.length === 0) {
    return null;
  }

  const topResult = results[0];

  return (
    <>
      <Helmet>
        <title>Hasil Rekomendasi - JurusanKu</title>
        <meta name="description" content="Lihat hasil rekomendasi jurusan kuliah berdasarkan analisis Certainty Factor dari jawaban Anda." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-float">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                Hasil Rekomendasi Jurusan
              </h1>
              <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Berdasarkan analisis <strong>Certainty Factor</strong>, berikut adalah rekomendasi 
                jurusan kuliah yang sesuai dengan minat, kemampuan, dan prestasi akademik Anda.
              </p>
            </div>

            {/* Top Recommendation Highlight */}
            <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20 animate-scale-in transition-all duration-300 hover:shadow-xl">
              <div className="text-center">
                <p className="text-sm font-medium text-primary mb-2">Rekomendasi Terbaik</p>
                <div className="text-5xl mb-4 animate-float">{topResult.major.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{topResult.major.name}</h2>
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <span className="text-4xl font-bold text-primary animate-pulse-glow rounded-full px-4 py-2">{topResult.percentage}%</span>
                  <span className="text-sm">tingkat kepastian</span>
                </div>
              </div>
            </div>

            {/* All Results */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 animate-fade-in">Semua Rekomendasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <ResultCard key={result.majorId} result={result} rank={index + 1} />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')} 
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </Button>
              <Button 
                onClick={handleRetake} 
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                Ulangi Asesmen
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Results;
