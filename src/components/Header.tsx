
import { useState } from 'react';
import { Menu, X, MapPin, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { label: t('beranda'), href: '#home', isLink: false },
    { label: t('destinasi'), href: '#kategoriWisata', isLink: false },
    { label: t('galeri'), href: '/galeri', isLink: true },
    { label: t('kontak'), href: '#kontak', isLink: false },
  ];


  const handleNavClick = (item: any) => {
    if (item.isLink) {
      setIsMenuOpen(false);
    } else {
      if (location.pathname !== '/') {
        window.location.href = `/${item.href}`;
      } else {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-ketapang-earth/95 to-ketapang-wood/95 backdrop-blur-md shadow-cultural border-b border-ketapang-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Cultural Logo */}
          <Link to="/" className="flex items-center space-x-4 animate-fade-in-left group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-ketapang-gold to-ketapang-sunset rounded-full flex items-center justify-center shadow-cultural group-hover:shadow-glow-traditional transition-all duration-300">
                <MapPin className="h-6 w-6 text-ketapang-earth animate-float" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-ketapang-forest to-ketapang-traditional rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <div className="text-white font-cultural">
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-ketapang-gold to-white bg-clip-text text-transparent">
                E-Tourism
              </h1>
              <p className="text-sm text-ketapang-gold font-medium">{t('ketapangCity')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative text-white hover:text-ketapang-gold transition-all duration-300 font-cultural font-medium text-lg group animate-fade-in flex items-center transform hover:scale-105 ${
                    location.pathname === item.href ? 'text-ketapang-gold font-bold shadow-glow-traditional' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label === t('galeri') && <Camera className="h-4 w-4 mr-2 animate-bounce" />}
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-ketapang-gold to-ketapang-sunset group-hover:w-full transition-all duration-500 ease-out shadow-cultural"></span>
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative text-white hover:text-ketapang-gold transition-all duration-300 font-cultural font-medium text-lg group animate-fade-in transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-ketapang-gold to-ketapang-sunset group-hover:w-full transition-all duration-500 ease-out shadow-cultural"></span>
                </button>
              )
            ))}
          </nav>

          {/* Enhanced Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-ketapang-gold hover:bg-ketapang-wood/20 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 animate-spin" /> : <Menu className="h-6 w-6 animate-pulse" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-ketapang-earth/95 to-ketapang-wood/95 backdrop-blur-md border-t border-ketapang-gold/20 rounded-b-2xl animate-fade-in-up shadow-cultural">
            <nav className="py-6 space-y-1">
              {navItems.map((item, index) => (
                item.isLink ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`flex items-center px-6 py-3 text-white hover:text-ketapang-gold hover:bg-ketapang-wood/20 transition-all duration-300 font-cultural font-medium rounded-xl mx-2 animate-fade-in-left transform hover:scale-105 ${
                      location.pathname === item.href ? 'text-ketapang-gold bg-ketapang-wood/30 shadow-cultural' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label === t('galeri') && <Camera className="h-4 w-4 mr-2 animate-bounce" />}
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-6 py-3 text-white hover:text-ketapang-gold hover:bg-ketapang-wood/20 transition-all duration-300 font-cultural font-medium rounded-xl mx-2 animate-fade-in-left transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-6 py-3 border-t border-ketapang-gold/20 mt-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
