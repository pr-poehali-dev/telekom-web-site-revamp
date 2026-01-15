import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TariffsSection from '@/components/TariffsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import { tariffs, tvPackages, services } from '@/config/dataConfig';

const Index = () => {
  const scrollToTariffs = () => {
    document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <Footer />
    </div>
  );
};

export default Index;
