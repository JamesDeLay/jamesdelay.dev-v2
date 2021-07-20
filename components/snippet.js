import { useState, useEffect } from 'react';
import markdownToHtml from '../lib/markdownToHtml';

export default function Snippet({ name, language, snippet, tags }) {
  const [code, setCode] = useState(<></>);
  useEffect(async () => {
    const html = await markdownToHtml(snippet);
    setCode(html);
  }, [snippet]);
  return (
    <article className="bg-white w-full rounded-xl overflow-hidden mb-12">
      <div className="flex justify-between w-full bg-dark text-light p-4 items-center">
        <p className="font-mono">{name}</p>
        <p className="md:text-lg md:flex hidden">{`#${language}`}</p>
      </div>
      <div
        className="p-6 bg-white"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </article>
  );
}
