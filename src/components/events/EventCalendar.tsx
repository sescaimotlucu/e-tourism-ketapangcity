import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: string;
}

interface EventCalendarProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  className?: string;
}

export const EventCalendar = ({ events, onEventClick, className = '' }: EventCalendarProps) => {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get unique locations and categories for filters
  const locations = Array.from(new Set(events.map(event => event.location)));
  const categories = Array.from(new Set(events.map(event => event.category)));

  // Filter events based on selected filters
  const filteredEvents = events.filter(event => {
    const locationMatch = selectedLocation === 'all' || event.location === selectedLocation;
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    return locationMatch && categoryMatch;
  });

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return filteredEvents.filter(event => event.date === dateStr);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  // Generate week days for week view
  const generateWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setCurrentDate(newDate);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setDate(currentDate.getDate() - 7);
    } else {
      newDate.setDate(currentDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'festival': return 'bg-ketapang-traditional/20 text-ketapang-traditional border-ketapang-traditional/30';
      case 'kuliner': return 'bg-ketapang-gold/20 text-ketapang-earth border-ketapang-gold/30';
      case 'workshop': return 'bg-ketapang-forest/20 text-ketapang-forest border-ketapang-forest/30';
      case 'pameran': return 'bg-ketapang-sunset/20 text-ketapang-sunset border-ketapang-sunset/30';
      default: return 'bg-ketapang-wood/20 text-ketapang-wood border-ketapang-wood/30';
    }
  };

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const dayNames = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  const days = viewMode === 'month' ? generateCalendarDays() : generateWeekDays();

  return (
    <div className={`bg-gradient-to-br from-ketapang-gold/5 to-ketapang-sunset/5 backdrop-blur-sm rounded-2xl p-6 border border-ketapang-gold/20 ${className}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-ketapang-traditional" />
            <h3 className="font-cultural text-xl font-semibold text-ketapang-earth">
              Kalender Acara Budaya
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('month')}
              className="rounded-lg"
            >
              Bulan
            </Button>
            <Button
              variant={viewMode === 'week' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('week')}
              className="rounded-lg"
            >
              Minggu
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-ketapang-wood" />
            <span className="text-sm font-medium text-ketapang-wood">Filter:</span>
          </div>
          
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[140px] bg-white/70 border-ketapang-gold/30">
              <SelectValue placeholder="Lokasi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Lokasi</SelectItem>
              {locations.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[130px] bg-white/70 border-ketapang-gold/30">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{t(category)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => viewMode === 'month' ? navigateMonth('prev') : navigateWeek('prev')}
          className="bg-white/70 border-ketapang-gold/30 hover:bg-ketapang-gold/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <h4 className="font-cultural text-lg font-semibold text-ketapang-earth">
          {viewMode === 'month' 
            ? `${monthNames[currentMonth]} ${currentYear}`
            : `${currentDate.getDate()} ${monthNames[currentMonth]} ${currentYear}`
          }
        </h4>

        <Button
          variant="outline"
          size="sm"
          onClick={() => viewMode === 'month' ? navigateMonth('next') : navigateWeek('next')}
          className="bg-white/70 border-ketapang-gold/30 hover:bg-ketapang-gold/10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white/50 rounded-xl p-4 border border-ketapang-gold/20">
        {/* Day Headers */}
        <div className={`grid ${viewMode === 'month' ? 'grid-cols-7' : 'grid-cols-7'} gap-2 mb-4`}>
          {dayNames.map(day => (
            <div key={day} className="text-center py-2 font-medium text-ketapang-wood text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className={`grid ${viewMode === 'month' ? 'grid-cols-7' : 'grid-cols-7'} gap-2`}>
          {days.map((day, index) => {
            const isCurrentMonth = viewMode === 'week' || day.getMonth() === currentMonth;
            const isToday = day.toDateString() === new Date().toDateString();
            const dayEvents = getEventsForDate(day);

            return (
              <div
                key={index}
                className={`min-h-[80px] p-2 rounded-lg border transition-all duration-300 hover:shadow-md ${
                  isCurrentMonth 
                    ? 'bg-white/70 border-ketapang-gold/30' 
                    : 'bg-ketapang-wood/5 border-ketapang-wood/20'
                } ${isToday ? 'ring-2 ring-ketapang-traditional/50 bg-ketapang-gold/10' : ''}`}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isCurrentMonth ? 'text-ketapang-earth' : 'text-ketapang-wood/50'
                } ${isToday ? 'text-ketapang-traditional font-bold' : ''}`}>
                  {day.getDate()}
                </div>

                <div className="space-y-1">
                  {dayEvents.slice(0, viewMode === 'month' ? 2 : 4).map(event => (
                    <div
                      key={event.id}
                      onClick={() => onEventClick(event)}
                      className={`text-xs p-1 rounded cursor-pointer transition-all duration-300 hover:scale-105 border ${getCategoryColor(event.category)}`}
                    >
                      <div className="font-medium truncate">{event.name}</div>
                      {viewMode === 'week' && (
                        <div className="flex items-center gap-1 mt-1 text-xs opacity-75">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {dayEvents.length > (viewMode === 'month' ? 2 : 4) && (
                    <div className="text-xs text-ketapang-wood/70 font-medium">
                      +{dayEvents.length - (viewMode === 'month' ? 2 : 4)} lainnya
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3">
        <div className="text-sm font-medium text-ketapang-wood">Kategori:</div>
        {categories.map(category => (
          <Badge
            key={category}
            variant="outline"
            className={`text-xs ${getCategoryColor(category)}`}
          >
            {t(category)}
          </Badge>
        ))}
      </div>
    </div>
  );
};