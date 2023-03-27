import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";

import {
  AUTHOR_DESCRIPTIVE_ADJECTIVES,
  AUTHOR_HEADSHOT,
  AUTHOR_NAME,
} from "../lib/constants";

export default function About() {
  return (
    <section
      className="w-full flex flex-col-reverse md:grid lg:grid-cols-2 gap-8 md:grid-cols-1 md:pt-28 pt-12"
      style={{ gridTemplateColumns: `2fr 1fr` }}
    >
      <article className="p-1 justify-items-center bg-white p-4 rounded-lg">
        <h3 className="text-center text-4xl font-serif">Hi, I'm James</h3>
        <div className="text-center h-10 mt-2 mb-2">
          <ReactTypingEffect
            text={AUTHOR_DESCRIPTIVE_ADJECTIVES}
            speed={100}
            typingDelay={500}
            displayTextRenderer={(text, i) => {
              return (
                <div className="p-1">
                  <h4
                    className={`text-xl mt-2 ${
                      i % 2 === 0 ? "text-secondary" : "text-primary"
                    } font-bold text-s font-serif`}
                  >
                    {text}
                  </h4>
                </div>
              );
            }}
          />
        </div>
        <section className="mt-6 mb-1">
          <p className="font-sans mb-2">
            I first discovered coding in my early teenage years, and it was love
            at first 'site'. I remember hacking away on a gargantuan white box
            of a computer, building websites with HTML, CSS, and Notepad. Though
            these "web pages" are now lost in the depths of my old hard drive, I
            continued to play around with code as a hobbyist programmer for
            years thereafter. It wasn’t until later in my life, while pursuing
            my MBA, that I began to think of software engineering as a career
            path.
          </p>
          <p className="font-sans mb-2">
            At that time, I was working as a carpenter during the day and taking
            graduate classes at night. While at work, I realized how much I
            enjoyed building things and solving the three-dimensional puzzles
            that carpentry presents. My favorite part of the job was coming up
            with creative ways to solve the difficult problems my team and I
            faced daily. I decided to combine this passion for building and
            creating with my love for code.
          </p>
          <p className="font-sans mb-2">
            This decision led me to The Fullstack Academy, where I studied
            software engineering and web development. After completing my
            studies at Fullstack, I was hired as a Teaching Fellow, where I
            taught and mentored aspiring software engineers. I then went on to
            work at Oppenheimer & Co. Inc. and subsequently McKinsey & Co.,
            where I currently work as a full-stack Software Engineer and
            Technical Consultant.
          </p>
          <p className="font-sans mb-2">
            During my tenure at McKinsey, I've worked on numerous applications,
            spanning geospatial analytic tools to PowerPoint automation scripts.
            I specialize in front-end web development and have extensive
            experience building responsive web applications. I am passionate
            about solving complex problems and experimenting with code.
          </p>
        </section>
      </article>
      <div className="md:mt-12 md:mb-12 flex justify-center self-center">
        <Image
          src={AUTHOR_HEADSHOT}
          className={`rounded-full m-auto`}
          alt={AUTHOR_NAME}
          objectFit="cover"
          quality={100}
          height={500}
          width={500}
        />
      </div>
    </section>
  );
}
