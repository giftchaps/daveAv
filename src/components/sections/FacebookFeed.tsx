import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

function FbIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
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
            <FbIcon size={14} />
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
    <a
      href="https://www.facebook.com/avdavey"
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-full group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-white border border-[#DDE3EE] border-l-4 border-l-[#1877F2] p-5 sm:p-6 hover:border-[#1877F2]/50 transition-colors"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] text-white flex-shrink-0">
        <FbIcon size={22} />
      </span>
      <span className="flex-1">
        <span className="block font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-xl leading-tight">
          See Davey&apos;s latest jobs on Facebook
        </span>
        <span className="block font-['Barlow'] text-slate-600 text-sm mt-1">
          Photos and stories from recent galas, conferences, installs and stage builds across Connecticut.
        </span>
      </span>
      <span className="inline-flex items-center gap-2 self-start sm:self-center bg-[#1877F2] text-white px-5 py-2.5 font-['Barlow'] font-bold uppercase tracking-wide text-sm group-hover:bg-[#0f5fd0] transition-colors">
        Visit our page <ExternalLink size={13} aria-hidden="true" />
      </span>
    </a>
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
            <FbIcon size={16} />
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
