import Footer from './footer';
import Meta from './meta';
import Navigation from './navigation';

export default function Layout({ children, showNavigation = true }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {showNavigation && <Navigation />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
