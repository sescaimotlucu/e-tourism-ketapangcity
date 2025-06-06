
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    "Destinasi Wisata",
    "Paket Wisata",
    "Galeri Foto",
    "Berita & Event",
    "Tentang Kami",
    "Kontak"
  ];

  return (
    <footer className="bg-red-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-golden-beige" />
              <div>
                <h3 className="text-xl font-bold">Ketapang</h3>
                <p className="text-golden-beige text-sm">Wisata & Budaya</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Jelajahi keindahan alam dan kekayaan budaya Kabupaten Ketapang. 
              Destinasi wisata terbaik di Kalimantan Barat menanti Anda.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-red-soft rounded-full flex items-center justify-center hover:bg-golden-beige hover:text-red-dark transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden-beige">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-golden-beige transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden-beige">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-golden-beige flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Jl. Diponegoro No. 1, Ketapang, Kalimantan Barat
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-golden-beige flex-shrink-0" />
                <span className="text-white/80 text-sm">+62 534 31234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-golden-beige flex-shrink-0" />
                <span className="text-white/80 text-sm">info@wisataketapang.go.id</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden-beige">Newsletter</h4>
            <p className="text-white/80 text-sm mb-4">
              Dapatkan informasi terbaru tentang destinasi wisata dan event menarik.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-3 py-2 bg-red-soft/20 border border-red-soft rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-golden-beige transition-colors duration-300"
              />
              <button className="w-full bg-golden-beige text-red-dark py-2 rounded-lg font-medium hover:bg-golden-beige/90 transition-colors duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-soft mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Ketapang Wisata & Budaya. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-golden-beige transition-colors duration-300">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-white/60 hover:text-golden-beige transition-colors duration-300">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
