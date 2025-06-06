
import { useState } from 'react';
import { Reply, Archive } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminPesanPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pesan = [
    {
      id: 1,
      nama: "Ahmad Rizki",
      email: "ahmad@email.com",
      subjek: "Pertanyaan tentang paket wisata",
      pesan: "Apakah ada paket wisata lengkap untuk 3 hari 2 malam di Ketapang?",
      status: "baru",
      tanggal: "2024-01-22 10:30"
    },
    {
      id: 2,
      nama: "Lisa Maharani",
      email: "lisa@email.com",
      subjek: "Info transportasi ke Pantai Muara",
      pesan: "Bagaimana cara transportasi menuju Pantai Muara Kendawangan dari pusat kota?",
      status: "dibalas",
      tanggal: "2024-01-21 14:20"
    },
    {
      id: 3,
      nama: "Dedi Kurniawan",
      email: "dedi@email.com",
      subjek: "Jam operasional museum",
      pesan: "Mohon info jam buka Museum Negeri Ketapang dan harga tiket masuknya.",
      status: "baru",
      tanggal: "2024-01-20 09:15"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Pesan Kontak" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <main className="p-6">
          <div className="mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-dark">Pesan dari Pengunjung</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pengirim</TableHead>
                      <TableHead>Subjek</TableHead>
                      <TableHead>Pesan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pesan.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium text-red-dark">
                          <div>
                            <div>{item.nama}</div>
                            <div className="text-sm text-gray-500">{item.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{item.subjek}</TableCell>
                        <TableCell className="max-w-xs">
                          <p className="truncate">{item.pesan}</p>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === 'dibalas' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.status === 'dibalas' ? 'Sudah Dibalas' : 'Pesan Baru'}
                          </span>
                        </TableCell>
                        <TableCell>{item.tanggal}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800">
                              <Reply className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-800">
                              <Archive className="h-4 w-4" />
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

export default AdminPesanPage;
