
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ID: {
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
    budayaDesc: "Temukan warisan budaya dan tradisi lokal yang autentik serta seni tradisional yang telah dilestarikan",
    kulinerDesc: "Nikmati kelezatan masakan khas Ketapang yang menggugah selera dengan cita rasa autentik Kalimantan",
    tariDesc: "Saksikan pertunjukan tari tradisional yang memukau dan musik tradisional yang mempesona hati",
    destinasiCount: "+ Destinasi",
    situsCount: "+ Situs",
    kulinerCount: "+ Kuliner", 
    pertunjukanCount: "+ Pertunjukan",
    lihatSemua: "Lihat Semua",
    
    // Navigation
    beranda: "Beranda",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Kontak",
    
    // Category Pages
    kembaliKeBeranda: "Kembali ke Beranda",
    alamTitle: "Wisata Alam",
    alamDescription: "Jelajahi keindahan alam Ketapang yang memukau",
    budayaTitle: "Wisata Budaya",
    budayaDescription: "Temukan warisan budaya dan tradisi lokal Ketapang",
    kulinerTitle: "Wisata Kuliner",
    kulinerDescription: "Nikmati kelezatan masakan khas Ketapang",
    tariTitle: "Wisata Tari",
    tariDescription: "Saksikan pertunjukan tari tradisional Ketapang",
    
    // Destination Detail
    kembaliKe: "Kembali ke",
    tentangDestinasi: "Tentang Destinasi",
    galeriFoto: "Galeri Foto",
    fasilitas: "Fasilitas",
    tipsBerkunjung: "Tips Berkunjung",
    tertarikBerkunjung: "Tertarik Berkunjung?",
    hubungiInfo: "Hubungi kami untuk informasi lebih lanjut",
    hubungiSekarang: "Hubungi Sekarang",
    lihatDetail: "Lihat Detail",
    ulasan: "ulasan",
    jam: "jam",
    hari: "hari",
    
    // Common
    loading: "Memuat...",
    error: "Terjadi kesalahan",
    notFound: "Tidak ditemukan"
  },
  EN: {
    // Hero Section
    heroTitle1: "Natural Beauty of Ketapang",
    heroTitle2: "Cultural Heritage of Archipelago",
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
    wisataTari: "Dance Tourism",
    alamDesc: "Explore the stunning natural beauty of Ketapang with exotic panoramas and fresh mountain air",
    budayaDesc: "Discover authentic cultural heritage and local traditions as well as preserved traditional arts",
    kulinerDesc: "Enjoy the delicious specialties of Ketapang that tantalize the taste buds with authentic Kalimantan flavors",
    tariDesc: "Witness stunning traditional dance performances and enchanting traditional music",
    destinasiCount: "+ Destinations",
    situsCount: "+ Sites",
    kulinerCount: "+ Culinary",
    pertunjukanCount: "+ Shows",
    lihatSemua: "View All",
    
    // Navigation
    beranda: "Home",
    destinasi: "Destinations",
    galeri: "Gallery",
    kontak: "Contact",
    
    // Category Pages
    kembaliKeBeranda: "Back to Home",
    alamTitle: "Nature Tourism",
    alamDescription: "Explore the stunning natural beauty of Ketapang",
    budayaTitle: "Cultural Tourism",
    budayaDescription: "Discover cultural heritage and local traditions of Ketapang",
    kulinerTitle: "Culinary Tourism",
    kulinerDescription: "Enjoy the delicious specialties of Ketapang",
    tariTitle: "Dance Tourism",
    tariDescription: "Witness traditional dance performances of Ketapang",
    
    // Destination Detail
    kembaliKe: "Back to",
    tentangDestinasi: "About Destination",
    galeriFoto: "Photo Gallery",
    fasilitas: "Facilities",
    tipsBerkunjung: "Visiting Tips",
    tertarikBerkunjung: "Interested in Visiting?",
    hubungiInfo: "Contact us for more information",
    hubungiSekarang: "Contact Now",
    lihatDetail: "View Details",
    ulasan: "reviews",
    jam: "hours",
    hari: "days",
    
    // Common
    loading: "Loading...",
    error: "An error occurred",
    notFound: "Not found"
  },
  MY: {
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
    wisataTari: "Pelancongan Tarian",
    alamDesc: "Terokai keindahan alam Ketapang yang memukau dengan panorama eksotik dan udara segar pergunungan",
    budayaDesc: "Temui warisan budaya dan tradisi tempatan yang autentik serta seni tradisional yang telah dipelihara",
    kulinerDesc: "Nikmati kelazatan masakan khas Ketapang yang menggugah selera dengan citarasa autentik Kalimantan",
    tariDesc: "Saksikan persembahan tarian tradisional yang memukau dan muzik tradisional yang mempesona hati",
    destinasiCount: "+ Destinasi",
    situsCount: "+ Tapak",
    kulinerCount: "+ Kuliner",
    pertunjukanCount: "+ Persembahan",
    lihatSemua: "Lihat Semua",
    
    // Navigation
    beranda: "Laman Utama",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Hubungi",
    
    // Category Pages
    kembaliKeBeranda: "Kembali ke Laman Utama",
    alamTitle: "Pelancongan Alam",
    alamDescription: "Terokai keindahan alam Ketapang yang memukau",
    budayaTitle: "Pelancongan Budaya",
    budayaDescription: "Temui warisan budaya dan tradisi tempatan Ketapang",
    kulinerTitle: "Pelancongan Kuliner",
    kulinerDescription: "Nikmati kelazatan masakan khas Ketapang",
    tariTitle: "Pelancongan Tarian",
    tariDescription: "Saksikan persembahan tarian tradisional Ketapang",
    
    // Destination Detail
    kembaliKe: "Kembali ke",
    tentangDestinasi: "Mengenai Destinasi",
    galeriFoto: "Galeri Foto",
    fasilitas: "Kemudahan",
    tipsBerkunjung: "Tips Melawat",
    tertarikBerkunjung: "Berminat untuk Melawat?",
    hubungiInfo: "Hubungi kami untuk maklumat lanjut",
    hubungiSekarang: "Hubungi Sekarang",
    lihatDetail: "Lihat Butiran",
    ulasan: "ulasan",
    jam: "jam",
    hari: "hari",
    
    // Common
    loading: "Memuatkan...",
    error: "Ralat berlaku",
    notFound: "Tidak dijumpai"
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
