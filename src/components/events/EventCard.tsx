
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface EventCardProps {
  event: {
    id: number;
    titleKey: string;
    date: string;
    time: string;
    locationKey: string;
    category: string;
    descriptionKey: string;
    image: string;
    ticketPriceKey: string;
    capacityKey: string;
    organizer: string;
    slug: string;
  };
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const { t } = useLanguage();

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
  );
};
