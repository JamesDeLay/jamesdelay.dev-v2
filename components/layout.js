import Footer from './footer';
import Meta from './meta';
import Navigation from './navigation';

export default function Layout({ children, showNavigation = false }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
