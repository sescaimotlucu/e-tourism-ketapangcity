
import { Edit, Trash2, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface EventTableProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: number) => void;
}

const getStatusBadge = (status: string) => {
  const colors = {
    upcoming: "bg-blue-100 text-blue-800",
    ongoing: "bg-green-100 text-green-800", 
    completed: "bg-gray-100 text-gray-800"
  };
  const labels = {
    upcoming: "Akan Datang",
    ongoing: "Berlangsung",
    completed: "Selesai"
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
};

export const EventTable = ({ events, onEdit, onDelete }: EventTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama Event</TableHead>
          <TableHead>Tanggal & Waktu</TableHead>
          <TableHead>Lokasi</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id}>
            <TableCell>
              <div>
                <p className="font-medium">{event.name}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{event.description}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-green-forest" />
                <span className="text-sm">
                  {new Date(event.date).toLocaleDateString('id-ID')} • {event.time}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-red-soft" />
                <span className="text-sm">{event.location}</span>
              </div>
            </TableCell>
            <TableCell>
              {getStatusBadge(event.status)}
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(event)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(event.id)}
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
