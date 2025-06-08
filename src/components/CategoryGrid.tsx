
import { Mountain, Palette, UtensilsCrossed, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      icon: Mountain,
      title: "Wisata Alam",
      description: "Jelajahi keindahan alam Ketapang yang memukau dengan panorama eksotis dan udara segar pegunungan",
      count: "25+ Destinasi",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      color: "bg-green-forest",
      slug: "alam",
      gradient: "from-green-forest/90 to-green-forest/70"
    },
    {
      icon: Palette,
      title: "Wisata Budaya",
      description: "Temukan warisan budaya dan tradisi lokal yang autentik serta seni tradisional yang telah dilestarikan",
      count: "15+ Situs",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
      color: "bg-red-soft",
      slug: "budaya",
      gradient: "from-red-soft/90 to-red-soft/70"
    },
    {
      icon: UtensilsCrossed,
      title: "Wisata Kuliner",
      description: "Nikmati kelezatan masakan khas Ketapang yang menggugah selera dengan cita rasa autentik Kalimantan",
      count: "30+ Kuliner",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      color: "bg-golden-beige",
      slug: "kuliner",
      gradient: "from-golden-beige/90 to-golden-beige/70"
    },
    {
      icon: Music,
      title: "Wisata Tari",
      description: "Saksikan pertunjukan tari tradisional yang memukau dan music tradisional yang mempesona hati",
      count: "10+ Pertunjukan",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      color: "bg-red-dark",
      slug: "tari",
      gradient: "from-red-dark/90 to-red-dark/70"
    }
  ];

  return (
    <section id="destinasi" className="py-24 bg-gradient-to-br from-golden-beige/20 via-green-forest/10 to-red-soft/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-golden-beige/20 to-green-forest/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-red-soft/20 to-golden-beige/20 rounded-full blur-xl animate-float delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-red-dark mb-6 text-shadow-lg">
              Kategori <span className="text-gradient">Wisata</span>
            </h2>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-xl md:text-2xl text-green-forest max-w-3xl mx-auto leading-relaxed font-poppins font-light">
              Temukan beragam destinasi wisata yang menawarkan pengalaman tak terlupakan 
              di Kabupaten Ketapang yang mempesona
            </p>
          </div>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center animate-fade-in-up delay-500">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-golden-beige to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={category.title} to={`/kategori/${category.slug}`}>
              <Card 
                className={`group cursor-pointer overflow-hidden card-hover border-0 bg-white rounded-2xl animate-zoom-in ${
                  index % 2 === 0 ? 'lg:mt-8' : 'lg:mt-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Floating icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      <category.icon className="h-10 w-10 text-white animate-float" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-3 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {category.title}
                    </h3>
                    <span className="text-sm font-poppins font-semibold text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                      {category.count}
                    </span>
                  </div>

                  {/* Overlay gradient animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-8 bg-white rounded-b-2xl">
                  <p className="text-green-forest/80 text-sm leading-relaxed mb-6 font-poppins">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-red-soft font-poppins font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                      Lihat Semua
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
          <button className="btn-gradient btn-modern text-white font-poppins font-semibold">
            Mulai Jelajahi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
