import Image from 'next/image';
import { ExternalLink, Facebook } from 'lucide-react';
import { fetchFacebookPosts, type FacebookPost } from '@/lib/facebook';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function truncate(text: string, max = 160) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(' ', max)) + '…';
}

function PostCard({ post }: { post: FacebookPost }) {
  const caption = post.message ?? post.story ?? '';
  return (
    <a
      href={post.permalink_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg overflow-hidden bg-white border border-[#DDE3EE] hover:border-[#1265B7]/50 hover:shadow-[0_8px_28px_rgba(18,101,183,0.12)] hover:-translate-y-0.5 transition-all duration-300"
      aria-label={`View Facebook post from ${formatDate(post.created_time)}`}
    >
      {/* Photo */}
      {post.full_picture && (
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Image
            src={post.full_picture}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#071E55]/20 group-hover:bg-[#071E55]/5 transition-colors" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Date + Facebook badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-['Barlow'] text-xs uppercase tracking-wide text-slate-400">
            {formatDate(post.created_time)}
          </span>
          <span className="flex items-center gap-1 text-[#1877F2]">
            <Facebook size={14} aria-hidden="true" />
            <span className="font-['Barlow'] text-xs font-semibold">Facebook</span>
          </span>
        </div>

        {caption && (
          <p className="font-['Barlow'] text-slate-700 text-sm leading-relaxed flex-1">
            {truncate(caption)}
          </p>
        )}

        <div className="mt-4 flex items-center gap-1.5 text-[#1265B7] font-['Barlow'] font-bold text-xs uppercase tracking-wide group-hover:text-[#071E55] transition-colors">
          View on Facebook <ExternalLink size={11} aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-white/60">
      <Facebook size={40} className="mb-4 opacity-40" aria-hidden="true" />
      <p className="font-['Barlow'] text-base">Posts will appear here once the Facebook connection is configured.</p>
    </div>
  );
}

export async function FacebookFeed() {
  const posts = await fetchFacebookPosts(6);

  return (
    <section className="py-10 lg:py-14 bg-[#F4F6FA]" aria-labelledby="facebook-feed-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                Fresh From the Field
              </span>
            </div>
            <h2
              id="facebook-feed-heading"
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Latest Jobs &amp; Updates
            </h2>
            <p className="font-['Barlow'] text-slate-500 text-sm mt-2">
              See what Davey&apos;s been working on — straight from his Facebook page.
            </p>
          </div>

          <a
            href="https://www.facebook.com/avdavey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-['Barlow'] font-bold text-sm uppercase tracking-wide text-[#1877F2] hover:text-[#071E55] transition-colors group flex-shrink-0"
          >
            <Facebook size={16} aria-hidden="true" />
            Follow on Facebook
            <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </section>
  );
}
