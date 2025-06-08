
import { useState } from 'react';
import { Menu, X, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('beranda'), href: '#home' },
    { label: t('destinasi'), href: '#destinasi' },
    { label: t('galeri'), href: '#galeri' },
    { label: t('kontak'), href: '#kontak' },
  ];

  const languages = [
    { code: 'ID', label: 'Bahasa', flag: '🇮🇩' },
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'MY', label: 'Melayu', flag: '🇲🇾' },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-dark/95 backdrop-blur-md shadow-xl border-b border-red-soft/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-left">
            <div className="relative">
              <MapPin className="h-10 w-10 text-golden-beige animate-float" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-forest rounded-full animate-pulse"></div>
            </div>
            <div className="text-white font-poppins">
              <h1 className="text-2xl font-bold tracking-tight">Ketapang</h1>
              <p className="text-sm text-golden-beige font-medium">Wisata & Budaya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-white hover:text-golden-beige transition-all duration-300 font-poppins font-medium text-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-golden-beige to-green-forest group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-golden-beige hover:bg-red-soft/20 font-poppins border border-red-soft/30 rounded-xl px-4 py-2"
              >
                <Globe className="h-4 w-4 mr-2" />
                {currentLanguage}
              </Button>
              
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-golden-beige/10 text-red-dark font-poppins text-sm flex items-center space-x-2 transition-colors duration-200 ${
                      currentLanguage === lang.code ? 'bg-golden-beige/20 font-semibold' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-golden-beige hover:bg-red-soft/20 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-dark/95 backdrop-blur-md border-t border-red-soft/20 rounded-b-2xl animate-fade-in-up">
            <nav className="py-6 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-3 text-white hover:text-golden-beige hover:bg-red-soft/20 transition-all duration-300 font-poppins font-medium rounded-xl mx-2 animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
