
import { useState } from 'react';
import { Check, X, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminTestimoniPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const testimoni = [
    {
      id: 1,
      nama: "Sarah Wijaya",
      email: "sarah@email.com",
      destinasi: "Pantai Muara Kendawangan",
      rating: 5,
      isi: "Pantai yang sangat indah dengan pemandangan sunset yang memukau. Sangat direkomendasikan!",
      status: "pending",
      tanggal: "2024-01-22"
    },
    {
      id: 2,
      nama: "Budi Santoso",
      email: "budi@email.com",
      destinasi: "Museum Negeri Ketapang",
      rating: 4,
      isi: "Museum dengan koleksi sejarah yang lengkap. Sangat edukatif untuk keluarga.",
      status: "disetujui",
      tanggal: "2024-01-20"
    },
    {
      id: 3,
      nama: "Maria Sinta",
      email: "maria@email.com",
      destinasi: "Sate Khas Ketapang",
      rating: 5,
      isi: "Rasa sate yang autentik dan bumbu kacang yang lezat. Wajib dicoba!",
      status: "pending",
      tanggal: "2024-01-21"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Kelola Testimoni" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <main className="p-6">
          <div className="mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-dark">Testimoni Pengunjung</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nama</TableHead>
                      <TableHead>Destinasi</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Testimoni</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testimoni.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium text-red-dark">
                          <div>
                            <div>{item.nama}</div>
                            <div className="text-sm text-gray-500">{item.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{item.destinasi}</TableCell>
                        <TableCell>{renderStars(item.rating)}</TableCell>
                        <TableCell className="max-w-xs">
                          <p className="truncate">{item.isi}</p>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === 'disetujui' 
                              ? 'bg-green-100 text-green-800' 
                              : item.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>{item.tanggal}</TableCell>
                        <TableCell className="text-right">
                          {item.status === 'pending' && (
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" size="sm" className="text-green-600 hover:text-green-800">
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
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

export default AdminTestimoniPage;
