import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Navigation from './navigation'

export default function Layout({children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
