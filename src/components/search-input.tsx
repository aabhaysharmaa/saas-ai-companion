"use client";

import { Search } from "lucide-react"
import { Input } from "./ui/input";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useDebounce } from "@/hooks/use-debounce";

const SearchInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const categoryId = searchParams.get("categoryId");
	const name = searchParams.get("name");
	const [value, setValue] = useState(name || "")

	const debouncedValue = useDebounce<string>(value, 700);

	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
	}


	useEffect(() => {
		const query = {
			name: debouncedValue,
			categoryId: categoryId
		}
		const url = queryString.stringifyUrl({
			url: window.location.href,
			query: query

		}, { skipEmptyString: true, skipNull: true })
		router.push(url)
	}, [debouncedValue, router, categoryId])


	return (
		<div className="relative flex items-center justify-center">
			<Search className="absolute size-4 top-3 left-4 text-muted-foreground" />
			<Input
			 value={value}
			 onChange={onChange}
			className="pl-10 bg-secondary focus-visible:ring-0 border-none focus-visible:ring-transparent focus-visible:ring-offset-0" placeholder="Search..." />
		</div>
	)
}
export default SearchInput
