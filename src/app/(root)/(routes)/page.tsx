import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <main className=''>
      <UserButton afterSignOutUrl='/' />
    </main>
  )
}

export default Home
