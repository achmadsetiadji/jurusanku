import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SPK Pemilihan Jurusan Kuliah - Certainty Factor</title>
        <meta name="description" content="Sistem Pendukung Keputusan untuk membantu siswa memilih jurusan kuliah yang tepat menggunakan metode Certainty Factor. Analisis minat, kemampuan, dan akademik." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
