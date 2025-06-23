
import { Edit, Trash2, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface BudayaContent {
  id: number;
  name: string;
  description: string;
  category: 'tari' | 'musik' | 'tradisi' | 'kerajinan' | 'cerita';
  mediaType: 'image' | 'video';
  mediaUrl: string;
  createdAt: string;
}

interface BudayaTableProps {
  budayaContent: BudayaContent[];
  onEdit: (content: BudayaContent) => void;
  onDelete: (id: number) => void;
}

const categoryLabels = {
  tari: 'Tarian',
  musik: 'Musik',
  tradisi: 'Tradisi',
  kerajinan: 'Kerajinan',
  cerita: 'Cerita Rakyat'
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

export const BudayaTable = ({ budayaContent, onEdit, onDelete }: BudayaTableProps) => {
  return (
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
                  onClick={() => onEdit(content)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(content.id)}
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
  );
};
