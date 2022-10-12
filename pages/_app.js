import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles/index.css';
import "../styles/markdown-styles.css";
// Fix for FontAwesomeIcon SSR
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
