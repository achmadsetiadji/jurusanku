import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight, Brain, Calculator, Target, Shield } from 'lucide-react';

const faqData = [
  {
    category: 'Umum',
    icon: HelpCircle,
    iconAnimation: 'group-hover:rotate-12 group-hover:scale-110',
    questions: [
      {
        question: 'Apa itu JurusanKu?',
        answer: 'JurusanKu adalah Sistem Pendukung Keputusan (SPK) berbasis web yang membantu siswa SMA/SMK memilih jurusan kuliah yang tepat. Sistem ini menggunakan metode Certainty Factor untuk menganalisis minat, kemampuan, dan prestasi akademik pengguna.',
      },
      {
        question: 'Apakah JurusanKu gratis digunakan?',
        answer: 'Ya, JurusanKu sepenuhnya gratis! Anda dapat melakukan asesmen sebanyak yang Anda mau tanpa biaya apapun.',
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan asesmen?',
        answer: 'Asesmen terdiri dari 63 pertanyaan yang dibagi dalam 3 kategori (Minat, Kemampuan, dan Akademik). Biasanya membutuhkan waktu sekitar 15-20 menit untuk diselesaikan. Jawablah dengan jujur untuk hasil yang lebih akurat.',
      },
      {
        question: 'Apakah data saya aman?',
        answer: 'Data Anda tidak disimpan di server kami. Semua proses perhitungan dilakukan di browser Anda dan hasil hanya disimpan sementara di session browser. Setelah Anda menutup browser, data akan hilang.',
      },
    ],
  },
  {
    category: 'Metode Certainty Factor',
    icon: Brain,
    iconAnimation: 'group-hover:animate-pulse',
    questions: [
      {
        question: 'Apa itu metode Certainty Factor (CF)?',
        answer: 'Certainty Factor adalah metode yang dikembangkan oleh Shortliffe dan Buchanan pada tahun 1975 untuk menangani ketidakpastian dalam sistem pakar. Metode ini menggunakan nilai kepercayaan (belief) dan ketidakpercayaan (disbelief) untuk mengukur tingkat kepastian suatu hipotesis atau rekomendasi.',
      },
      {
        question: 'Bagaimana cara kerja Certainty Factor dalam JurusanKu?',
        answer: 'Setiap pertanyaan memiliki nilai CF yang telah ditentukan oleh pakar untuk masing-masing jurusan. Ketika Anda menjawab, sistem mengalikan jawaban Anda dengan nilai CF aturan, kemudian menggabungkan semua nilai menggunakan rumus kombinasi CF untuk menghasilkan rekomendasi final.',
      },
      {
        question: 'Apa arti persentase pada hasil rekomendasi?',
        answer: 'Persentase menunjukkan tingkat kepastian (confidence level) sistem bahwa jurusan tersebut cocok untuk Anda. Semakin tinggi persentasenya, semakin yakin sistem bahwa jurusan tersebut sesuai dengan profil Anda berdasarkan jawaban yang diberikan.',
      },
      {
        question: 'Apakah hasil CF bisa negatif?',
        answer: 'Secara teori, nilai CF berkisar dari -1 hingga 1, di mana nilai negatif menunjukkan ketidakcocokan. Namun dalam JurusanKu, kami hanya menampilkan jurusan dengan nilai positif dan mengkonversinya ke persentase (0-100%).',
      },
    ],
  },
  {
    category: 'Hasil & Rekomendasi',
    icon: Target,
    iconAnimation: 'group-hover:scale-125 group-hover:rotate-12',
    questions: [
      {
        question: 'Apakah hasil rekomendasi 100% akurat?',
        answer: 'Hasil rekomendasi adalah panduan berdasarkan analisis jawaban Anda. Meskipun metode CF memberikan hasil yang cukup akurat, keputusan akhir tetap di tangan Anda. Pertimbangkan juga faktor lain seperti biaya kuliah, lokasi, prospek kerja, dan konsultasi dengan guru BK atau orang tua.',
      },
      {
        question: 'Mengapa jurusan tertentu tidak muncul di hasil?',
        answer: 'Jurusan yang tidak muncul berarti memiliki nilai CF yang sangat rendah atau nol berdasarkan jawaban Anda. Ini menunjukkan bahwa berdasarkan profil Anda, jurusan tersebut kurang sesuai dibandingkan yang ditampilkan.',
      },
      {
        question: 'Bisakah saya mengulang asesmen?',
        answer: 'Tentu! Anda dapat mengulang asesmen kapan saja dengan menekan tombol "Ulangi Asesmen" di halaman hasil. Jawablah dengan lebih jujur dan teliti untuk mendapatkan hasil yang lebih akurat.',
      },
      {
        question: 'Bagaimana cara menyimpan hasil asesmen?',
        answer: 'Anda dapat mengunduh hasil asesmen dalam format PDF dengan menekan tombol "Unduh PDF" di halaman hasil. File PDF berisi semua rekomendasi jurusan beserta persentase kepastiannya.',
      },
    ],
  },
  {
    category: 'Teknis',
    icon: Calculator,
    iconAnimation: 'group-hover:rotate-180',
    questions: [
      {
        question: 'Browser apa saja yang didukung?',
        answer: 'JurusanKu mendukung semua browser modern seperti Google Chrome, Mozilla Firefox, Safari, dan Microsoft Edge versi terbaru. Pastikan JavaScript diaktifkan di browser Anda.',
      },
      {
        question: 'Apakah bisa diakses dari smartphone?',
        answer: 'Ya, JurusanKu sepenuhnya responsif dan dapat diakses dengan nyaman dari smartphone, tablet, maupun komputer desktop.',
      },
      {
        question: 'Mengapa halaman loading lama?',
        answer: 'Jika halaman loading lama, periksa koneksi internet Anda. Coba refresh halaman atau bersihkan cache browser. Jika masalah berlanjut, coba gunakan browser lain.',
      },
    ],
  },
];

