import PostPreview from './post-preview';
import SectionHeader from './section-header';

export default function RecentArticles({ posts }) {
  return (
    <section>
      <SectionHeader>Recent Posts</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-y-12 pb-24">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readTime={post.readTime}
          />
        ))}
      </div>
    </section>
  );
}
