import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  return (
    <>
      <Helmet>
        <title>FAQ - Pertanyaan Umum - JurusanKu</title>
        <meta name="description" content="Temukan jawaban untuk pertanyaan umum tentang JurusanKu, metode Certainty Factor, dan cara menggunakan sistem rekomendasi jurusan kuliah." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-float">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                Pertanyaan yang Sering Diajukan
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Temukan jawaban untuk pertanyaan umum tentang JurusanKu dan metode Certainty Factor
              </p>
            </div>

            {/* FAQ Categories */}
            <div className="max-w-4xl mx-auto space-y-8">
              {faqData.map((category, categoryIndex) => (
                <Card 
                  key={category.category}
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <CardHeader className="bg-primary/5 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
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
              ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-2xl mx-auto mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Card className="p-8 bg-gradient-to-br from-primary/5 via-card to-accent/5 border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Masih Punya Pertanyaan?</h3>
                <p className="text-muted-foreground mb-6">
                  Jika pertanyaan Anda belum terjawab, langsung coba asesmen kami untuk menemukan jurusan yang cocok!
                </p>
                <Button asChild size="lg" className="gap-2 group">
                  <Link to="/assessment">
                    Mulai Asesmen Sekarang
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
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
