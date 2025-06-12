
import { useState } from 'react';
import { X, Filter, Share2, Download, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState('semua');

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
      alt: "Gunung Palung National Park",
      title: "Taman Nasional Gunung Palung",
      category: "alam",
      description: "Hutan hujan tropis dengan keanekaragaman hayati tinggi"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
      alt: "Pantai Muara Kendawangan",
      title: "Pantai Muara Kendawangan",
      category: "alam",
      description: "Pantai indah dengan air jernih dan pasir putih"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80",
      alt: "Keraton Ketapang",
      title: "Keraton Ketapang",
      category: "budaya",
      description: "Istana bersejarah dengan arsitektur Melayu klasik"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Rumah Panjang Dayak",
      title: "Rumah Panjang Dayak",
      category: "budaya",
      description: "Rumah tradisional suku Dayak dengan arsitektur unik"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
      alt: "Asam Pedas Ikan Patin",
      title: "Asam Pedas Ikan Patin",
      category: "kuliner",
      description: "Hidangan khas dengan kuah asam segar"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
      alt: "Bubur Pedas Ketapang",
      title: "Bubur Pedas Ketapang",
      category: "kuliner",
      description: "Bubur tradisional dengan rempah khas Ketapang"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
      alt: "Tari Jepin",
      title: "Tari Jepin",
      category: "seni",
      description: "Tarian tradisional Melayu dengan gerakan lemah gemulai"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      alt: "Tari Monong",
      title: "Tari Monong",
      category: "seni",
      description: "Tarian perang tradisional suku Dayak"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      alt: "Air Terjun Riam Pangar",
      title: "Air Terjun Riam Pangar",
      category: "alam",
      description: "Air terjun tersembunyi di tengah hutan"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      alt: "Festival Budaya Ketapang",
      title: "Festival Budaya Ketapang",
      category: "budaya",
      description: "Perayaan budaya tahunan yang menampilkan kesenian lokal"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80",
      alt: "Keripik Tembarang",
      title: "Keripik Tembarang",
      category: "kuliner",
      description: "Camilan tradisional dari buah tembarang"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
      alt: "Jorong-jorong Ketapang",
      title: "Jorong-jorong Ketapang",
      category: "kuliner",
      description: "Kue tradisional dengan cita rasa manis khas"
    }
  ];

  const categories = [
    { value: 'semua', label: t('semua') },
    { value: 'alam', label: t('wisataAlam') },
    { value: 'budaya', label: t('wisataBudaya') },
    { value: 'kuliner', label: t('wisataKuliner') },
    { value: 'seni', label: t('wisataTari') }
  ];

  const filteredItems = filter === 'semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (item: any) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const shareImage = async (item: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-beige/5 via-green-forest/5 to-red-soft/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-dark/95 to-green-forest/90">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-golden-beige/20 backdrop-blur-md rounded-2xl mb-8">
              <Camera className="h-10 w-10 text-golden-beige" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              {t('galeriWisata')}
            </h1>
            <p className="text-lg md:text-xl text-golden-beige/90 max-w-3xl mx-auto leading-relaxed">
              {t('galeriDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-green-forest" />
              <span className="font-poppins font-medium text-green-forest">
                {t('filterGaleri')}:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category.value)}
                  className={`rounded-full font-poppins transition-all duration-300 ${
                    filter === category.value
                      ? 'bg-green-forest hover:bg-green-forest/90 text-white'
                      : 'border-green-forest/30 text-green-forest hover:bg-green-forest/10'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group cursor-pointer overflow-hidden card-hover border-0 bg-white rounded-2xl animate-zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="font-playfair font-bold text-lg mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium text-white backdrop-blur-md ${
                      item.category === 'alam' ? 'bg-green-forest/80' :
                      item.category === 'budaya' ? 'bg-red-soft/80' :
                      item.category === 'kuliner' ? 'bg-golden-beige/80' :
                      'bg-red-dark/80'
                    }`}>
                      {t(`wisata${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`)}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-green-forest/30 mx-auto mb-4" />
              <p className="text-green-forest/60 font-poppins text-lg">
                {t('tidakAdaGambar')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-golden-beige hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white font-playfair font-bold text-2xl mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/90 font-poppins leading-relaxed mb-4">
                {selectedImage.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareImage(selectedImage)}
                  className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  {t('bagikan')}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(selectedImage.src, '_blank')}
                  className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t('lihatAsli')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
