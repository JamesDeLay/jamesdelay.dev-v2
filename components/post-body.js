export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
