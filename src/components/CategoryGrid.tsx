
import { Mountain, Palette, UtensilsCrossed, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CategoryGrid = () => {
  const categories = [
    {
      icon: Mountain,
      title: "Wisata Alam",
      description: "Jelajahi keindahan alam Ketapang yang memukau",
      count: "25+ Destinasi",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      color: "bg-green-forest"
    },
    {
      icon: Palette,
      title: "Wisata Budaya",
      description: "Temukan warisan budaya dan tradisi lokal",
      count: "15+ Situs",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
      color: "bg-red-soft"
    },
    {
      icon: UtensilsCrossed,
      title: "Wisata Kuliner",
      description: "Nikmati kelezatan masakan khas Ketapang",
      count: "30+ Kuliner",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      color: "bg-golden-beige"
    },
    {
      icon: Music,
      title: "Wisata Tari",
      description: "Saksikan pertunjukan tari tradisional",
      count: "10+ Pertunjukan",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      color: "bg-red-dark"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-in border-0 ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:mt-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <category.icon className="h-12 w-12 text-white animate-float" />
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-red-dark mb-2 group-hover:text-red-soft transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-green-forest/80 text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-golden-beige bg-red-dark px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                  <span className="text-red-soft font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Lihat Semua →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
