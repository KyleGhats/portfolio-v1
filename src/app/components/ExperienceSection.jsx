import React from "react";
import { SectionHeader } from "./SectionHeader";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Internship | May 2022",
      sub_title: "Junior Developer",
      text: "Proposed and developed an intern management system for Bitshareslabs Inc.",
      skills: ["php", "html", "css", "js"],
    },
    {
      id: 2,
      title: "Bitshareslabs Inc. | November 2022 - Present",
      sub_title: "Front-end Developer - Full-stack Developer",
      text: "Developer and designer for various web projects such as kolabspace, cryptosavers club, bitsharelabs, blincph and bibeverse. Also developed and maintained website for various clients such as densenlaw. ",
      skills: [
        "php",
        "html",
        "css",
        "scss",
        "js",
        "reactjs",
        "mysql",
        "tailwindcss",
        "bootstrap",
      ],
    },
    {
      id: 1,
      title: "Freelance | March 2023",
      sub_title: "Front-end Developer",
      text: "Developed a portfolio website for a PNPA graduating student.",
      skills: ["html", "css", "js", "bootstrap"],
    },
  ];

  return (
    <section className=" space-y-14">
      <SectionHeader num="02" title="Experience" />
      <div className=" space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className=" space-y-4">
            <h3>{experience.title}</h3>
            <h4>{experience.sub_title}</h4>
            <p>{experience.text}</p>
            <ul className="flex items-center flex-wrap gap-3">
              {experience.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="px-3 py-1.5 rounded-md border border-[#78EF9A]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
