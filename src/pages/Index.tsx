import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TariffsSection from '@/components/TariffsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import CoverageSection from '@/components/CoverageSection';
import Footer from '@/components/Footer';
import { tariffs, tvPackages, services } from '@/config/dataConfig';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTariffs = () => {
    document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Параллакс фоновые элементы */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navigation onConnectClick={scrollToTariffs} />

        <HeroSection onConnectClick={scrollToTariffs} />

        <TariffsSection
          tariffs={tariffs}
          tvPackages={tvPackages}
        />

        <ServicesSection services={services} />

        <section id="contacts" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        <CoverageSection />

        <Footer />
      </div>
    </div>
  );
};

export default Index;