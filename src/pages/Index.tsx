import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JurusanKu - Temukan Jurusan Kuliah yang Tepat</title>
        <meta name="description" content="JurusanKu adalah Sistem Pendukung Keputusan untuk membantu siswa memilih jurusan kuliah yang tepat menggunakan metode Certainty Factor." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Hero />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
