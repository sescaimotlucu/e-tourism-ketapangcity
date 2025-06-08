
import { Mountain, Palette, UtensilsCrossed, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      icon: Mountain,
      title: "Wisata Alam",
      description: "Jelajahi keindahan alam Ketapang yang memukau dengan panorama eksotis",
      count: "25+ Destinasi",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      color: "bg-green-forest",
      slug: "alam",
      gradient: "from-green-forest/90 to-green-forest/70"
    },
    {
      icon: Palette,
      title: "Wisata Budaya",
      description: "Temukan warisan budaya dan tradisi lokal yang autentik",
      count: "15+ Situs",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
      color: "bg-red-soft",
      slug: "budaya",
      gradient: "from-red-soft/90 to-red-soft/70"
    },
    {
      icon: UtensilsCrossed,
      title: "Wisata Kuliner",
      description: "Nikmati kelezatan masakan khas Ketapang yang menggugah selera",
      count: "30+ Kuliner",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      color: "bg-golden-beige",
      slug: "kuliner",
      gradient: "from-golden-beige/90 to-golden-beige/70"
    },
    {
      icon: Music,
      title: "Wisata Tari",
      description: "Saksikan pertunjukan tari tradisional yang memukau",
      count: "10+ Pertunjukan",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      color: "bg-red-dark",
      slug: "tari",
      gradient: "from-red-dark/90 to-red-dark/70"
    }
  ];

  return (
    <section id="destinasi" className="py-20 bg-gradient-to-br from-golden-beige/20 to-green-forest/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-dark mb-4 animate-fade-in">
            Kategori Wisata
          </h2>
          <p className="text-lg text-green-forest max-w-2xl mx-auto animate-fade-in">
            Temukan beragam destinasi wisata yang menawarkan pengalaman tak terlupakan 
            di Kabupaten Ketapang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={category.title} to={`/kategori/${category.slug}`}>
              <Card 
                className={`group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-in border-0 bg-white ${
                  index % 2 === 0 ? 'lg:mt-8' : 'lg:mt-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-8 w-8 text-white animate-float" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {category.title}
                    </h3>
                    <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <p className="text-green-forest/80 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-soft font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Lihat Semua →
                    </span>
                    <div className="w-8 h-1 bg-gradient-to-r from-red-soft to-golden-beige rounded-full group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
