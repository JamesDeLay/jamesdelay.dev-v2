import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";

// Required Icons
import IconJS from "./icons/icon-js";
import IconPython from "./icons/icon-python";
import IconGolang from "./icons/icon-golang";
import IconNodeJS from "./icons/icon-nodejs";
import {
  ANSIBLE,
  GOLANG,
  JAVASCRIPT,
  NODE_JS,
  PYTHON,
  NEXT,
  TAILWIND,
  PUPPETEER,
} from "../lib/constants";
import IconAnsible from "./icons/icon-ansible";
import IconNext from "./icons/icon-next";
import IconTailwind from "./icons/icon-tailwind";
import IconPuppeteer from "./icons/icon-puppeteer";

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
    case NEXT:
      return <IconNext />;
    case TAILWIND:
      return <IconTailwind />;
    case PUPPETEER:
      return <IconPuppeteer />;
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
  technologies,
  githubLink,
}) {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row shadow-card rounded-xl overflow-hidden transform transition duration-500 hover:scale-110">
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
      <div className="w-full md:w-1/2 bg-white relative">
        <h3 className="text-xl mt-8 mb-3 text-center leading-snug font-serif font-bold hover:text-accent">
          <a href={githubLink} className="hover:underline">
            {title}
          </a>
        </h3>
        <div className="text-sm mb-4 text-gray-600 font-sans text-center">
          <DateFormatter dateString={date} />
        </div>
        {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className="h-full p-6">
          <p className="text-lg leading-relaxed mb-4 text-dark">{excerpt}</p>
          <div className="flex justify-end content-center absolute right-6 bottom-4">
            <div className="flex justify-end w-fit ml-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
