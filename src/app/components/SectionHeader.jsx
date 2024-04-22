import React from 'react'

export const SectionHeader = ({num, title}) => {
  return (
	<div className='flex items-center gap-2'>
		<h1 className='font-bold text-2xl space-x-2'><span className='inline-block'>{num}</span><span className='inline-block'>{title}</span></h1> 
		<div className='w-48 h-0.5 bg-[#78EF9A]'></div>
	</div>
  )
}
