import ProjectPreview from './project-preview';
import SectionHeader from './section-header';

export default function RecentProjects({ projects }) {
  return (
    <section>
      <SectionHeader>Recent Projects</SectionHeader>
      <div className="w-full pb-24">
        {projects.map((project, idx) => (
          <ProjectPreview
            flipLayout={idx % 2}
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            author={project.author}
            slug={project.slug}
            excerpt={project.excerpt}
            readTime={project.readTime}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}
