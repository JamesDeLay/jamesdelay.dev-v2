import Container from './container'
import { AUTHOR_SOCIALS } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faPatreon, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faTerminal } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

export default function Footer() {
  const ICON_MAP = {
    github: faGithub,
    twitter: faTwitter,
    repl: faTerminal,
    linkedIn: faLinkedin,
    resume: faFilePdf,
    email: faEnvelope,
    patreon: faPatreon
  }

  return (
    <footer className="bg-dark">
      <Container>
        <div className="py-6 flex flex-col items-center w-full">
          <div className="grid grid-cols-3 justify-items-center ">
            {
              Object.keys(AUTHOR_SOCIALS).map((social, idx) => (
                <div key={social} className={cn("text-primary hover:text-accent text-2xl md:text-4xl mb-2 cursor-pointer", {
                  'col-span-3': idx === Object.keys(AUTHOR_SOCIALS).length - 1
                })}>
                  <FontAwesomeIcon icon={ICON_MAP[social]} className="m-4" onClick={() => window.open(AUTHOR_SOCIALS[social].link)}/>
                </div>
                  ))
                }
            </div>
          <p className="text-secondary text-lg text-center text-bold font-mono">Copyright James DeLay© 2021</p>
          <p className="text-secondary text-sm text-center font-mono">{`< JD />`}</p>
        </div>
      </Container>
    </footer>
  )
}
