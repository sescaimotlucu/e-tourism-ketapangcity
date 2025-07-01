
import { useState } from 'react';
import { MapPin, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const MapSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'alam', label: t('wisataAlam') },
    { value: 'budaya', label: t('wisataBudaya') },
    { value: 'kuliner', label: t('wisataKuliner') },
    { value: 'tari', label: t('wisataTari') }
  ];

  // Map configurations for each category
  const getMapEmbedUrl = (category: string) => {
    const baseUrl = "https://www.google.com/maps/embed?pb=";
    
    switch (category) {
      case 'alam':
        // Focus on Taman Nasional Gunung Palung and natural attractions
        return `${baseUrl}!1m18!1m12!1m3!1d63820.298!2d109.6!3d-1.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05171c0b8b0b0b%3A0x1234567890abcdef!2sGunung%20Palung%20National%20Park!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`;
      case 'budaya':
        // Focus on cultural sites like museums and mosques
        return `${baseUrl}!1m18!1m12!1m3!1d31910.149!2d109.98!3d-1.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05171c0b8b0b0b%3A0x1234567890abcdef!2sMuseum%20Ketapang!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`;
      case 'kuliner':
        // Focus on culinary areas like Pasar Flamboyan
        return `${baseUrl}!1m18!1m12!1m3!1d31910.149!2d109.975!3d-1.847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05171c0b8b0b0b%3A0x1234567890abcdef!2sPasar%20Flamboyan%20Ketapang!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`;
      case 'tari':
        // Focus on cultural centers and dance venues
        return `${baseUrl}!1m18!1m12!1m3!1d31910.149!2d109.97!3d-1.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05171c0b8b0b0b%3A0x1234567890abcdef!2sSanggar%20Tari%20Jepin%20Ketapang!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`;
      default:
        // Default view of Ketapang city center
        return `${baseUrl}!1m18!1m12!1m3!1d255281.19354788686!2d109.77429842167969!3d-1.8456077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05171c0b8b0b0b%3A0x1234567890abcdef!2sKetapang%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`;
    }
  };

  const handleCategoryClick = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    console.log(`Filter clicked: ${categoryValue}`);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-cream-50 via-green-50 to-golden-beige/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-dark/20 to-golden-beige/20 backdrop-blur-md rounded-full mb-8 animate-float shadow-xl">
            <MapPin className="h-10 w-10 text-red-dark" />
          </div>
          <h2 className="section-title text-6xl font-playfair font-bold text-red-dark mb-6 leading-tight animate-fade-in">
            {t('petaLokasi')}
          </h2>
          <div className="divider-x w-16 h-1 bg-golden-beige mx-auto my-6 rounded-full"></div>
          <p className="text-xl text-green-forest/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('petaDesc')}
          </p>
        </div>

        {/* Category Filter */}
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
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryClick(category.value)}
                className={`rounded-full font-poppins transition-all duration-300 hover:scale-105 px-6 py-2 ${
                  selectedCategory === category.value
                    ? 'bg-red-dark hover:bg-red-soft text-white shadow-lg'
                    : 'border-red-soft/30 text-red-soft hover:bg-red-soft/10'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Embedded Google Maps */}
        <div className="w-full">
          <Card className="h-96 overflow-hidden rounded-3xl border-0 shadow-2xl">
            <iframe
              key={selectedCategory} // Force re-render when category changes
              src={getMapEmbedUrl(selectedCategory)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${t('petaLokasi')} - ${categories.find(c => c.value === selectedCategory)?.label}`}
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};
