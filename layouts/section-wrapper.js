import Button from "../components/button";
import SectionHeader from "../components/section-header";

export default function SectionWrapper({
  children,
  title,
  footerAction,
  footerText,
}) {
  return (
    <section>
      <SectionHeader>{title}</SectionHeader>
      {children}
      {footerText && (
        <div className="flex justify-center mb-6 md:justify-start">
          <Button onClick={footerAction}>{footerText}</Button>
        </div>
      )}
    </section>
  );
}
