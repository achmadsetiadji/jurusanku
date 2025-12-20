import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import ResultCard from '@/components/ResultCard';
import { Button } from '@/components/ui/button';
import { CFResult } from '@/lib/certaintyFactor';
import { ArrowLeft, RotateCcw, Trophy, Download, Loader2, Sparkles, Award, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [results, setResults] = useState<CFResult[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedResults = sessionStorage.getItem('cfResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      navigate('/assessment');
      return;
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRetake = () => {
    sessionStorage.removeItem('cfResults');
    navigate('/assessment');
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    
    try {
      const { default: jsPDF } = await import('jspdf');
      
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Header
      doc.setFontSize(24);
      doc.setTextColor(230, 126, 34);
      doc.text('JurusanKu', pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(16);
      doc.setTextColor(60, 60, 60);
      doc.text('Hasil Rekomendasi Jurusan Kuliah', pageWidth / 2, 30, { align: 'center' });
      
      doc.setFontSize(10);
      doc.setTextColor(120, 120, 120);
      doc.text(`Tanggal: ${new Date().toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}`, pageWidth / 2, 38, { align: 'center' });
      
      // Divider
      doc.setDrawColor(230, 126, 34);
      doc.setLineWidth(0.5);
      doc.line(20, 45, pageWidth - 20, 45);
      
      // Top result highlight
      const topResult = results[0];
      doc.setFontSize(12);
      doc.setTextColor(230, 126, 34);
      doc.text('REKOMENDASI TERBAIK', 20, 55);
      
      doc.setFontSize(18);
      doc.setTextColor(40, 40, 40);
      doc.text(topResult.major.name, 20, 65);
      
      doc.setFontSize(14);
      doc.setTextColor(230, 126, 34);
      doc.text(`${topResult.percentage}% tingkat kepastian`, 20, 73);
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      const descLines = doc.splitTextToSize(topResult.major.description, pageWidth - 40);
      doc.text(descLines, 20, 82);
      
      // Careers for top result
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(`Prospek Karier: ${topResult.major.careers.join(', ')}`, 20, 95);
      
      // All results
      let yPosition = 110;
      
      doc.setFontSize(14);
      doc.setTextColor(40, 40, 40);
      doc.text('DAFTAR LENGKAP REKOMENDASI', 20, yPosition);
      yPosition += 12;
      
      // Table header
      doc.setFillColor(245, 245, 245);
      doc.rect(20, yPosition, pageWidth - 40, 10, 'F');
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text('No.', 25, yPosition + 7);
      doc.text('Jurusan', 40, yPosition + 7);
      doc.text('Persentase', pageWidth - 50, yPosition + 7);
      doc.text('CF Value', pageWidth - 25, yPosition + 7);
      yPosition += 12;
      
      results.forEach((result, index) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
          
          // Repeat table header on new page
          doc.setFillColor(245, 245, 245);
          doc.rect(20, yPosition, pageWidth - 40, 10, 'F');
          doc.setFontSize(10);
          doc.setTextColor(80, 80, 80);
          doc.text('No.', 25, yPosition + 7);
          doc.text('Jurusan', 40, yPosition + 7);
          doc.text('Persentase', pageWidth - 50, yPosition + 7);
          doc.text('CF Value', pageWidth - 25, yPosition + 7);
          yPosition += 12;
        }
        
        // Alternate row background
        if (index % 2 === 0) {
          doc.setFillColor(252, 252, 252);
          doc.rect(20, yPosition - 3, pageWidth - 40, 18, 'F');
        }
        
        // Row border
        doc.setDrawColor(230, 230, 230);
        doc.line(20, yPosition + 15, pageWidth - 20, yPosition + 15);
        
        // Rank
        doc.setFontSize(10);
        doc.setTextColor(230, 126, 34);
        doc.text(`${index + 1}`, 27, yPosition + 5);
        
        // Major name
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);
        doc.text(result.major.name, 40, yPosition + 5);
        
        // Careers
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        const careers = result.major.careers.slice(0, 2).join(', ');
        doc.text(careers, 40, yPosition + 11);
        
        // Percentage
        doc.setFontSize(11);
        doc.setTextColor(230, 126, 34);
        doc.text(`${result.percentage}%`, pageWidth - 50, yPosition + 5);
        
        // CF Value
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(result.cfValue.toFixed(4), pageWidth - 25, yPosition + 5);
        
        yPosition += 18;
      });
      
      // Footer
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      yPosition += 10;
      doc.setDrawColor(230, 126, 34);
      doc.setLineWidth(0.5);
      doc.line(20, yPosition, pageWidth - 20, yPosition);
      
      yPosition += 10;
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text('Hasil ini dihasilkan menggunakan metode Certainty Factor.', pageWidth / 2, yPosition, { align: 'center' });
      doc.text('Untuk informasi lebih lanjut, kunjungi jurusanku.id', pageWidth / 2, yPosition + 6, { align: 'center' });
      
      // Save
      doc.save(`JurusanKu_Hasil_${new Date().toISOString().split('T')[0]}.pdf`);
      
      toast({
        title: 'PDF Berhasil Diunduh',
        description: 'Hasil asesmen telah disimpan dalam format PDF.',
      });
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast({
        title: 'Gagal Mengunduh PDF',
        description: 'Terjadi kesalahan saat membuat PDF. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsExporting(false);
    }
  };

  if (results.length === 0 || isLoading) {
    return (
      <>
        <Navbar />
        <PageLoader variant="results" />
      </>
    );
  }

  const topResult = results[0];

  return (
    <>
      <Helmet>
        <title>Hasil Rekomendasi - JurusanKu</title>
        <meta name="description" content="Lihat hasil rekomendasi jurusan kuliah berdasarkan analisis Certainty Factor dari jawaban Anda." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden scroll-smooth" ref={containerRef}>
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4" ref={resultsRef}>
            {/* Header with Animated Gradient & Parallax */}
            <div className="relative text-center mb-12 max-w-2xl mx-auto overflow-hidden rounded-2xl p-8 md:p-12">
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
              
              {/* Floating Stars */}
              <div 
                className="absolute top-8 right-12 hidden md:block"
                style={{ transform: `translateY(${scrollY * 0.12}px)` }}
              >
                <Star className="w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
              </div>
              <div 
                className="absolute bottom-12 left-8 hidden md:block"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              >
                <Sparkles className="w-5 h-5 text-primary/40 animate-float" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-float transition-all duration-500 hover:bg-primary hover:shadow-lg hover:shadow-primary/25 group">
                  <Trophy className="w-10 h-10 text-primary transition-all duration-500 group-hover:text-primary-foreground group-hover:scale-110" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
                  Hasil Rekomendasi Jurusan
                </h1>
                <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Berdasarkan analisis <strong className="text-primary">Certainty Factor</strong>, berikut adalah rekomendasi 
                  jurusan kuliah yang sesuai dengan minat, kemampuan, dan prestasi akademik Anda.
                </p>
              </div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
            </div>

            {/* Top Recommendation Highlight with Enhanced Parallax */}
            <div 
              className="max-w-2xl mx-auto mb-12 relative"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20 animate-scale-in transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse-slow" />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4">
                  <Award className="w-8 h-8 text-primary/20 transition-all duration-500 group-hover:text-primary/40 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Sparkles className="w-6 h-6 text-primary/20 transition-all duration-500 group-hover:text-primary/40 group-hover:rotate-12" />
                </div>
                
                <div className="text-center relative z-10">
                  <p className="text-sm font-medium text-primary mb-3 flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-primary/30" />
                    Rekomendasi Terbaik
                    <span className="w-8 h-px bg-primary/30" />
                  </p>
                  <div className="text-6xl mb-4 animate-float transition-transform duration-500 group-hover:scale-110">{topResult.major.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary">{topResult.major.name}</h2>
                  <div className="flex items-center justify-center gap-4 text-muted-foreground">
                    <span className="text-5xl font-bold text-primary animate-pulse-glow rounded-full px-6 py-3 bg-primary/5 transition-all duration-500 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20">{topResult.percentage}%</span>
                    <span className="text-sm">tingkat kepastian</span>
                  </div>
                </div>
              </div>
            </div>

            {/* All Results with Parallax */}
            <div 
              className="max-w-4xl mx-auto"
              style={{ transform: `translateY(${scrollY * 0.01}px)` }}
            >
              <h3 className="text-xl font-semibold mb-6 animate-fade-in flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                Semua Rekomendasi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <ResultCard key={result.majorId} result={result} rank={index + 1} />
                ))}
              </div>
            </div>

            {/* Action Buttons with Parallax */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-up" 
              style={{ animationDelay: '0.5s', transform: `translateY(${scrollY * 0.005}px)` }}
            >
              <Button 
                variant="outline" 
                onClick={() => navigate('/')} 
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:border-primary/30"
              >
                <ArrowLeft className="w-4 h-4 text-foreground" />
                Kembali ke Beranda
              </Button>
              <Button 
                variant="outline"
                onClick={handleExportPDF}
                disabled={isExporting}
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:border-primary/30"
              >
                {isExporting ? (
                  <Loader2 className="w-4 h-4 animate-spin text-foreground" />
                ) : (
                  <Download className="w-4 h-4 text-foreground" />
                )}
                {isExporting ? 'Membuat PDF...' : 'Unduh PDF'}
              </Button>
              <Button 
                onClick={handleRetake} 
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-primary/25"
              >
                <RotateCcw className="w-4 h-4 text-primary-foreground" />
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
