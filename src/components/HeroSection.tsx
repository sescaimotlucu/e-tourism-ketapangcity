
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
      titleKey: "heroTitle1",
      subtitleKey: "heroSubtitle1"
    },
    {
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=80",
      titleKey: "heroTitle2",
      subtitleKey: "heroSubtitle2"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80",
      titleKey: "heroTitle3",
      subtitleKey: "heroSubtitle3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides with lighter overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={t(slide.titleKey)}
              className="w-full h-full object-cover scale-110 brightness-[0.55]"
              loading="lazy"
            />
          </div>
          {/* Lighter gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute top-32 right-12 text-white/15 animate-float">
        <MapPin className="h-20 w-20" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-32 left-12 text-white/10 animate-float">
        <div className="w-24 h-24 border-2 border-current rounded-full" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight tracking-wide drop-shadow-2xl">
              <span className="text-white animate-text-glow">
                Seni & Budaya Tradisional
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animate-parallax" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 font-poppins font-light leading-relaxed max-w-4xl mx-auto tracking-wide drop-shadow-lg">
              Saksikan pertunjukan seni tradisional yang memukau dan rasakan kekayaan budaya Ketapang
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up mb-16" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('kategoriWisata')}
              className="bg-red-dark hover:bg-red-soft text-white px-12 py-6 text-xl font-poppins font-semibold rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-red-dark/40 border-0 group backdrop-blur-sm animate-pulse-glow"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Jelajahi Sekarang
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('acara')}
              className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-red-dark hover:border-white transition-all duration-500 transform hover:scale-105 px-12 py-6 text-xl font-poppins font-semibold rounded-2xl shadow-2xl group overflow-hidden relative"
            >
              <span className="relative z-10">Pelajari Lebih Lanjut</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>

          {/* Consistent Stats Grid - added group class directly to each card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '0.9s' }}>
            <div className="stat-card group h-40 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-red-dark mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">50+</div>
              <div className="text-base font-poppins text-white/90 tracking-wide font-medium">Destinasi Wisata</div>
            </div>
            <div className="stat-card group h-40 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-golden-beige mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">15+</div>
              <div className="text-base font-poppins text-white/90 tracking-wide font-medium">Warisan Budaya</div>
            </div>
            <div className="stat-card group h-40 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-green-forest mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">1000+</div>
              <div className="text-base font-poppins text-white/90 tracking-wide font-medium">Pengunjung Puas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with slide-in animation */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-golden-beige hover:bg-white/20 backdrop-blur-md z-20 w-16 h-16 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110 shadow-xl group hover:-translate-x-2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8 group-hover:animate-wiggle" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-golden-beige hover:bg-white/20 backdrop-blur-md z-20 w-16 h-16 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110 shadow-xl group hover:translate-x-2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8 group-hover:animate-wiggle" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-500 backdrop-blur-sm border border-white/30 ${
              index === currentSlide 
                ? 'bg-golden-beige w-12 shadow-lg shadow-golden-beige/50' 
                : 'bg-white/30 w-8 hover:bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/60"></div>
          <div className="text-xs font-poppins tracking-wider">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
