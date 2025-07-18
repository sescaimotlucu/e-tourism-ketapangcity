
import { Calendar, Clock, ArrowRight, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Festival Budaya Ketapang 2024",
      excerpt: "Festival tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Ketapang akan digelar pada bulan Oktober 2024 dengan kemeriahan yang tak terlupakan.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      date: "2024-10-15",
      category: "Event",
      slug: "festival-budaya-ketapang-2024",
      views: 1234,
      likes: 89,
      author: "Tim Editorial",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Pembukaan Jalur Hiking Gunung Palung",
      excerpt: "Jalur hiking baru di Taman Nasional Gunung Palung resmi dibuka untuk umum dengan fasilitas yang lebih lengkap, aman, dan ramah lingkungan.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
      date: "2024-09-20",
      category: "Berita",
      slug: "pembukaan-jalur-hiking-gunung-palung",
      views: 2156,
      likes: 156,
      author: "Ahmad Rizki",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "Kuliner Festival Ketapang",
      excerpt: "Event khusus untuk para pecinta kuliner dengan berbagai menu khas Ketapang dari chef-chef terbaik daerah yang akan memanjakan lidah Anda.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      date: "2024-11-05",
      category: "Event",
      slug: "kuliner-festival-ketapang",
      views: 987,
      likes: 67,
      author: "Maya Sari",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Renovasi Fasilitas Pantai Muara Kendawangan",
      excerpt: "Pemerintah daerah melakukan renovasi besar-besaran fasilitas pantai untuk meningkatkan kenyamanan wisatawan dengan standar internasional.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      date: "2024-08-30",
      category: "Berita",
      slug: "renovasi-fasilitas-pantai-muara-kendawangan",
      views: 1876,
      likes: 134,
      author: "Budi Santoso",
      readTime: "6 min"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-dark mb-4 animate-fade-in">
            Berita & Event Terkini
          </h2>
          <p className="text-lg text-green-forest max-w-2xl mx-auto animate-fade-in">
            Ikuti perkembangan terbaru dan event menarik di Kabupaten Ketapang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((article, index) => (
            <Card 
              key={article.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-in border-0 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    article.category === 'Event' 
                      ? 'bg-red-soft/90 text-white' 
                      : 'bg-golden-beige/90 text-red-dark'
                  }`}>
                    {article.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white/90 text-xs">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-3 w-3" />
                      <span>{article.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <div className="flex items-center text-xs text-green-forest/60 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-red-dark mb-3 group-hover:text-red-soft transition-colors duration-300 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-green-forest/80 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-green-forest/60">Oleh {article.author}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-0 h-auto text-red-soft hover:text-red-dark group-hover:translate-x-1 transition-all duration-300"
                  >
                    Baca
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline" 
              className="border-red-soft text-red-soft hover:bg-red-soft hover:text-white px-8 py-3 transition-all duration-300"
            >
              Lihat Semua Berita
            </Button>
            <Button 
              className="bg-gradient-to-r from-golden-beige to-red-soft text-red-dark hover:from-red-soft hover:to-golden-beige hover:text-white px-8 py-3 transition-all duration-300"
            >
              Daftar Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
