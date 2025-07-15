import { useState } from 'react';
import { MessageSquare, Heart, Reply, User, Send, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  rating?: number;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[];
}

interface CommentSystemProps {
  contentId: string;
  contentType: 'event' | 'gallery' | 'article' | 'destination';
  className?: string;
}

export const CommentSystem = ({ contentId, contentType, className = '' }: CommentSystemProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Sari Dewi',
      content: 'Acara yang sangat menarik! Saya belajar banyak tentang budaya Ketapang. Terima kasih untuk pengalaman yang luar biasa.',
      rating: 5,
      timestamp: '2 jam yang lalu',
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: '1-1',
          author: 'Admin E-Tourism',
          content: 'Terima kasih atas antusiasme Anda! Kami senang Anda menikmati acara budaya Ketapang.',
          timestamp: '1 jam yang lalu',
          likes: 3,
          isLiked: false
        }
      ]
    },
    {
      id: '2',
      author: 'Budi Santoso',
      content: 'Fotografinya bagus sekali! Benar-benar menangkap keindahan alam Ketapang. Kapan ada acara fotografi lagi?',
      rating: 4,
      timestamp: '5 jam yang lalu',
      likes: 8,
      isLiked: true
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Pengunjung Baru',
      content: newComment,
      rating: newRating,
      timestamp: 'Baru saja',
      likes: 0,
      isLiked: false
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setNewRating(0);
    
    toast({
      title: "Komentar berhasil ditambahkan!",
      description: "Terima kasih atas ulasan Anda tentang konten budaya Ketapang.",
    });
  };

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: 'Pengunjung Baru',
      content: replyContent,
      timestamp: 'Baru saja',
      likes: 0,
      isLiked: false
    };

    setComments(comments.map(comment => 
      comment.id === parentId 
        ? { ...comment, replies: [...(comment.replies || []), reply] }
        : comment
    ));

    setReplyContent('');
    setReplyingTo(null);
    
    toast({
      title: "Balasan berhasil ditambahkan!",
      description: "Balasan Anda telah ditambahkan ke diskusi.",
    });
  };

  const handleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => 
        comment.id === parentId 
          ? {
              ...comment,
              replies: comment.replies?.map(reply =>
                reply.id === commentId
                  ? { ...reply, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1, isLiked: !reply.isLiked }
                  : reply
              )
            }
          : comment
      ));
    } else {
      setComments(comments.map(comment => 
        comment.id === commentId 
          ? { ...comment, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1, isLiked: !comment.isLiked }
          : comment
      ));
    }
  };

  const renderStars = (rating: number, interactive: boolean = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating 
                ? 'fill-ketapang-gold text-ketapang-gold' 
                : 'text-ketapang-wood/30'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`bg-gradient-to-br from-ketapang-gold/5 to-ketapang-sunset/5 backdrop-blur-sm rounded-2xl p-6 border border-ketapang-gold/20 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="h-6 w-6 text-ketapang-traditional" />
        <h3 className="font-cultural text-xl font-semibold text-ketapang-earth">
          Komentar & Ulasan
        </h3>
        <Badge variant="secondary" className="bg-ketapang-gold/20 text-ketapang-earth">
          {comments.length} ulasan
        </Badge>
      </div>

      {/* Add Comment Form */}
      <div className="bg-white/50 rounded-xl p-4 mb-6 border border-ketapang-gold/20">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-ketapang-gold/20 text-ketapang-earth font-semibold">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-ketapang-earth">Berikan ulasan Anda</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-ketapang-wood">Rating:</span>
              {renderStars(newRating, true, setNewRating)}
            </div>
          </div>
        </div>
        
        <Textarea
          placeholder={`Bagikan pengalaman Anda tentang ${contentType === 'event' ? 'acara' : contentType === 'gallery' ? 'galeri' : contentType === 'article' ? 'artikel' : 'destinasi'} ini...`}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3 bg-white/70 border-ketapang-gold/30 focus:border-ketapang-traditional resize-none"
          rows={3}
        />
        
        <Button 
          onClick={handleSubmitComment}
          disabled={!newComment.trim()}
          className="bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white hover:shadow-cultural transition-all duration-300 hover:scale-105 rounded-xl"
        >
          <Send className="h-4 w-4 mr-2" />
          Kirim Ulasan
        </Button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white/70 rounded-xl p-4 border border-ketapang-gold/20 animate-fade-in">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar} />
                <AvatarFallback className="bg-ketapang-gold/20 text-ketapang-earth font-semibold">
                  {comment.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-ketapang-earth">{comment.author}</h4>
                  <span className="text-sm text-ketapang-wood">{comment.timestamp}</span>
                  {comment.rating && renderStars(comment.rating)}
                </div>
                
                <p className="text-ketapang-earth mb-3 leading-relaxed">{comment.content}</p>
                
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(comment.id)}
                    className={`text-ketapang-wood hover:text-ketapang-traditional transition-colors ${
                      comment.isLiked ? 'text-ketapang-traditional' : ''
                    }`}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${comment.isLiked ? 'fill-current' : ''}`} />
                    {comment.likes}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="text-ketapang-wood hover:text-ketapang-traditional transition-colors"
                  >
                    <Reply className="h-4 w-4 mr-1" />
                    Balas
                  </Button>
                </div>
                
                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="mt-3 pl-4 border-l-2 border-ketapang-gold/30">
                    <Textarea
                      placeholder="Tulis balasan Anda..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="mb-2 bg-white/70 border-ketapang-gold/30 focus:border-ketapang-traditional resize-none"
                      rows={2}
                    />
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        onClick={() => handleSubmitReply(comment.id)}
                        disabled={!replyContent.trim()}
                        className="bg-gradient-to-r from-ketapang-traditional to-ketapang-sunset text-white"
                      >
                        Kirim
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={() => setReplyingTo(null)}
                        className="border-ketapang-gold/30"
                      >
                        Batal
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-ketapang-gold/30 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={reply.avatar} />
                          <AvatarFallback className="bg-ketapang-sunset/20 text-ketapang-earth font-semibold text-sm">
                            {reply.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-medium text-ketapang-earth text-sm">{reply.author}</h5>
                            <span className="text-xs text-ketapang-wood">{reply.timestamp}</span>
                          </div>
                          
                          <p className="text-ketapang-earth text-sm mb-2 leading-relaxed">{reply.content}</p>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(reply.id, true, comment.id)}
                            className={`text-ketapang-wood hover:text-ketapang-traditional transition-colors text-xs ${
                              reply.isLiked ? 'text-ketapang-traditional' : ''
                            }`}
                          >
                            <Heart className={`h-3 w-3 mr-1 ${reply.isLiked ? 'fill-current' : ''}`} />
                            {reply.likes}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};