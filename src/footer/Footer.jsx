import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();
  const linksRef = useRef();
  const socialRef = useRef();
  const copyRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true })
      .from(linksRef.current.children, { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 })
      .from(socialRef.current.children, { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.2 }, "-=0.4")
      .from(copyRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top 90%',
      end: 'bottom 10%',
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-black text-white py-8 px-4" aria-label="Footer Section">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div ref={linksRef} className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        <div ref={socialRef} className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            Twitter
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