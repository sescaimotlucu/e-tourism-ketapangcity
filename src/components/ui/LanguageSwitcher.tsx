import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { 
      code: 'ID', 
      label: 'Bahasa Indonesia', 
      flag: '🇮🇩',
      shortLabel: 'ID',
      description: 'Bahasa resmi Indonesia'
    },
    { 
      code: 'EN', 
      label: 'English', 
      flag: '🇺🇸',
      shortLabel: 'EN', 
      description: 'International language'
    },
    { 
      code: 'MY', 
      label: 'Bahasa Melayu', 
      flag: '🇲🇾',
      shortLabel: 'MY',
      description: 'Bahasa tradisional Melayu'
    },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-ketapang-gold/10 to-ketapang-sunset/10 border-ketapang-gold/30 text-ketapang-earth hover:bg-ketapang-gold/20 transition-all duration-300 hover:scale-105 hover:shadow-cultural rounded-xl px-4 py-2 min-w-[100px]"
      >
        <Globe className="h-4 w-4 mr-2 animate-pulse text-ketapang-traditional" />
        <span className="font-medium">{currentLang?.flag} {currentLang?.shortLabel}</span>
        <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-cultural border border-ketapang-gold/20 py-3 min-w-[280px] z-50 animate-fade-in">
            <div className="px-4 pb-3 border-b border-ketapang-gold/20">
              <div className="flex items-center gap-2 text-ketapang-earth">
                <Globe className="h-4 w-4 text-ketapang-traditional" />
                <span className="font-medium text-sm">Pilih Bahasa / Choose Language</span>
              </div>
            </div>
            
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-ketapang-gold/10 hover:to-ketapang-sunset/10 transition-all duration-300 group ${
                  currentLanguage === lang.code 
                    ? 'bg-gradient-to-r from-ketapang-gold/20 to-ketapang-sunset/20 border-l-4 border-ketapang-traditional' 
                    : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl animate-bounce group-hover:scale-110 transition-transform">
                    {lang.flag}
                  </span>
                  <div className="flex-1">
                    <div className="font-medium text-ketapang-earth group-hover:text-ketapang-traditional transition-colors">
                      {lang.label}
                    </div>
                    <div className="text-xs text-ketapang-wood group-hover:text-ketapang-forest transition-colors">
                      {lang.description}
                    </div>
                  </div>
                  {currentLanguage === lang.code && (
                    <div className="w-2 h-2 bg-ketapang-traditional rounded-full animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};