import Snippet from './snippet';
import SectionHeader from './section-header';

export default function RecentSnippets({ snippets }) {
  return (
    <section>
      <SectionHeader>Code Snippets</SectionHeader>
      <div className="flex w-full md:grid md:grid-cols-2 mb-24">
        {snippets?.map(({ name, language, content, tags }, idx) => {
          return (
            <Snippet
            key={idx}
              name={name}
              language={language}
              snippet={content}
              tags={tags}
            />
          );
        })}
      </div>
    </section>
  );
}
