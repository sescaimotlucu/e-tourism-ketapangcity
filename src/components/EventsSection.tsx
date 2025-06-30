
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('semua');

  const events = [
    {
      id: 1,
      titleKey: "festivalBudayaKetapang",
      date: "2024-08-15",
      time: "19:00",
      locationKey: "alunAlunKetapang",
      category: "festival",
      descriptionKey: "festivalBudayaDesc",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPriceKey: "gratis",
      capacityKey: "5000Orang",
      organizer: "Dinas Pariwisata Ketapang",
      slug: "festival-budaya-ketapang-2024"
    },
    {
      id: 2,
      titleKey: "pameranKulinerNusantara",
      date: "2024-07-20",
      time: "10:00",
      locationKey: "pasarFlamboyan",
      category: "kuliner",
      descriptionKey: "pameranKulinerDesc",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      ticketPriceKey: "rp25000",
      capacityKey: "1000Orang",
      organizer: "UMKM Ketapang",
      slug: "pameran-kuliner-nusantara"
    },
    {
      id: 3,
      titleKey: "workshopTariJepin",
      date: "2024-07-25",
      time: "14:00",
      locationKey: "gedungKesenianKetapang",
      category: "workshop",
      descriptionKey: "workshopTariJepinDesc",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPriceKey: "rp50000",
      capacityKey: "50Orang",
      organizer: "Sanggar Seni Ketapang",
      slug: "workshop-tari-jepin"
    },
    {
      id: 4,
      titleKey: "pameranFotografiAlam",
      date: "2024-08-01",
      time: "09:00",
      locationKey: "museumKetapang",
      category: "pameran",
      descriptionKey: "pameranFotografiDesc",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      ticketPriceKey: "rp15000",
      capacityKey: "200Orang",
      organizer: "Komunitas Fotografer Ketapang",
      slug: "pameran-fotografi-alam"
    },
    {
      id: 5,
      titleKey: "konserMusikTradisionalDayak",
      date: "2024-08-10",
      time: "20:00",
      locationKey: "pantaiMuaraKendawangan",
      category: "festival",
      descriptionKey: "konserMusikDayakDesc",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPriceKey: "rp75000",
      capacityKey: "300Orang",
      organizer: "Sanggar Musik Dayak",
      slug: "konser-musik-dayak"
    },
    {
      id: 6,
      titleKey: "festivalSeafoodKetapang",
      date: "2024-08-20",
      time: "16:00",
      locationKey: "pelabuhanKetapang",
      category: "kuliner",
      descriptionKey: "festivalSeafoodDesc",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      ticketPriceKey: "rp35000",
      capacityKey: "800Orang",
      organizer: "Komunitas Nelayan Ketapang",
      slug: "festival-seafood"
    }
  ];

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'festival', label: t('festival') },
    { value: 'kuliner', label: t('kuliner') },
    { value: 'workshop', label: t('workshop') },
    { value: 'pameran', label: t('pameran') }
  ];

  const filteredEvents = filter === 'semua' 
    ? events 
    : events.filter(event => event.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
  };

  const handleEventRegistration = (event: any) => {
    const message = t('eventRegistrationMessage').replace('{eventTitle}', t(event.titleKey));
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-32 bg-gradient-to-br from-green-forest/5 to-golden-beige/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-soft/20 backdrop-blur-md rounded-2xl mb-8 animate-float">
            <Calendar className="h-10 w-10 text-red-soft" />
          </div>
          <h2 className="section-title text-6xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            {t('eventTitle')}
          </h2>
          <div className="divider-x w-16 h-1 bg-golden-beige mx-auto my-6 rounded-full"></div>
          <p className="text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('eventDesc')}
          </p>
        </div>

        {/* Filter Section */}
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
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
                className={`btn-primary rounded-full font-poppins transition-all duration-300 hover:scale-105 px-6 py-2 ${
                  filter === category.value
                    ? 'bg-red-dark hover:bg-red-soft text-white shadow-lg'
                    : 'border-red-soft/30 text-red-soft hover:bg-red-soft/10'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid with Consistent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <Card 
              key={event.id}
              className="group cursor-pointer overflow-hidden card-hover border-0 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl animate-fade-in hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={event.image}
                  alt={t(event.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-red-soft/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                  {new Date(event.date).getDate()} {new Date(event.date).toLocaleString('id-ID', { month: 'short' })}
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-golden-beige/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t(event.ticketPriceKey)}
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(event.category)}
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-playfair font-bold text-red-dark mb-3 group-hover:text-red-soft transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                  {t(event.titleKey)}
                </h3>
                
                <p className="text-green-forest/80 text-sm mb-6 line-clamp-3 leading-relaxed flex-1 min-h-[4.5rem]">
                  {t(event.descriptionKey)}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Calendar className="h-4 w-4 mr-3 text-red-soft flex-shrink-0" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Clock className="h-4 w-4 mr-3 text-green-forest flex-shrink-0" />
                    <span className="font-medium">{event.time} WIB</span>
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <MapPin className="h-4 w-4 mr-3 text-golden-beige flex-shrink-0" />
                    <span className="font-medium">{t(event.locationKey)}</span>
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Users className="h-4 w-4 mr-3 text-red-dark flex-shrink-0" />
                    <span className="font-medium">{t(event.capacityKey)}</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    onClick={() => handleEventRegistration(event)}
                    className="w-full btn-primary bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white transition-all duration-300 rounded-xl hover:shadow-lg"
                  >
                    {t('daftar')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-green-forest/30 mx-auto mb-4" />
            <p className="text-green-forest/60 font-poppins text-lg">
              {t('tidakAdaAcara')}
            </p>
          </div>
        )}
      </div>
    </section>  
  );
};
