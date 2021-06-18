import Container from './container'
import { AUTHOR_SOCIALS } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faTerminal } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const ICON_MAP = {
    github: faGithub,
    twitter: faTwitter,
    repl: faTerminal,
    linkedIn: faLinkedin,
    resume: faFilePdf,
    email: faEnvelope
  }

  return (
    <footer className="bg-black">
      <Container>
        <div className="py-12 flex flex-col items-center w-full">
          <div className="grid grid-cols-3 justify-items-center md:flex md">
            {
              Object.keys(AUTHOR_SOCIALS).map(social => (
                <div key={social} className="text-dark hover:text-primary text-2xl md:text-2xl mb-2 cursor-pointer">
                  <FontAwesomeIcon icon={ICON_MAP[social]} className="m-4" onClick={() => window.open(AUTHOR_SOCIALS[social].link)}/>
                </div>
                  ))
                }
            </div>
          <p className="text-dark text-lg text-center text-bold">Copyright James DeLay© 2020</p>
        </div>
      </Container>
    </footer>
  )
}
