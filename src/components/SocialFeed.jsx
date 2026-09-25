import React, { useState } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { Heart, MessageCircle, Share2, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';

export default function SocialFeed({ onOpenStory }) {
  const { socialHandles } = CELEBRITY_DATA;
  const [likes, setLikes] = useState({ 0: 48200, 1: 91400, 2: 36700, 3: 54100, 4: 72900, 5: 112000 });
  const [likedPosts, setLikedPosts] = useState([]);

  const socialPosts = [
    {
      platform: 'instagram',
      image: '/assets/images/naumaan-portrait.png',
      caption: 'The strength of an actor lies not in the loudness of his shout, but in the gravity of his silence. On set today crafting something raw. #NaumaanIjaz #PakistaniCinema #LivingLegend',
      date: 'Yesterday',
      comments: '1,840',
      tag: 'Instagram Reel'
    },
    {
      platform: 'instagram',
      image: '/assets/images/event-stage.jpg',
      caption: 'Overwhelming warmth and reverence in Dallas, Texas. Thank you to every family who joined us for an unforgettable evening celebrating our cultural storytelling. #USAHeritageTour',
      date: '3 days ago',
      comments: '3,210',
      tag: 'Event Gallery'
    },
    {
      platform: 'youtube',
      image: '/assets/images/awards-trophy.jpg',
      caption: '“Behroze Karim will always belong to the people.” Full retrospective interview exploring the philosophy of Parizaad and Urdu literature streaming now on our channel.',
      date: '5 days ago',
      comments: '4,900',
      tag: 'YouTube Interview'
    },
    {
      platform: 'facebook',
      image: '/assets/images/naumaan-portrait.png',
      caption: 'لاہور کا موسم اور پرانے پی ٹی وی کے دوست۔ کچھ یادیں کبھی پرانی نہیں ہوتیں، وہ وقت کے ساتھ اور قیمتی ہو جاتی ہیں۔ دعاؤں میں یاد رکھیں۔',
      date: '1 week ago',
      comments: '5,600',
      tag: 'Official Facebook'
    },
    {
      platform: 'instagram',
      image: '/assets/images/event-stage.jpg',
      caption: 'Royal Festive Ambassador 2024. Tradition, dignity, and craftsmanship woven into every silhouette. #JunaidJamshed #BrandEndorsement #Elegance',
      date: '2 weeks ago',
      comments: '2,150',
      tag: 'Brand Campaign'
    },
    {
      platform: 'instagram',
      image: '/assets/images/awards-trophy.jpg',
      caption: 'Pride of Performance & multiple Lux Style honors belong to the audience who gave me their hearts for 36 continuous years. Dil se shukriya. 🇵🇰🏆',
      date: '3 weeks ago',
      comments: '8,400',
      tag: 'Archive Highlight'
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
    <section id="social-feed" className="relative py-24 bg-obsidian-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Connected <span className="gold-gradient-text">Social Hub</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Real-time dispatches, viral reels, philosophical musings, and exclusive glimpses from Naumaan Ijaz's verified digital channels.
            </p>
          </div>

          {/* Social Channels Badge Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={socialHandles.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-pink-500/50 hover:bg-pink-950/20 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-all shadow"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <div className="text-left">
                <div className="text-[10px] text-neutral-500 font-mono">Instagram</div>
                <div className="font-bold text-xs">{socialHandles.instagram.followers}</div>
              </div>
            </a>

            <a
              href={socialHandles.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-blue-500/50 hover:bg-blue-950/20 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-all shadow"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
              <div className="text-left">
                <div className="text-[10px] text-neutral-500 font-mono">Facebook</div>
                <div className="font-bold text-xs">{socialHandles.facebook.followers}</div>
              </div>
            </a>

            <a
              href={socialHandles.youtube.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-red-500/50 hover:bg-red-950/20 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-all shadow"
            >
              <YoutubeIcon className="w-4 h-4 text-red-400" />
              <div className="text-left">
                <div className="text-[10px] text-neutral-500 font-mono">YouTube</div>
                <div className="font-bold text-xs">{socialHandles.youtube.subscribers}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-obsidian-950 border border-neutral-800/90 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Post Top Header */}
                <div className="p-4 flex items-center justify-between border-b border-neutral-900">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-obsidian-900 border border-gold-400/40">
                      <img
                        src="/assets/images/naumaan-portrait.png"
                        alt="Naumaan Ijaz"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>naumaan.ijaz</span>
                        <span className="w-3 h-3 rounded-full bg-gold-400 flex items-center justify-center text-[8px] text-black font-black">✓</span>
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono">{post.date}</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-obsidian-900 border border-neutral-800 text-[10px] font-mono text-gold-400">
                    {post.tag}
                  </span>
                </div>

                {/* Post Media */}
                <div className="relative aspect-[4/3] bg-obsidian-900 overflow-hidden">
                  <img
                    src={post.image}
                    alt="Social feed"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/60 to-transparent"></div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Engagement Bar */}
              <div className="px-5 py-3.5 border-t border-neutral-900 bg-obsidian-900/40 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(idx)}
                    className="flex items-center space-x-1.5 hover:text-red-400 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedPosts.includes(idx) ? 'fill-red-500 text-red-500' : ''
                      }`}
                    />
                    <span className="font-mono text-[11px]">
                      {(likes[idx] || 45000).toLocaleString()}
                    </span>
                  </button>

                  <div className="flex items-center space-x-1.5 text-neutral-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-mono text-[11px]">{post.comments}</span>
                  </div>
                </div>

                <a
                  href={socialHandles.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-gold-300 flex items-center gap-1 text-[11px] font-mono"
                >
                  <span>Open Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Global Social Banner */}
        <div className="mt-16 text-center">
          <a
            href={socialHandles.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Join 1.5 Million Followers on Instagram @m_naumaanijazofficial</span>
          </a>
        </div>

      </div>
    </section>
  );
}
