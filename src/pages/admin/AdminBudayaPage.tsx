import { useState } from 'react';
import { Heart, Plus, Edit, Trash2, Image, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { useToast } from '@/hooks/use-toast';

interface BudayaContent {
  id: number;
  name: string;
  description: string;
  category: 'tari' | 'musik' | 'tradisi' | 'kerajinan' | 'cerita';
  mediaType: 'image' | 'video';
  mediaUrl: string;
  createdAt: string;
}

const AdminBudayaPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [budayaContent, setBudayaContent] = useState<BudayaContent[]>([
    {
      id: 1,
      name: "Tari Jepin",
      description: "Tarian tradisional Melayu yang anggun dengan gerakan lemah gemulai",
      category: "tari",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Tari Monong",
      description: "Tarian perang tradisional suku Dayak yang penuh filosofi",
      category: "tari",
      mediaType: "video",
      mediaUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      createdAt: "2024-01-10"
    }
  ]);

  const [editingContent, setEditingContent] = useState<BudayaContent | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'tari' as 'tari' | 'musik' | 'tradisi' | 'kerajinan' | 'cerita',
    mediaType: 'image' as 'image' | 'video',
    mediaUrl: ''
  });

  const categoryLabels = {
    tari: 'Tarian',
    musik: 'Musik',
    tradisi: 'Tradisi',
    kerajinan: 'Kerajinan',
    cerita: 'Cerita Rakyat'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingContent) {
      setBudayaContent(budayaContent.map(content => 
        content.id === editingContent.id 
          ? { ...content, ...formData }
          : content
      ));
      toast({
        title: "Konten Budaya Diperbarui",
        description: "Konten budaya berhasil diperbarui",
      });
    } else {
      const newContent: BudayaContent = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setBudayaContent([...budayaContent, newContent]);
      toast({
        title: "Konten Budaya Ditambahkan",
        description: "Konten budaya baru berhasil ditambahkan",
      });
    }

    setFormData({ name: '', description: '', category: 'tari', mediaType: 'image', mediaUrl: '' });
    setEditingContent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (content: BudayaContent) => {
    setEditingContent(content);
    setFormData({
      name: content.name,
      description: content.description,
      category: content.category,
      mediaType: content.mediaType,
      mediaUrl: content.mediaUrl
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setBudayaContent(budayaContent.filter(content => content.id !== id));
    toast({
      title: "Konten Budaya Dihapus",
      description: "Konten budaya berhasil dihapus",
    });
  };

  const openAddDialog = () => {
    setEditingContent(null);
    setFormData({ name: '', description: '', category: 'tari', mediaType: 'image', mediaUrl: '' });
    setIsDialogOpen(true);
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      tari: "bg-pink-100 text-pink-800",
      musik: "bg-blue-100 text-blue-800",
      tradisi: "bg-green-100 text-green-800",
      kerajinan: "bg-purple-100 text-purple-800",
      cerita: "bg-orange-100 text-orange-800"
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[category as keyof typeof colors]}`}>
        {categoryLabels[category as keyof typeof categoryLabels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Kelola Konten Budaya" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-red-dark">Konten Budaya</h2>
              <p className="text-green-forest">Kelola artikel, cerita, dan konten edukatif budaya Ketapang</p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={openAddDialog}
                  className="bg-red-soft hover:bg-red-dark text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Konten
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {editingContent ? 'Edit Konten Budaya' : 'Tambah Konten Budaya Baru'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Budaya</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Masukkan nama budaya"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Deskripsi budaya"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Kategori</Label>
                    <Select value={formData.category} onValueChange={(value: any) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(categoryLabels).map(([value, label]) => (
                          <SelectItem key={value} value={value}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mediaType">Tipe Media</Label>
                    <Select value={formData.mediaType} onValueChange={(value: any) => setFormData({...formData, mediaType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tipe media" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="image">Gambar</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mediaUrl">URL Media</Label>
                    <Input
                      id="mediaUrl"
                      value={formData.mediaUrl}
                      onChange={(e) => setFormData({...formData, mediaUrl: e.target.value})}
                      placeholder="URL gambar/video"
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
                      {editingContent ? 'Perbarui' : 'Simpan'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-soft" />
                Daftar Konten Budaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Media</TableHead>
                    <TableHead>Nama Budaya</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Tanggal Dibuat</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {budayaContent.map((content) => (
                    <TableRow key={content.id}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <img 
                            src={content.mediaUrl} 
                            alt={content.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          {content.mediaType === 'video' ? (
                            <Video className="h-4 w-4 text-blue-500" />
                          ) : (
                            <Image className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{content.name}</p>
                          <p className="text-sm text-gray-500 line-clamp-2">{content.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getCategoryBadge(content.category)}
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {new Date(content.createdAt).toLocaleDateString('id-ID')}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(content)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(content.id)}
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

export default AdminBudayaPage;
