import CoverImage from "./cover-image";
import PageHero from "./page-hero";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <section>
      <PageHero title={title} blurb={date} />
      <CoverImage
        containerClass="max-w-6xl mx-auto -mt-28"
        title={title}
        src={coverImage}
        height={620}
        width={1240}
      />
    </section>
  );
}
