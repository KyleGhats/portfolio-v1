import Link from "next/link";
import React from "react";

export const RightSideProfile = () => {
  return (
    <aside className="md:fixed right-0 top-0 h-screen z-30 md:flex items-center justify-center xl:pr-24 lg:pr-20 md:pr-16 pr-10 max-xl:w-96 max-md:w-full">
      <div className="space-y-12">
        <div className=" space-y-4">
          <span>Hi!</span>
          <h1 className=" sm:text-4xl text-2xl font-bold">Kyle Gatudan</h1>
          <h4>Web Developer</h4>
          <p>I am a web developer based in Baguio City, Philippines. </p>
          <ul>
            <li>
              <Link href="#" className="flex items-center gap-3">
                <span>01</span>
                <span className="inline-block h-0.5 w-12 bg-[#78EF9A]"></span>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3">
                <span>02</span>
                <span className="inline-block h-0.5 w-12 bg-[#78EF9A]"></span>
                <span>Experience</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3">
                <span>03</span>
                <span className="inline-block h-0.5 w-12 bg-[#78EF9A]"></span>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3">
                <span>04</span>
                <span className="inline-block h-0.5 w-12 bg-[#78EF9A]"></span>
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className=" tracking-[0.2em]">kylegatudan@gmail.com</div>
      </div>
    </aside>
  );
};
