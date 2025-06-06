
import { useState } from 'react';
import { BarChart, Users, MapPin, MessageSquare, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      title: "Pengunjung Bulan Ini",
      value: "12,543",
      icon: Users,
      color: "bg-red-soft"
    },
    {
      title: "Testimoni Pending",
      value: "8",
      icon: MessageSquare,
      color: "bg-golden-beige"
    },
    {
      title: "Event Aktif",
      value: "3",
      icon: Calendar,
      color: "bg-red-dark"
    }
  ];

  const recentActivities = [
    { action: "Destinasi baru ditambahkan", item: "Air Terjun Riam Pangar", time: "2 jam lalu" },
    { action: "Testimoni disetujui", item: "Sarah Wijaya", time: "4 jam lalu" },
    { action: "Event dibuat", item: "Festival Budaya Ketapang", time: "1 hari lalu" },
    { action: "Galeri diperbarui", item: "Pantai Muara Kendawangan", time: "2 hari lalu" }
  ];

  const menuItems = [
    { icon: BarChart, label: "Dashboard", active: true },
    { icon: MapPin, label: "Destinasi" },
    { icon: Users, label: "Pengunjung" },
    { icon: MessageSquare, label: "Testimoni" },
    { icon: Calendar, label: "Events" },
    { icon: Settings, label: "Pengaturan" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-red-dark transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 border-b border-red-soft">
          <h1 className="text-xl font-bold text-white">Admin Ketapang</h1>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-white hover:bg-red-soft transition-colors duration-200 ${
                item.active ? 'bg-red-soft' : ''
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <Button variant="ghost" className="w-full text-white hover:bg-red-soft justify-start">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            <h2 className="text-2xl font-bold text-red-dark">Dashboard</h2>
            
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
                <Button className="w-full bg-red-soft hover:bg-red-dark text-white justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Tambah Destinasi Baru
                </Button>
                <Button variant="outline" className="w-full border-green-forest text-green-forest hover:bg-green-forest hover:text-white justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Buat Event Baru
                </Button>
                <Button variant="outline" className="w-full border-golden-beige text-golden-beige hover:bg-golden-beige hover:text-red-dark justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Review Testimoni
                </Button>
                <Button variant="outline" className="w-full border-red-dark text-red-dark hover:bg-red-dark hover:text-white justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Pengaturan Website
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
