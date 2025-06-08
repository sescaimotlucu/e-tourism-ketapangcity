
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Camera } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const DestinationDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  // Mock data - in real app this would come from API
  const destination = {
    name: "Pantai Muara Kendawangan",
    category: t('wisataAlam'),
    description: "Pantai Muara Kendawangan adalah salah satu destinasi wisata pantai terpopuler di Kabupaten Ketapang. Pantai ini menawarkan pemandangan sunset yang menawan dengan hamparan pasir putih yang luas. Air lautnya yang jernih dan ombak yang tenang membuat pantai ini cocok untuk berenang dan bersantai bersama keluarga.",
    longDescription: "Berlokasi di muara Sungai Kendawangan, pantai ini memiliki keunikan tersendiri karena pertemuan antara air sungai dan air laut. Pengunjung dapat menikmati berbagai aktivitas seperti berenang, bermain voli pantai, atau sekadar bersantai menikmati pemandangan. Fasilitas yang tersedia meliputi warung makan, toilet, dan area parkir yang luas.",
    location: "Kendawangan, Ketapang",
    duration: "4-6",
    rating: 4.8,
    reviews: 127,
    mainImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80"
    ],
    facilities: [
      "Area Parkir",
      "Toilet Umum",
      "Warung Makan",
      "Penyewaan Ban",
      "Mushola",
      "Pos Keamanan"
    ],
    tips: [
      "Datang saat sore hari untuk menikmati sunset terbaik",
      "Bawa sunscreen dan topi untuk perlindungan dari sinar matahari",
      "Jangan lupa membawa kamera untuk mengabadikan momen",
      "Patuhi aturan pantai dan jaga kebersihan lingkungan"
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={destination.mainImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Link to="/kategori/alam" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('kembaliKe')} {destination.category}
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
                {destination.name}
              </h1>
              
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {destination.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {destination.duration} {t('jam')}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-golden-beige" />
                  {destination.rating} ({destination.reviews} {t('ulasan')})
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-red-dark mb-6">{t('tentangDestinasi')}</h2>
                  <p className="text-green-forest/80 text-lg leading-relaxed mb-4">
                    {destination.description}
                  </p>
                  <p className="text-green-forest/80 leading-relaxed">
                    {destination.longDescription}
                  </p>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-3xl font-bold text-red-dark mb-6 flex items-center">
                    <Camera className="h-8 w-8 mr-3" />
                    {t('galeriFoto')}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {destination.gallery.map((image, index) => (
                      <div 
                        key={index}
                        className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Facilities */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-dark mb-4">{t('fasilitas')}</h3>
                    <ul className="space-y-2">
                      {destination.facilities.map((facility, index) => (
                        <li key={index} className="flex items-center text-green-forest/80">
                          <div className="w-2 h-2 bg-golden-beige rounded-full mr-3"></div>
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Tips */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-dark mb-4">{t('tipsBerkunjung')}</h3>
                    <ul className="space-y-3">
                      {destination.tips.map((tip, index) => (
                        <li key={index} className="text-green-forest/80 text-sm">
                          <span className="font-semibold text-red-soft">#{index + 1}</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-red-soft to-red-dark text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-2">{t('tertarikBerkunjung')}</h3>
                    <p className="text-white/90 text-sm mb-4">
                      {t('hubungiInfo')}
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-dark">
                      {t('hubungiSekarang')}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;
