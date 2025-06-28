
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Ticket, Filter, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

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
      description: "Festival tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Ketapang dengan parade budaya, pameran kerajinan, dan pertunjukan musik tradisional",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPrice: "Gratis",
      capacity: "5000 orang",
      organizer: "Dinas Pariwisata Ketapang",
      slug: "festival-budaya-ketapang-2024"
    },
    {
      id: 2,
      title: "Pameran Kuliner Nusantara",
      date: "2024-07-20",
      time: "10:00",
      location: "Pasar Flamboyan",
      category: "kuliner",
      description: "Pameran kuliner khas Ketapang dan Nusantara dengan berbagai makanan tradisional, cooking demo, dan kompetisi memasak",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      ticketPrice: "Rp 25.000",
      capacity: "1000 orang",
      organizer: "UMKM Ketapang",
      slug: "pameran-kuliner-nusantara"
    },
    {
      id: 3,
      title: "Workshop Tari Jepin",
      date: "2024-07-25",
      time: "14:00",
      location: "Gedung Kesenian Ketapang",
      category: "workshop",
      description: "Belajar tarian tradisional Jepin dari para maestro tari Ketapang dengan sesi praktek dan pengenalan sejarah tarian",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPrice: "Rp 50.000",
      capacity: "50 orang",
      organizer: "Sanggar Seni Ketapang",
      slug: "workshop-tari-jepin"
    },
    {
      id: 4,
      title: "Pameran Fotografi Alam Ketapang",
      date: "2024-08-01",
      time: "09:00",
      location: "Museum Ketapang",
      category: "pameran",
      description: "Pameran foto-foto keindahan alam Ketapang dari fotografer lokal dan nasional dengan tema konservasi alam",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      ticketPrice: "Rp 15.000",
      capacity: "200 orang",
      organizer: "Komunitas Fotografer Ketapang",
      slug: "pameran-fotografi-alam"
    },
    {
      id: 5,
      title: "Konser Musik Tradisional Dayak",
      date: "2024-08-10",
      time: "20:00",
      location: "Pantai Muara Kendawangan",
      category: "festival",
      description: "Konser musik tradisional Dayak dengan pemandangan sunset di pantai, menampilkan alat musik Sape dan Gendang Panjang",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      ticketPrice: "Rp 75.000",
      capacity: "300 orang",
      organizer: "Sanggar Musik Dayak",
      slug: "konser-musik-dayak"
    },
    {
      id: 6,
      title: "Festival Seafood Ketapang",
      date: "2024-08-20",
      time: "16:00",
      location: "Pelabuhan Ketapang",
      category: "kuliner",
      description: "Festival kuliner seafood segar dengan berbagai olahan ikan dan hasil laut khas pesisir Ketapang",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      ticketPrice: "Rp 35.000",
      capacity: "800 orang",
      organizer: "Komunitas Nelayan Ketapang",
      slug: "festival-seafood"
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

  const handleContactEvent = (event: any) => {
    const message = `Halo, saya tertarik untuk menghadiri ${event.title}. Bisakah Anda memberikan informasi lebih lanjut?`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-forest/5 to-golden-beige/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-soft/20 backdrop-blur-md rounded-2xl mb-8 animate-float">
            <Calendar className="h-10 w-10 text-red-soft" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            {t('eventTitle')}
          </h2>
          <p className="text-lg md:text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
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
                className={`rounded-full font-poppins transition-all duration-300 hover:scale-105 ${
                  filter === category.value
                    ? 'bg-red-soft hover:bg-red-dark text-white shadow-lg'
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
              className="group cursor-pointer overflow-hidden card-hover border-0 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl animate-fade-in hover:shadow-2xl transition-all duration-500"
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

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {event.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-red-dark mb-3 group-hover:text-red-soft transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-green-forest/80 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Calendar className="h-4 w-4 mr-3 text-red-soft" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Clock className="h-4 w-4 mr-3 text-green-forest" />
                    <span className="font-medium">{event.time} WIB</span>
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <MapPin className="h-4 w-4 mr-3 text-golden-beige" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-green-forest/70">
                    <Users className="h-4 w-4 mr-3 text-red-dark" />
                    <span className="font-medium">{event.capacity}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleContactEvent(event)}
                    className="flex-1 bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white transition-all duration-300 rounded-xl hover:shadow-lg"
                  >
                    <Ticket className="h-4 w-4 mr-2" />
                    Daftar
                  </Button>
                  <Button
                    onClick={() => handleContactEvent(event)}
                    variant="outline"
                    size="sm"
                    className="border-green-forest text-green-forest hover:bg-green-forest/10 rounded-xl"
                  >
                    <Phone className="h-4 w-4" />
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
              Tidak ada acara ditemukan untuk kategori ini
            </p>
          </div>
        )}
      </div>
    </section>  
  );
};
