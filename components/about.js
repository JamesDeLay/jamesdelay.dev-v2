import Image from "next/image";
import Avatar from "./avatar";
import ReactTypingEffect from  "react-typing-effect"
import { AUTHOR_DESCRIPTIVE_ADJECTIVES, AUTHOR_BIO } from "../lib/constants";

export default function About() {

    const HEADSHOT_PATH = "/assets/imgs/headshot.png";

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="mt-2 mb-4">
                <Avatar size={48} src={HEADSHOT_PATH} />
            </div>
            <hr className="m-4"/>
            <article className="p-1">
                <h3 className="text-center text-3xl">Hi, I'm James</h3>
                <div className="text-center h-10 mt-2 mb-2">
                <ReactTypingEffect
                    text={AUTHOR_DESCRIPTIVE_ADJECTIVES}
                    speed={100}
                    typingDelay={500}
                    // cursorRenderer={cursor => <span className="text-accent font-bold">{cursor}</span>}
                    displayTextRenderer={(text, i) => {
                    return (
                        <div className="p-1">
                            <h4 className={`text-xl mt-2 ${i % 2 === 0 ? 'text-secondary': "text-primary"} font-bold`}>{text}</h4>
                        </div>
                    );
                    }}        
                />
                </div>
                <section className="mt-6">
                    <p>{AUTHOR_BIO}</p>
                </section>
            </article>
        </section>
    )
}