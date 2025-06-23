
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const initialEvents: Event[] = [
  {
    id: 1,
    name: "Festival Budaya Ketapang",
    description: "Festival tahunan yang menampilkan berbagai kebudayaan Ketapang",
    date: "2024-07-15",
    time: "08:00",
    location: "Alun-alun Ketapang",
    status: "upcoming"
  },
  {
    id: 2,
    name: "Pertunjukan Tari Jepin",
    description: "Pertunjukan tari tradisional Melayu",
    date: "2024-06-30",
    time: "19:00",
    location: "Gedung Kesenian Ketapang",
    status: "ongoing"
  }
];

export const useEventManagement = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...event, ...formData, status: 'upcoming' as const }
          : event
      ));
      toast({
        title: "Event Diperbarui",
        description: "Event budaya berhasil diperbarui",
      });
    } else {
      const newEvent: Event = {
        id: Date.now(),
        ...formData,
        status: 'upcoming'
      };
      setEvents([...events, newEvent]);
      toast({
        title: "Event Ditambahkan",
        description: "Event budaya baru berhasil ditambahkan",
      });
    }

    setFormData({ name: '', description: '', date: '', time: '', location: '' });
    setEditingEvent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event Dihapus",
      description: "Event budaya berhasil dihapus",
    });
  };

  const openAddDialog = () => {
    setEditingEvent(null);
    setFormData({ name: '', description: '', date: '', time: '', location: '' });
    setIsDialogOpen(true);
  };

  return {
    events,
    editingEvent,
    isDialogOpen,
    setIsDialogOpen,
    formData,
    setFormData,
    handleSubmit,
    handleEdit,
    handleDelete,
    openAddDialog
  };
};
