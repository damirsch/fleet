import React from 'react'

export default function DefaultWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>){
	return (
		<div className='max-w-[1440px] mx-auto'>
			{children}
		</div>
	)
}