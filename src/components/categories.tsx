"use client";

import { category } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";


interface CategoriesProps {
	data: category[];
}

const Categories = ({ data }: CategoriesProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const categoryId = searchParams.get("categoryId");

	const onClick = (id: string | undefined) => {
		const query = {
			categoryId: id
		}
		const url = queryString.stringifyUrl({
			url: window.location.href,
			query
		})
		router.push(url);
	}
	return (
		<div className="flex overflow-x-auto  w-full p-1 space-x-2">
			<button
				onClick={() => onClick(undefined)}
				className={cn("py-2 px-2 md:px-4 md:py-3  md:text-sm hover:opacity-75 transition bg-neutral-700 rounded-md flex items-center justify-center cursor-pointer ",!categoryId && "bg-primary/25")}
			>Newest</button>
			{data.map((item) => (
				<button
					onClick={() => onClick(item.id)}
					key={item.id}
					className={cn("py-2 px-2 md:px-4 md:text-sm md:py-3 hover:opacity-75 transition bg-neutral-700 rounded-md flex items-center justify-center cursor-pointer ", categoryId === item.id && "bg-neutral-500")}
				>
					{item.name}
				</button>
			))}
		</div>
	)
}

export default Categories