const FAQ = () => {
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
        <PageLoader variant="faq" />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>FAQ - Pertanyaan Umum - JurusanKu</title>
        <meta name="description" content="Temukan jawaban untuk pertanyaan umum tentang JurusanKu, metode Certainty Factor, dan cara menggunakan sistem rekomendasi jurusan kuliah." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden scroll-smooth" ref={containerRef}>
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
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-float transition-all duration-500 hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                  <HelpCircle className="w-8 h-8 text-primary transition-all duration-500 hover:text-primary-foreground" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
                  Pertanyaan yang Sering Diajukan
                </h1>
                <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Temukan jawaban untuk pertanyaan umum tentang JurusanKu dan metode Certainty Factor
                </p>
              </div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
            </div>

            {/* FAQ Categories */}
            <div className="max-w-4xl mx-auto space-y-8">
              {faqData.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                <Card 
                  key={category.category}
                  className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${categoryIndex * 0.1}s`,
                    transform: `translateY(${scrollY * (0.01 - categoryIndex * 0.002)}px)` 
                  }}
                >
                  <CardHeader className="bg-primary/5 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                        <CategoryIcon className={`w-6 h-6 text-primary transition-all duration-500 group-hover:text-primary-foreground ${category.iconAnimation}`} />
                      </div>
                      <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${category.category}-${index}`}>
                          <AccordionTrigger className="text-left hover:text-primary transition-colors">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
                );
              })}
            </div>

            {/* CTA Section with Parallax */}
            <div 
              className="max-w-2xl mx-auto mt-16 text-center animate-fade-in-up" 
              style={{ 
                animationDelay: '0.5s',
                transform: `translateY(${scrollY * 0.005}px)` 
              }}
            >
              <Card className="group relative overflow-hidden p-8 border-primary/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-accent/5 animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse-slow" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-primary">Masih Punya Pertanyaan?</h3>
                  <p className="text-muted-foreground mb-6">
                    Jika pertanyaan Anda belum terjawab, langsung coba asesmen kami untuk menemukan jurusan yang cocok!
                  </p>
                  <Button asChild size="lg" className="gap-2 group/btn transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                    <Link to="/assessment">
                      Mulai Asesmen Sekarang
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-primary-foreground" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
