import Link from "next/link";
import React from "react";


export const RightSideProfile = () => {
  const navItems = [
    { text: "About", href: "#" },
    { text: "Experience", href: "#" },
    { text: "Projects", href: "#" },
  ];
  return (
    <aside className="md:fixed right-0 top-0 h-screen z-30 md:flex items-center justify-center xl:pr-24 lg:pr-20 md:pr-16 pr-10 max-xl:w-96 max-md:w-full">
      <div className="space-y-12">
        <div className=" space-y-4">
          <span className="">Hi!</span>
          <h1 className=" sm:text-5xl text-2xl font-bold">Kyle Gatudan</h1>
          <h4>Web Developer</h4>
          <p>I am a web developer based in Baguio City, Philippines. </p>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="flex items-center gap-3">
                  <span>{item.id}</span>
                  <span className="inline-block h-0.5 w-12 bg-[#78EF9A]"></span>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-7">
          <div className=" tracking-[0.2em]">kylegatudan@gmail.com</div>
          <div>
            <Link href="resume/Resume(Gatudan).pdf" target="_blank" className="px-4 py-2 border-[#78EF9A] border rounded-md">View Resume</Link>
          </div>
        </div>
      </div>
    </aside>
  );
};
