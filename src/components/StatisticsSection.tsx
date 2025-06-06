
import { useState, useEffect, useRef } from 'react';
import { MapPin, Users, Calendar, Star } from 'lucide-react';

const StatisticsSection = () => {
  const [counts, setCounts] = useState({
    destinations: 0,
    visitors: 0,
    years: 0,
    rating: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: MapPin,
      value: 80,
      label: "Destinasi Wisata",
      suffix: "+"
    },
    {
      icon: Users,
      value: 250000,
      label: "Pengunjung per Tahun",
      suffix: "+"
    },
    {
      icon: Calendar,
      value: 2024,
      label: "Tahun Berdiri",
      suffix: ""
    },
    {
      icon: Star,
      value: 4.8,
      label: "Rating Kepuasan",
      suffix: "/5"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          stats.forEach((stat, index) => {
            const duration = 2000;
            const increment = stat.value / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              
              setCounts(prev => ({
                ...prev,
                [index === 0 ? 'destinations' : 
                 index === 1 ? 'visitors' : 
                 index === 2 ? 'years' : 'rating']: current
              }));
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatNumber = (num: number, isRating: boolean = false) => {
    if (isRating) return num.toFixed(1);
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return Math.floor(num).toString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-red-dark to-green-forest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Ketapang dalam Angka
          </h2>
          <p className="text-xl text-golden-beige max-w-2xl mx-auto animate-fade-in">
            Prestasi dan pencapaian yang membanggakan dalam pengembangan pariwisata daerah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const countValues = [counts.destinations, counts.visitors, counts.years, counts.rating];
            const isRating = index === 3;
            
            return (
              <div 
                key={stat.label}
                className="text-center group animate-bounce-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-golden-beige rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <stat.icon className="h-10 w-10 text-red-dark" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {formatNumber(countValues[index], isRating)}
                  <span className="text-golden-beige">{stat.suffix}</span>
                </div>
                
                <p className="text-golden-beige/90 text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
