export default function PageHero({ title, blurb }) {
  return (
    <section className="w-full relative h-half md:h-twoThirds">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20">
        <h1 className="text-light bg-semiTransparentDark lg:text-6xl md:text-4xl sm:3xl text-center w-screen font-hero text-bold-shadow">
          {title}
        </h1>
        {!!blurb && (
          <h2 className="text-light bg-semiTransparentDark  mt-4 md:mt-8 lg:text-5xl md:text-3xl sm:2xl  text-center w-screen font-mono text-bold-shadow">
            {blurb}
          </h2>
        )}
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full z-1 bg-hero-pattern"
        style={{
          backgroundSize: 'cover'
        }}
      />
    </section>
  );
}
