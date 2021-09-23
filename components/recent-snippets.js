import Snippet from './snippet';
import SectionHeader from './section-header';

export default function CoolStuff({ snippets }) {
  return (
    <section>
      <SectionHeader>Cool Internet Finds</SectionHeader>
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
