import NavBar from '@/components/navbar'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='h-full'>
			<NavBar/>
			<main className='md:pl-20 pt-16 h-full'>
			{children}
			</main>
		</div>
	)
}

export default RootLayout
