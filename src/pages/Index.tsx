import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import { Helmet } from 'react-helmet-async';

// Create a context to share scroll position
export const ScrollContext = { scrollY: 0 };

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      ScrollContext.scrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
        <title>JurusanKu - Temukan Jurusan Kuliah yang Tepat</title>
        <meta name="description" content="JurusanKu adalah Sistem Pendukung Keputusan untuk membantu siswa memilih jurusan kuliah yang tepat menggunakan metode Certainty Factor." />
      </Helmet>
      <div className="min-h-screen flex flex-col overflow-x-hidden scroll-smooth" ref={containerRef}>
        <Navbar />
        <main className="flex-1 pt-16">
          <Hero scrollY={scrollY} />
          <Testimonials scrollY={scrollY} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
