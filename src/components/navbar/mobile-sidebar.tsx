import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import Sidebar from '../sidebar';

const MobileSidebar = () => {
  return (
	<Sheet>
		<SheetTrigger className='md:hidden cursor-pointer hover:text-neutral-400 pr-4'>
			<Menu/>
		</SheetTrigger>
		<SheetContent side='left' className='p-0 bg-secondary pt-10 w-25'>
			<SheetTitle></SheetTitle>
			<Sidebar/>
		</SheetContent>
	</Sheet>
  )
}

export default MobileSidebar
