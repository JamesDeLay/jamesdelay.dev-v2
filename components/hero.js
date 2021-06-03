import Image from 'next/image'
import { CMS_NAME } from '../lib/constants'

export default function Hero() {
  return (
    <section className="w-full relative h-threeQuarters md:h-xl">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20">
        <h1 className="text-center text-5xl mb-1 md:mb-3 text-light text-neon md:text-7xl font-limelight">JAMES DELAY</h1>
        <h2 className="text-center text-3xl text-light md:text-5xl font-limelight text-neon">Software Engineer</h2>
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-1 bg-dark" style={{
        backgroundImage: "url(" + `${require('../public/assets/svgs/hero.svg')}` + ")",
        backgroundSize: 'cover'
        }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-dark h-full w-full z-40 absolute opacity-60 rounded-full" />
        <Image
          height={350}
          width={350}
          src="/assets/imgs/logo.png"
          />
        </div>
    </section>
  )
}
