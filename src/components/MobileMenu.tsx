
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onToggle, onClose }: MobileMenuProps) => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: 'ID', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'MY', name: 'Bahasa Malaysia', flag: '🇲🇾' }
  ];

  const navigationItems = [
    { key: 'beranda', href: '#home' },
    { key: 'destinasi', href: '#kategoriWisata' },
    { key: 'acara', href: '#acara' },
    { key: 'galeri', href: '/galeri' },
    { key: 'peta', href: '#peta' },
    { key: 'kontak', href: '#kontak' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    onClose();
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguageMenu(false);
    onClose();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onClose} />
          
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-red-dark">{t('ketapangCity')}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-4">
                {navigationItems.map(item => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left py-3 px-4 rounded-lg text-gray-700 hover:bg-red-soft/10 hover:text-red-dark transition-colors font-medium"
                    >
                      {t(item.key)}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Language Selector */}
              <div className="mt-8 pt-6 border-t">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5" />
                    <span className="font-medium">
                      {languages.find(lang => lang.code === currentLanguage)?.name}
                    </span>
                  </div>
                  <span className="text-2xl">
                    {languages.find(lang => lang.code === currentLanguage)?.flag}
                  </span>
                </button>

                {showLanguageMenu && (
                  <div className="mt-2 ml-4 space-y-2">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center justify-between w-full py-2 px-4 rounded-lg text-sm transition-colors ${
                          currentLanguage === lang.code
                            ? 'bg-red-soft/20 text-red-dark font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{lang.name}</span>
                        <span className="text-lg">{lang.flag}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
