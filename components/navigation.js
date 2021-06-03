import { faBars, faCode, faCodeBranch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import { useEffect, useState } from "react";
import Container from "./container"

export default function Navigation() { 
    const [solidBg, setSolidBg] = useState('bg-transparent') 
    let listener = null
    // const [scrollState, setScrollState] = useState("")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 200) {
            setSolidBg("bg-dark")
        } else {
            setSolidBg('bg-transparent')
        }
        })
        return () => {
        document.removeEventListener("scroll", listener)
        }
    }, [solidBg])

    return (
            <nav className={`${solidBg} transition-all w-full bg-transparent fixed top-0 left-0 z-50 flex justify-between p-4 md:p-6`} style={{alignItems: 'center'}}>
                {/* <div className="absolute top-0 l-0 w-full h-full"> */}
                {/* TODO: bigger size on desktop */}
                <FontAwesomeIcon icon={faCodeBranch} className="text-light text-3xl md:text-5xl cursor-pointer transform rotate-45" />
                {/* <Image 
                    height={40}
                    width={40}
                    src="/assets/imgs/logo.png"
                /> */}
                {/* TODO: on small screens show */}
                <FontAwesomeIcon icon={faBars} className="text-light text-3xl md:text-5xl cursor-pointer" />
            </nav>
    )
}