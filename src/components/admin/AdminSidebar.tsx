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
  ChevronRight,
  BarChart3,
  Users,
  FileText,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AdminSidebar = ({ isOpen, setIsOpen }: AdminSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContentExpanded, setIsContentExpanded] = useState(true);
  const [isReportsExpanded, setIsReportsExpanded] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('admin-authenticated');
    navigate('/admin/login');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: Home,
      href: '/admin',
      exact: true,
      badge: null
    }
  ];

  const contentManagementItems = [
    {
      title: 'Destinasi Wisata',
      icon: MapPin,
      href: '/admin/destinasi',
      badge: '24'
    },
    {
      title: 'Konten Budaya',
      icon: Heart,
      href: '/admin/budaya',
      badge: '18'
    },
    {
      title: 'Event Budaya',
      icon: Calendar,
      href: '/admin/event',
      badge: '3'
    },
    {
      title: 'Upload Media',
      icon: Upload,
      href: '/admin/media',
      badge: '156'
    }
  ];

  const communicationItems = [
    {
      title: 'Testimoni',
      icon: MessageSquare,
      href: '/admin/testimoni',
      badge: '12'
    },
    {
      title: 'Pesan Masuk',
      icon: Mail,
      href: '/admin/pesan',
      badge: '5'
    }
  ];

  const reportItems = [
    {
      title: 'Laporan Kunjungan',
      icon: BarChart3,
      href: '/admin/reports/visitors'
    },
    {
      title: 'Analitik Konten',
      icon: FileText,
      href: '/admin/reports/content'
    }
  ];

  const isActiveLink = (href: string, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const SidebarLink = ({ item, isSubItem = false }: { item: any, isSubItem?: boolean }) => (
    <Link
      to={item.href}
      className={cn(
        "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
        isSubItem ? "ml-2" : "",
        isActiveLink(item.href, item.exact)
          ? "bg-gradient-to-r from-red-soft to-red-dark text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100 hover:text-red-dark"
      )}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex items-center space-x-3">
        <item.icon className={cn(
          "h-5 w-5 transition-colors",
          isSubItem ? "h-4 w-4" : "",
          isActiveLink(item.href, item.exact) ? "text-white" : "text-gray-500 group-hover:text-red-soft"
        )} />
        <span>{item.title}</span>
      </div>
      {item.badge && (
        <Badge variant={isActiveLink(item.href, item.exact) ? "secondary" : "outline"} className="text-xs">
          {item.badge}
        </Badge>
      )}
    </Link>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-all duration-300 ease-in-out z-50 border-r border-gray-200",
        "lg:translate-x-0 lg:static lg:z-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-red-soft to-red-dark">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-white">Admin Panel</h2>
              <p className="text-xs text-white/80">Ketapang Wisata</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {/* Main Menu Items */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <SidebarLink key={item.href} item={item} />
            ))}
          </div>

          {/* Content Management Section */}
          <div className="pt-6">
            <button
              onClick={() => setIsContentExpanded(!isContentExpanded)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors"
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
                  <SidebarLink key={item.href} item={item} isSubItem />
                ))}
              </div>
            )}
          </div>

          {/* Communication Section */}
          <div className="pt-6">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Komunikasi
            </div>
            <div className="space-y-1">
              {communicationItems.map((item) => (
                <SidebarLink key={item.href} item={item} />
              ))}
            </div>
          </div>

          {/* Reports Section */}
          <div className="pt-6">
            <button
              onClick={() => setIsReportsExpanded(!isReportsExpanded)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors"
            >
              <span>Laporan</span>
              {isReportsExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {isReportsExpanded && (
              <div className="mt-2 space-y-1">
                {reportItems.map((item) => (
                  <SidebarLink key={item.href} item={item} isSubItem />
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
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
