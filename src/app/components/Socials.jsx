import Image from "next/image";
import Link from "next/link";
import React from "react";
import socials from "./utils/data.js";


export const Socials = () => {
  return (
    <div className=" md:flex hidden fixed left-7 bottom-0 flex-col items-center gap-5 z-50">
		<ul className="flex flex-col items-center gap-5">
			{socials.map((social) => (
				social.id !== 5 && (
					<li key={social.id}>
					<Link href={social.link} target="_blank">
						<Image 
						src={social.icon}   
						width={32}
						height={32}
						alt={social.alt}
						/>
					</Link>
					</li>
				)
			))}
		</ul>
		<div className='w-0.5 h-28 bg-[#62ED89] opacity-70'></div>
    </div>
  );
};