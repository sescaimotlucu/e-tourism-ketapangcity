import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, Download, Eye, Calendar, MapPin, Camera, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'Semua', icon: Camera },
    { id: 'budaya', label: 'Budaya', icon: Heart },
    { id: 'alam', label: 'Alam', icon: MapPin },
    { id: 'kuliner', label: 'Kuliner', icon: Share2 },
    { id: 'festival', label: 'Festival', icon: Calendar },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Tari Tradisional Dayak Ketapang',
      category: 'budaya',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80',
      description: 'Pertunjukan tari tradisional yang menggambarkan kehidupan masyarakat Dayak',
      photographer: 'Ahmad Rizki',
      date: '2024-10-15',
      location: 'Sanggar Budaya Ketapang',
      views: 2840,
      likes: 156,
      tags: ['dayak', 'tradisional', 'tari', 'budaya']
    },
    {
      id: 2,
      title: 'Sunset di Pantai Muara Kendawangan',
      category: 'alam',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
      description: 'Momen magical sunset yang memukau di pantai terindah Ketapang',
      photographer: 'Maya Sari',
      date: '2024-09-20',
      location: 'Pantai Muara Kendawangan',
      views: 4521,
      likes: 298,
      tags: ['pantai', 'sunset', 'alam', 'pemandangan']
    },
    {
      id: 3,
      title: 'Festival Kuliner Tradisional',
      category: 'kuliner',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80',
      description: 'Ragam kuliner khas Ketapang yang menggugah selera',
      photographer: 'Budi Santoso',
      date: '2024-11-01',
      location: 'Pasar Flamboyan',
      views: 1876,
      likes: 134,
      tags: ['kuliner', 'makanan', 'tradisional', 'festival'],
      duration: '3:24'
    },
    {
      id: 4,
      title: 'Batik Motif Dayak Ketapang',
      category: 'budaya',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&q=80',
      description: 'Keindahan motif batik khas Dayak dengan makna filosofis mendalam',
      photographer: 'Siti Nurjanah',
      date: '2024-08-12',
      location: 'Galeri Batik Ketapang',
      views: 3214,
      likes: 187,
      tags: ['batik', 'dayak', 'motif', 'seni', 'tradisional']
    },
    {
      id: 5,
      title: 'Hutan Tropis Gunung Palung',
      category: 'alam',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80',
      description: 'Keanekaragaman hayati di Taman Nasional Gunung Palung',
      photographer: 'Eko Prasetyo',
      date: '2024-07-28',
      location: 'Taman Nasional Gunung Palung',
      views: 5432,
      likes: 356,
      tags: ['hutan', 'alam', 'konservasi', 'gunung palung']
    },
    {
      id: 6,
      title: 'Festival Budaya Ketapang 2024',
      category: 'festival',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80',
      description: 'Kemeriahan festival budaya tahunan dengan berbagai pertunjukan',
      photographer: 'Tim Dokumentasi',
      date: '2024-10-20',
      location: 'Alun-alun Ketapang',
      views: 8765,
      likes: 523,
      tags: ['festival', 'budaya', 'pertunjukan', 'ketapang'],
      duration: '8:15'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="galeri" className="py-28 bg-gradient-to-br from-ketapang-cream/30 via-white to-ketapang-sage/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-ketapang-gold/10 to-ketapang-amber/10 rounded-full blur-3xl animate-float-gentle"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-ketapang-forest/10 to-ketapang-moss/10 rounded-full blur-2xl animate-float-reverse"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gradient-mystical mb-8 leading-tight">
              Galeri Budaya Ketapang
            </h2>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-xl md:text-2xl text-ketapang-forest max-w-4xl mx-auto leading-relaxed font-poppins font-light mb-6">
              Jelajahi kekayaan visual budaya, alam, dan kehidupan masyarakat Ketapang melalui lensa para fotografer terbaik
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-10 flex justify-center animate-fade-in-up delay-500">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ketapang-gold to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-scale delay-700">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white shadow-lg'
                  : 'border-ketapang-gold/30 text-ketapang-forest hover:bg-ketapang-gold/10 hover:border-ketapang-gold'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="card-cultural cursor-pointer group animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-80 overflow-hidden rounded-t-3xl">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Video Play Button */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Overlay with Stats */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{item.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{item.likes}</span>
                            </div>
                          </div>
                          {item.duration && (
                            <Badge variant="secondary" className="bg-white/20 text-white">
                              {item.duration}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-ketapang-traditional/90 text-white backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>

                    {/* Favorite Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6 bg-white rounded-b-3xl">
                    <h3 className="text-xl font-playfair font-bold text-ketapang-earth mb-3 group-hover:text-ketapang-traditional transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-ketapang-forest/80 text-sm mb-4 line-clamp-2 leading-relaxed font-poppins">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-ketapang-forest/60 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.date).toLocaleDateString('id-ID', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Camera className="w-3 h-3" />
                        <span>{item.photographer}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-ketapang-forest/60">
                        <MapPin className="w-3 h-3" />
                        <span className="line-clamp-1">{item.location}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-ketapang-forest hover:text-ketapang-traditional">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-ketapang-forest hover:text-ketapang-traditional">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-ketapang-gold/30 text-ketapang-forest">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair font-bold text-ketapang-earth mb-2">
                      {item.title}
                    </h3>
                    <p className="text-ketapang-forest/80 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-ketapang-gold/30 text-ketapang-forest">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-ketapang-cream to-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl border border-ketapang-gold/20">
            <h3 className="text-3xl font-playfair font-bold text-ketapang-earth mb-4">
              Bagikan Momen Indah Anda
            </h3>
            <p className="text-ketapang-forest/80 mb-8 text-lg leading-relaxed">
              Punya foto atau video menarik dari Ketapang? Bagikan kepada kami dan jadilah bagian dari galeri budaya digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cultural">
                <Camera className="w-5 h-5 mr-2" />
                Upload Foto
              </Button>
              <Button variant="outline" className="border-ketapang-gold text-ketapang-forest hover:bg-ketapang-gold/10">
                Lihat Panduan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;