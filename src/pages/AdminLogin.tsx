
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Lock, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi login sederhana
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
    <div className="min-h-screen bg-gradient-to-br from-red-dark via-green-forest to-golden-beige flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-red-soft" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-dark">Admin Login</CardTitle>
          <p className="text-green-forest">Ketapang Wisata & Budaya</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-green-forest" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@ketapang.gov.id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-green-forest" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-red-soft hover:bg-red-dark"
              disabled={isLoading}
            >
              {isLoading ? 'Memproses...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 p-3 bg-golden-beige/10 rounded-lg text-sm text-green-forest">
            <p><strong>Demo Credentials:</strong></p>
            <p>Email: admin@ketapang.gov.id</p>
            <p>Password: admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
