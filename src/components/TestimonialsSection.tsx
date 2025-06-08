
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      location: "Jakarta",
      rating: 5,
      text: "Pengalaman luar biasa! Pantai Muara Kendawangan benar-benar memukau dengan sunset yang indah. Pelayanan ramah dan fasilitas lengkap membuat liburan sempurna.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b601?w=80&q=80",
      destination: "Pantai Muara Kendawangan",
      date: "2 minggu lalu"
    },
    {
      id: 2,
      name: "Ahmad Fauzi",
      location: "Pontianak",
      rating: 5,
      text: "Wisata budaya di Ketapang sangat menarik. Museum dan situs bersejarahnya memberikan wawasan mendalam tentang budaya lokal yang kaya.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
      destination: "Museum Ketapang",
      date: "1 bulan lalu"
    },
    {
      id: 3,
      name: "Maya Sari",
      location: "Surabaya",
      rating: 4,
      text: "Kuliner Ketapang sungguh menggugah selera! Mie Ketapang dan makanan tradisional lainnya wajib dicoba. Cita rasa autentik yang tak terlupakan.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
      destination: "Pasar Flamboyan",
      date: "3 minggu lalu"
    },
    {
      id: 4,
      name: "Budi Santoso",
      location: "Bandung",
      rating: 5,
      text: "Pertunjukan tari tradisional sangat memukau. Anak-anak sangat antusias melihat kebudayaan Dayak yang autentik dan penuh makna.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
      destination: "Sanggar Tari Dayak",
      date: "2 bulan lalu"
    },
    {
      id: 5,
      name: "Rina Hartati",
      location: "Medan",
      rating: 5,
      text: "Gunung Palung adalah surga bagi pecinta alam! Keanekaragaman hayatinya luar biasa dan pemandangannya sangat indah. Hiking yang menantang!",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&q=80",
      destination: "Gunung Palung",
      date: "1 minggu lalu"
    },
    {
      id: 6,
      name: "Dedi Kurniawan",
      location: "Yogyakarta",
      rating: 4,
      text: "Hospitality masyarakat Ketapang sangat baik. Mereka dengan ramah membantu dan memberikan informasi wisata yang sangat berguna.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
      destination: "Istana Kadriah",
      date: "2 minggu lalu"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-golden-beige fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-forest/10 to-golden-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-dark mb-4 animate-fade-in">
            Testimoni Pengunjung
          </h2>
          <p className="text-lg text-green-forest max-w-2xl mx-auto animate-fade-in">
            Dengarkan pengalaman wisatawan yang telah menjelajahi keindahan Ketapang
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-green-forest font-semibold">4.8/5</span>
            <span className="text-green-forest/60">dari 500+ ulasan</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-in border-0 bg-white relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-soft to-golden-beige"></div>
              
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-golden-beige/30" />
                
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-golden-beige/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-forest rounded-full p-1">
                      <ThumbsUp className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-red-dark">{testimonial.name}</h4>
                    <p className="text-sm text-green-forest/60">{testimonial.location}</p>
                    <p className="text-xs text-golden-beige bg-golden-beige/10 px-2 py-1 rounded-full inline-block mt-1">
                      {testimonial.destination}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-xs text-green-forest/60">{testimonial.date}</span>
                </div>

                <blockquote className="text-green-forest/80 text-sm leading-relaxed italic relative">
                  "{testimonial.text}"
                </blockquote>

                <div className="mt-4 pt-4 border-t border-golden-beige/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-forest/60">Ulasan Terverifikasi</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-forest rounded-full"></div>
                      <span className="text-xs text-green-forest font-medium">Terpercaya</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-red-dark mb-2">Bagikan Pengalaman Anda!</h3>
            <p className="text-green-forest/80 mb-4 text-sm">
              Sudah berkunjung ke Ketapang? Ceritakan pengalaman menakjubkan Anda
            </p>
            <button className="bg-gradient-to-r from-red-soft to-red-dark hover:from-red-dark hover:to-red-soft text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Tulis Testimoni
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
