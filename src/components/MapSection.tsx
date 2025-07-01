
import { useState } from 'react';
import { MapPin, Star, Clock, ExternalLink, Camera, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const MapSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const locations = [
    {
      id: 1,
      name: t('pantaiMuaraKendawangan'),
      category: "alam",
      type: "beach",
      description: t('pantaiMuaraKendawanganDesc'),
      coordinates: { lat: -1.8471, lng: 109.9758 },
      address: "Kendawangan, Ketapang, Kalimantan Barat",
      hours: "24 " + t('jam'),
      rating: 4.8,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      icon: "🏖️"
    },
    {
      id: 2,
      name: t('museumKetapang'),
      category: "budaya",
      type: "museum",
      description: t('museumKetapangDesc'),
      coordinates: { lat: -1.8456, lng: 109.9742 },
      address: "Jl. Rahadi Osman No. 1, Ketapang",
      hours: "08:00 - 16:00",
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80",
      icon: "🏛️"
    },
    {
      id: 3,
      name: t('pasarFlamboyan'),
      category: "kuliner",
      type: "market",
      description: t('pasarFlamboyankDesc'),
      coordinates: { lat: -1.8489, lng: 109.9721 },
      address: "Jl. Flamboyan, Ketapang",
      hours: "06:00 - 18:00",
      rating: 4.6,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      icon: "🍜"
    },
    {
      id: 4,
      name: t('tamanNasionalGunungPalung'),
      category: "alam",
      type: "park",
      description: t('tamanNasionalGunungPalungDesc'),
      coordinates: { lat: -1.6500, lng: 110.1000 },
      address: "Sukadana, Ketapang",
      hours: "07:00 - 17:00",
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
      icon: "🌲"
    },
    {
      id: 5,
      name: t('masjidRayaKetapang'),
      category: "budaya",
      type: "mosque",
      description: t('masjidRayaKetapangDesc'),
      coordinates: { lat: -1.8467, lng: 109.9734 },
      address: "Jl. Sultan Abdurrahman, Ketapang",
      hours: "05:00 - 21:00",
      rating: 4.7,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      icon: "🕌"
    },
    {
      id: 6,
      name: t('pulauRandayan'),
      category: "alam",
      type: "island",
      description: t('pulauRandayanDesc'),
      coordinates: { lat: -1.7500, lng: 109.8500 },
      address: "Pulau Randayan, Ketapang",
      hours: "24 " + t('jam'),
      rating: 4.8,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      icon: "🏝️"
    },
    {
      id: 7,
      name: t('sanggarTariJepin'),
      category: "tari",
      type: "cultural",
      description: t('sanggarTariJepinDesc'),
      coordinates: { lat: -1.8445, lng: 109.9715 },
      address: "Jl. Suprapto, Ketapang",
      hours: "09:00 - 17:00",
      rating: 4.4,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&q=80",
      icon: "💃"
    },
    {
      id: 8,
      name: t('rumahMakanSeafood'),
      category: "kuliner",
      type: "restaurant",
      description: t('rumahMakanSeafoodDesc'),
      coordinates: { lat: -1.8478, lng: 109.9698 },
      address: "Jl. Pelabuhan, Ketapang",
      hours: "10:00 - 22:00",
      rating: 4.5,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
      icon: "🦐"
    }
  ];

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'alam', label: t('wisataAlam') },
    { value: 'budaya', label: t('wisataBudaya') },
    { value: 'kuliner', label: t('wisataKuliner') },
    { value: 'tari', label: t('wisataTari') }
  ];

  const filteredLocations = selectedCategory === 'semua' 
    ? locations 
    : locations.filter(location => location.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'alam': return 'from-green-forest/20 to-green-forest/5 border-green-forest/30';
      case 'budaya': return 'from-red-soft/20 to-red-soft/5 border-red-soft/30';
      case 'kuliner': return 'from-golden-beige/20 to-golden-beige/5 border-golden-beige/30';
      case 'tari': return 'from-red-dark/20 to-red-dark/5 border-red-dark/30';
      default: return 'from-gray-200/20 to-gray-200/5 border-gray-300/30';
    }
  };

  const handleOpenGoogleMaps = (location?: any) => {
    if (location) {
      const url = `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`;
      window.open(url, '_blank');
    } else {
      window.open('https://maps.app.goo.gl/ssrFo6sBMzrt4YGz9', '_blank');
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-cream-50 via-green-50 to-golden-beige/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-dark/20 to-golden-beige/20 backdrop-blur-md rounded-full mb-8 animate-float shadow-xl">
            <MapPin className="h-10 w-10 text-red-dark" />
          </div>
          <h2 className="section-title text-6xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            {t('petaLokasi')}
          </h2>
          <div className="divider-x w-16 h-1 bg-golden-beige mx-auto my-6 rounded-full"></div>
          <p className="text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('petaDesc')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-green-forest" />
            <span className="font-poppins font-medium text-green-forest text-lg">
              {t('filterKategori')}:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-full font-poppins transition-all duration-300 hover:scale-105 px-6 py-2 ${
                  selectedCategory === category.value
                    ? 'bg-red-dark hover:bg-red-soft text-white shadow-lg'
                    : 'border-red-soft/30 text-red-soft hover:bg-red-soft/10'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Pinterest-style Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredLocations.map((location, index) => (
            <Card 
              key={location.id} 
              className={`overflow-hidden border-2 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${getCategoryColor(location.category)} backdrop-blur-sm animate-fade-in cursor-pointer group`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleOpenGoogleMaps(location)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-3xl drop-shadow-lg">{location.icon}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-golden-beige fill-current mr-1" />
                    <span className="text-sm font-semibold text-gray-700">{location.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-red-dark mb-3 line-clamp-2 group-hover:text-red-soft transition-colors">
                  {location.name}
                </h3>
                
                <p className="text-green-forest/80 mb-4 text-sm line-clamp-3 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-green-forest/70 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-green-forest flex-shrink-0" />
                    <span className="font-medium">{location.hours}</span>
                  </div>
                  <div className="flex items-center text-green-forest/70 text-sm">
                    <Star className="h-4 w-4 mr-2 text-golden-beige fill-current flex-shrink-0" />
                    <span className="font-medium">{location.reviews} {t('ulasan')}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-red-dark to-red-soft text-white rounded-full px-6 py-2 hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenGoogleMaps(location);
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t('lihatDetail')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Embedded Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-96 overflow-hidden rounded-3xl border-0 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19354788686!2d109.77429842167969!3d-1.8456077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05171c0b8b0b0b%3A0x1234567890abcdef!2sKetapang%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('petaLokasi')}
              ></iframe>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 border-0 shadow-xl rounded-3xl bg-gradient-to-br from-white/90 to-golden-beige/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-forest/20 to-golden-beige/20 rounded-2xl mb-4">
                  <Camera className="h-8 w-8 text-green-forest" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-red-dark mb-4">
                  {t('galeriWisata')}
                </h3>
                <p className="text-green-forest/80 mb-6 leading-relaxed">
                  {t('lihatKoleksiGambar')}
                </p>
                <Button 
                  onClick={() => window.location.href = '/galeri'}
                  className="w-full bg-gradient-to-r from-green-forest to-golden-beige text-white rounded-full px-6 py-3 hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  {t('lihatGaleri')}
                </Button>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-xl rounded-3xl bg-gradient-to-br from-white/90 to-red-soft/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-soft/20 to-golden-beige/20 rounded-2xl mb-4">
                  <MapPin className="h-8 w-8 text-red-soft" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-red-dark mb-4">
                  {t('panduan')}
                </h3>
                <p className="text-green-forest/80 mb-6 leading-relaxed">
                  {t('panduanDesc')}
                </p>
                <Button 
                  onClick={() => handleOpenGoogleMaps()}
                  className="w-full bg-gradient-to-r from-red-dark to-red-soft text-white rounded-full px-6 py-3 hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
