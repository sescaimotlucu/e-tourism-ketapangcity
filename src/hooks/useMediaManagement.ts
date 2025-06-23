
import { useState } from 'react';
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

const initialMediaFiles: MediaFile[] = [
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
];

export const useMediaManagement = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>(initialMediaFiles);
  const [filterCategory, setFilterCategory] = useState<string>('semua');
  const [filterType, setFilterType] = useState<string>('semua');
  const { toast } = useToast();

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

  return {
    mediaFiles,
    filterCategory,
    filterType,
    setFilterCategory,
    setFilterType,
    handleFileUpload,
    handleDelete
  };
};
