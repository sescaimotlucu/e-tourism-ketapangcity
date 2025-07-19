import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Star, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EnhancedContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    visitDate: '',
    rating: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { id: 'info', label: 'Informasi Wisata', icon: Globe },
    { id: 'booking', label: 'Reservasi', icon: Calendar },
    { id: 'complaint', label: 'Keluhan', icon: MessageCircle },
    { id: 'suggestion', label: 'Saran', icon: Star },
    { id: 'other', label: 'Lainnya', icon: Mail }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 534 31234', '+62 534 31235'],
      subtitle: 'Senin - Jumat, 08:00 - 17:00 WIB'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ketapangtourism.id', 'booking@ketapangtourism.id'],
      subtitle: 'Respon dalam 24 jam'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Ahmad Yani No. 45', 'Ketapang, Kalimantan Barat 78811'],
      subtitle: 'Kantor Dinas Pariwisata'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu: 08:00 - 15:00'],
      subtitle: 'Minggu dan Hari Libur Tutup'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData(prev => ({ ...prev, category: categoryId }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        visitDate: '',
        rating: 0
      });
    } catch (error) {
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontak" className="py-28 bg-gradient-to-br from-ketapang-cream/40 via-white to-ketapang-sage/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-ketapang-gold/10 to-ketapang-amber/10 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-ketapang-forest/10 to-ketapang-moss/10 rounded-full blur-2xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gradient-mystical mb-8 leading-tight">
              Hubungi Kami
            </h2>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-xl md:text-2xl text-ketapang-forest max-w-4xl mx-auto leading-relaxed font-poppins font-light mb-6">
              Rencanakan perjalanan impian Anda ke Ketapang bersama tim ahli pariwisata kami
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-10 flex justify-center animate-fade-in-up delay-500">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ketapang-gold to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-playfair font-bold text-ketapang-earth mb-8">
                Informasi Kontak
              </h3>
            </div>

            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="card-traditional animate-fade-in-left hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-ketapang-gold to-ketapang-amber p-3 rounded-2xl shadow-lg animate-mystical-glow">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-playfair font-bold text-ketapang-earth text-lg mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-ketapang-forest/80 font-poppins mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-ketapang-forest/60 mt-2 font-poppins italic">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Response Badge */}
            <div className="animate-fade-in-left delay-500">
              <Card className="bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white border-0">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 animate-traditional-pulse" />
                  <h4 className="font-playfair font-bold text-xl mb-2">
                    Respon Cepat
                  </h4>
                  <p className="font-poppins text-sm opacity-90">
                    Tim customer service kami siap membantu 24/7 untuk memberikan pengalaman terbaik
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium animate-fade-in-right">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-playfair font-bold text-ketapang-earth">
                  Kirim Pesan
                </CardTitle>
                <p className="text-ketapang-forest/80 font-poppins">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda segera
                </p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-medium text-ketapang-earth">
                        Nama Lengkap *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                        required
                        className="border-ketapang-gold/30 focus:border-ketapang-gold rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-medium text-ketapang-earth">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        required
                        className="border-ketapang-gold/30 focus:border-ketapang-gold rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-medium text-ketapang-earth">
                        Nomor Telepon
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812 3456 7890"
                        className="border-ketapang-gold/30 focus:border-ketapang-gold rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-medium text-ketapang-earth">
                        Rencana Kunjungan
                      </label>
                      <Input
                        name="visitDate"
                        type="date"
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        className="border-ketapang-gold/30 focus:border-ketapang-gold rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-4">
                    <label className="text-sm font-poppins font-medium text-ketapang-earth">
                      Kategori Pertanyaan *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          type="button"
                          variant={formData.category === category.id ? "default" : "outline"}
                          onClick={() => handleCategoryChange(category.id)}
                          className={`rounded-xl font-poppins transition-all duration-300 ${
                            formData.category === category.id
                              ? 'bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white'
                              : 'border-ketapang-gold/30 text-ketapang-forest hover:bg-ketapang-gold/10'
                          }`}
                        >
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-medium text-ketapang-earth">
                      Subjek *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Masukkan subjek pesan"
                      required
                      className="border-ketapang-gold/30 focus:border-ketapang-gold rounded-xl"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-medium text-ketapang-earth">
                      Pesan *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                      required
                      rows={5}
                      className="border-ketapang-gold/30 focus:border-ketapang-gold rounded-xl resize-none"
                    />
                  </div>

                  {/* Rating (Optional) */}
                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-medium text-ketapang-earth">
                      Rating Pengalaman (Opsional)
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                          key={star}
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRatingChange(star)}
                          className="p-1 hover:bg-ketapang-gold/10"
                        >
                          <Star 
                            className={`w-6 h-6 ${
                              star <= formData.rating 
                                ? 'text-ketapang-gold fill-current' 
                                : 'text-ketapang-gold/30'
                            }`} 
                          />
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-cultural py-4 text-lg font-poppins font-semibold rounded-xl"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Mengirim...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Kirim Pesan</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </form>

                {/* Additional Info */}
                <div className="pt-6 border-t border-ketapang-gold/20">
                  <div className="flex items-center justify-center space-x-2 text-sm text-ketapang-forest/60">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-poppins">
                      Data Anda aman dan terlindungi. Kami berkomitmen menjaga privasi Anda.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-fade-in-up">
          <Card className="card-cultural">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair font-bold text-ketapang-earth">
                Pertanyaan yang Sering Diajukan
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "Bagaimana cara melakukan reservasi?",
                  a: "Anda dapat melakukan reservasi melalui formulir di atas, telepon, atau email. Tim kami akan membantu proses reservasi Anda."
                },
                {
                  q: "Apakah ada paket wisata khusus?",
                  a: "Ya, kami menyediakan berbagai paket wisata mulai dari wisata budaya, alam, hingga kuliner sesuai kebutuhan Anda."
                },
                {
                  q: "Bagaimana dengan transportasi?",
                  a: "Kami menyediakan layanan transportasi dan dapat membantu mengatur perjalanan dari bandara atau stasiun."
                },
                {
                  q: "Apakah ada pemandu wisata lokal?",
                  a: "Ya, kami memiliki pemandu wisata berpengalaman yang siap memberikan informasi lengkap tentang destinasi Ketapang."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-playfair font-semibold text-ketapang-earth">
                    {faq.q}
                  </h4>
                  <p className="text-ketapang-forest/80 font-poppins text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactForm;