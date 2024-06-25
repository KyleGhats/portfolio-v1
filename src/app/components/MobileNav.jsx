import React from 'react';
import Link from "next/link";
import socials from './utils/data.js';
import Image from 'next/image';

export default function MobileNav() {

  return (
	<div className=' md:hidden block  fixed z-50 bottom-5 left-0 right-0'>
		<div className='flex items-center justify-center mx-auto  w-3/4 py-4 px-4 bg-[#020F1F] rounded-lg shadow-[0_3px_8px_3px_rgba(30,229,86,0.3)]'>
			<ul className="flex items-center gap-5">
				{socials.map((social) => (
					<li key={social.id}>
						<Link href={social.link} target='_blank'>
							<Image 
								src={social.icon}   
								width={24}
								height={24}
								alt={social.alt}
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
  )
}
