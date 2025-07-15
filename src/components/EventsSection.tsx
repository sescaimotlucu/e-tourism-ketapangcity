
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, Filter, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EventCalendar } from '@/components/events/EventCalendar';
import { SocialShare } from '@/components/ui/SocialShare';
import { CommentSystem } from '@/components/ui/CommentSystem';
import { useLanguage } from '@/contexts/LanguageContext';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('grid');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
      case 'festival': return 'from-ketapang-traditional/20 to-ketapang-sunset/5 border-ketapang-traditional/30';
      case 'kuliner': return 'from-ketapang-gold/20 to-ketapang-gold/5 border-ketapang-gold/30';
      case 'workshop': return 'from-ketapang-forest/20 to-ketapang-forest/5 border-ketapang-forest/30';
      case 'pameran': return 'from-ketapang-wood/20 to-ketapang-wood/5 border-ketapang-wood/30';
      default: return 'from-ketapang-earth/10 to-ketapang-earth/5 border-ketapang-earth/30';
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
    setSelectedEvent(event);
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-ketapang-gold/5 via-ketapang-sunset/5 to-ketapang-forest/5">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-ketapang-traditional/20 to-ketapang-gold/20 backdrop-blur-md rounded-full mb-8 animate-float shadow-cultural border border-ketapang-gold/30">
            <Calendar className="h-12 w-12 text-ketapang-traditional" />
          </div>
          <h2 className="text-6xl font-cultural font-bold text-ketapang-earth mb-6 leading-tight animate-fade-in bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset bg-clip-text text-transparent">
            {t('eventTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ketapang-gold to-ketapang-sunset mx-auto my-6 rounded-full shadow-cultural"></div>
          <p className="text-xl text-ketapang-wood max-w-3xl mx-auto leading-relaxed animate-fade-in font-traditional">
            {t('eventDesc')}
          </p>
        </div>

        {/* Enhanced Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-ketapang-forest" />
              <span className="font-cultural font-medium text-ketapang-forest text-lg">
                Tampilan:
              </span>
            </div>
            <div className="flex rounded-xl bg-white/50 border border-ketapang-gold/30 p-1">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white shadow-cultural'
                    : 'text-ketapang-wood hover:text-ketapang-traditional'
                }`}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === 'calendar' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('calendar')}
                className={`rounded-lg transition-all duration-300 ${
                  viewMode === 'calendar'
                    ? 'bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white shadow-cultural'
                    : 'text-ketapang-wood hover:text-ketapang-traditional'
                }`}
              >
                Kalender
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-cultural font-medium text-ketapang-forest text-lg">
              Kategori:
            </span>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`rounded-full font-cultural transition-all duration-300 hover:scale-105 px-6 py-2 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white shadow-cultural'
                      : 'border-ketapang-gold/30 text-ketapang-traditional hover:bg-ketapang-gold/10'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Display */}
        {viewMode === 'calendar' ? (
          <EventCalendar 
            events={filteredEvents} 
            onEventClick={handleEventClick}
            className="mb-16"
          />
        ) : (
          /* Events Grid */
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
                    <span className="bg-ketapang-gold/90 backdrop-blur-sm text-ketapang-earth px-3 py-1 rounded-full text-sm font-semibold shadow-cultural">
                      <Tag className="h-3 w-3 inline mr-1" />
                      {t(event.category)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-cultural font-bold text-xl mb-2 drop-shadow-lg">
                      {event.name}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-ketapang-wood mb-6 text-sm line-clamp-3 leading-relaxed font-traditional">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-ketapang-wood text-sm">
                      <Calendar className="h-4 w-4 mr-3 text-ketapang-traditional flex-shrink-0" />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-ketapang-wood text-sm">
                      <Clock className="h-4 w-4 mr-3 text-ketapang-traditional flex-shrink-0" />
                      <span className="font-medium">{event.time} WIB</span>
                    </div>
                    <div className="flex items-center text-ketapang-wood text-sm">
                      <MapPin className="h-4 w-4 mr-3 text-ketapang-traditional flex-shrink-0" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-ketapang-wood text-sm">
                      <Users className="h-4 w-4 mr-3 text-ketapang-traditional flex-shrink-0" />
                      <span className="font-medium">{event.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <p className="text-xs text-ketapang-wood/60 mb-1">{t('tiketMasuk')}</p>
                      <p className="font-bold text-ketapang-traditional text-lg font-cultural">{event.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleViewDetails(event)}
                      className="flex-1 bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white rounded-full px-6 py-3 hover:shadow-cultural transition-all duration-300 hover:scale-105 font-semibold"
                    >
                      {t('lihatDetail')}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-ketapang-gold/30 text-ketapang-traditional hover:bg-ketapang-gold/10 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Share functionality will be handled by the SocialShare component
                      }}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <Calendar className="h-16 w-16 text-ketapang-forest/30 mx-auto mb-4" />
              <p className="text-ketapang-forest/60 text-lg font-traditional">{t('tidakAdaAcara')}</p>
            </div>
          )}
          </div>
        )}

        {/* Event Details Modal/Section */}
        {selectedEvent && (
          <div className="mt-16 space-y-8">
            <div className="bg-gradient-to-br from-white/80 to-ketapang-gold/10 backdrop-blur-sm rounded-3xl p-8 border border-ketapang-gold/20 shadow-cultural">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-cultural font-bold text-ketapang-earth mb-4">
                    {selectedEvent.name}
                  </h3>
                  <p className="text-ketapang-wood leading-relaxed mb-6 font-traditional">
                    {selectedEvent.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-ketapang-wood">
                      <Calendar className="h-5 w-5 mr-3 text-ketapang-traditional" />
                      <span className="font-medium">{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex items-center text-ketapang-wood">
                      <Clock className="h-5 w-5 mr-3 text-ketapang-traditional" />
                      <span className="font-medium">{selectedEvent.time} WIB</span>
                    </div>
                    <div className="flex items-center text-ketapang-wood">
                      <MapPin className="h-5 w-5 mr-3 text-ketapang-traditional" />
                      <span className="font-medium">{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-ketapang-wood">
                      <Users className="h-5 w-5 mr-3 text-ketapang-traditional" />
                      <span className="font-medium">{selectedEvent.capacity}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedEvent(null)}
                    variant="outline"
                    className="border-ketapang-gold/30 text-ketapang-traditional hover:bg-ketapang-gold/10"
                  >
                    Tutup Detail
                  </Button>
                </div>

                <div className="lg:w-1/3">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-cultural"
                  />
                </div>
              </div>
            </div>

            {/* Social Share Component */}
            <SocialShare 
              title={selectedEvent.name}
              description={selectedEvent.description}
              image={selectedEvent.image}
            />

            {/* Comment System */}
            <CommentSystem 
              contentId={selectedEvent.id.toString()}
              contentType="event"
            />
          </div>
        )}
      </div>
    </section>
  );
};
