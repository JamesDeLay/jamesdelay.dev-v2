import CoverImage from './cover-image';
import PageHero from './page-hero';

export default function PostHeader({ title, coverImage, date }) {
  return (
    <section>
      <PageHero title={title} blurb={date} />
      <CoverImage
        containerClass="max-w-full -mt-12 md:mx-4 mx-2"
        title={title}
        src={coverImage}
        height={620}
        width={1240}
      />
    </section>
  );
}
