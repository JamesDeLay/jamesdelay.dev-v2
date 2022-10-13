import SectionHeader from '../components/section-header';

export default function WithSectionHeader({ children, title }) {
  return (
    <section>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </section>
  );
}
