import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section className='flex items-center justify-center h-full w-full'>
			{children}
		</section>
	)
}

export default AuthLayout
