import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container>
        <div className="py-12 flex flex-col items-center w-full">
          <div className="flex w-full">

          </div>
          <div className="text-dark text-3xl mb-2 w-full flex items-center">
            <FontAwesomeIcon icon={faGithub} className="m-4"/>
            <FontAwesomeIcon icon={faTwitter} className="m-4"/>
            <FontAwesomeIcon icon={faTerminal} className="m-4"/>
          </div>
          <p className="text-dark text-sm w-full flex items-center">Copyright James DeLay© 2020</p>
        </div>
      </Container>
    </footer>
  )
}
