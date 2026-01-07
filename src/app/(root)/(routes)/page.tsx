import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <main className=''>
      <UserButton afterSignOutUrl='/' />
    </main>
  )
}

export default Home
