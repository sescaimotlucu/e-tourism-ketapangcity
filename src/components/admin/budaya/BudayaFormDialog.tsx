
import { useState } from 'react';
import { Plus, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface BudayaContent {
  id: number;
  name: string;
  description: string;
  category: 'tari' | 'musik' | 'tradisi' | 'kerajinan' | 'cerita';
  mediaType: 'image' | 'video';
  mediaUrl: string;
  createdAt: string;
}

interface BudayaFormDialogProps {
  editingContent: BudayaContent | null;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  onSubmit: (formData: Omit<BudayaContent, 'id' | 'createdAt'>) => void;
  onOpenAddDialog: () => void;
}

const categoryLabels = {
  tari: 'Tarian',
  musik: 'Musik',
  tradisi: 'Tradisi',
  kerajinan: 'Kerajinan',
  cerita: 'Cerita Rakyat'
};

export const BudayaFormDialog = ({ 
  editingContent, 
  isDialogOpen, 
  setIsDialogOpen, 
  onSubmit, 
  onOpenAddDialog 
}: BudayaFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: editingContent?.name || '',
    description: editingContent?.description || '',
    category: (editingContent?.category || 'tari') as 'tari' | 'musik' | 'tradisi' | 'kerajinan' | 'cerita',
    mediaType: (editingContent?.mediaType || 'image') as 'image' | 'video',
    mediaUrl: editingContent?.mediaUrl || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', category: 'tari', mediaType: 'image', mediaUrl: '' });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          onClick={onOpenAddDialog}
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
  );
};
