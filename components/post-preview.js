import Link from 'next/link';
import cn from 'classnames';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  readTime,
  isFeatureCard
}) {
  return (
    <div
      className={cn(
        'bg-white hover:scale-50 shadow-card rounded-xl overflow-hidden',
        {
          'col-span-3': isFeatureCard
        }
      )}
    >
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={isFeatureCard ? 348 : 278}
          width={isFeatureCard ? 695 : 556}
        />
      </div>
      <div className="pt-2 pb-2 px-4">
        <h3 className="text-2xl mb-3 leading-snug font-serif font-bold hover:text-accent">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-sm mb-4 text-gray-700 font-sans">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4 text-dark">{excerpt}</p>
        <p className="text-xs font-mono text-opacity-80 leading-relaxed mb-4 text-right text-gray-700">
          {readTime} MIN READ
        </p>
      </div>
    </div>
  );
}
