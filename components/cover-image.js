import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({
  title,
  src,
  slug,
  height,
  width,
  containerClass = '',
  type = 'post'
}) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm rounded-tr-xl rounded-tl-xl overflow-hidden', {
        'hover:shadow-md transition-shadow duration-200': slug
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className={`${containerClass} sm:mx-0`}>
      {slug ? (
        <Link as={`/${type}/${slug}`} href="/[type]/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        <div className={containerClass}>{image}</div>
      )}
    </div>
  );
}
