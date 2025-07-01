
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const events = [
    {
      id: 1,
      name: t('festivalBudayaKetapang'),
      description: t('festivalBudayaDesc'),
      date: '2024-08-15',
      time: '09:00',
      location: t('alunAlunKetapang'),
      category: 'festival',
      price: t('rp25000'),
      capacity: t('5000Orang'),
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80'
    },
    {
      id: 2,
      name: t('pameranKulinerNusantara'),
      description: t('pameranKulinerDesc'),
      date: '2024-07-20',
      time: '10:00',
      location: t('pasarFlamboyan'),
      category: 'kuliner',
      price: t('rp15000'),
      capacity: t('1000Orang'),
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80'
    },
    {
      id: 3,
      name: t('workshopTariJepin'),
      description: t('workshopTariJepinDesc'),
      date: '2024-07-25',
      time: '14:00',
      location: t('gedungKesenianKetapang'),
      category: 'workshop',
      price: t('rp50000'),
      capacity: t('50Orang'),
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&q=80'
    },
    {
      id: 4,
      name: t('pameranFotografiAlam'),
      description: t('pameranFotografiDesc'),
      date: '2024-08-05',
      time: '08:00',
      location: t('museumKetapang'),
      category: 'pameran',
      price: t('gratis'),
      capacity: t('200Orang'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80'
    },
    {
      id: 5,
      name: t('konserMusikTradisionalDayak'),
      description: t('konserMusikDayakDesc'),
      date: '2024-08-12',
      time: '18:00',
      location: t('pantaiMuaraKendawangan'),
      category: 'festival',
      price: t('rp35000'),
      capacity: t('300Orang'),
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80'
    },
    {
      id: 6,
      name: t('festivalSeafoodKetapang'),
      description: t('festivalSeafoodDesc'),
      date: '2024-08-18',
      time: '11:00',
      location: t('pelabuhanKetapang'),
      category: 'kuliner',
      price: t('rp75000'),
      capacity: t('800Orang'),
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80'
    }
  ];

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'festival', label: t('festival') },
    { value: 'kuliner', label: t('kuliner') },
    { value: 'workshop', label: t('workshop') },
    { value: 'pameran', label: t('pameran') }
  ];

  const filteredEvents = selectedCategory === 'semua' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'festival': return 'from-red-soft/20 to-red-soft/5 border-red-soft/30';
      case 'kuliner': return 'from-golden-beige/20 to-golden-beige/5 border-golden-beige/30';
      case 'workshop': return 'from-green-forest/20 to-green-forest/5 border-green-forest/30';
      case 'pameran': return 'from-red-dark/20 to-red-dark/5 border-red-dark/30';
      default: return 'from-gray-200/20 to-gray-200/5 border-gray-300/30';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleViewDetails = (event: any) => {
    console.log('Viewing details for:', event.name);
    // Here you can implement navigation to event detail page
  };

  return (
    <section className="py-32 bg-gradient-to-br from-cream-50 via-red-50 to-golden-beige/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-dark/20 to-golden-beige/20 backdrop-blur-md rounded-full mb-8 animate-float shadow-xl">
            <Calendar className="h-10 w-10 text-red-dark" />
          </div>
          <h2 className="section-title text-6xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            {t('eventTitle')}
          </h2>
          <div className="divider-x w-16 h-1 bg-golden-beige mx-auto my-6 rounded-full"></div>
          <p className="text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('eventDesc')}
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className={`overflow-hidden border-2 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${getCategoryColor(event.category)} backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-green-forest px-3 py-1 rounded-full text-sm font-semibold">
                      <Tag className="h-3 w-3 inline mr-1" />
                      {t(event.category)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair font-bold text-xl mb-2 drop-shadow-lg">
                      {event.name}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-green-forest/80 mb-6 text-sm line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-green-forest/70 text-sm">
                      <Calendar className="h-4 w-4 mr-3 text-red-soft flex-shrink-0" />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-green-forest/70 text-sm">
                      <Clock className="h-4 w-4 mr-3 text-red-soft flex-shrink-0" />
                      <span className="font-medium">{event.time} WIB</span>
                    </div>
                    <div className="flex items-center text-green-forest/70 text-sm">
                      <MapPin className="h-4 w-4 mr-3 text-red-soft flex-shrink-0" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-green-forest/70 text-sm">
                      <Users className="h-4 w-4 mr-3 text-red-soft flex-shrink-0" />
                      <span className="font-medium">{event.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <p className="text-xs text-green-forest/60 mb-1">{t('tiketMasuk')}</p>
                      <p className="font-bold text-red-dark text-lg">{event.price}</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleViewDetails(event)}
                    className="w-full bg-gradient-to-r from-red-dark to-red-soft text-white rounded-full px-6 py-3 hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    {t('lihatDetail')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <Calendar className="h-16 w-16 text-green-forest/30 mx-auto mb-4" />
              <p className="text-green-forest/60 text-lg">{t('tidakAdaAcara')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
