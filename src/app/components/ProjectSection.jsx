import React from "react";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";
import img from "../../../public/dummy.png";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati officiis nobis possimus maiores! Voluptas exercitationem rerum deleniti soluta aut deserunt ullam nulla quos animi, ipsum accusantium molestiae nesciunt ab?",
    techStack: ["php", "js", "html", "css"],
    images: [img, img, img], 
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati officiis nobis possimus maiores! Voluptas exercitationem rerum deleniti soluta aut deserunt ullam nulla quos animi, ipsum accusantium molestiae nesciunt ab?",
    techStack: ["node", "react", "css"],
    images: [img, img, img],
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati officiis nobis possimus maiores! Voluptas exercitationem rerum deleniti soluta aut deserunt ullam nulla quos animi, ipsum accusantium molestiae nesciunt ab?",
    techStack: ["java", "spring", "html"],
    images: [img, img, img],
  },
];

export const ProjectSection = () => {
  return (
    <section className="space-y-14">
      <SectionHeader num="03" title="Projects" />
      <div className="space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="space-y-8">
            <Link href="#">
              <div className="flex items-center gap-2">
                <span>{project.name}</span>
                <svg
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
              </div>
            </Link>
            <div className="flex gap-3 items-center">
              <Image
                src={project.images[0]}
                width={420}
                height={300}
                alt={project.name}
                className="rounded-lg border border-[#78EF9A]"
              />
              <div className="flex flex-col gap-3">
                {project.images.slice(1).map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width={200}
                    height={100}
                    alt={project.name}
                    className="rounded-lg border border-[#78EF9A]"
                  />
                ))}
              </div>
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
