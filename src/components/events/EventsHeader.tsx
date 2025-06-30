
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const EventsHeader = () => {
  const { t } = useLanguage();

  return (
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
  );
};
