import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { POSTS } from '../lib/constants';

export default function CoverImage({
  title,
  src,
  slug,
  height,
  width,
  containerClass = '',
  linkSlug = POSTS,
  overrideLink
}) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm rounded-tr-xl rounded-tl-xl overflow-hidden bg-white', {
        'hover:shadow-md transition-shadow duration-200': slug
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className={`${containerClass}`}>
      {slug ? (
        overrideLink ? (
          <a href={overrideLink} aria-label={title}>
            {image}
          </a>
        ) : (
          <Link as={`/${linkSlug}/${slug}`} href={`/${linkSlug}/[slug]`}>
            <a aria-label={title}>{image}</a>
          </Link>
        )
      ) : (
        <div className={containerClass}>{image}</div>
      )}
    </div>
  );
}
