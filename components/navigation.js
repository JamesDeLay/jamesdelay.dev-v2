import { faBars, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AUTHOR_SOCIALS } from "../lib/constants";

export default function Navigation() {
  const [solidBg, setSolidBg] = useState("bg-transparent");
  const [isOpen, setIsOpen] = useState(false);
  const [isIntoView, setIsIntoView] = useState(false);

  let listener = null;

  function formatSocialsForRoute(social) {
    const label = AUTHOR_SOCIALS[social].name;
    const route = AUTHOR_SOCIALS[social].link;
    return { label, route };
  }

  const routes = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Tech Blog",
      route: "/blog",
    },
    ...Object.keys(AUTHOR_SOCIALS)
      .filter((s) => AUTHOR_SOCIALS[s].inNav)
      .map(formatSocialsForRoute),
  ];

  useEffect(() => {
    if (isIntoView) {
      setSolidBg("bg-dark");
    } else {
      setSolidBg("bg-transparent");
    }
  }, [isIntoView]);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 230) {
        setIsIntoView(true);
      } else {
        setIsIntoView(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [solidBg]);

  return (
    <nav
      className={`${
        isOpen ? "bg-dark" : solidBg
      } transition-all w-full bg-transparent fixed top-0 left-0 z-50`}
      style={{ alignItems: "center" }}
    >
      <div className="flex justify-between p-4 md:p-6">
        <Link href="/">
          <span>
            <FontAwesomeIcon
              icon={faCodeBranch}
              size="2x"
              className={cn("cursor-pointer transform rotate-45", {
                "text-primary hover:text-accent": isIntoView,
                "text-light": !isIntoView,
              })}
            />
          </span>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className={cn("cursor-pointer transform", {
            "text-primary hover:text-accent": isIntoView,
            "text-light": !isIntoView,
          })}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`w-full py-28 bg-dark ${isOpen ? "flex-col" : "hidden"}`}>
        {routes.map((r) => (
          <p
            key={r.label}
            className="font-hero text-center text-2xl md:text-4xl  text-light mb-4 hover:text-accent cursor-pointer p-2"
          >
            <Link
              href={r.route}
              onClick={() => setIsOpen(!isOpen)}
              legacyBehavior={false}
            >
              <span>{r.label}</span>
            </Link>
          </p>
        ))}
      </div>
    </nav>
  );
}
