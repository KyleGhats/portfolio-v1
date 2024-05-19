import React from "react";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";
import cs1 from "../../../public/projects/cs_2.png";
import cadet from "../../../public/projects/cadet.png";
import personal from "../../../public/projects/personal.png";
import cs2 from "../../../public/projects/sportstxt.png";
import cuezhe from "../../../public/projects/cuezhe.png";
import omnifood1 from "../../../public/projects/omnifood1.png";
import omnifood2 from "../../../public/projects/omnifood2.png";
import github from "../../../public/github.svg";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "My own personal website portfolio",
    techStack: ["nextjs", "html", "tailwindcss"],
    images: personal,
    link: "#", 
    github: "https://github.com/KyleGhats/portfolio-v1",
  },
  {
    id: 2,
    name: "Case Study 2",
    description:
      "I found a website that had a red, blue and white theme and thought to challenge myself to redesign the website but in dark mode using bootstrap as its framework.",
    techStack: ["bootstrap", "html", "css", "js"],
    images: cs2,
    link: "http://sportstxt.infinityfreeapp.com/sportstxt/",
    github: "https://github.com/KyleGhats/sportsTXT",
  },
  {
    id: 3,
    name: "Case Study",
    description:
      "This is a design I found in Figma Community that I found simple for me to practice implementing TailwindCSS",
    techStack: ["html", "css", "tailwindcss"],
    images: cs1,
    link: "https://case-study1.netlify.app/",
    github: "https://github.com/KyleGhats/case-study",
  },
  {
    id: 4,
    name: "Client Portfolio",
    description: "Portfolio website for a client, it was a requirement before they graduated.",
    techStack: ["bootstrap", "html", "css", "js"],
    images: cadet,
    link: "https://kyleghats.github.io/Portfolio-ashleyedduba/",
    github: "https://github.com/KyleGhats/Portfolio-ashleyedduba",
  },
  {
    id: 5,
    name: "Cuezhe",
    description: "This is a static kitchen utensils shopping website UI for a school project. We were assigned to design and build a website using HTML and CSS.",
    techStack: ["html", "css"],
    images: cuezhe,
    link: "https://kyleghats.github.io/cuzhe/",
    github: "https://github.com/KyleGhats/cuzhe",
  },
  {
    id: 6,
    name: "Omnifood V1",
    description: "This was an old course by Jonas Schmedtmann in udemy, “Design and Develop a Killer Website Using HTML5 and CSS3 where we built a fictional website called omnifood in the final course.",
    techStack: ["html", "css", "js"],
    images: omnifood1,
    link: "https://kyleghats.github.io/omnifood-v1/",
    github: "https://github.com/KyleGhats/omnifood-v1",
  },
  {
    id: 7,
    name: "Omnifood V2",
    description: "This is the latest course of Jonas Schmedtmann in udemy, “Build Responsive Real-World Websites with HTML and CSS3 an updated version of his previous course where we built a fictional website called omnifood in the final course.",
    techStack: ["html", "css", "scss", "js"],
    images: omnifood2,
    link: "https://kyleghats.github.io/omnifood-v2/",
    github: "https://github.com/KyleGhats/omnifood-v2",
  },
];

export const ProjectSection = () => {
  return (
    <section className="space-y-14">
      <SectionHeader num="03" title="Projects" />
      <div className="space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="space-y-8">
            <div className="flex gap-2 items-center">
              <span>{project.name}</span>
              <Link href={project.link} target="_blank" className={project.id !== 1 ? "block" : "hidden"}>
                  <svg
                  className=" opacity-70"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3V5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10ZM17.707 7.707L12 13.414L10.586 12L16.293 6.293L13 3H21V11L17.707 7.707Z"
                      fill="#62ED89"
                    />
                  </svg>
              </Link>
              <Link href={project.github}>
                  <Image
                  src={github}
                  width={24}
                  height={24}
                  alt="github icon"
                />
              </Link>
            </div>
            <div className="flex gap-3 md:flex-row flex-col items-center">
              <Image
                src={project.images}
                width={420}
                height={300}
                alt={project.name}
                className="rounded-lg border border-[#78EF9A]"
              />
              
            </div>
            <p>{project.description}</p>
            <ul className="flex items-center flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="px-3 py-1.5 rounded-md border border-[#78EF9A]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
