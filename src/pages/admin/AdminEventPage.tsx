
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { EventFormDialog } from '@/components/admin/event/EventFormDialog';
import { EventTable } from '@/components/admin/event/EventTable';
import { useEventManagement } from '@/hooks/useEventManagement';

const AdminEventPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
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
  } = useEventManagement();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 lg:ml-0">
        <AdminHeader 
          title="Kelola Event Budaya" 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-red-dark">Event Budaya</h2>
              <p className="text-green-forest">Kelola jadwal acara dan event budaya Ketapang</p>
            </div>
            
            <EventFormDialog
              editingEvent={editingEvent}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
              onSubmit={handleSubmit}
              onOpenAddDialog={openAddDialog}
              formData={formData}
              setFormData={setFormData}
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-red-soft" />
                Daftar Event Budaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EventTable
                events={events}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminEventPage;
