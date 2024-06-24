import React from 'react'

export const SectionHeader = ({num, title}) => {
  return (
	<div className='flex items-center gap-2'>
		<h1 className='font-bold text-2xl space-x-2'><span className='inline-block'>{num}</span><span className='inline-block'>{title}</span></h1> 
		<div className='sm:w-48 w-16 h-0.5 bg-[#78EF9A]'></div>
	</div>
  )
}
