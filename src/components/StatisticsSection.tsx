
import { MapPin, Users, Calendar, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from '@/components/AnimatedCounter';

const StatisticsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: MapPin,
      value: 80,
      label: t('destinasiWisata'),
      suffix: "+"
    },
    {
      icon: Users,
      value: 250000,
      label: t('pengunjungPerTahun'),
      suffix: "+"
    },
    {
      icon: Calendar,
      value: 2024,
      label: t('tahunBerdiri'),
      suffix: ""
    },
    {
      icon: Star,
      value: 4.8,
      label: t('ratingKepuasan'),
      suffix: "/5"
    }
  ];


  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-red-dark to-green-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-golden-beige rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-golden-beige rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-golden-beige rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in font-playfair">
            {t('statisticsTitle')}
          </h2>
          <p className="text-lg md:text-xl text-golden-beige max-w-2xl mx-auto animate-fade-in">
            {t('statisticsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const isRating = index === 3;
            
            return (
              <div 
                key={stat.label}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-golden-beige rounded-full mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <stat.icon className="h-8 w-8 lg:h-10 lg:w-10 text-red-dark" />
                </div>
                
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    targetValue={stat.value}
                    isDecimal={isRating}
                    suffix={stat.suffix}
                    className="inline-block"
                  />
                </div>
                
                <p className="text-golden-beige/90 text-sm md:text-base lg:text-lg font-medium px-2">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-golden-beige/80 text-lg mb-6">
            {t('tertarikBerkunjung')}
          </p>
          <button className="btn-ketapang px-8 py-3 text-lg">
            {t('jelajahiSekarang')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
