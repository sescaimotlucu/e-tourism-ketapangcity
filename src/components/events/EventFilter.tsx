
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface EventFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export const EventFilter = ({ filter, setFilter }: EventFilterProps) => {
  const { t } = useLanguage();

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'festival', label: t('festival') },
    { value: 'kuliner', label: t('kuliner') },
    { value: 'workshop', label: t('workshop') },
    { value: 'pameran', label: t('pameran') }
  ];

  return (
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
  );
};
