import React from "react";
import { SectionHeader } from "./SectionHeader";

export const AboutSection = () => {
  return (
    <section className="space-y-14 scroll-mt-[4rem]" id="about">
      <SectionHeader num="01" title="About"/>
		{/* <div className=" h-0.5 w-14 bg-[#78EF9A] mb-2"></div> */}
      <div className="space-y-6">
        <p>
          Back in 2016 during my 11th grade, I began my development journey by
          creating a website following a tutorial from the well-known developer
          Jonas Schmedtmann. This project ignited my passion for converting
          beautiful designs into functional websites, which I thoroughly enjoy.{" "}
        </p>
        <p>
          After completing an internship in 2022, I was fortunate enough to join
          Bitsharelabs Inc., the company where I interned, as a full-time
          employee.
        </p>
        <p>
          Now, I've gained extensive experience in building and converting web
          designs for clients, working with back-end technologies like PHP and
          Node.js, and I've also progressed to become a team lead and intern
          supervisor.{" "}
        </p>
        <p>
          In my spare time, I like to keep up with the latest technologies,
          frameworks, and trends in web development. Outside of work, my hobbies
          include playing games, watching movies, spending time with my family,
          and enjoying the outdoors.
        </p>
      </div>
    </section>
  );
};
