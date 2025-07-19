
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import StatisticsSection from '@/components/StatisticsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import { EventsSection } from '@/components/EventsSection';
import { MapSection } from '@/components/MapSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-beige/5 via-green-forest/5 to-red-soft/5">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="kategoriWisata">
          <CategoryGrid />
        </section>
        <StatisticsSection />
        <TestimonialsSection />
        <section id="acara">
          <EventsSection />
        </section>
        <GallerySection />
        <NewsSection />
        <section id="peta">
          <MapSection />
        </section>
        <section id="kontak">
          <EnhancedContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
