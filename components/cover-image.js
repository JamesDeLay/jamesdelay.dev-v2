import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
<<<<<<< Updated upstream
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
=======
      className={cn('shadow-sm rounded-tr-xl rounded-tl-xl overflow-hidden', {
        'hover:shadow-md transition-shadow duration-200': slug
>>>>>>> Stashed changes
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
