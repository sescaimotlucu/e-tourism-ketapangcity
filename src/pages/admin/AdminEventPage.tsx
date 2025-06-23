
import { useState } from 'react';
import { Calendar, Plus, Edit, Trash2, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const AdminEventPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      name: "Festival Budaya Ketapang",
      description: "Festival tahunan yang menampilkan berbagai kebudayaan Ketapang",
      date: "2024-07-15",
      time: "08:00",
      location: "Alun-alun Ketapang",
      status: "upcoming"
    },
    {
      id: 2,
      name: "Pertunjukan Tari Jepin",
      description: "Pertunjukan tari tradisional Melayu",
      date: "2024-06-30",
      time: "19:00",
      location: "Gedung Kesenian Ketapang",
      status: "ongoing"
    }
  ]);

  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...event, ...formData, status: 'upcoming' as const }
          : event
      ));
      toast({
        title: "Event Diperbarui",
        description: "Event budaya berhasil diperbarui",
      });
    } else {
      const newEvent: Event = {
        id: Date.now(),
        ...formData,
        status: 'upcoming'
      };
      setEvents([...events, newEvent]);
      toast({
        title: "Event Ditambahkan",
        description: "Event budaya baru berhasil ditambahkan",
      });
    }

    setFormData({ name: '', description: '', date: '', time: '', location: '' });
    setEditingEvent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event Dihapus",
      description: "Event budaya berhasil dihapus",
    });
  };

  const openAddDialog = () => {
    setEditingEvent(null);
    setFormData({ name: '', description: '', date: '', time: '', location: '' });
    setIsDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      upcoming: "bg-blue-100 text-blue-800",
      ongoing: "bg-green-100 text-green-800", 
      completed: "bg-gray-100 text-gray-800"
    };
    const labels = {
      upcoming: "Akan Datang",
      ongoing: "Berlangsung",
      completed: "Selesai"
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Kelola Event Budaya" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-red-dark">Event Budaya</h2>
              <p className="text-green-forest">Kelola jadwal acara dan event budaya Ketapang</p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={openAddDialog}
                  className="bg-red-soft hover:bg-red-dark text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Event
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {editingEvent ? 'Edit Event' : 'Tambah Event Baru'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Event</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Masukkan nama event"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Deskripsi event"
                      rows={3}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Tanggal</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Waktu</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Lokasi event"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Batal
                    </Button>
                    <Button type="submit" className="bg-red-soft hover:bg-red-dark">
                      {editingEvent ? 'Perbarui' : 'Simpan'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-red-soft" />
                Daftar Event Budaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Event</TableHead>
                    <TableHead>Tanggal & Waktu</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{event.name}</p>
                          <p className="text-sm text-gray-500 line-clamp-2">{event.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-green-forest" />
                          <span className="text-sm">
                            {new Date(event.date).toLocaleDateString('id-ID')} • {event.time}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-red-soft" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(event.status)}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(event)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(event.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminEventPage;
