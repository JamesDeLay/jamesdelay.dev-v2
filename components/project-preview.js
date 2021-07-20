import Link from 'next/link';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';

// Required Icons
import IconJS from './icons/icon-js';
import IconPython from './icons/icon-python';
import IconGolang from './icons/icon-golang';
import IconNodeJS from './icons/icon-nodejs';
import { GOLANG, JAVASCRIPT, NODE_JS, PYTHON } from '../lib/constants';

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
      <div className="w-full md:w-1/2">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={isFeatureCard ? 348 : 278}
          width={isFeatureCard ? 695 : 556}
        />
      </div>
      <div className="w-full md:w-1/2 bg-white relative">
        <h3 className="text-xl mt-8 mb-3 text-center leading-snug font-serif font-bold hover:text-accent">
          <Link as={`/projects/${slug}`} href="/projects/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-sm mb-4 text-gray-600 font-sans text-center">
          <DateFormatter dateString={date} />
        </div>
        {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className="absolute top-2 right-2 text-4xl cursor-pointer"
          onClick={() => {
            window.open(githubLink);
          }}
        >
          <FontAwesomeIcon className="text-gray-200" icon={faGithub} />
        </div>
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
    // <div
    //   className={cn(
    //     'bg-white hover:scale-50 shadow-card rounded-2xl overflow-hidden w-f',
    //     {
    //       'col-span-3': isFeatureCard
    //     }
    //   )}
    // >
    //   <div className="mb-5">
    //     <CoverImage
    //       slug={slug}
    //       title={title}
    //       src={coverImage}
    //       height={isFeatureCard ? 348 : 278}
    //       width={isFeatureCard ? 695 : 556}
    //     />
    //   </div>
    //   <div className="pt-2 pb-2 px-4">
    //     <h3 className="text-2xl mb-3 leading-snug font-serif font-bold hover:text-accent">
    //       <Link as={`/posts/${slug}`} href="/posts/[slug]">
    //         <a className="hover:underline">{title}</a>
    //       </Link>
    //     </h3>

    //   </div>
    // </div>
  );
}
