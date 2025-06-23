
import { useState } from 'react';
import { BarChart, Users, MapPin, MessageSquare, Calendar, Settings, LogOut, Menu, X, Heart, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Total Destinasi",
      value: "24",
      icon: MapPin,
      color: "bg-green-forest"
    },
    {
      title: "Konten Budaya",
      value: "18",
      icon: Heart,
      color: "bg-red-soft"
    },
    {
      title: "Event Aktif",
      value: "3",
      icon: Calendar,
      color: "bg-golden-beige"
    },
    {
      title: "Media Files",
      value: "156",
      icon: Upload,
      color: "bg-red-dark"
    }
  ];

  const recentActivities = [
    { action: "Destinasi baru ditambahkan", item: "Air Terjun Riam Pangar", time: "2 jam lalu" },
    { action: "Konten budaya diperbarui", item: "Tari Jepin", time: "4 jam lalu" },
    { action: "Event dibuat", item: "Festival Budaya Ketapang", time: "1 hari lalu" },
    { action: "Media diupload", item: "Foto Pantai Kendawangan", time: "2 hari lalu" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Dashboard" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-green-forest">{stat.title}</p>
                      <p className="text-2xl font-bold text-red-dark">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-dark">Aktivitas Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-golden-beige rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-red-dark">{activity.action}</p>
                        <p className="text-sm text-green-forest">{activity.item}</p>
                        <p className="text-xs text-green-forest/60">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-dark">Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/admin/destinasi">
                  <Button className="w-full bg-red-soft hover:bg-red-dark text-white justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Kelola Destinasi Wisata
                  </Button>
                </Link>
                <Link to="/admin/budaya">
                  <Button variant="outline" className="w-full border-red-soft text-red-soft hover:bg-red-soft hover:text-white justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Kelola Konten Budaya
                  </Button>
                </Link>
                <Link to="/admin/event">
                  <Button variant="outline" className="w-full border-green-forest text-green-forest hover:bg-green-forest hover:text-white justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Kelola Event Budaya
                  </Button>
                </Link>
                <Link to="/admin/media">
                  <Button variant="outline" className="w-full border-golden-beige text-golden-beige hover:bg-golden-beige hover:text-red-dark justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Media Budaya
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
