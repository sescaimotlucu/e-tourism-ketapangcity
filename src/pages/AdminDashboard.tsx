
import { useState } from 'react';
import { BarChart, Users, MapPin, MessageSquare, Calendar, Settings, LogOut, Menu, X, Heart, Upload, TrendingUp, Eye, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Total Destinasi",
      value: "24",
      icon: MapPin,
      color: "bg-gradient-to-br from-green-forest to-green-forest/80",
      change: "+12%",
      trend: "up"
    },
    {
      title: "Konten Budaya",
      value: "18",
      icon: Heart,
      color: "bg-gradient-to-br from-red-soft to-red-dark",
      change: "+8%",
      trend: "up"
    },
    {
      title: "Event Aktif",
      value: "3",
      icon: Calendar,
      color: "bg-gradient-to-br from-golden-beige to-yellow-600",
      change: "0%",
      trend: "stable"
    },
    {
      title: "Media Files",
      value: "156",
      icon: Upload,
      color: "bg-gradient-to-br from-purple-600 to-purple-700",
      change: "+24%",
      trend: "up"
    }
  ];

  const recentActivities = [
    { 
      action: "Destinasi baru ditambahkan", 
      item: "Air Terjun Riam Pangar", 
      time: "2 jam lalu",
      type: "create",
      user: "Admin"
    },
    { 
      action: "Konten budaya diperbarui", 
      item: "Tari Jepin", 
      time: "4 jam lalu",
      type: "update",
      user: "Admin"
    },
    { 
      action: "Event dibuat", 
      item: "Festival Budaya Ketapang", 
      time: "1 hari lalu",
      type: "create",
      user: "Admin"
    },
    { 
      action: "Media diupload", 
      item: "Foto Pantai Kendawangan", 
      time: "2 hari lalu",
      type: "upload",
      user: "Admin"
    },
    { 
      action: "Testimoni baru", 
      item: "Pengunjung dari Jakarta", 
      time: "3 hari lalu",
      type: "testimonial",
      user: "System"
    }
  ];

  const popularContent = [
    { title: "Pantai Kendawangan", views: 1234, type: "destinasi" },
    { title: "Tari Jepin", views: 987, type: "budaya" },
    { title: "Air Terjun Riam Pangar", views: 765, type: "destinasi" },
    { title: "Rumah Betang", views: 543, type: "budaya" },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'create': return <MapPin className="h-4 w-4 text-green-600" />;
      case 'update': return <FileText className="h-4 w-4 text-blue-600" />;
      case 'upload': return <Upload className="h-4 w-4 text-purple-600" />;
      case 'testimonial': return <MessageSquare className="h-4 w-4 text-orange-600" />;
      default: return <Eye className="h-4 w-4 text-gray-600" />;
    }
  };

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
          {/* Welcome Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-red-soft via-red-dark to-green-forest rounded-xl text-white">
            <h1 className="text-2xl font-bold mb-2">Selamat Datang di Dashboard Admin</h1>
            <p className="text-white/90">Kelola konten wisata dan budaya Kabupaten Ketapang dengan mudah</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${stat.color} text-white shadow-lg`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-red-dark flex items-center">
                  <BarChart className="h-5 w-5 mr-2" />
                  Aktivitas Terbaru
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600 truncate">{activity.item}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500">{activity.time}</p>
                          <Badge variant="outline" className="text-xs">
                            {activity.user}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions & Popular Content */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-dark">Aksi Cepat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/admin/destinasi">
                    <Button className="w-full bg-gradient-to-r from-green-forest to-green-forest/80 hover:from-green-forest/80 hover:to-green-forest text-white justify-start shadow-md">
                      <MapPin className="h-4 w-4 mr-2" />
                      Kelola Destinasi
                    </Button>
                  </Link>
                  <Link to="/admin/budaya">
                    <Button variant="outline" className="w-full border-red-soft text-red-soft hover:bg-red-soft hover:text-white justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Kelola Budaya
                    </Button>
                  </Link>
                  <Link to="/admin/event">
                    <Button variant="outline" className="w-full border-golden-beige text-golden-beige hover:bg-golden-beige hover:text-gray-900 justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Kelola Event
                    </Button>
                  </Link>
                  <Link to="/admin/media">
                    <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Media
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Popular Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-dark flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Konten Populer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularContent.map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{content.title}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {content.type}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Eye className="h-4 w-4 mr-1" />
                          <span className="text-sm">{content.views}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
