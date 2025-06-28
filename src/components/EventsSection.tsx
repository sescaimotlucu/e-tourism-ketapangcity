
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Ticket, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('semua');

  const events = [
    {
      id: 1,
      title: "Festival Budaya Ketapang 2024",
      date: "2024-08-15",
      time: "19:00",
      location: "Alun-alun Ketapang",
      category: "festival",
      description: "Festival tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Ketapang",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPrice: "Gratis",
      capacity: "5000 orang",
      organizer: "Dinas Pariwisata Ketapang"
    },
    {
      id: 2,
      title: "Pameran Kuliner Nusantara",
      date: "2024-07-20",
      time: "10:00",
      location: "Pasar Flamboyan",
      category: "kuliner",
      description: "Pameran kuliner khas Ketapang dan Nusantara dengan berbagai makanan tradisional",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      ticketPrice: "Rp 25.000",
      capacity: "1000 orang",
      organizer: "UMKM Ketapang"
    },
    {
      id: 3,
      title: "Workshop Tari Jepin",
      date: "2024-07-25",
      time: "14:00",
      location: "Gedung Kesenian Ketapang",
      category: "workshop",
      description: "Belajar tarian tradisional Jepin dari para maestro tari Ketapang",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPrice: "Rp 50.000",
      capacity: "50 orang",
      organizer: "Sanggar Seni Ketapang"
    },
    {
      id: 4,
      title: "Pameran Fotografi Alam Ketapang",
      date: "2024-08-01",
      time: "09:00",
      location: "Museum Ketapang",
      category: "pameran",
      description: "Pameran foto-foto keindahan alam Ketapang dari fotografer lokal dan nasional",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      ticketPrice: "Rp 15.000",
      capacity: "200 orang",
      organizer: "Komunitas Fotografer Ketapang"
    }
  ];

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'festival', label: 'Festival' },
    { value: 'kuliner', label: 'Kuliner' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'pameran', label: 'Pameran' }
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

  return (
    <section className="py-20 bg-gradient-to-br from-green-forest/5 to-golden-beige/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-soft/20 backdrop-blur-md rounded-2xl mb-8">
            <Calendar className="h-10 w-10 text-red-soft" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-red-dark mb-6 leading-tight">
            {t('eventTitle')}
          </h2>
          <p className="text-lg md:text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed">
            {t('eventDesc')}
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-green-forest" />
            <span className="font-poppins font-medium text-green-forest">
              {t('filterGaleri')}:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
                className={`rounded-full font-poppins transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-red-soft hover:bg-red-dark text-white'
                    : 'border-red-soft/30 text-red-soft hover:bg-red-soft/10'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <Card 
              key={event.id}
              className="group cursor-pointer overflow-hidden card-hover border-0 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-red-soft/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                  {new Date(event.date).getDate()} {new Date(event.date).toLocaleString('id-ID', { month: 'short' })}
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-golden-beige/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.ticketPrice}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-red-dark mb-3 group-hover:text-red-soft transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-green-forest/80 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time} WIB
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Users className="h-4 w-4 mr-2" />
                    {event.capacity}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white transition-all duration-300 rounded-xl"
                >
                  <Ticket className="h-4 w-4 mr-2" />
                  {t('lihatDetail')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-green-forest/30 mx-auto mb-4" />
            <p className="text-green-forest/60 font-poppins text-lg">
              Tidak ada acara ditemukan untuk kategori ini
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-soft/10 to-golden-beige/10 rounded-3xl p-8 backdrop-blur-md border border-red-soft/20">
            <h3 className="text-2xl font-playfair font-bold text-red-dark mb-4">
              {t('tertarikBerkunjung')}
            </h3>
            <p className="text-green-forest/80 mb-6 max-w-2xl mx-auto">
              Dapatkan notifikasi untuk acara-acara budaya terbaru dan jangan lewatkan kesempatan untuk merasakan pengalaman budaya yang tak terlupakan
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-forest to-red-soft hover:from-red-soft hover:to-green-forest text-white px-8 py-3 rounded-2xl font-poppins font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('hubungiSekarang')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
