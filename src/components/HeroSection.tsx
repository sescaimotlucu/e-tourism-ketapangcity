
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
      title: "Keindahan Alam Ketapang",
      subtitle: "Jelajahi pesona gunung dan hutan yang memukau di jantung Kalimantan Barat"
    },
    {
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=80",
      title: "Warisan Budaya Nusantara",
      subtitle: "Temukan kekayaan tradisi dan adat istiadat yang telah dilestarikan turun temurun"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80",
      title: "Wisata Alam Eksotis",
      subtitle: "Rasakan pengalaman tak terlupakan di alam bebas yang masih alami dan asri"
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
          <div className="absolute inset-0 animate-parallax">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-dark/40 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 text-white/20 animate-float">
        <MapPin className="h-16 w-16" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-20 left-10 text-white/10 animate-float">
        <div className="w-20 h-20 border-2 border-current rounded-full" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-5xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-golden-beige to-white bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-golden-beige/90 font-poppins font-light leading-relaxed max-w-4xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-forest via-nature-gradient-middle to-nature-gradient-end hover:from-nature-gradient-start hover:via-green-forest hover:to-nature-gradient-middle text-white px-12 py-4 text-lg font-poppins font-semibold rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-green-forest/30 border-0 group"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Jelajahi Sekarang
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-golden-beige bg-white/10 backdrop-blur-sm text-white hover:bg-golden-beige hover:text-red-dark px-12 py-4 text-lg font-poppins font-semibold rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-golden-beige/30"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-golden-beige mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm md:text-base font-poppins text-white/80">Destinasi Wisata</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-golden-beige mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-sm md:text-base font-poppins text-white/80">Warisan Budaya</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-golden-beige mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-sm md:text-base font-poppins text-white/80">Wisatawan Puas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-golden-beige hover:bg-white/10 backdrop-blur-sm z-20 w-14 h-14 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-golden-beige hover:bg-white/10 backdrop-blur-sm z-20 w-14 h-14 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-golden-beige w-12 shadow-lg shadow-golden-beige/50' 
                : 'bg-white/40 w-8 hover:bg-white/60'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60"></div>
          <div className="text-xs font-poppins">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
