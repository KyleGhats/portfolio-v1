import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";

export const RightSideProfile = () => {
  const navItems = useMemo(() => [
    { no: '01', id: "about", text: "About" },
    { no: '02', id: "experience", text: "Experience" },
    { no: '03', id: "projects", text: "Projects" },
  ], []);

  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      // Determine which section is currently active
      const sections = navItems.map(item => {
        const sectionElement = document.getElementById(item.id);
        if (sectionElement) {
          const { top, height } = sectionElement.getBoundingClientRect();
          return {
            id: item.id,
            top,
            bottom: top + height
          };
        }
        return null;
      }).filter(section => section !== null);

      for (let i = sections.length - 1; i >= 0; i--) {
        const { top, bottom } = sections[i];
        // Check if section is at least halfway visible in viewport
        if (top <= viewportHeight / 2 && bottom >= viewportHeight / 2) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <aside className="md:fixed right-0 top-0 md:h-screen max-md:mb-20 z-30 md:flex items-center justify-center xl:pr-24 lg:pr-20 md:pr-16 pr-10 max-xl:w-96 max-md:w-full">
      <div className="space-y-12">
        <div className=" space-y-4">
          <span className=" inline-block">Hi! I am</span>
          <div className=" sm:space-y-5 space-y-3">
            <h1 className=" sm:text-5xl text-2xl font-bold">Kyle Gatudan</h1>
            <h4 className="bg-[#78EF9A] px-2 sm:py-1 py-0.5 inline-block text-[#020F1F] font-semibold uppercase text-sm">Web Developer</h4>
            <p className="sm:w-[384px]">A web developer based in Baguio City, the coldest city in the Philippines.</p>
          </div>
          <ul className="space-y-2 md:block hidden">
            {navItems.map((item, index) => (
              <li key={index} className={`${item.id === activeSection ? 'text-[#78EF9A] scale-110' : ''}`}>
                <Link href={`#${item.id}`} className={`flex items-center gap-3 text-[#3c784d] ${item.id === activeSection ? 'text-[#78EF9A]' : ''}`}>
                  <span>{item.no}</span>
                  <span className={`inline-block h-0.5 w-12  ${item.id === activeSection ? 'bg-[#78EF9A]' : 'bg-[#3c784d]'}`}></span>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-7">
          <div className=" tracking-[0.2em]">kylegatudan@gmail.com</div>
          <div>
            <Link href="resume/Resume(Gatudan).pdf" target="_blank" className="px-4 py-2 border-[#78EF9A] border rounded-md md:inline-block hidden">View Resume</Link>
          </div>
        </div>
      </div>
    </aside>
  );
};
