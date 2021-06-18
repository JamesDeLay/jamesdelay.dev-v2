import Image from "next/image"

export default function PageHero({title, blurb}) {
    return ( 
        <section className="w-full relative h-twoThirds md:h-xl">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20">
        <h1 className="text-light text-3xl md:text-8xl text-center w-screen font-hero text-bold-shadow">{title}</h1>
          {!!blurb && (<h2 className="text-light text-xl mt-4 md:mt-8 md:text-3xl text-center w-screen font-mono text-bold-shadow">{blurb}</h2>)}
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-1 bg-hero-pattern" style={{
          backgroundSize: 'cover'
          }} />
      </section>
    )
}