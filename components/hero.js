import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full relative h-threeQuarters md:h-xl">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20">
        <h1 className="text-center text-5xl mb-1 md:mb-3 text-light md:text-7xl font-hero text-bold-shadow">
          James DeLay
        </h1>
        <h2 className="text-center text-2xl text-light md:text-5xl font-hero text-bold-shadow">
          Software Engineer
          <span className="text-secondary"> | </span>
          Technical Consultant
        </h2>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full z-1 bg-hero-pattern"
        style={{
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-dark h-full w-full z-40 absolute opacity-60 rounded-full" />
        <Image height={350} width={350} src="/assets/imgs/logo.png" />
      </div>
    </section>
  );
}
