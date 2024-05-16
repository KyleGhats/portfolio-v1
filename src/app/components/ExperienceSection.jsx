import React from "react";
import { SectionHeader } from "./SectionHeader";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Bitshareslabs Inc. | November 2022 - Present",
      sub_title: "Front-end Developer - Full-stack Developer",
      text: "A Front-end developer for various websites using HTML, PHP, Bootstrap, CSS, SASS, and JS in my early deployment then became a full-stack Developer and lead developer for a Virtual Assistant Network web app using Tailwind CSS Framework, JS, HTML, MySQL, AJAX, and PHP as the main developing tools.",
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
      id: 2,
      title: "Freelance | March 2023",
      sub_title: "Front-end Developer",
      text: "Developed a portfolio website for a PNPA graduating student.",
      skills: ["html", "css", "js", "bootstrap"],
    },
    {
      id: 3,
      title: "Internship | May 2022",
      sub_title: "Junior Developer",
      text: "Proposed and developed an intern management system for Bitshareslabs Inc.",
      skills: ["php", "html", "css", "js"],
    },
  ];

  return (
    <section className=" space-y-14">
      <SectionHeader num="02" title="Experience" />
      <div className=" space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className=" space-y-4">
            <h3>
              {/* Split the title at the '|' */}
              {experience.title.split("|").map((part, partIndex) =>
                partIndex === 0 ? (
                  <span key={partIndex}>{`${part} | `}</span>
                ) : (
                  <span key={partIndex} style={{ fontStyle: "italic" }}>
                    {part}
                  </span>
                )
              )}
            </h3>
            <span className="block opacity-50 !mt-2">
              {experience.sub_title}
            </span>
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
