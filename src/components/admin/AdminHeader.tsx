
import { Menu, Bell, Settings, ChevronDown, User2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';

interface AdminHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

const AdminHeader = ({ title, onToggleSidebar }: AdminHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin-authenticated');
    navigate('/admin/login');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-4 hover:bg-gray-100"
            onClick={onToggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-red-dark">{title}</h1>
            <p className="text-sm text-green-forest">Sistem Manajemen Konten Wisata & Budaya</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-soft text-white text-xs">
              3
            </Badge>
          </div>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
                <div className="w-8 h-8 bg-gradient-to-br from-red-soft to-red-dark rounded-full flex items-center justify-center">
                  <User2 className="h-4 w-4 text-white" />
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium text-red-dark">Admin User</p>
                  <p className="text-xs text-green-forest">Administrator</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Admin Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User2 className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Pengaturan
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-700">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
