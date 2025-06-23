
import { Image, Video, Eye, Download, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'video';
  url: string;
  size: string;
  uploadDate: string;
  category: 'wisata' | 'budaya' | 'event' | 'lainnya';
}

interface MediaLibraryProps {
  mediaFiles: MediaFile[];
  filterCategory: string;
  filterType: string;
  onFilterCategoryChange: (value: string) => void;
  onFilterTypeChange: (value: string) => void;
  onDelete: (id: number) => void;
}

const categoryLabels = {
  wisata: 'Wisata',
  budaya: 'Budaya',
  event: 'Event',
  lainnya: 'Lainnya'
};

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

export const MediaLibrary = ({
  mediaFiles,
  filterCategory,
  filterType,
  onFilterCategoryChange,
  onFilterTypeChange,
  onDelete
}: MediaLibraryProps) => {
  const filteredFiles = mediaFiles.filter(file => {
    const categoryMatch = filterCategory === 'semua' || file.category === filterCategory;
    const typeMatch = filterType === 'semua' || file.type === filterType;
    return categoryMatch && typeMatch;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Media Library</CardTitle>
          <div className="flex space-x-2">
            <Select value={filterCategory} onValueChange={onFilterCategoryChange}>
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
            <Select value={filterType} onValueChange={onFilterTypeChange}>
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
                  onClick={() => onDelete(file.id)}
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
  );
};
