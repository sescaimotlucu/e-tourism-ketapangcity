
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
    tariDesc: "Saksikan keanggunan tari tradisional Jepin dan Monong yang sarat makna budaya",
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
  },
  EN: {
    // Navigation
    beranda: "Home",
    destinasi: "Destinations",
    galeri: "Gallery",
    kontak: "Contact",
    
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
  },
  MY: {
    // Navigation
    beranda: "Laman Utama",
    destinasi: "Destinasi",
    galeri: "Galeri",
    kontak: "Hubungi",
    
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
