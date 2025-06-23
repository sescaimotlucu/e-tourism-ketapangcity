
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import DestinationDetail from "./pages/DestinationDetail";
import GalleryPage from "./pages/GalleryPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDestinasiPage from "./pages/admin/AdminDestinasiPage";
import AdminBudayaPage from "./pages/admin/AdminBudayaPage";
import AdminEventPage from "./pages/admin/AdminEventPage";
import AdminMediaPage from "./pages/admin/AdminMediaPage";
import AdminTestimoniPage from "./pages/admin/AdminTestimoniPage";
import AdminPesanPage from "./pages/admin/AdminPesanPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('admin-authenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/kategori/:category" element={<CategoryPage />} />
            <Route path="/destinasi/:slug" element={<DestinationDetail />} />
            <Route path="/galeri" element={<GalleryPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/destinasi" element={
              <ProtectedRoute>
                <AdminDestinasiPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/budaya" element={
              <ProtectedRoute>
                <AdminBudayaPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/event" element={
              <ProtectedRoute>
                <AdminEventPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/media" element={
              <ProtectedRoute>
                <AdminMediaPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/testimoni" element={
              <ProtectedRoute>
                <AdminTestimoniPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/pesan" element={
              <ProtectedRoute>
                <AdminPesanPage />
              </ProtectedRoute>
            } />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
