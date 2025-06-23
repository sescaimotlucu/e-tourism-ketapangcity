import { useState } from 'react';
import { 
  Home, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Settings, 
  LogOut, 
  X,
  Heart,
  Calendar,
  Upload,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AdminSidebar = ({ isOpen, setIsOpen }: AdminSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContentExpanded, setIsContentExpanded] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('admin-authenticated');
    navigate('/admin/login');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: Home,
      href: '/admin',
      exact: true
    }
  ];

  const contentManagementItems = [
    {
      title: 'Destinasi Wisata',
      icon: MapPin,
      href: '/admin/destinasi'
    },
    {
      title: 'Konten Budaya',
      icon: Heart,
      href: '/admin/budaya'
    },
    {
      title: 'Event Budaya',
      icon: Calendar,
      href: '/admin/event'
    },
    {
      title: 'Upload Media',
      icon: Upload,
      href: '/admin/media'
    }
  ];

  const otherItems = [
    {
      title: 'Testimoni',
      icon: MessageSquare,
      href: '/admin/testimoni'
    },
    {
      title: 'Pesan Masuk',
      icon: Mail,
      href: '/admin/pesan'
    }
  ];

  const isActiveLink = (href: string, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
        "lg:translate-x-0 lg:static lg:z-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-red-soft" />
            <div>
              <h2 className="font-bold text-red-dark">Admin Panel</h2>
              <p className="text-xs text-green-forest">Ketapang Wisata</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {/* Main Menu Items */}
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActiveLink(item.href, item.exact)
                  ? "bg-red-soft text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}

          {/* Content Management Section */}
          <div className="pt-4">
            <button
              onClick={() => setIsContentExpanded(!isContentExpanded)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
            >
              <span>Kelola Konten</span>
              {isContentExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {isContentExpanded && (
              <div className="mt-2 space-y-1">
                {contentManagementItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ml-2",
                      isActiveLink(item.href)
                        ? "bg-red-soft text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Items */}
          <div className="pt-4">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Lainnya
            </div>
            {otherItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActiveLink(item.href)
                    ? "bg-red-soft text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
