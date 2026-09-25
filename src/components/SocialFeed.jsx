import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';

export default function SocialFeed({ onOpenStory }) {
  const { socialHandles } = CELEBRITY_DATA;
  const [likes, setLikes] = useState({ 0: 48200, 1: 91400, 2: 36700, 3: 54100, 4: 72900, 5: 112000 });
  const [likedPosts, setLikedPosts] = useState([]);

  // Every post has a unique photo
  const socialPosts = [
    {
      platform: 'instagram',
      image: '/assets/images/lifestyle-lahore.jpg',
      caption: 'The strength of an actor lies not in the loudness of his shout, but in the gravity of his silence. On set today crafting something raw. #NaumaanIjaz #PakistaniCinema',
      date: 'Yesterday',
      comments: '1,840',
      tag: 'Instagram'
    },
    {
      platform: 'instagram',
      image: '/assets/images/event-stage.jpg',
      caption: 'Overwhelming warmth in Dallas, Texas. Thank you to every family who joined us for an unforgettable evening celebrating our cultural storytelling. #USAHeritageTour',
      date: '3d ago',
      comments: '3,210',
      tag: 'Event Gallery'
    },
    {
      platform: 'youtube',
      image: '/assets/images/char-behroze.jpg',
      caption: '“Behroze Karim will always belong to the people.” Full retrospective interview exploring the philosophy of Parizaad streaming now.',
      date: '5d ago',
      comments: '4,900',
      tag: 'YouTube'
    },
    {
      platform: 'facebook',
      image: '/assets/images/char-maqsood.jpg',
      caption: 'لاہور کا موسم اور پرانے پی ٹی وی کے دوست۔ کچھ یادیں کبھی پرانی نہیں ہوتیں، وہ وقت کے ساتھ اور قیمتی ہو جاتی ہیں۔ دعاؤں میں یاد رکھیں۔',
      date: '1w ago',
      comments: '5,600',
      tag: 'Facebook'
    },
    {
      platform: 'instagram',
      image: '/assets/images/brand-royal-festive.jpg',
      caption: 'Royal Festive Attire Ambassador. Tradition, dignity, and craftsmanship woven into every silhouette. #JunaidJamshed #BrandEndorsement',
      date: '2w ago',
      comments: '2,150',
      tag: 'Brand Reel'
    },
    {
      platform: 'instagram',
      image: '/assets/images/char-haji-marjaan.jpg',
      caption: 'Sang-e-Mah reflections: Haji Marjaan’s jirga judgment will forever remain carved in stone. Thank you for the unconditional love. #SangEMah',
      date: '3w ago',
      comments: '8,400',
      tag: 'Archive'
    }
  ];

  const handleLike = (index) => {
    if (likedPosts.includes(index)) {
      setLikedPosts(likedPosts.filter((i) => i !== index));
      setLikes({ ...likes, [index]: likes[index] - 1 });
    } else {
      setLikedPosts([...likedPosts, index]);
      setLikes({ ...likes, [index]: likes[index] + 1 });
    }
  };

  return (
    <section id="social-feed" className="relative py-24 bg-obsidian-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
              Verified Digital Desk
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Social <span className="gold-gradient-text">Channels</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl">
              Candid dispatches, viral reels, and community updates from verified social profiles.
            </p>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
            <a
              href={socialHandles.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-pink-500/40 text-neutral-300 hover:text-white transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
            </a>
            <a
              href={socialHandles.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-blue-500/40 text-neutral-300 hover:text-white transition-colors"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={socialHandles.youtube.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-red-500/40 text-neutral-300 hover:text-white transition-colors"
              title="YouTube"
            >
              <YoutubeIcon className="w-4 h-4 text-red-400" />
            </a>
          </div>
        </div>

        {/* Clean 3-Column Grid with UNIQUE PHOTOS FOR EACH CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-obsidian-900/40 border border-neutral-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Unique Media Header */}
                <div className="relative aspect-[4/3] bg-obsidian-950 overflow-hidden">
                  <img
                    src={post.image}
                    alt="Social feed"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-obsidian-950/80 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono text-neutral-300">
                    {post.tag}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs text-neutral-300 leading-relaxed font-light line-clamp-3">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Minimal Footer */}
              <div className="px-5 py-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                <button
                  onClick={() => handleLike(idx)}
                  className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
                >
                  <Heart className={`w-3.5 h-3.5 ${likedPosts.includes(idx) ? 'fill-red-500 text-red-500' : ''}`} />
                  <span className="font-mono text-[11px]">{(likes[idx] || 45000).toLocaleString()}</span>
                </button>

                <a
                  href={socialHandles.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white flex items-center gap-1 font-mono text-[10px]"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
