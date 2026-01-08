"use client";

import { category, Companion } from "@/generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
interface CompanionFormProps {
	initialDate: Companion | null;
	categories: category[]
}

const formSchema = z.object({
	name: z.string().min(1, "name is required"),
	description: z.string().min(1, "description is required"),
	instruction: z.string().min(200, "Instruction require at least 200 characters."),
	seed: z.string().min(200, "Seed required at least 200 characters"),
	src: z.string().min(1, "Image is required"),
	categoryId: z.string().min(1, "Category is required"),
})

const CompanionForm = ({ initialDate, categories }: CompanionFormProps) => {

	const PREABLE = `You are an AI Meeting & Chat Companion designed to assist users in real time during conversations, video calls, and chats.
You communicate clearly, professionally, and with high technical accuracy, adapting your depth based on the user’s needs.
Your goal is to provide fast, useful insights, summaries, answers, and next steps without unnecessary chatter.`

	const seedChat = `
User: What’s happening in this meeting so far?
AI: The discussion is focused on product launch timelines and current technical blockers.

User: Can you summarize the key points?
AI: The team agreed on a two-week delay due to API stability issues and assigned fixes to the backend team.

User: Any action items for me?
AI: Yes. You need to review the API changes and share feedback by Friday.

User: Can you explain the blocker quickly?
AI: The issue is caused by inconsistent authentication responses under high load.

User: What should we do next?
AI: Prioritize load testing, apply rate limiting, and re-evaluate deployment after fixes.
`
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialDate || {
			name: "",
			description: "",
			instruction: "",
			seed: "",
			src: "",
			categoryId: ""
		}
	});

	const isLoading = form.formState.isSubmitting;
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
	}
	return (
		<div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
					<div className="space-y-2 w-full">
						<div className="">
							<h3 className="text-lg font-medium">General Information</h3>
							<p className="text-sm text-muted-foreground">General information about your Companion</p>
						</div>
						<hr className="bg-primary/10" />
					</div>
					<FormField
						control={form.control}
						name="src"
						render={({ field }) => (
							<FormItem className="flex flex-col items-center justify-center space-y-4 ">
								<FormControl>
									<ImageUpload disabled={isLoading}
										onChange={field.onChange}
										value={field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid-cols-1 md:grid-cols-2 gap-4 grid">
						<FormField
							name="name"
							control={form.control}
							render={({ field }) => (
								<FormItem
									className="col-span-2 md:col-span-1"
								>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input disabled={isLoading} placeholder="Elon Musk" {...field} />
									</FormControl>
									<FormDescription className="ml-2">
										This is how your AI Companion will be named
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>
						<FormField
							name="description"
							control={form.control}
							render={({ field }) => (
								<FormItem
									className="col-span-2 md:col-span-1"
								>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Input disabled={isLoading} placeholder="CEO & Founder of Tesla , SpaceX" {...field} />
									</FormControl>
									<FormDescription className="ml-2">
										Short description of your AI Companion
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>
						<FormField
							name="categoryId"
							control={form.control}
							render={({ field }) => (
								<FormItem  >
									<FormLabel>Category</FormLabel>
									<Select
										disabled={isLoading}
										onValueChange={field.onChange}
										value={field.value}
									>
										<FormControl>
											<SelectTrigger className="bg-background">
												<SelectValue
													defaultValue={field.value}
													placeholder="Select a category"

												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent className="" >
											{categories.map((category) => (
												<SelectItem key={category.id}
													value={category.id}
												>
													{category.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>
										Select a category for your AI
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>
					</div>
					<div className="w-full space-y-2">
						<div className="">
							<h3 className="text-lg font-medium">Configure</h3>
							<p className="text-sm text-muted-foreground">Detailed instruction for AI Behaviour</p>
						</div>
						<hr className="bg-primary/10" />
					</div>
					<FormField
						name="instruction"
						control={form.control}
						render={({ field }) => (
							<FormItem
								className="col-span-2 md:col-span-1"
							>
								<FormLabel>Instruction</FormLabel>
								<FormControl>
									<Textarea
										rows={7}
										disabled={isLoading}
										placeholder={PREABLE}
										className="bg-background resize-none"
										{...field}
									/>
								</FormControl>
								<FormDescription className="ml-2">
									Describe in detail your companion&apos;s backstory and relevant details.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					>
					</FormField>
					<FormField
						name="seed"
						control={form.control}
						render={({ field }) => (
							<FormItem
								className="col-span-2 md:col-span-1"
							>
								<FormLabel>Seed</FormLabel>
								<FormControl>
									<Textarea disabled={isLoading} rows={10} className=" resize-none" placeholder={seedChat}{...field} />
								</FormControl>
								<FormDescription className="ml-2">
									Short description of your AI Companion
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					>
					</FormField>
					<div className="w-full flex justify-center">
						<Button className="w-full" size={"lg"} disabled={isLoading}>
							{initialDate ? "Edit your companion" : "create your campanion"}
							<Wand2 className="size-4 ml-2"/>
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default CompanionForm;
