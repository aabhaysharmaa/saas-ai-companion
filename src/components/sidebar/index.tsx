"use client";

import { Home, Plus, Settings } from "lucide-react";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
	const routes = [
		{
			icon: Home,
			href: "/",
			label: 'Home',
			pro: false
		},
		{
			icon: Plus,
			href: "/companion/new",
			label: 'Create',
			pro: false
		},
		{
			icon: Settings,
			href: "/settings",
			label: 'Settings',
			pro: false
		},
	]

	return (
		<div className="space-y-4 flex   flex-col h-full text-primary bg-secondary">
			<div className="p-3 flex flex-1 justify-center">
				<div className="space-y-2">
					{routes.map((item) => (
						<SidebarItem
							key={item.href}
                          item={item}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
