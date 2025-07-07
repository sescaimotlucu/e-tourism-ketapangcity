
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  category: string;
  capacity: number;
  rating: number;
  attendees: number;
}

interface EventCardProps {
  event: Event;
  onRegister?: (eventId: number) => void;
}

const EventCardImproved = ({ event, onRegister }: EventCardProps) => {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'festival': 'bg-purple-100 text-purple-700',
      'workshop': 'bg-blue-100 text-blue-700',
      'pameran': 'bg-green-100 text-green-700',
      'pertunjukan': 'bg-pink-100 text-pink-700',
      'default': 'bg-gray-100 text-gray-700'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  const handleRegister = () => {
    if (onRegister) {
      onRegister(event.id);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02]">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">{event.rating}</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-dark transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-3 text-red-soft" />
            <span className="text-sm font-medium">{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-3 text-blue-500" />
            <span className="text-sm font-medium">{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-3 text-green-forest" />
            <span className="text-sm font-medium line-clamp-1">{event.location}</span>
          </div>
          
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-purple-500" />
              <span className="text-sm">{event.attendees}/{event.capacity}</span>
            </div>
            <div className="text-lg font-bold text-red-dark">
              {event.price === 'Gratis' ? t('eventFree') : event.price}
            </div>
          </div>
        </div>

        {/* Progress Bar for Capacity */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{t('eventCapacity')}</span>
            <span>{Math.round((event.attendees / event.capacity) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-soft to-red-dark rounded-full h-2 transition-all duration-300"
              style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleRegister}
          disabled={event.attendees >= event.capacity}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
            event.attendees >= event.capacity
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-red-soft to-red-dark text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {event.attendees >= event.capacity ? 'Penuh' : t('eventRegister')}
        </button>
      </div>
    </div>
  );
};

export default EventCardImproved;
