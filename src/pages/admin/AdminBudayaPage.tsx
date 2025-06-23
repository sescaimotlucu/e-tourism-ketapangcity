
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { BudayaFormDialog } from '@/components/admin/budaya/BudayaFormDialog';
import { BudayaTable } from '@/components/admin/budaya/BudayaTable';
import { useBudayaContent } from '@/hooks/useBudayaContent';

const AdminBudayaPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    budayaContent,
    editingContent,
    isDialogOpen,
    setIsDialogOpen,
    handleSubmit,
    handleEdit,
    handleDelete,
    openAddDialog
  } = useBudayaContent();

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
            
            <BudayaFormDialog
              editingContent={editingContent}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
              onSubmit={handleSubmit}
              onOpenAddDialog={openAddDialog}
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-soft" />
                Daftar Konten Budaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BudayaTable
                budayaContent={budayaContent}
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

export default AdminBudayaPage;
