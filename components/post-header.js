import CoverImage from './cover-image';
import PageHero from './page-hero';

export default function PostHeader({ title, coverImage, date }) {
  return (
    <section>
      <PageHero title={title} blurb={date} />
      <CoverImage
        containerClass="-mt-12 mx-1 md:w-3/4 md:m-auto md:-mt-24"
        title={title}
        src={coverImage}
        height={620}
        width={1240}
      />
    </section>
  );
}
