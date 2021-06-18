import { faBars, faCode, faCodeBranch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./container"

export default function Navigation() { 
    const [solidBg, setSolidBg] = useState('bg-transparent') 
    const [isOpen, setIsOpen] = useState(false)
    let listener = null
    const routes = [
        {
            label: "Home",
            route: "/"
        },
        {
            label: "Tech Blog",
            route: "/blog"
        },
        {
            label: "Photography",
            route: "/photography"
        },
        {
            label: "Projects",
            route: "/projects"
        },
    ]

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
            <nav className={`${isOpen ? "bg-dark" : solidBg} transition-all w-full bg-transparent fixed top-0 left-0 z-50`} style={{alignItems: 'center'}}>
                <div className="flex justify-between p-4 md:p-6">

                <Link href="/">
                    <span>
                <FontAwesomeIcon icon={faCodeBranch} className="text-light hover:text-accent text-3xl md:text-5xl cursor-pointer transform rotate-45" />
                    </span>
                </Link>
                <FontAwesomeIcon icon={faBars} className="text-light hover:text-accent text-3xl md:text-5xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <div className={`w-full py-28 bg-dark ${isOpen ? "flex-col" : "hidden"}`}>
                    {
                        routes.map(r => (
                            <p key={r.label} className="font-hero text-center text-2xl md:text-4xl  text-light mb-4 hover:text-accent cursor-pointer p-2">
                            <Link href={r.route}>
                            <span>{r.label}</span>
                            </Link>
                            </p>
                        ))
                    }
                </div>
            </nav>
    )
}