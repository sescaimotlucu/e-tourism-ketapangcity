
import { useState } from 'react';
import { MapPin, Navigation, Clock, Star, ExternalLink } from 'lucide-react';
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
      description: "Pantai indah dengan pemandangan sunset yang menawan",
      coordinates: { lat: -1.8471, lng: 109.9758 },
      address: "Kendawangan, Ketapang",
      hours: "24 Jam",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80"
    },
    {
      id: 2,
      name: "Museum Ketapang",
      category: "budaya",
      description: "Museum yang menyimpan koleksi sejarah dan budaya Ketapang",
      coordinates: { lat: -1.8456, lng: 109.9742 },
      address: "Jl. Rahadi Osman No. 1, Ketapang",
      hours: "08:00 - 16:00",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80"
    },
    {
      id: 3,
      name: "Pasar Flamboyan",
      category: "kuliner",
      description: "Pusat kuliner tradisional dengan berbagai makanan khas",
      coordinates: { lat: -1.8489, lng: 109.9721 },
      address: "Jl. Flamboyan, Ketapang",
      hours: "06:00 - 18:00",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80"
    },
    {
      id: 4,
      name: "Taman Nasional Gunung Palung",
      category: "alam",
      description: "Taman nasional dengan keanekaragaman hayati yang luar biasa",
      coordinates: { lat: -1.6500, lng: 110.1000 },
      address: "Sukadana, Ketapang",
      hours: "07:00 - 17:00",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'alam': return 'text-green-forest bg-green-forest/20';
      case 'budaya': return 'text-red-soft bg-red-soft/20';
      case 'kuliner': return 'text-golden-beige bg-golden-beige/20';
      default: return 'text-red-dark bg-red-dark/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'alam': return '🌿';
      case 'budaya': return '🏛️';
      case 'kuliner': return '🍜';
      default: return '📍';
    }
  };

  const handleOpenGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/ssrFo6sBMzrt4YGz9', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-dark/5 to-green-forest/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-forest/20 backdrop-blur-md rounded-2xl mb-8 animate-float">
            <MapPin className="h-10 w-10 text-green-forest" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            {t('petaLokasi')}
          </h2>
          <p className="text-lg md:text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('petaDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[500px] overflow-hidden rounded-3xl border-0 shadow-2xl">
              <div className="relative w-full h-full bg-gradient-to-br from-green-forest/20 to-red-soft/20">
                {/* Map Placeholder with Google Maps Integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl">
                  <div className="w-full h-full relative overflow-hidden rounded-3xl">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 400 500">
                        {/* Coastline */}
                        <path d="M50 100 Q150 80 250 120 T350 150 L350 500 L50 500 Z" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
                        {/* Rivers */}
                        <path d="M100 200 Q200 180 300 220 T400 250" fill="none" stroke="#3b82f6" strokeWidth="3"/>
                        <path d="M80 350 Q180 330 280 370 T380 400" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                        {/* Mountains */}
                        <polygon points="150,150 170,100 190,150" fill="#86efac" opacity="0.8"/>
                        <polygon points="200,180 230,120 260,180" fill="#86efac" opacity="0.8"/>
                        <polygon points="120,250 140,200 160,250" fill="#86efac" opacity="0.8"/>
                      </svg>
                    </div>
                    
                    {/* Location Pins */}
                    {locations.map((location, index) => (
                      <div
                        key={location.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${25 + (index * 18)}%`,
                          top: `${35 + (index * 15)}%`,
                        }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className={`w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-lg transform hover:scale-125 transition-transform duration-300 animate-bounce ${getCategoryColor(location.category)}`}
                             style={{ animationDelay: `${index * 0.3}s` }}>
                          {getCategoryIcon(location.category)}
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200">
                          {location.name}
                        </div>
                      </div>
                    ))}
                    
                    {/* Map Controls */}
                    <div className="absolute top-6 right-6 space-y-3">
                      <Button 
                        onClick={handleOpenGoogleMaps}
                        size="sm" 
                        className="bg-white/90 hover:bg-white backdrop-blur-md shadow-lg rounded-xl text-gray-700 border-0"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Google Maps
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-white/90 backdrop-blur-md border-gray-200 hover:bg-white rounded-xl"
                      >
                        <Navigation className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-red-dark mb-6">
              Destinasi Populer
            </h3>
            
            {locations.map((location, index) => (
              <Card 
                key={location.id}
                className={`cursor-pointer transition-all duration-300 rounded-2xl border-2 hover:shadow-xl group animate-fade-in ${
                  selectedLocation?.id === location.id 
                    ? 'border-red-soft shadow-xl bg-red-soft/5 scale-105' 
                    : 'border-transparent hover:border-red-soft/30 hover:scale-102'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedLocation(location)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-playfair font-bold text-red-dark text-sm leading-tight group-hover:text-red-soft transition-colors duration-300">
                          {location.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-golden-beige fill-current" />
                          <span className="text-xs text-gray-600 font-medium">{location.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-green-forest/70 mb-3 line-clamp-2 leading-relaxed">
                        {location.description}
                      </p>
                      
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="h-3 w-3 mr-2 text-red-soft" />
                          {location.address}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-2 text-green-forest" />
                          {location.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="mt-16 animate-fade-in">
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-white via-golden-beige/5 to-green-forest/5">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12">
                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(selectedLocation.category)}`}>
                      {t(`wisata${selectedLocation.category.charAt(0).toUpperCase() + selectedLocation.category.slice(1)}`)}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-playfair font-bold text-red-dark mb-4">
                    {selectedLocation.name}
                  </h3>
                  
                  <p className="text-green-forest/80 mb-8 leading-relaxed text-lg">
                    {selectedLocation.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-green-forest/70">
                      <MapPin className="h-5 w-5 mr-4 text-red-soft" />
                      <span className="font-medium">{selectedLocation.address}</span>
                    </div>
                    <div className="flex items-center text-green-forest/70">
                      <Clock className="h-5 w-5 mr-4 text-green-forest" />
                      <span className="font-medium">{selectedLocation.hours}</span>
                    </div>
                    <div className="flex items-center text-green-forest/70">
                      <Star className="h-5 w-5 mr-4 text-golden-beige fill-current" />
                      <span className="font-medium">{selectedLocation.rating} / 5.0</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleOpenGoogleMaps}
                      className="bg-gradient-to-r from-green-forest to-red-soft text-white rounded-xl px-6 hover:shadow-lg transition-all duration-300"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Petunjuk Arah
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-soft text-red-soft hover:bg-red-soft/10 rounded-xl px-6 hover:shadow-lg transition-all duration-300"
                    >
                      {t('lihatDetail')}
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
