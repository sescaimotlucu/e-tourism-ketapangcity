
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

const AdminHeader = ({ title, onToggleSidebar }: AdminHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-4"
            onClick={onToggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h2 className="text-2xl font-bold text-red-dark">{title}</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-red-dark">Admin User</p>
            <p className="text-xs text-green-forest">administrator</p>
          </div>
          <div className="w-10 h-10 bg-golden-beige rounded-full flex items-center justify-center">
            <span className="text-red-dark font-bold">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
