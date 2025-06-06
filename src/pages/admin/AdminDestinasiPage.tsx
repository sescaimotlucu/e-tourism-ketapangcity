
import { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminDestinasiPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const destinasi = [
    {
      id: 1,
      nama: "Pantai Muara Kendawangan",
      kategori: "Wisata Alam",
      lokasi: "Kendawangan",
      status: "Aktif",
      dibuat: "2024-01-15"
    },
    {
      id: 2,
      nama: "Museum Negeri Ketapang",
      kategori: "Wisata Budaya",
      lokasi: "Ketapang Kota",
      status: "Aktif",
      dibuat: "2024-01-10"
    },
    {
      id: 3,
      nama: "Sate Khas Ketapang",
      kategori: "Wisata Kuliner",
      lokasi: "Pasar Sentral",
      status: "Draft",
      dibuat: "2024-01-20"
    },
    {
      id: 4,
      nama: "Tari Zapin Ketapang",
      kategori: "Wisata Tari",
      lokasi: "Gedung Kesenian",
      status: "Aktif",
      dibuat: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Kelola Destinasi" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <main className="p-6">
          <div className="mb-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-red-dark">Daftar Destinasi Wisata</CardTitle>
                  <Button className="bg-red-soft hover:bg-red-dark text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Destinasi
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nama Destinasi</TableHead>
                      <TableHead>Kategori</TableHead>
                      <TableHead>Lokasi</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Dibuat</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {destinasi.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium text-red-dark">{item.nama}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs bg-green-forest/10 text-green-forest">
                            {item.kategori}
                          </span>
                        </TableCell>
                        <TableCell>{item.lokasi}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === 'Aktif' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>{item.dibuat}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDestinasiPage;
