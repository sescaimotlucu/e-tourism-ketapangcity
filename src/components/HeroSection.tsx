
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
      {/* Background Slides with Parallax Effect */}
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
              className="w-full h-full object-cover scale-110"
            />
          </div>
          {/* Soft dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute top-24 right-12 text-white/15 animate-float">
        <MapPin className="h-20 w-20" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-32 left-12 text-white/10 animate-float">
        <div className="w-24 h-24 border-2 border-current rounded-full" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-6xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold mb-6 leading-tight tracking-wide">
              <span className="text-white drop-shadow-2xl">
                {t(slides[currentSlide].titleKey)}
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-neutral-200 font-poppins font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
              {t(slides[currentSlide].subtitleKey)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('destinasi')}
              className="bg-gradient-to-r from-green-forest/90 via-green-forest to-green-forest/80 hover:from-green-forest hover:via-green-forest/90 hover:to-green-forest/70 text-white px-10 py-6 text-lg font-poppins font-semibold rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-green-forest/30 border-0 group"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              {t('exploreNow')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('galeri')}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white px-10 py-6 text-lg font-poppins font-semibold rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-white/20 group"
            >
              {t('learnMore')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl md:text-5xl font-poppins font-bold text-golden-beige mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm md:text-base font-poppins text-neutral-200 tracking-wide">Tourist Destinations</div>
            </div>
            <div className="text-center group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl md:text-5xl font-poppins font-bold text-golden-beige mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-sm md:text-base font-poppins text-neutral-200 tracking-wide">Cultural Heritage</div>
            </div>
            <div className="text-center group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl md:text-5xl font-poppins font-bold text-golden-beige mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-sm md:text-base font-poppins text-neutral-200 tracking-wide">Happy Visitors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-golden-beige hover:bg-white/20 backdrop-blur-md z-20 w-16 h-16 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110 shadow-xl"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-golden-beige hover:bg-white/20 backdrop-blur-md z-20 w-16 h-16 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110 shadow-xl"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Modern Slide Indicators */}
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
