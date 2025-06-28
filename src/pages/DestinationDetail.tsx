
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Camera, Phone, Share2, Heart, Calendar, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const DestinationDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  // Enhanced destination data with multiple destinations
  const destinations = {
    'pantai-muara-kendawangan': {
      name: "Pantai Muara Kendawangan",
      category: t('wisataAlam'),
      description: "Pantai Muara Kendawangan adalah surga tersembunyi di Kabupaten Ketapang dengan hamparan pasir putih yang memukau dan pemandangan sunset yang tak terlupakan. Air lautnya yang jernih dan ombak yang tenang menjadikannya destinasi sempurna untuk relaksasi.",
      longDescription: "Berlokasi strategis di muara Sungai Kendawangan, pantai ini menawarkan pengalaman unik pertemuan air sungai dan laut. Pengunjung dapat menikmati berbagai aktivitas seperti berenang, voli pantai, fotografi, atau sekadar bersantai menikmati keindahan alam. Fasilitas lengkap tersedia termasuk area parkir luas, toilet bersih, warung kuliner lokal, dan pos keamanan 24 jam.",
      location: "Kendawangan, Ketapang",
      duration: "4-6",
      rating: 4.8,
      reviews: 127,
      price: "Gratis",
      bestTime: "Sore hari (16:00-18:00)",
      coordinates: "1°50'50.0\"S 109°58'33.0\"E",
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
        "Area Parkir Luas",
        "Toilet & Kamar Mandi",
        "Warung Kuliner Lokal",
        "Penyewaan Ban & Pelampung",
        "Mushola",
        "Pos Keamanan 24 Jam",
        "WiFi Gratis",
        "Area Bermain Anak"
      ],
      activities: [
        "Berenang & Snorkeling",
        "Fotografi Sunset",
        "Voli Pantai",
        "Memancing",
        "Camping",
        "Kuliner Seafood"
      ],
      tips: [
        "Datang saat sore hari untuk menikmati sunset terbaik",
        "Bawa sunscreen dan topi untuk perlindungan dari sinar matahari",
        "Jangan lupa membawa kamera untuk mengabadikan momen indah",
        "Patuhi aturan pantai dan jaga kebersihan lingkungan",
        "Bawa air minum dan camilan secukupnya",
        "Cek kondisi cuaca sebelum berkunjung"
      ]
    },
    'gunung-palung': {
      name: "Taman Nasional Gunung Palung",
      category: t('wisataAlam'),
      description: "Taman Nasional Gunung Palung adalah surga keanekaragaman hayati dengan hutan tropis yang masih asri dan berbagai spesies langka termasuk orangutan Kalimantan.",
      longDescription: "Dengan luas 90.000 hektar, taman nasional ini menawarkan pengalaman trekking yang menantang melalui berbagai ekosistem dari hutan mangrove hingga pegunungan. Pengunjung dapat melihat langsung orangutan di habitat aslinya, berbagai spesies burung endemik, dan flora unik Kalimantan.",
      location: "Sukadana, Ketapang",
      duration: "6-8",
      rating: 4.9,
      reviews: 89,
      price: "Rp 50.000",
      bestTime: "Pagi hari (06:00-10:00)",
      coordinates: "1°39'00.0\"S 110°06'00.0\"E",
      mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093bd057?w=400&q=80"
      ],
      facilities: [
        "Pusat Informasi",
        "Jalur Trekking",
        "Camp Ground",
        "Guide Lokal",
        "Toilet Umum",
        "Warung Sederhana"
      ],
      activities: [
        "Trekking & Hiking",
        "Wildlife Watching",
        "Bird Watching",
        "Camping",
        "Fotografi Alam",
        "Penelitian Ekologi"
      ],
      tips: [
        "Gunakan guide lokal untuk keamanan dan pengetahuan terbaik",
        "Bawa perlengkapan trekking yang memadai",
        "Jaga jarak aman dengan satwa liar",
        "Bawa obat-obatan pribadi dan P3K",
        "Respect habitat alami dan jangan meninggalkan sampah"
      ]
    }
  };

  const destination = destinations[slug as keyof typeof destinations];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-dark mb-4">{t('notFound')}</h1>
          <Link to="/">
            <Button>{t('kembaliKeBeranda')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: destination.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link telah disalin ke clipboard!');
    }
  };

  const handleContact = () => {
    window.open('https://wa.me/6281234567890?text=Halo, saya tertarik mengunjungi ' + destination.name, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-beige/5 via-green-forest/5 to-red-soft/5">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={destination.mainImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link 
                to={`/kategori/${destination.category === t('wisataAlam') ? 'alam' : 'budaya'}`} 
                className="inline-flex items-center text-white/80 hover:text-golden-beige mb-6 transition-colors duration-300 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('kembaliKe')} {destination.category}
              </Link>
              
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 animate-fade-in leading-tight">
                    {destination.name}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-white/90 mb-4">
                    <div className="flex items-center bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      {destination.location}
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
                      <Clock className="h-4 w-4 mr-2" />
                      {destination.duration} {t('jam')}
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
                      <Star className="h-4 w-4 mr-2 text-golden-beige fill-current" />
                      {destination.rating} ({destination.reviews} {t('ulasan')})
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white backdrop-blur-md hover:bg-white/30 rounded-xl"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white rounded-xl px-8"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
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
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-playfair font-bold text-red-dark mb-6">
                    {t('tentangDestinasi')}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-green-forest/80 text-lg leading-relaxed mb-6">
                      {destination.description}
                    </p>
                    <p className="text-green-forest/70 leading-relaxed">
                      {destination.longDescription}
                    </p>
                  </div>
                </div>

                {/* Activities */}
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-playfair font-bold text-red-dark mb-6">
                    Aktivitas & Kegiatan
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {destination.activities.map((activity, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-golden-beige/10 to-green-forest/10 p-4 rounded-xl border border-golden-beige/20 hover:border-red-soft/30 transition-colors duration-300"
                      >
                        <p className="text-green-forest font-medium text-center">
                          {activity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-playfair font-bold text-red-dark mb-6 flex items-center">
                    <Camera className="h-8 w-8 mr-3 text-red-soft" />
                    {t('galeriFoto')}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {destination.gallery.map((image, index) => (
                      <div 
                        key={index}
                        className="group aspect-square overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
                      >
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white to-golden-beige/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold text-red-dark mb-6">
                      Informasi Penting
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-golden-beige/20">
                        <span className="text-green-forest/70 font-medium">Harga Tiket</span>
                        <span className="font-bold text-red-dark">{destination.price}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-golden-beige/20">
                        <span className="text-green-forest/70 font-medium">Waktu Terbaik</span>
                        <span className="font-medium text-green-forest">{destination.bestTime}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-golden-beige/20">
                        <span className="text-green-forest/70 font-medium">Koordinat</span>
                        <span className="font-mono text-sm text-green-forest">{destination.coordinates}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-green-forest/70 font-medium">Durasi Kunjungan</span>
                        <span className="font-medium text-green-forest">{destination.duration} jam</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Facilities */}
                <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-bold text-red-dark mb-6">{t('fasilitas')}</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {destination.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-green-forest/80 group">
                          <div className="w-2 h-2 bg-gradient-to-r from-golden-beige to-red-soft rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="group-hover:text-red-soft transition-colors duration-300">
                            {facility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tips */}
                <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-green-forest/5 to-red-soft/5">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-bold text-red-dark mb-6">{t('tipsBerkunjung')}</h3>
                    <div className="space-y-4">
                      {destination.tips.map((tip, index) => (
                        <div key={index} className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-golden-beige/20">
                          <p className="text-green-forest/80 text-sm leading-relaxed">
                            <span className="font-bold text-red-soft">#{index + 1}</span> {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-red-soft to-red-dark text-white">
                  <CardContent className="p-8 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-golden-beige" />
                    <h3 className="text-xl font-playfair font-bold mb-3">{t('tertarikBerkunjung')}</h3>
                    <p className="text-white/90 text-sm mb-6 leading-relaxed">
                      Rencanakan kunjungan Anda dan dapatkan pengalaman tak terlupakan di {destination.name}
                    </p>
                    <Button 
                      onClick={handleContact}
                      variant="outline" 
                      size="lg"
                      className="w-full border-white text-white hover:bg-white hover:text-red-dark rounded-xl transition-all duration-300"
                    >
                      <Phone className="h-4 w-4 mr-2" />
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
