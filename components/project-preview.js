import Link from 'next/link';
import cn from 'classnames';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';

// Required Icons
import IconJS from './icons/icon-js';
import IconPython from './icons/icon-python';
import IconGolang from './icons/icon-golang';
import IconNodeJS from './icons/icon-nodejs';
import {
  ANSIBLE,
  GOLANG,
  JAVASCRIPT,
  NODE_JS,
  PROJECTS,
  PYTHON
} from '../lib/constants';
import IconAnsible from './icons/icon-ansible';

function getProjectIcon(tech) {
  switch (tech) {
    case JAVASCRIPT:
      return <IconJS />;
    case PYTHON:
      return <IconPython />;
    case GOLANG:
      return <IconGolang />;
    case NODE_JS:
      return <IconNodeJS />;
    case ANSIBLE:
      return <IconAnsible />;
    default:
      return <></>;
  }
}

export default function ProjectPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  readTime,
  isFeatureCard,
  flipLayout,
  technologies,
  githubLink
}) {
  return (
    <div
      className={cn(
        'w-full bg-white flex flex-col md:flex-row mb-12 shadow-card rounded-xl overflow-hidden',
        {
          'flex flex-row-reverse': flipLayout
        }
      )}
    >
      <div className="w-full md:w-2/3 p-6">
        <CoverImage
          overrideLink={githubLink}
          slug={slug}
          title={title}
          src={coverImage}
          height={isFeatureCard ? 348 : 278}
          width={isFeatureCard ? 695 : 556}
        />
      </div>
      <div className="w-full md:w-1/3 bg-white relative">
        <h3 className="text-xl mt-8 mb-3 text-center leading-snug font-serif font-bold hover:text-accent">
          {/* <Link as={`/projects/${slug}`} href="/projects/[slug]"> */}
          <a href={githubLink} className="hover:underline">
            {title}
          </a>
          {/* </Link> */}
        </h3>
        <div className="text-sm mb-4 text-gray-600 font-sans text-center">
          <DateFormatter dateString={date} />
        </div>
        {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className="h-full p-6">
          <p className="text-lg leading-relaxed mb-4 text-dark">{excerpt}</p>
          <div className="flex justify-end w-full pt-4 pb-2">
            {technologies.map((t, idx) => {
              if (idx + 1 === technologies.length) {
                return <div key={idx}>{getProjectIcon(t)}</div>;
              }
              return (
                <div key={idx} className="mr-4">
                  {getProjectIcon(t)}
                </div>
              );
            })}
          </div>
          <p className="text-xs font-mono text-opacity-80 leading-relaxed mb-4 text-right text-gray-700">
            {readTime} MIN READ
          </p>
        </div>
      </div>
    </div>
  );
}
