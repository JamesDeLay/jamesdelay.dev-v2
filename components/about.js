import Image from "next/image";
import Avatar from "./avatar";
import ReactTypingEffect from  "react-typing-effect"
import { AUTHOR_DESCRIPTIVE_ADJECTIVES, AUTHOR_BIO, AUTHOR_HEADSHOT } from "../lib/constants";

export default function About() {

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 md:pt-28 pt-12">
            <div className="mt-2 mb-2 justify-items-center">
                <Avatar size={48} src={AUTHOR_HEADSHOT} />
            </div>
            <article className="p-1 justify-items-center">
                <h3 className="text-center text-4xl font-serif">Hi, I'm James</h3>
                <div className="text-center h-10 mt-2 mb-2">
                <ReactTypingEffect
                    text={AUTHOR_DESCRIPTIVE_ADJECTIVES}
                    speed={100}
                    typingDelay={500}
                    displayTextRenderer={(text, i) => {
                    return (
                        <div className="p-1">
                            <h4 className={`text-xl mt-2 ${i % 2 === 0 ? 'text-secondary': "text-primary"} font-bold text-s font-serif`}>{text}</h4>
                        </div>
                    );
                    }}        
                />
                </div>
                <section className="mt-6 mb-1">
                    <p className="font-sans">{AUTHOR_BIO}</p>
                </section>
            </article>
        </section>
    )
}