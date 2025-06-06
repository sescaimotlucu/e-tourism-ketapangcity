
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Festival Budaya Ketapang 2024",
      excerpt: "Festival tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Ketapang akan digelar pada bulan Oktober 2024.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
      date: "2024-10-15",
      category: "Event",
      slug: "festival-budaya-ketapang-2024"
    },
    {
      id: 2,
      title: "Pembukaan Jalur Hiking Gunung Palung",
      excerpt: "Jalur hiking baru di Taman Nasional Gunung Palung resmi dibuka untuk umum dengan fasilitas yang lebih lengkap dan aman.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
      date: "2024-09-20",
      category: "Berita",
      slug: "pembukaan-jalur-hiking-gunung-palung"
    },
    {
      id: 3,
      title: "Kuliner Festival Ketapang",
      excerpt: "Event khusus untuk para pecinta kuliner dengan berbagai menu khas Ketapang dari chef-chef terbaik daerah.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
      date: "2024-11-05",
      category: "Event",
      slug: "kuliner-festival-ketapang"
    },
    {
      id: 4,
      title: "Renovasi Fasilitas Pantai Muara Kendawangan",
      excerpt: "Pemerintah daerah melakukan renovasi besar-besaran fasilitas pantai untuk meningkatkan kenyamanan wisatawan.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
      date: "2024-08-30",
      category: "Berita",
      slug: "renovasi-fasilitas-pantai-muara-kendawangan"
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
            Berita & Event
          </h2>
          <p className="text-lg text-green-forest max-w-2xl mx-auto animate-fade-in">
            Ikuti perkembangan terbaru dan event menarik di Kabupaten Ketapang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article, index) => (
            <Card 
              key={article.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    article.category === 'Event' 
                      ? 'bg-red-soft text-white' 
                      : 'bg-golden-beige text-red-dark'
                  }`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <div className="flex items-center text-xs text-green-forest/60 mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(article.date)}
                </div>

                <h3 className="text-lg font-bold text-red-dark mb-3 group-hover:text-red-soft transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-green-forest/80 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-red-soft hover:text-red-dark group-hover:translate-x-2 transition-all duration-300"
                >
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-red-soft text-red-soft hover:bg-red-soft hover:text-white px-8 py-3"
          >
            Lihat Semua Berita & Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
