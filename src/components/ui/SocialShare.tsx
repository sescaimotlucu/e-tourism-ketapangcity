import { Share2, Facebook, MessageCircle, Instagram, Twitter, Link, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  className?: string;
}

export const SocialShare = ({ 
  url = window.location.href, 
  title = 'E-Tourism Ketapang', 
  description = 'Jelajahi kekayaan budaya dan alam Ketapang',
  image,
  className = ''
}: SocialShareProps) => {
  
  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description),
    image: image ? encodeURIComponent(image) : ''
  };

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}&quote=${shareData.title}`,
      color: 'hover:bg-blue-600 hover:text-white',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
      color: 'hover:bg-green-600 hover:text-white',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
      color: 'hover:bg-blue-400 hover:text-white',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:bg-pink-600 hover:text-white',
      bgColor: 'bg-pink-50',
      action: () => {
        toast({
          title: "Info",
          description: "Silakan bagikan screenshot halaman ini ke Instagram Story Anda!",
        });
      }
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Berhasil!",
        description: "Link telah disalin ke clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Gagal menyalin link",
        variant: "destructive"
      });
    }
  };

  const handleShare = (shareLink: any) => {
    if (shareLink.action) {
      shareLink.action();
    } else if (shareLink.url !== '#') {
      window.open(shareLink.url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className={`bg-gradient-to-r from-ketapang-gold/10 to-ketapang-sunset/10 backdrop-blur-sm rounded-2xl p-6 border border-ketapang-gold/20 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Share2 className="h-5 w-5 text-ketapang-traditional" />
        <h3 className="font-cultural font-medium text-ketapang-earth">
          Bagikan ke Media Sosial
        </h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {shareLinks.map((shareLink) => (
          <Button
            key={shareLink.name}
            variant="outline"
            size="sm"
            onClick={() => handleShare(shareLink)}
            className={`flex flex-col items-center gap-2 p-4 h-auto ${shareLink.bgColor} border-ketapang-gold/20 ${shareLink.color} transition-all duration-300 hover:scale-105 hover:shadow-cultural rounded-xl group`}
          >
            <shareLink.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">{shareLink.name}</span>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-white/50 rounded-lg px-3 py-2 text-sm text-ketapang-wood border border-ketapang-gold/20">
          <div className="flex items-center gap-2">
            <Link className="h-4 w-4 text-ketapang-traditional flex-shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="bg-ketapang-gold/10 border-ketapang-gold/30 text-ketapang-earth hover:bg-ketapang-gold/20 transition-all duration-300 hover:scale-105 rounded-xl"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};