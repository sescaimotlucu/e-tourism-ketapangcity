import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  id: {
    // Hero Section
    heroTitle1: "Keindahan Alam Ketapang",
    heroTitle2: "Warisan Budaya Nusantara",
    heroTitle3: "Wisata Alam Eksotis",
    heroSubtitle1: "Jelajahi pesona gunung dan hutan yang memukau di jantung Kalimantan Barat",
    heroSubtitle2: "Temukan kekayaan tradisi dan adat istiadat yang telah dilestarikan turun temurun",
    heroSubtitle3: "Rasakan pengalaman tak terlupakan di alam bebas yang masih alami dan asri",
    exploreNow: "Jelajahi Sekarang",
    learnMore: "Pelajari Lebih Lanjut",
    
    // Categories
    categoriesTitle: "Kategori Wisata",
    categoriesSubtitle: "Temukan beragam destinasi wisata yang menawarkan pengalaman tak terlupakan di Kabupaten Ketapang yang mempesona",
    wisataAlam: "Wisata Alam",
    wisataBudaya: "Wisata Budaya",
    wisataKuliner: "Wisata Kuliner", 
    wisataTari: "Wisata Tari",
    alamDesc: "Jelajahi keindahan alam Ketapang yang memukau dengan panorama eksotis dan udara segar pegunungan",
    budayaDesc: "Temukan warisan budaya dan tradisi lokal yang autentik termasuk Keraton Ketapang, rumah panjang Dayak, dan festival budaya",
    kulinerDesc: "Nikmati kelezatan masakan khas Ketapang seperti Asam Pedas Ikan Patin, Bubur Pedas, Keripik Tembarang, dan Jorong-jorong",
    tariDesc: "Saksikan pertunjukan tari tradisional yang memukau seperti Tari Jepin, Monong, dan musik tradisional yang mempesona hati",
    destinasiCount: "+ Destinasi",
    situsCount: "+ Situs Budaya",
    kulinerCount: "+ Kuliner Khas", 
    pertunjukanCount: "+ Pertunjukan",
    lihatSemua: "Lihat Semua",
    lihatGaleri: "Lihat Galeri",
    
    // Navigation
    beranda: "Beranda",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Kontak",
    kalenderBudaya: "Kalender Budaya",
    petaWisata: "Peta Wisata",
    
    // Category Pages
    kembaliKeBeranda: "Kembali ke Beranda",
    alamTitle: "Wisata Alam Ketapang",
    alamDescription: "Jelajahi keindahan alam Ketapang yang memukau dengan pegunungan, hutan tropis, dan pantai eksotis",
    budayaTitle: "Wisata Budaya Ketapang",
    budayaDescription: "Temukan warisan budaya Dayak dan Melayu, Keraton bersejarah, rumah panjang tradisional, dan festival budaya",
    kulinerTitle: "Kuliner Khas Ketapang",
    kulinerDescription: "Nikmati kelezatan masakan autentik Ketapang dengan cita rasa khas Kalimantan Barat",
    tariTitle: "Seni Tari Tradisional",
    tariDescription: "Saksikan keindahan Tari Jepin, Monong, dan pertunjukan seni tradisional Dayak dan Melayu",
    
    // Destination Detail
    kembaliKe: "Kembali ke",
    tentangDestinasi: "Tentang Destinasi",
    galeriFoto: "Galeri Foto",
    galeriVideo: "Galeri Video",
    fasilitas: "Fasilitas",
    tipsBerkunjung: "Tips Berkunjung",
    sejarahBudaya: "Sejarah & Budaya",
    tertarikBerkunjung: "Tertarik Berkunjung?",
    hubungiInfo: "Hubungi kami untuk informasi lebih lanjut",
    hubungiSekarang: "Hubungi Sekarang",
    lihatDetail: "Lihat Detail",
    shareDestinasi: "Bagikan Destinasi",
    tambahFavorit: "Tambah ke Favorit",
    ulasan: "ulasan",
    jam: "jam",
    hari: "hari",
    
    // Cultural Content
    budayaDayak: "Budaya Dayak",
    budayaMelayu: "Budaya Melayu",
    keratonKetapang: "Keraton Ketapang",
    rumahPanjang: "Rumah Panjang Dayak",
    festivalBudaya: "Festival Budaya",
    tariJepin: "Tari Jepin",
    tariMonong: "Tari Monong",
    
    // Culinary Content
    asamPedasIkanPatin: "Asam Pedas Ikan Patin",
    buburPedas: "Bubur Pedas",
    keripikTembarang: "Keripik Tembarang",
    jorongJorong: "Jorong-jorong",
    makananTradisional: "Makanan Tradisional",
    
    // Interactive Features
    galeriInteraktif: "Galeri Interaktif",
    ceritaRakyat: "Cerita Rakyat",
    sejarahLokal: "Sejarah Lokal",
    quizBudaya: "Quiz Budaya",
    kalenderAcara: "Kalender Acara",
    petaInteraktif: "Peta Interaktif",
    
    // Common
    loading: "Memuat...",
    error: "Terjadi kesalahan",
    notFound: "Tidak ditemukan",
    selengkapnya: "Selengkapnya",
    tutup: "Tutup"
  },
  en: {
    // Hero Section
    heroTitle1: "Natural Beauty of Ketapang",
    heroTitle2: "Cultural Heritage of the Archipelago",
    heroTitle3: "Exotic Nature Tourism",
    heroSubtitle1: "Explore the stunning charm of mountains and forests in the heart of West Kalimantan",
    heroSubtitle2: "Discover the wealth of traditions and customs that have been preserved for generations",
    heroSubtitle3: "Experience unforgettable moments in pristine and natural wilderness",
    exploreNow: "Explore Now",
    learnMore: "Learn More",
    
    // Categories
    categoriesTitle: "Tourism Categories",
    categoriesSubtitle: "Discover various tourist destinations that offer unforgettable experiences in the charming Ketapang Regency",
    wisataAlam: "Nature Tourism",
    wisataBudaya: "Cultural Tourism",
    wisataKuliner: "Culinary Tourism",
    wisataTari: "Traditional Dance",
    alamDesc: "Explore the stunning natural beauty of Ketapang with exotic panoramas and fresh mountain air",
    budayaDesc: "Discover authentic cultural heritage including Ketapang Palace, Dayak longhouses, and cultural festivals",
    kulinerDesc: "Enjoy the delicious specialties of Ketapang such as Asam Pedas Ikan Patin, Bubur Pedas, Keripik Tembarang, and Jorong-jorong",
    tariDesc: "Witness stunning traditional dance performances like Tari Jepin, Monong, and enchanting traditional music",
    destinasiCount: "+ Destinations",
    situsCount: "+ Cultural Sites",
    kulinerCount: "+ Local Culinary",
    pertunjukanCount: "+ Performances",
    lihatSemua: "View All",
    lihatGaleri: "View Gallery",
    
    // Navigation
    beranda: "Home",
    destinasi: "Destinations",
    galeri: "Gallery",
    kontak: "Contact",
    kalenderBudaya: "Cultural Calendar",
    petaWisata: "Tourism Map",
    
    // Category Pages
    kembaliKeBeranda: "Back to Home",
    alamTitle: "Ketapang Nature Tourism",
    alamDescription: "Explore the stunning natural beauty of Ketapang with mountains, tropical forests, and exotic beaches",
    budayaTitle: "Ketapang Cultural Tourism",
    budayaDescription: "Discover Dayak and Malay cultural heritage, historic palaces, traditional longhouses, and cultural festivals",
    kulinerTitle: "Ketapang Local Cuisine",
    kulinerDescription: "Enjoy the delicious authentic cuisine of Ketapang with distinctive West Kalimantan flavors",
    tariTitle: "Traditional Dance Arts",
    tariDescription: "Witness the beauty of Tari Jepin, Monong, and traditional Dayak and Malay art performances",
    
    // Destination Detail
    kembaliKe: "Back to",
    tentangDestinasi: "About Destination",
    galeriFoto: "Photo Gallery",
    galeriVideo: "Video Gallery",
    fasilitas: "Facilities",
    tipsBerkunjung: "Visiting Tips",
    sejarahBudaya: "History & Culture",
    tertarikBerkunjung: "Interested in Visiting?",
    hubungiInfo: "Contact us for more information",
    hubungiSekarang: "Contact Now",
    lihatDetail: "View Details",
    shareDestinasi: "Share Destination",
    tambahFavorit: "Add to Favorites",
    ulasan: "reviews",
    jam: "hours",
    hari: "days",
    
    // Cultural Content
    budayaDayak: "Dayak Culture",
    budayaMelayu: "Malay Culture",
    keratonKetapang: "Ketapang Palace",
    rumahPanjang: "Dayak Longhouse",
    festivalBudaya: "Cultural Festival",
    tariJepin: "Jepin Dance",
    tariMonong: "Monong Dance",
    
    // Culinary Content
    asamPedasIkanPatin: "Asam Pedas Ikan Patin",
    buburPedas: "Bubur Pedas",
    keripikTembarang: "Keripik Tembarang",
    jorongJorong: "Jorong-jorong",
    makananTradisional: "Traditional Food",
    
    // Interactive Features
    galeriInteraktif: "Interactive Gallery",
    ceritaRakyat: "Folk Stories",
    sejarahLokal: "Local History",
    quizBudaya: "Cultural Quiz",
    kalenderAcara: "Event Calendar",
    petaInteraktif: "Interactive Map",
    
    // Common
    loading: "Loading...",
    error: "An error occurred",
    notFound: "Not found",
    selengkapnya: "Read More",
    tutup: "Close"
  },
  my: {
    // Hero Section
    heroTitle1: "Keindahan Alam Ketapang",
    heroTitle2: "Warisan Budaya Nusantara",
    heroTitle3: "Pelancongan Alam Eksotik",
    heroSubtitle1: "Terokai pesona gunung dan hutan yang memukau di tengah Kalimantan Barat",
    heroSubtitle2: "Temui kekayaan tradisi dan adat resam yang telah dipelihara turun temurun",
    heroSubtitle3: "Rasai pengalaman yang tidak dapat dilupakan di alam bebas yang masih asli",
    exploreNow: "Terokai Sekarang",
    learnMore: "Ketahui Lebih Lanjut",
    
    // Categories
    categoriesTitle: "Kategori Pelancongan",
    categoriesSubtitle: "Temui pelbagai destinasi pelancongan yang menawarkan pengalaman tak terlupakan di Daerah Ketapang yang mempesona",
    wisataAlam: "Pelancongan Alam",
    wisataBudaya: "Pelancongan Budaya", 
    wisataKuliner: "Pelancongan Kuliner",
    wisataTari: "Tarian Tradisional",
    alamDesc: "Terokai keindahan alam Ketapang yang memukau dengan panorama eksotik dan udara segar pergunungan",
    budayaDesc: "Temui warisan budaya termasuk Istana Ketapang, rumah panjang Dayak, dan festival budaya yang autentik",
    kulinerDesc: "Nikmati kelazatan masakan khas Ketapang seperti Asam Pedas Ikan Patin, Bubur Pedas, Keripik Tembarang, dan Jorong-jorong",
    tariDesc: "Saksikan persembahan tarian tradisional seperti Tari Jepin, Monong, dan muzik tradisional yang mempesona",
    destinasiCount: "+ Destinasi",
    situsCount: "+ Tapak Budaya",
    kulinerCount: "+ Kuliner Tempatan",
    pertunjukanCount: "+ Persembahan",
    lihatSemua: "Lihat Semua",
    lihatGaleri: "Lihat Galeri",
    
    // Navigation
    beranda: "Laman Utama",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Hubungi",
    kalenderBudaya: "Kalendar Budaya",
    petaWisata: "Peta Pelancongan",
    
    // Category Pages
    kembaliKeBeranda: "Kembali ke Laman Utama",
    alamTitle: "Pelancongan Alam Ketapang",
    alamDescription: "Terokai keindahan alam Ketapang dengan gunung, hutan tropika, dan pantai eksotik",
    budayaTitle: "Pelancongan Budaya Ketapang",
    budayaDescription: "Temui warisan budaya Dayak dan Melayu, istana bersejarah, rumah panjang tradisional, dan festival budaya",
    kulinerTitle: "Kuliner Khas Ketapang",
    kulinerDescription: "Nikmati kelazatan masakan autentik Ketapang dengan citarasa khas Kalimantan Barat",
    tariTitle: "Seni Tarian Tradisional",
    tariDescription: "Saksikan keindahan Tari Jepin, Monong, dan persembahan seni tradisional Dayak dan Melayu",
    
    // Destination Detail
    kembaliKe: "Kembali ke",
    tentangDestinasi: "Mengenai Destinasi",
    galeriFoto: "Galeri Foto",
    galeriVideo: "Galeri Video",
    fasilitas: "Kemudahan",
    tipsBerkunjung: "Tips Melawat",
    sejarahBudaya: "Sejarah & Budaya",
    tertarikBerkunjung: "Berminat untuk Melawat?",
    hubungiInfo: "Hubungi kami untuk maklumat lanjut",
    hubungiSekarang: "Hubungi Sekarang",
    lihatDetail: "Lihat Butiran",
    shareDestinasi: "Kongsi Destinasi",
    tambahFavorit: "Tambah ke Kegemaran",
    ulasan: "ulasan",
    jam: "jam",
    hari: "hari",
    
    // Cultural Content
    budayaDayak: "Budaya Dayak",
    budayaMelayu: "Budaya Melayu",
    keratonKetapang: "Istana Ketapang",
    rumahPanjang: "Rumah Panjang Dayak",
    festivalBudaya: "Festival Budaya",
    tariJepin: "Tari Jepin",
    tariMonong: "Tari Monong",
    
    // Culinary Content
    asamPedasIkanPatin: "Asam Pedas Ikan Patin",
    buburPedas: "Bubur Pedas",
    keripikTembarang: "Keripik Tembarang",
    jorongJorong: "Jorong-jorong",
    makananTradisional: "Makanan Tradisional",
    
    // Interactive Features
    galeriInteraktif: "Galeri Interaktif",
    ceritaRakyat: "Cerita Rakyat",
    sejarahLokal: "Sejarah Tempatan",
    quizBudaya: "Kuiz Budaya",
    kalenderAcara: "Kalendar Acara",
    petaInteraktif: "Peta Interaktif",
    
    // Common
    loading: "Memuatkan...",
    error: "Ralat berlaku",
    notFound: "Tidak dijumpai",
    selengkapnya: "Baca Lagi",
    tutup: "Tutup"
  }
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'ID';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
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
