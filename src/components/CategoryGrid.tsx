
import { Mountain, Palette, UtensilsCrossed, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CategoryGrid = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Mountain,
      titleKey: "wisataAlam",
      descriptionKey: "alamDesc",
      countKey: "destinasiCount",
      count: "25",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      color: "bg-green-forest",
      slug: "alam",
      gradient: "from-green-forest/90 to-green-forest/70"
    },
    {
      icon: Palette,
      titleKey: "wisataBudaya",
      descriptionKey: "budayaDesc",
      countKey: "situsCount",
      count: "15",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
      color: "bg-red-soft",
      slug: "budaya",
      gradient: "from-red-soft/90 to-red-soft/70"
    },
    {
      icon: UtensilsCrossed,
      titleKey: "wisataKuliner",
      descriptionKey: "kulinerDesc",
      countKey: "kulinerCount",
      count: "30",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      color: "bg-golden-beige",
      slug: "kuliner",
      gradient: "from-golden-beige/90 to-golden-beige/70"
    },
    {
      icon: Music,
      titleKey: "wisataTari",
      descriptionKey: "tariDesc",
      countKey: "pertunjukanCount",
      count: "10",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      color: "bg-red-dark",
      slug: "tari",
      gradient: "from-red-dark/90 to-red-dark/70"
    }
  ];

  return (
    <section id="destinasi" className="py-24 bg-gradient-to-br from-golden-beige/10 via-green-forest/5 to-red-soft/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-golden-beige/20 to-green-forest/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-red-soft/20 to-golden-beige/20 rounded-full blur-xl animate-float delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-red-dark mb-6 text-shadow-lg">
              {t('categoriesTitle')}
            </h2>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-lg md:text-xl text-green-forest max-w-3xl mx-auto leading-relaxed font-poppins font-light">
              {t('categoriesSubtitle')}
            </p>
          </div>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center animate-fade-in-up delay-500">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-golden-beige to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={category.slug} to={`/kategori/${category.slug}`}>
              <Card 
                className="group cursor-pointer overflow-hidden card-hover border-0 bg-white rounded-2xl animate-zoom-in h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={category.image}
                    alt={t(category.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Floating icon and content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      <category.icon className="h-10 w-10 text-white animate-float" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-white mb-3 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {t(category.titleKey)}
                    </h3>
                    <span className="text-sm font-poppins font-semibold text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                      {category.count}{t(category.countKey)}
                    </span>
                  </div>

                  {/* Overlay gradient animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-6 bg-white rounded-b-2xl flex-1 flex flex-col">
                  <p className="text-green-forest/80 text-sm leading-relaxed mb-6 font-poppins flex-1">
                    {t(category.descriptionKey)}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-red-soft font-poppins font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                      {t('lihatSemua')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="w-8 h-1 bg-gradient-to-r from-red-soft to-golden-beige rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-fade-in-up delay-700">
          <p className="text-green-forest/70 font-poppins text-lg mb-6">
            Siap memulai petualangan Anda?
          </p>
          <button className="bg-gradient-to-r from-green-forest via-green-forest/90 to-green-forest/80 hover:from-green-forest/90 hover:via-green-forest hover:to-green-forest text-white font-poppins font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Mulai Jelajahi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
