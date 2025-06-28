
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star } from 'lucide-react';
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
      color: "bg-gradient-to-br from-green-forest to-green-forest/80",
      destinations: [
        {
          id: 1,
          name: "Pantai Muara Kendawangan",
          slug: "pantai-muara-kendawangan",
          description: "Pantai indah dengan pemandangan sunset yang menawan dan hamparan pasir putih bersih",
          image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
          location: "Kendawangan",
          duration: "4-6",
          rating: 4.8,
          price: "Gratis"
        },
        {
          id: 2,
          name: "Taman Nasional Gunung Palung",
          slug: "gunung-palung",
          description: "Taman nasional dengan keanekaragaman hayati yang luar biasa dan habitat orangutan",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
          location: "Sukadana",
          duration: "6-8",
          rating: 4.9,
          price: "Rp 50.000"
        },
        {
          id: 3,
          name: "Air Terjun Riam Pangar",
          slug: "air-terjun-riam-pangar",
          description: "Air terjun tersembunyi di tengah hutan tropis dengan pemandangan yang eksotis",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80",
          location: "Sandai",
          duration: "3-4",
          rating: 4.7,
          price: "Rp 25.000"
        },
        {
          id: 4,
          name: "Pulau Lemukutan",
          slug: "pulau-lemukutan",
          description: "Pulau kecil dengan pantai berpasir putih dan spot snorkeling terbaik",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&q=80",
          location: "Singkawang",
          duration: "8-10",
          rating: 4.6,
          price: "Rp 150.000"
        }
      ]
    },
    budaya: {
      titleKey: "budayaTitle",
      descriptionKey: "budayaDescription",
      color: "bg-gradient-to-br from-red-soft to-red-dark",
      destinations: [
        {
          id: 5,
          name: "Istana Kadriah",
          slug: "istana-kadriah",
          description: "Istana bersejarah Kesultanan Pontianak dengan arsitektur tradisional Melayu",
          image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
          location: "Ketapang Kota",
          duration: "2-3",
          rating: 4.5,
          price: "Rp 15.000"
        },
        {
          id: 6,
          name: "Museum Ketapang",
          slug: "museum-ketapang",
          description: "Koleksi artefak sejarah dan budaya Ketapang dari masa ke masa",
          image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
          location: "Ketapang Kota",
          duration: "1-2",
          rating: 4.3,
          price: "Rp 10.000"
        },
        {
          id: 7,
          name: "Rumah Adat Dayak",
          slug: "rumah-adat-dayak",
          description: "Rumah tradisional suku Dayak dengan arsitektur unik dan nilai sejarah tinggi",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
          location: "Sandai",
          duration: "2-3",
          rating: 4.4,
          price: "Rp 20.000"
        }
      ]
    },
    kuliner: {
      titleKey: "kulinerTitle", 
      descriptionKey: "kulinerDescription",
      color: "bg-gradient-to-br from-golden-beige to-golden-beige/80",
      destinations: [
        {
          id: 8,
          name: "Pasar Flamboyan",
          slug: "pasar-flamboyan",
          description: "Pusat kuliner tradisional dengan berbagai makanan khas dan jajanan lokal",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
          location: "Ketapang Kota",
          duration: "2-3",
          rating: 4.6,
          price: "Rp 5.000 - 50.000"
        },
        {
          id: 9,
          name: "Warung Mie Ketapang",
          slug: "warung-mie-ketapang",
          description: "Mie khas Ketapang dengan kuah gurih dan topping melimpah yang legendaris",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
          location: "Berbagai lokasi",
          duration: "1",
          rating: 4.7,
          price: "Rp 15.000 - 25.000"
        },
        {
          id: 10,
          name: "Seafood Pantai Kendawangan",
          slug: "seafood-pantai-kendawangan",
          description: "Hidangan seafood segar langsung dari laut dengan pemandangan pantai",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
          location: "Kendawangan",
          duration: "2-3",
          rating: 4.8,
          price: "Rp 50.000 - 150.000"
        }
      ]
    },
    tari: {
      titleKey: "tariTitle",
      descriptionKey: "tariDescription", 
      color: "bg-gradient-to-br from-red-dark to-red-soft",
      destinations: [
        {
          id: 11,
          name: "Sanggar Tari Dayak",
          slug: "sanggar-tari-dayak",
          description: "Pertunjukan tari tradisional suku Dayak dengan kostum dan musik autentik",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
          location: "Sandai",
          duration: "2",
          rating: 4.5,
          price: "Rp 30.000"
        },
        {
          id: 12,
          name: "Festival Budaya Ketapang",
          slug: "festival-budaya-ketapang",
          description: "Festival tahunan dengan berbagai pertunjukan tari dan budaya lokal",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
          location: "Ketapang Kota",
          duration: "1",
          rating: 4.9,
          price: "Gratis"
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-golden-beige/20 to-green-forest/10">
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-red-dark mb-4">{t('notFound')}</h1>
          <p className="text-green-forest/80 mb-8">Kategori yang Anda cari tidak ditemukan</p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-red-soft to-red-dark text-white rounded-xl px-8">
              {t('kembaliKeBeranda')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-beige/5 via-green-forest/5 to-red-soft/5">
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className={`py-24 ${currentCategory.color} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-golden-beige mb-8 transition-colors duration-300 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('kembaliKeBeranda')}
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in leading-tight">
                {t(currentCategory.titleKey)}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 animate-fade-in leading-relaxed">
                {t(currentCategory.descriptionKey)}
              </p>
              <div className="mt-8 flex items-center gap-4 text-white/80">
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                  {currentCategory.destinations.length} Destinasi
                </span>
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                  Tersedia dalam 3 Bahasa
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-24 bg-gradient-to-br from-golden-beige/10 to-green-forest/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-red-dark mb-4">
                Eksplorasi {t(currentCategory.titleKey)}
              </h2>
              <p className="text-lg text-green-forest/80 max-w-2xl mx-auto">
                Temukan berbagai destinasi menarik dan pengalaman tak terlupakan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.destinations.map((destination, index) => (
                <Card 
                  key={destination.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in border-0 bg-white/90 backdrop-blur-md rounded-3xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-3 w-3 mr-1 text-golden-beige fill-current" />
                      {destination.rating}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-soft to-red-dark text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {destination.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold text-red-dark mb-3 group-hover:text-red-soft transition-colors duration-300">
                      {destination.name}
                    </h3>
                    
                    <p className="text-green-forest/80 text-sm mb-6 leading-relaxed line-clamp-3">
                      {destination.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-green-forest/60 mb-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-red-soft" />
                        <span className="font-medium">{destination.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-green-forest" />
                        <span className="font-medium">{destination.duration} {t('jam')}</span>
                      </div>
                    </div>
                    
                    <Link to={`/destinasi/${destination.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white transition-all duration-300 rounded-xl py-3 font-semibold hover:shadow-lg">
                        {t('lihatDetail')}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-gradient-to-r from-red-soft/10 via-golden-beige/10 to-green-forest/10 rounded-3xl p-12 backdrop-blur-md border border-red-soft/20">
              <h3 className="text-3xl font-playfair font-bold text-red-dark mb-4">
                Siap Menjelajahi {t(currentCategory.titleKey)}?
              </h3>
              <p className="text-green-forest/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Dapatkan panduan lengkap dan tips terbaik untuk menjelajahi destinasi-destinasi menakjubkan di Ketapang
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/galeri">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-forest to-red-soft hover:from-red-soft hover:to-green-forest text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Lihat Galeri
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-red-soft text-red-soft hover:bg-red-soft/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya tertarik untuk berkunjung ke Ketapang', '_blank')}
                >
                  {t('hubungiSekarang')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
