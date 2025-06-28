
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ID: {
    // Navigation
    beranda: "Beranda",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Kontak",
    tentang: "Tentang",
    artikel: "Artikel",
    peta: "Peta",
    acara: "Acara",
    
    // Hero Section
    heroTitle1: "Warisan Budaya Nusantara",
    heroSubtitle1: "Ketapang: Keindahan Alam & Budaya di Kalimantan Barat",
    heroTitle2: "Destinasi Wisata Alam",
    heroSubtitle2: "Jelajahi keindahan alam Ketapang yang menawan",
    heroTitle3: "Seni & Budaya Tradisional",
    heroSubtitle3: "Saksikan pertunjukan seni tradisional yang memukau",
    exploreNow: "Jelajahi Sekarang",
    learnMore: "Pelajari Lebih Lanjut",
    
    // Categories
    categoriesTitle: "Jelajahi Keajaiban Ketapang",
    categoriesSubtitle: "Temukan pesona wisata alam, budaya, kuliner, dan seni tradisional yang kaya akan nilai sejarah dan kearifan lokal",
    wisataAlam: "Wisata Alam",
    wisataBudaya: "Wisata Budaya", 
    wisataKuliner: "Wisata Kuliner",
    wisataTari: "Wisata Tari",
    alamDesc: "Jelajahi keindahan alam Ketapang dengan hutan tropis, pantai eksotis, dan air terjun yang memukau",
    budayaDesc: "Temukan warisan budaya Melayu dan Dayak melalui bangunan bersejarah dan tradisi turun temurun",
    kulinerDesc: "Nikmati cita rasa autentik kuliner Ketapang dengan rempah khas Kalimantan Barat",
    tariDesc: "Saksikan keanggunan tarian tradisional Jepin dan Monong yang sarat makna budaya",
    destinasiCount: "Destinasi",
    situsCount: "Situs Bersejarah",
    kulinerCount: "Kuliner Khas",
    pertunjukanCount: "Pertunjukan",
    lihatSemua: "Lihat Semua",
    tertarikBerkunjung: "Tertarik untuk menjelajahi keajaiban Ketapang?",
    lihatGaleri: "Lihat Galeri",
    
    // Gallery
    galeriWisata: "Galeri Wisata Ketapang",
    galeriDesc: "Jelajahi kekayaan visual Ketapang melalui koleksi foto wisata alam, budaya, kuliner, dan seni. Setiap gambar adalah cerminan dari kekayaan lokal yang tak ternilai.",
    filterGaleri: "Filter Galeri",
    semua: "Semua",
    bagikan: "Bagikan",
    lihatAsli: "Lihat Asli",
    tidakAdaGambar: "Tidak ada gambar ditemukan untuk kategori ini",
    galeriTerpopuler: "Galeri Favorit Pengunjung",
    galeriTerpopulerDesc: "Foto-foto paling banyak dilihat dan disukai oleh pengunjung website",
    kenangan: "Kenangan Terbaik dari Ketapang",
    
    // Statistics
    statisticsTitle: "Ketapang dalam Angka",
    statisticsDesc: "Data terkini mengenai pariwisata dan budaya Ketapang",
    pengunjungTahun: "Pengunjung/Tahun",
    destinasiAktif: "Destinasi Aktif",
    eventBudaya: "Event Budaya",
    komunitasLokal: "Komunitas Lokal",
    
    // Testimonials
    testimonialsTitle: "Cerita Pengunjung",
    testimonialsDesc: "Dengarkan pengalaman tak terlupakan dari para wisatawan",
    
    // News & Articles
    newsTitle: "Berita & Artikel Terkini",
    newsDesc: "Informasi terbaru seputar wisata dan budaya Ketapang",
    bacaSelengkapnya: "Baca Selengkapnya",
    
    // Contact
    contactTitle: "Hubungi Kami",
    contactDesc: "Ada pertanyaan? Jangan ragu untuk menghubungi kami",
    nama: "Nama Lengkap",
    email: "Email",
    pesan: "Pesan",
    kirimPesan: "Kirim Pesan",
    alamat: "Alamat",
    telepon: "Telepon",
    jamOperasional: "Jam Operasional",
    seninJumat: "Senin - Jumat: 08:00 - 17:00",
    sabtuMinggu: "Sabtu - Minggu: 09:00 - 15:00",
    
    // Detail Pages
    tentangDestinasi: "Tentang Destinasi",
    galeriFoto: "Galeri Foto",
    fasilitas: "Fasilitas",
    tipsBerkunjung: "Tips Berkunjung",
    kembaliKe: "Kembali ke",
    kembaliKeBeranda: "Kembali ke Beranda",
    jam: "jam",
    ulasan: "ulasan",
    lihatDetail: "Lihat Detail",
    hubungiInfo: "Hubungi kami untuk informasi lebih lanjut",
    hubungiSekarang: "Hubungi Sekarang",
    notFound: "Halaman Tidak Ditemukan",
    
    // Map
    petaLokasi: "Peta Lokasi",
    petaDesc: "Temukan lokasi destinasi wisata dan budaya Ketapang",
    
    // Events
    eventTitle: "Acara & Festival Budaya",
    eventDesc: "Jadwal acara budaya dan festival tradisional Ketapang",
    tanggal: "Tanggal",
    waktu: "Waktu",
    lokasi: "Lokasi",
    tiketMasuk: "Tiket Masuk",
    gratis: "Gratis",
    
    // Footer
    footerDesc: "Portal resmi pariwisata dan budaya Kabupaten Ketapang, Kalimantan Barat",
    linkCepat: "Link Cepat",
    informasi: "Informasi",
    sosialMedia: "Media Sosial",
    hargaTiket: "Harga Tiket",
    caraMenuju: "Cara Menuju",
    cuaca: "Cuaca",
    
    // Admin specific
    dashboard: "Dashboard",
    kelola: "Kelola",
    tambah: "Tambah",
    edit: "Edit",
    hapus: "Hapus",
    simpan: "Simpan",
    batal: "Batal",
    upload: "Upload",
    kategori: "Kategori",
    deskripsi: "Deskripsi",
    foto: "Foto",
    video: "Video",
    status: "Status",
    aktif: "Aktif",
    nonaktif: "Non-aktif",
    
    // Loading & Messages
    memuat: "Memuat...",
    berhasil: "Berhasil",
    gagal: "Gagal",
    konfirmasi: "Konfirmasi",
    yakin: "Apakah Anda yakin?",
    tidakBisaDibatalkan: "Tindakan ini tidak dapat dibatalkan",
  },
  EN: {
    // Navigation
    beranda: "Home",
    destinasi: "Destinations",
    galeri: "Gallery",
    kontak: "Contact",
    tentang: "About",
    artikel: "Articles",
    peta: "Map",
    acara: "Events",
    
    // Hero Section
    heroTitle1: "Indonesian Cultural Heritage",
    heroSubtitle1: "Ketapang: Natural Beauty & Culture in West Kalimantan",
    heroTitle2: "Natural Tourism Destinations",
    heroSubtitle2: "Explore the captivating natural beauty of Ketapang",
    heroTitle3: "Traditional Arts & Culture",
    heroSubtitle3: "Witness stunning traditional art performances",
    exploreNow: "Explore Now",
    learnMore: "Learn More",
    
    // Categories
    categoriesTitle: "Discover Ketapang's Wonders",
    categoriesSubtitle: "Discover the charm of natural tourism, culture, culinary, and traditional arts rich in historical value and local wisdom",
    wisataAlam: "Nature Tourism",
    wisataBudaya: "Cultural Tourism",
    wisataKuliner: "Culinary Tourism",
    wisataTari: "Dance Tourism",
    alamDesc: "Explore Ketapang's natural beauty with tropical forests, exotic beaches, and stunning waterfalls",
    budayaDesc: "Discover Malay and Dayak cultural heritage through historic buildings and ancestral traditions",
    kulinerDesc: "Enjoy authentic Ketapang culinary flavors with distinctive West Kalimantan spices",
    tariDesc: "Witness the elegance of traditional Jepin and Monong dances rich in cultural meaning",
    destinasiCount: "Destinations",
    situsCount: "Historic Sites",
    kulinerCount: "Local Cuisines",
    pertunjukanCount: "Performances",
    lihatSemua: "View All",
    tertarikBerkunjung: "Interested in exploring Ketapang's wonders?",
    lihatGaleri: "View Gallery",
    
    // Gallery
    galeriWisata: "Ketapang Tourism Gallery",
    galeriDesc: "Explore Ketapang's visual richness through a collection of nature, culture, culinary, and art tourism photos. Each image reflects invaluable local wealth.",
    filterGaleri: "Filter Gallery",
    semua: "All",
    bagikan: "Share",
    lihatAsli: "View Original",
    tidakAdaGambar: "No images found for this category",
    galeriTerpopuler: "Visitor's Favorite Gallery",
    galeriTerpopulerDesc: "Most viewed and liked photos by website visitors",
    kenangan: "Best Memories from Ketapang",
    
    // Statistics
    statisticsTitle: "Ketapang in Numbers",
    statisticsDesc: "Latest data on Ketapang tourism and culture",
    pengunjungTahun: "Visitors/Year",
    destinasiAktif: "Active Destinations",
    eventBudaya: "Cultural Events",
    komunitasLokal: "Local Communities",
    
    // Testimonials
    testimonialsTitle: "Visitor Stories",
    testimonialsDesc: "Listen to unforgettable experiences from travelers",
    
    // News & Articles
    newsTitle: "Latest News & Articles",
    newsDesc: "Latest information about Ketapang tourism and culture",
    bacaSelengkapnya: "Read More",
    
    // Contact
    contactTitle: "Contact Us",
    contactDesc: "Have questions? Don't hesitate to contact us",
    nama: "Full Name",
    email: "Email",
    pesan: "Message",
    kirimPesan: "Send Message",
    alamat: "Address",
    telepon: "Phone",
    jamOperasional: "Operating Hours",
    seninJumat: "Monday - Friday: 08:00 - 17:00",
    sabtuMinggu: "Saturday - Sunday: 09:00 - 15:00",
    
    // Detail Pages
    tentangDestinasi: "About Destination",
    galeriFoto: "Photo Gallery",
    fasilitas: "Facilities",
    tipsBerkunjung: "Visiting Tips",
    kembaliKe: "Back to",
    kembaliKeBeranda: "Back to Home",
    jam: "hours",
    ulasan: "reviews",
    lihatDetail: "View Details",
    hubungiInfo: "Contact us for more information",
    hubungiSekarang: "Contact Now",
    notFound: "Page Not Found",
    
    // Map
    petaLokasi: "Location Map",
    petaDesc: "Find locations of Ketapang tourism and cultural destinations",
    
    // Events
    eventTitle: "Cultural Events & Festivals",
    eventDesc: "Schedule of cultural events and traditional festivals in Ketapang",
    tanggal: "Date",
    waktu: "Time",
    lokasi: "Location",
    tiketMasuk: "Entrance Ticket",
    gratis: "Free",
    
    // Footer
    footerDesc: "Official tourism and culture portal of Ketapang Regency, West Kalimantan",
    linkCepat: "Quick Links",
    informasi: "Information",
    sosialMedia: "Social Media",
    hargaTiket: "Ticket Price",
    caraMenuju: "How to Get There",
    cuaca: "Weather",
    
    // Admin specific
    dashboard: "Dashboard",
    kelola: "Manage",
    tambah: "Add",
    edit: "Edit",
    hapus: "Delete",
    simpan: "Save",
    batal: "Cancel",
    upload: "Upload",
    kategori: "Category",
    deskripsi: "Description",
    foto: "Photo",
    video: "Video",
    status: "Status",
    aktif: "Active",
    nonaktif: "Inactive",
    
    // Loading & Messages
    memuat: "Loading...",
    berhasil: "Success",
    gagal: "Failed",
    konfirmasi: "Confirmation",
    yakin: "Are you sure?",
    tidakBisaDibatalkan: "This action cannot be undone",
  },
  MY: {
    // Navigation
    beranda: "Laman Utama",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Hubungi",
    tentang: "Tentang",
    artikel: "Artikel",
    peta: "Peta",
    acara: "Acara",
    
    // Hero Section
    heroTitle1: "Warisan Budaya Nusantara",
    heroSubtitle1: "Ketapang: Keindahan Alam & Budaya di Kalimantan Barat",
    heroTitle2: "Destinasi Pelancongan Alam",
    heroSubtitle2: "Jelajahi keindahan alam Ketapang yang menawan",
    heroTitle3: "Seni & Budaya Tradisional",
    heroSubtitle3: "Saksikan persembahan seni tradisional yang memukau",
    exploreNow: "Jelajah Sekarang",
    learnMore: "Ketahui Lebih Lanjut",
    
    // Categories
    categoriesTitle: "Temui Keajaiban Ketapang",
    categoriesSubtitle: "Temui pesona pelancongan alam, budaya, masakan, dan seni tradisional yang kaya dengan nilai sejarah dan kebijaksanaan tempatan",
    wisataAlam: "Pelancongan Alam",
    wisataBudaya: "Pelancongan Budaya",
    wisataKuliner: "Pelancongan Kuliner",
    wisataTari: "Pelancongan Tarian",
    alamDesc: "Jelajahi keindahan alam Ketapang dengan hutan tropika, pantai eksotik, dan air terjun yang memukau",
    budayaDesc: "Temui warisan budaya Melayu dan Dayak melalui bangunan bersejarah dan tradisi turun temurun",
    kulinerDesc: "Nikmati cita rasa autentik masakan Ketapang dengan rempah khas Kalimantan Barat",
    tariDesc: "Saksikan keanggunan tarian tradisional Jepin dan Monong yang sarat makna budaya",
    destinasiCount: "Destinasi",
    situsCount: "Tapak Bersejarah",
    kulinerCount: "Masakan Khas",
    pertunjukanCount: "Persembahan",
    lihatSemua: "Lihat Semua",
    tertarikBerkunjung: "Berminat untuk menjelajahi keajaiban Ketapang?",
    lihatGaleri: "Lihat Galeri",
    
    // Gallery
    galeriWisata: "Galeri Pelancongan Ketapang",
    galeriDesc: "Jelajahi kekayaan visual Ketapang melalui koleksi foto pelancongan alam, budaya, kuliner, dan seni. Setiap gambar adalah cerminan kekayaan tempatan yang tak ternilai.",
    filterGaleri: "Tapis Galeri",
    semua: "Semua",
    bagikan: "Kongsi",
    lihatAsli: "Lihat Asal",
    tidakAdaGambar: "Tiada gambar dijumpai untuk kategori ini",
    galeriTerpopuler: "Galeri Kegemaran Pelawat",
    galeriTerpopulerDesc: "Foto paling banyak dilihat dan disukai oleh pelawat laman web",
    kenangan: "Kenangan Terbaik dari Ketapang",
    
    // Statistics
    statisticsTitle: "Ketapang dalam Nombor",
    statisticsDesc: "Data terkini mengenai pelancongan dan budaya Ketapang",
    pengunjungTahun: "Pelawat/Tahun",
    destinasiAktif: "Destinasi Aktif",
    eventBudaya: "Acara Budaya",
    komunitasLokal: "Komuniti Tempatan",
    
    // Testimonials
    testimonialsTitle: "Cerita Pelawat",
    testimonialsDesc: "Dengar pengalaman tak terlupakan dari para pelancong",
    
    // News & Articles
    newsTitle: "Berita & Artikel Terkini",
    newsDesc: "Maklumat terbaru mengenai pelancongan dan budaya Ketapang",
    bacaSelengkapnya: "Baca Selanjutnya",
    
    // Contact
    contactTitle: "Hubungi Kami",
    contactDesc: "Ada soalan? Jangan teragak-agak untuk hubungi kami",
    nama: "Nama Penuh",
    email: "E-mel",
    pesan: "Mesej",
    kirimPesan: "Hantar Mesej",
    alamat: "Alamat",
    telepon: "Telefon",
    jamOperasional: "Waktu Operasi",
    seninJumat: "Isnin - Jumaat: 08:00 - 17:00",
    sabtuMinggu: "Sabtu - Ahad: 09:00 - 15:00",
    
    // Detail Pages
    tentangDestinasi: "Tentang Destinasi",
    galeriFoto: "Galeri Foto",
    fasilitas: "Kemudahan",
    tipsBerkunjung: "Tips Melawat",
    kembaliKe: "Kembali ke",
    kembaliKeBeranda: "Kembali ke Laman Utama",
    jam: "jam",
    ulasan: "ulasan",
    lihatDetail: "Lihat Butiran",
    hubungiInfo: "Hubungi kami untuk maklumat lanjut",
    hubungiSekarang: "Hubungi Sekarang",
    notFound: "Halaman Tidak Dijumpai",
    
    // Map
    petaLokasi: "Peta Lokasi",
    petaDesc: "Cari lokasi destinasi pelancongan dan budaya Ketapang",
    
    // Events
    eventTitle: "Acara & Festival Budaya",
    eventDesc: "Jadual acara budaya dan festival tradisional Ketapang",
    tanggal: "Tarikh",
    waktu: "Masa",
    lokasi: "Lokasi",
    tiketMasuk: "Tiket Masuk",
    gratis: "Percuma",
    
    // Footer
    footerDesc: "Portal rasmi pelancongan dan budaya Kabupaten Ketapang, Kalimantan Barat",
    linkCepat: "Pautan Pantas",
    informasi: "Maklumat",
    sosialMedia: "Media Sosial",
    hargaTiket: "Harga Tiket",
    caraMenuju: "Cara Pergi",
    cuaca: "Cuaca",
    
    // Admin specific
    dashboard: "Papan Pemuka",
    kelola: "Urus",
    tambah: "Tambah",
    edit: "Edit",
    hapus: "Padam",
    simpan: "Simpan",
    batal: "Batal",
    upload: "Muat Naik",
    kategori: "Kategori",
    deskripsi: "Penerangan",
    foto: "Foto",
    video: "Video",
    status: "Status",
    aktif: "Aktif",
    nonaktif: "Tidak Aktif",
    
    // Loading & Messages
    memuat: "Memuatkan...",
    berhasil: "Berjaya",
    gagal: "Gagal",
    konfirmasi: "Pengesahan",
    yakin: "Adakah anda pasti?",
    tidakBisaDibatalkan: "Tindakan ini tidak boleh dibatalkan",
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('preferred-language') || 'ID';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations.ID] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
