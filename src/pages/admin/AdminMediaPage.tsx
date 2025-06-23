
import { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { MediaUploadCard } from '@/components/admin/media/MediaUploadCard';
import { MediaLibrary } from '@/components/admin/media/MediaLibrary';
import { useMediaManagement } from '@/hooks/useMediaManagement';

const AdminMediaPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    mediaFiles,
    filterCategory,
    filterType,
    setFilterCategory,
    setFilterType,
    handleFileUpload,
    handleDelete
  } = useMediaManagement();

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
              <MediaUploadCard onFileUpload={handleFileUpload} />
            </div>

            {/* Media Library */}
            <div className="lg:col-span-2">
              <MediaLibrary
                mediaFiles={mediaFiles}
                filterCategory={filterCategory}
                filterType={filterType}
                onFilterCategoryChange={setFilterCategory}
                onFilterTypeChange={setFilterType}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminMediaPage;
