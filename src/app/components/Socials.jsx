import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "../../../public/github.svg";
import linkedin from "../../../public/linkedin.svg";
import instagram from "../../../public/instagram.svg";
import codepen from "../../../public/codepen.svg";


export const Socials = () => {
	const socials = [
		{
			id: 1,
			icon: github,
			alt: "",
			link: "#"
		},
		{
			id: 2,
			icon: linkedin,
			alt: "",
			link: "#"
		},
		{
			id: 3,
			icon: instagram,
			alt: "",
			link: "#"
		},
		{
			id: 4,
			icon: codepen,
			alt: "",
			link: "#"
		},
	]
  return (
    <div className=" md:flex hidden fixed left-7 bottom-0 flex-col items-center gap-5 z-50">
		<ul className="flex flex-col items-center gap-5">
			{socials.map((social) => (
				<li key={social.id}>
					<Link href={social.link}>
						<Image 
							src={social.icon}   
							width={32}
							height={32}
							alt={social.alt}
						/>
					</Link>
				</li>
			))}
		</ul>
		<div className='w-0.5 h-28 bg-[#62ED89] opacity-70'></div>
    </div>
  );
};
