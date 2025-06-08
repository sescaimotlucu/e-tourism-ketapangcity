
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { t } = useLanguage();
  
  const categoryData = {
    alam: {
      titleKey: "alamTitle",
      descriptionKey: "alamDescription",
      color: "bg-green-forest",
      destinations: [
        {
          id: 1,
          name: "Pantai Muara Kendawangan",
          slug: "pantai-muara-kendawangan",
          description: "Pantai indah dengan pemandangan sunset yang menawan",
          image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
          location: "Kendawangan",
          duration: "4-6"
        },
        {
          id: 2,
          name: "Gunung Palung",
          slug: "gunung-palung",
          description: "Taman nasional dengan keanekaragaman hayati yang luar biasa",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
          location: "Sukadana",
          duration: "2-3"
        },
        {
          id: 3,
          name: "Air Terjun Riam Pangar",
          slug: "air-terjun-riam-pangar",
          description: "Air terjun tersembunyi di tengah hutan tropis",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80",
          location: "Sandai",
          duration: "3-4"
        }
      ]
    },
    budaya: {
      titleKey: "budayaTitle",
      descriptionKey: "budayaDescription",
      color: "bg-red-soft",
      destinations: [
        {
          id: 4,
          name: "Istana Kadriah",
          slug: "istana-kadriah",
          description: "Istana bersejarah Kesultanan Pontianak",
          image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
          location: "Ketapang Kota",
          duration: "2-3"
        },
        {
          id: 5,
          name: "Museum Ketapang",
          slug: "museum-ketapang",
          description: "Koleksi artefak sejarah dan budaya Ketapang",
          image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
          location: "Ketapang Kota",
          duration: "1-2"
        }
      ]
    },
    kuliner: {
      titleKey: "kulinerTitle", 
      descriptionKey: "kulinerDescription",
      color: "bg-golden-beige",
      destinations: [
        {
          id: 6,
          name: "Pasar Flamboyan",
          slug: "pasar-flamboyan",
          description: "Pusat kuliner tradisional dengan berbagai makanan khas",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
          location: "Ketapang Kota",
          duration: "2-3"
        },
        {
          id: 7,
          name: "Warung Mie Ketapang",
          slug: "warung-mie-ketapang",
          description: "Mie khas Ketapang dengan kuah gurih dan topping melimpah",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
          location: "Berbagai lokasi",
          duration: "1"
        }
      ]
    },
    tari: {
      titleKey: "tariTitle",
      descriptionKey: "tariDescription", 
      color: "bg-red-dark",
      destinations: [
        {
          id: 8,
          name: "Sanggar Tari Dayak",
          slug: "sanggar-tari-dayak",
          description: "Pertunjukan tari tradisional suku Dayak",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
          location: "Sandai",
          duration: "2"
        },
        {
          id: 9,
          name: "Festival Budaya Ketapang",
          slug: "festival-budaya-ketapang",
          description: "Festival tahunan dengan berbagai pertunjukan tari",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
          location: "Ketapang Kota",
          duration: "1"
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-dark">{t('notFound')}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className={`py-20 ${currentCategory.color} text-white`}>
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('kembaliKeBeranda')}
            </Link>
            
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {t(currentCategory.titleKey)}
              </h1>
              <p className="text-xl text-white/90 animate-fade-in">
                {t(currentCategory.descriptionKey)}
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 bg-gradient-to-br from-golden-beige/20 to-green-forest/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.destinations.map((destination, index) => (
                <Card 
                  key={destination.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-in border-0 h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6 bg-white flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-red-dark mb-2 group-hover:text-red-soft transition-colors duration-300">
                        {destination.name}
                      </h3>
                      <p className="text-green-forest/80 text-sm mb-4">
                        {destination.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-green-forest/60 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {destination.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {destination.duration} {t('jam')}
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/destinasi/${destination.slug}`} className="mt-auto">
                      <Button className="w-full bg-red-soft hover:bg-red-dark text-white transition-colors duration-300">
                        {t('lihatDetail')}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
