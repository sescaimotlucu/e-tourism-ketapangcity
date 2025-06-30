
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { EventsHeader } from './events/EventsHeader';
import { EventFilter } from './events/EventFilter';
import { EventCard } from './events/EventCard';
import { eventsData } from '@/data/eventsData';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('semua');

  const filteredEvents = filter === 'semua' 
    ? eventsData 
    : eventsData.filter(event => event.category === filter);

  return (
    <section className="py-32 bg-gradient-to-br from-green-forest/5 to-golden-beige/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <EventsHeader />
        <EventFilter filter={filter} setFilter={setFilter} />

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
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
