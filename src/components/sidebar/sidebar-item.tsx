"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


interface SidebarItemProps {
	item: {
		icon: LucideIcon,
		href: string,
		label: string,
		pro: boolean
	}
}

const SidebarItem = ({ item }: SidebarItemProps) => {
	const router = useRouter();
	const onNavigation = (href: string, pro: boolean) => {

		return router.push(href)
	}
	const pathname = usePathname()
	return (
		<div className={cn("")}>
			<div onClick={() => onNavigation(item.href,item.pro)} className={cn("text-muted-foreground text-xs group w-full flex p-2 font-medium cursor-pointer justify-start  hover:bg-primary/10 rounded-lg transition", pathname === item.href && "bg-neutral-900")}>
				<div className="flex flex-col gap-y-2 items-center  flex-1">
					<item.icon className="size-4" />
					<p>{item.label}</p>
				</div>
			</div>
		</div>
	)
}

export default SidebarItem
