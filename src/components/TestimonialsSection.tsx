
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      location: "Jakarta",
      rating: 5,
      text: "Pengalaman luar biasa! Pantai Muara Kendawangan benar-benar memukau dengan sunset yang indah. Pelayanan ramah dan fasilitas lengkap.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b601?w=80&q=80"
    },
    {
      id: 2,
      name: "Ahmad Fauzi",
      location: "Pontianak",
      rating: 5,
      text: "Wisata budaya di Ketapang sangat menarik. Museum dan situs bersejarahnya memberikan wawasan mendalam tentang budaya lokal.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
    },
    {
      id: 3,
      name: "Maya Sari",
      location: "Surabaya",
      rating: 4,
      text: "Kuliner Ketapang sungguh menggugah selera! Mie Ketapang dan makanan tradisional lainnya wajib dicoba.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80"
    },
    {
      id: 4,
      name: "Budi Santoso",
      location: "Bandung",
      rating: 5,
      text: "Pertunjukan tari tradisional sangat memukau. Anak-anak sangat antusias melihat kebudayaan Dayak yang autentik.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80"
    },
    {
      id: 5,
      name: "Rina Hartati",
      location: "Medan",
      rating: 5,
      text: "Gunung Palung adalah surga bagi pecinta alam! Keanekaragaman hayatinya luar biasa dan pemandangannya sangat indah.",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&q=80"
    },
    {
      id: 6,
      name: "Dedi Kurniawan",
      location: "Yogyakarta",
      rating: 4,
      text: "Hospitality masyarakat Ketapang sangat baik. Mereka dengan ramah membantu dan memberikan informasi wisata.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce-in border-0 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-golden-beige/30" />
                
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-red-dark">{testimonial.name}</h4>
                    <p className="text-sm text-green-forest/60">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-green-forest/80 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-green-forest/80 mb-4">
            Sudah berkunjung ke Ketapang? Bagikan pengalaman Anda!
          </p>
          <button className="bg-red-soft hover:bg-red-dark text-white px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
            Tulis Testimoni
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
