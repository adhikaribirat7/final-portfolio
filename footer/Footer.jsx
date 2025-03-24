import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();
  const linksRef = useRef();
  const socialRef = useRef();
  const copyRef = useRef();

  useGSAP(
    () => {
      const tl = gsap
        .timeline({ paused: true })
        .from(linksRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,
        })
        .from(
          socialRef.current.children,
          { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
        .from(copyRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });
    },
    { scope: footerRef }
  );

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-8 px-4"
      aria-label="Footer Section"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <ul
          ref={linksRef}
          className="flex flex-col md:flex-row gap-4 text-center md:text-left"
        >
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
              className="p-2 nav-item"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
              className="p-2 nav-item"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("skills");
              }}
              className="p-2 nav-item"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("projects");
              }}
              className="p-2 nav-item"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
              className="p-2 nav-item"
            >
              Contact
            </a>
          </li>
        </ul>
        <div ref={socialRef} className="flex gap-6">
          <a
            href="https://github.com/adhikaribirat7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/birat-adhikari-b774272b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p ref={copyRef} className="text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} Birat Adhikari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
