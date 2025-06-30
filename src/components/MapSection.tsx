
import { useState } from 'react';
import { MapPin, Navigation, Clock, Star, ExternalLink, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const MapSection = () => {
  const { t } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const locations = [
    {
      id: 1,
      name: "Pantai Muara Kendawangan",
      category: "alam",
      type: "beach",
      description: "Pantai indah dengan pemandangan sunset yang menawan dan ombak tenang untuk bersantai",
      coordinates: { lat: -1.8471, lng: 109.9758 },
      address: "Kendawangan, Ketapang, Kalimantan Barat",
      hours: "24 Jam",
      rating: 4.8,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      icon: "🏖️"
    },
    {
      id: 2,
      name: "Museum Ketapang",
      category: "budaya",
      type: "museum",
      description: "Museum yang menyimpan koleksi sejarah dan budaya Ketapang dengan artefak bersejarah",
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
      name: "Pasar Flamboyan",
      category: "kuliner",
      type: "market",
      description: "Pusat kuliner tradisional dengan berbagai makanan khas dan jajanan lokal",
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
      name: "Taman Nasional Gunung Palung",
      category: "alam",
      type: "park",
      description: "Taman nasional dengan keanekaragaman hayati yang luar biasa dan trek hiking menantang",
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
      name: "Masjid Raya Ketapang",
      category: "budaya",
      type: "mosque",
      description: "Masjid bersejarah dengan arsitektur tradisional yang memukau dan nilai spiritual tinggi",
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
      name: "Pulau Randayan",
      category: "alam",
      type: "island",
      description: "Pulau eksotis dengan pantai pasir putih dan air laut yang jernih untuk snorkeling",
      coordinates: { lat: -1.7500, lng: 109.8500 },
      address: "Pulau Randayan, Ketapang",
      hours: "24 Jam",
      rating: 4.8,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      icon: "🏝️"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'alam': return 'text-green-forest bg-green-forest/20 border-green-forest/30';
      case 'budaya': return 'text-red-soft bg-red-soft/20 border-red-soft/30';
      case 'kuliner': return 'text-golden-beige bg-golden-beige/20 border-golden-beige/30';
      default: return 'text-red-dark bg-red-dark/20 border-red-dark/30';
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

  const handleOpenGallery = () => {
    window.location.href = '/galeri';
  };

  return (
    <section className="py-32 bg-gradient-to-br from-red-dark/5 to-green-forest/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-dark/20 to-golden-beige/20 backdrop-blur-md rounded-3xl mb-8 animate-float shadow-xl">
            <MapPin className="h-10 w-10 text-red-dark" />
          </div>
          <h2 className="section-title text-6xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            Peta Lokasi Wisata
          </h2>
          <div className="divider-x w-16 h-1 bg-golden-beige mx-auto my-6 rounded-full"></div>
          <p className="text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Temukan destinasi wisata terbaik Ketapang dengan peta interaktif dan informasi lengkap
          </p>
        </div>

        {/* Full Width Interactive Map */}
        <div className="mb-16">
          <Card className="h-[600px] overflow-hidden rounded-3xl border-0 shadow-2xl backdrop-blur-sm bg-white/80">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl">
                <div className="w-full h-full relative overflow-hidden rounded-3xl">
                  {/* Enhanced Artistic Map Background */}
                  <div className="absolute inset-0 opacity-50">
                    <svg className="w-full h-full" viewBox="0 0 600 600">
                      <defs>
                        <linearGradient id="coastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ddd6fe" />
                          <stop offset="50%" stopColor="#bfdbfe" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Coastline */}
                      <path d="M80 150 Q220 120 380 180 T520 220 L520 600 L80 600 Z" fill="url(#coastGradient)" stroke="#3b82f6" strokeWidth="2"/>
                      
                      {/* Rivers with animation */}
                      <path d="M150 280 Q300 260 450 300 T580 340" fill="none" stroke="#3b82f6" strokeWidth="4" opacity="0.8" filter="url(#glow)">
                        <animate attributeName="stroke-dasharray" values="0,30;30,0;0,30" dur="4s" repeatCount="indefinite"/>
                      </path>
                      <path d="M120 420 Q270 400 420 440 T550 480" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.6">
                        <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="5s" repeatCount="indefinite"/>
                      </path>
                      
                      {/* Mountains with better shadows */}
                      <polygon points="200,200 230,140 260,200" fill="#86efac" opacity="0.9" filter="drop-shadow(3px 3px 6px rgba(0,0,0,0.2))"/>
                      <polygon points="280,240 320,170 360,240" fill="#86efac" opacity="0.9" filter="drop-shadow(3px 3px 6px rgba(0,0,0,0.2))"/>
                      <polygon points="160,320 190,270 220,320" fill="#86efac" opacity="0.9" filter="drop-shadow(3px 3px 6px rgba(0,0,0,0.2))"/>
                      <polygon points="380,180 410,130 440,180" fill="#86efac" opacity="0.9" filter="drop-shadow(3px 3px 6px rgba(0,0,0,0.2))"/>
                    </svg>
                  </div>
                  
                  {/* Interactive Location Pins */}
                  {locations.map((location, index) => (
                    <div
                      key={location.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                      style={{
                        left: `${25 + (index * 15)}%`,
                        top: `${35 + (index * 8)}%`,
                      }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className={`relative w-14 h-14 rounded-2xl border-3 border-white shadow-2xl flex items-center justify-center text-2xl transform hover:scale-125 transition-all duration-500 animate-bounce backdrop-blur-md ${getCategoryColor(location.category)}`}
                           style={{ animationDelay: `${index * 0.4}s` }}>
                        {location.icon}
                        <div className="absolute inset-0 rounded-2xl bg-current opacity-30 animate-ping"></div>
                      </div>
                      
                      {/* Enhanced Tooltip */}
                      <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-200 z-30 min-w-64">
                        <div className="font-bold text-red-dark text-base mb-2">{location.name}</div>
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-golden-beige fill-current mr-2" />
                          <span className="text-golden-beige font-semibold mr-2">{location.rating}</span>
                          <span className="text-gray-500">({location.reviews} ulasan)</span>
                        </div>
                        <div className="text-gray-600 mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-green-forest" />
                          {location.hours}
                        </div>
                        <div className="text-gray-600 text-xs line-clamp-2">{location.description}</div>
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/95 rotate-45 border-l border-t border-gray-200"></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Map Controls */}
                  <div className="absolute top-6 right-6 space-y-3">
                    <Button 
                      onClick={() => handleOpenGoogleMaps()}
                      size="sm" 
                      className="bg-white/95 hover:bg-white backdrop-blur-md shadow-2xl rounded-2xl text-gray-700 border-0 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Google Maps
                    </Button>
                    <Button 
                      onClick={handleOpenGallery}
                      size="sm" 
                      className="bg-gradient-to-r from-red-dark to-golden-beige text-white backdrop-blur-md border-0 rounded-2xl font-semibold shadow-2xl hover:shadow-red-dark/30 transition-all duration-300 hover:scale-105"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      Lihat Galeri
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="animate-fade-in">
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-white via-golden-beige/5 to-green-forest/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md ${getCategoryColor(selectedLocation.category)}`}>
                      {selectedLocation.icon} {selectedLocation.category.charAt(0).toUpperCase() + selectedLocation.category.slice(1)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-12">
                  <h3 className="text-4xl font-playfair font-bold text-red-dark mb-6">
                    {selectedLocation.name}
                  </h3>
                  
                  <p className="text-green-forest/80 mb-8 leading-relaxed text-lg line-clamp-3">
                    {selectedLocation.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-green-forest/70">
                      <MapPin className="h-5 w-5 mr-4 text-red-soft flex-shrink-0" />
                      <span className="font-medium">{selectedLocation.address}</span>
                    </div>
                    <div className="flex items-center text-green-forest/70">
                      <Clock className="h-5 w-5 mr-4 text-green-forest flex-shrink-0" />
                      <span className="font-medium">{selectedLocation.hours}</span>
                    </div>
                    <div className="flex items-center text-green-forest/70">
                      <Star className="h-5 w-5 mr-4 text-golden-beige fill-current flex-shrink-0" />
                      <span className="font-medium">{selectedLocation.rating} / 5.0 ({selectedLocation.reviews} ulasan)</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => handleOpenGoogleMaps(selectedLocation)}
                      className="btn-primary bg-gradient-to-r from-red-dark to-red-soft text-white rounded-2xl px-8 py-3 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold flex-1"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Petunjuk Arah
                    </Button>
                    <Button 
                      onClick={handleOpenGallery}
                      variant="outline" 
                      className="border-2 border-red-soft text-red-soft hover:bg-red-soft/10 rounded-2xl px-8 py-3 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      Galeri
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
