
import { useState } from 'react';
import { 
  BarChart, 
  Users, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Image,
  Star,
  FileText,
  Grid3X3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AdminSidebar = ({ isOpen, setIsOpen }: AdminSidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { icon: BarChart, label: "Dashboard", path: "/admin", active: location.pathname === "/admin" },
    { icon: MapPin, label: "Destinasi", path: "/admin/destinasi", active: location.pathname === "/admin/destinasi" },
    { icon: Grid3X3, label: "Kategori", path: "/admin/kategori", active: location.pathname === "/admin/kategori" },
    { icon: Image, label: "Galeri", path: "/admin/galeri", active: location.pathname === "/admin/galeri" },
    { icon: Star, label: "Testimoni", path: "/admin/testimoni", active: location.pathname === "/admin/testimoni" },
    { icon: Users, label: "Pengunjung", path: "/admin/pengunjung", active: location.pathname === "/admin/pengunjung" },
    { icon: MessageSquare, label: "Pesan Kontak", path: "/admin/pesan", active: location.pathname === "/admin/pesan" },
    { icon: FileText, label: "Berita & Event", path: "/admin/berita", active: location.pathname === "/admin/berita" },
    { icon: Calendar, label: "Events", path: "/admin/events", active: location.pathname === "/admin/events" },
    { icon: Settings, label: "Pengaturan", path: "/admin/pengaturan", active: location.pathname === "/admin/pengaturan" }
  ];

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-red-dark transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 border-b border-red-soft px-6">
          <h1 className="text-xl font-bold text-white">Admin Ketapang</h1>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-red-soft"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-6 py-3 text-white hover:bg-red-soft transition-colors duration-200 ${
                item.active ? 'bg-red-soft border-r-4 border-golden-beige' : ''
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <Button variant="ghost" className="w-full text-white hover:bg-red-soft justify-start">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
