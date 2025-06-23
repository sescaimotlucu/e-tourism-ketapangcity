
import { useState } from 'react';
import { Upload, Image, Video, Trash2, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { useToast } from '@/hooks/use-toast';

interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'video';
  url: string;
  size: string;
  uploadDate: string;
  category: 'wisata' | 'budaya' | 'event' | 'lainnya';
}

const AdminMediaPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([
    {
      id: 1,
      name: "pantai-kendawangan.jpg",
      type: "image",
      url: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=400",
      size: "2.3 MB",
      uploadDate: "2024-01-15",
      category: "wisata"
    },
    {
      id: 2,
      name: "tari-jepin-video.mp4",
      type: "video",
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
      size: "15.7 MB",
      uploadDate: "2024-01-12",
      category: "budaya"
    }
  ]);

  const [filterCategory, setFilterCategory] = useState<string>('semua');
  const [filterType, setFilterType] = useState<string>('semua');
  const { toast } = useToast();

  const categoryLabels = {
    wisata: 'Wisata',
    budaya: 'Budaya',
    event: 'Event',
    lainnya: 'Lainnya'
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const newMedia: MediaFile = {
          id: Date.now() + Math.random(),
          name: file.name,
          type: file.type.startsWith('video/') ? 'video' : 'image',
          url: URL.createObjectURL(file),
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          uploadDate: new Date().toISOString().split('T')[0],
          category: 'lainnya'
        };
        setMediaFiles(prev => [...prev, newMedia]);
      });
      
      toast({
        title: "File Berhasil Diupload",
        description: `${files.length} file berhasil diupload`,
      });
    }
  };

  const handleDelete = (id: number) => {
    setMediaFiles(mediaFiles.filter(file => file.id !== id));
    toast({
      title: "Media Dihapus",
      description: "File media berhasil dihapus",
    });
  };

  const filteredFiles = mediaFiles.filter(file => {
    const categoryMatch = filterCategory === 'semua' || file.category === filterCategory;
    const typeMatch = filterType === 'semua' || file.type === filterType;
    return categoryMatch && typeMatch;
  });

  const getFileIcon = (type: string) => {
    return type === 'video' ? (
      <Video className="h-8 w-8 text-blue-500" />
    ) : (
      <Image className="h-8 w-8 text-green-500" />
    );
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      wisata: "bg-blue-100 text-blue-800",
      budaya: "bg-red-100 text-red-800",
      event: "bg-green-100 text-green-800",
      lainnya: "bg-gray-100 text-gray-800"
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
          title="Upload Media Budaya" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="h-5 w-5 mr-2 text-red-soft" />
                    Upload Media
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="file-upload">Pilih File</Label>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="mt-1"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Mendukung: JPG, PNG, MP4, AVI (Maks 50MB)
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Drag & Drop file disini</p>
                    <p className="text-sm text-gray-500">atau klik browse untuk memilih</p>
                  </div>

                  <div className="bg-golden-beige/10 p-4 rounded-lg">
                    <h4 className="font-medium text-red-dark mb-2">Tips Upload:</h4>
                    <ul className="text-sm text-green-forest space-y-1">
                      <li>• Ukuran optimal gambar: 1200x800px</li>
                      <li>• Format video: MP4, maksimal 50MB</li>
                      <li>• Gunakan nama file yang deskriptif</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Media Library */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Media Library</CardTitle>
                    <div className="flex space-x-2">
                      <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="semua">Semua</SelectItem>
                          {Object.entries(categoryLabels).map(([value, label]) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Tipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="semua">Semua</SelectItem>
                          <SelectItem value="image">Gambar</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredFiles.map((file) => (
                      <div key={file.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {file.type === 'image' ? (
                              <img 
                                src={file.url} 
                                alt={file.name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                {getFileIcon(file.type)}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{file.name}</p>
                            <p className="text-xs text-gray-500">{file.size}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(file.uploadDate).toLocaleDateString('id-ID')}
                            </p>
                            <div className="mt-2">
                              {getCategoryBadge(file.category)}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-1 mt-3">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDelete(file.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredFiles.length === 0 && (
                    <div className="text-center py-8">
                      <Image className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">Belum ada media yang diupload</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminMediaPage;
