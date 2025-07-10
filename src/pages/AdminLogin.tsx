
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Lock, User, Eye, EyeOff, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi login dengan delay untuk UX yang lebih baik
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'admin@ketapang.gov.id' && password === 'admin123') {
      localStorage.setItem('admin-authenticated', 'true');
      toast({
        title: "Login Berhasil",
        description: "Selamat datang di Dashboard Admin Ketapang Wisata & Budaya",
      });
      navigate('/admin');
    } else {
      toast({
        title: "Login Gagal",
        description: "Email atau password salah",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-dark via-green-forest to-golden-beige flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-white rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 bg-white rounded-full animate-float delay-700"></div>
      </div>

      <Card className="w-full max-w-md backdrop-blur-sm bg-white/95 shadow-2xl border-0 animate-fade-in-up">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-red-soft to-red-dark rounded-full shadow-lg animate-pulse-glow">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-red-dark mb-2">Admin Panel</CardTitle>
          <p className="text-green-forest font-medium">Ketapang Wisata & Budaya</p>
          <div className="flex items-center justify-center mt-2">
            <MapPin className="h-4 w-4 text-golden-beige mr-1" />
            <span className="text-sm text-gray-600">Kabupaten Ketapang</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-forest font-medium">Email Administrator</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-forest" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email admin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-2 border-gray-200 focus:border-red-soft transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-green-forest font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-forest" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-2 border-gray-200 focus:border-red-soft transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-forest hover:text-red-soft transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Memproses...
                </div>
              ) : 'Masuk Dashboard'}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-golden-beige/20 to-green-forest/20 rounded-lg border border-golden-beige/30">
            <h4 className="font-semibold text-green-forest mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Demo Credentials
            </h4>
            <div className="text-sm text-green-forest/80 space-y-1">
              <p><strong>Email:</strong> admin@ketapang.gov.id</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
