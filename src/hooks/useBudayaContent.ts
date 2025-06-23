
import { useState } from 'react';
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

const initialBudayaContent: BudayaContent[] = [
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
];

export const useBudayaContent = () => {
  const [budayaContent, setBudayaContent] = useState<BudayaContent[]>(initialBudayaContent);
  const [editingContent, setEditingContent] = useState<BudayaContent | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (formData: Omit<BudayaContent, 'id' | 'createdAt'>) => {
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

    setEditingContent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (content: BudayaContent) => {
    setEditingContent(content);
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
    setIsDialogOpen(true);
  };

  return {
    budayaContent,
    editingContent,
    isDialogOpen,
    setIsDialogOpen,
    handleSubmit,
    handleEdit,
    handleDelete,
    openAddDialog
  };
};
