import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faPatreon,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFilePdf,
  faTerminal
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { AUTHOR_SOCIALS } from '../lib/constants';
import Container from './container';

export default function Footer() {
  const ICON_MAP = {
    github: faGithub,
    twitter: faTwitter,
    repl: faTerminal,
    linkedIn: faLinkedin,
    resume: faFilePdf,
    email: faEnvelope,
    patreon: faPatreon
  };

  return (
    <footer className="bg-dark">
      <Container>
        <div className="py-6 flex flex-col items-center w-full">
          <div className="flex gap-10 justify-items-center mb-4 mt-4">
            {Object.keys(AUTHOR_SOCIALS).map((social, idx) => {
              if (social) {
                return (
                  <div
                    key={social}
                    className={cn(
                      'text-primary hover:text-accent text-2xl md:text-3xl mb-2 cursor-pointer',
                      {
                        'col-span-2':
                          idx === Object.keys(AUTHOR_SOCIALS).length - 1
                      }
                    )}
                  >
                    <FontAwesomeIcon
                      icon={ICON_MAP[social]}
                      onClick={() => window.open(AUTHOR_SOCIALS[social].link)}
                    />
                  </div>
                );
              }
            })}
          </div>
          <p className="text-secondary text-sm text-center text-bold font-mono">
            Copyright James DeLay© 2021
          </p>
          <p className="text-secondary text-xs text-center font-mono">{`< JD />`}</p>
        </div>
      </Container>
    </footer>
  );
}
