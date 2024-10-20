"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
const category = ["Ayam", "bebek"];

type status = "PUBLISH" | "DRAFT";
const stat: status[] = ["PUBLISH", "DRAFT"];

const formSchema = z.object({
	title: z.string().min(5).max(255),
	writer_name: z.string().min(5).max(255),
	synopsis: z.string().min(50),
	category: z.string(),
	tag: z.string(),
	status: z.string(),
});

const Submit = (values: z.infer<typeof formSchema>) => {
	console.log(values);
};

export function FormComponent() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "No Title",
			writer_name: "Unknown Writer",
			category: "",
			tag: "",
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(Submit)}>
				<div className="flex *:w-full space-x-4">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Story Title" {...field} />
								</FormControl>
								<FormDescription>The Title For Your Story</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="writer_name"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Writer Name</FormLabel>
									<FormControl>
										<Input placeholder="Writer Name" {...field} />
									</FormControl>
									<FormDescription>
										Who are you that write this story
									</FormDescription>
								</FormItem>
							);
						}}
					/>
				</div>
				<FormField
					control={form.control}
					name="synopsis"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Synopsis</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Synopsis"
										{...field}
										className="h-32"
									/>
								</FormControl>
								<FormDescription>Summarize your story</FormDescription>
							</FormItem>
						);
					}}
				/>
				<div className="flex *:w-full space-x-4">
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select Category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{category.map((item) => {
											return (
												<SelectItem value={item} key={item}>
													{item}
												</SelectItem>
											);
										})}
									</SelectContent>
								</Select>
								<FormDescription>The Title For Your Story</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="tag"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Tags/Keywords</FormLabel>
									<FormControl>
										<Input placeholder="Writer Name" {...field} />
									</FormControl>
									<FormDescription>Story Tags</FormDescription>
								</FormItem>
							);
						}}
					/>
				</div>
				<div className="flex *:w-full space-x-4 items-center">
					<div>
						<Label>Cover Image</Label>
						<Input type="file" />
					</div>
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Status</FormLabel>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select Category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{stat.map((item) => {
											return (
												<SelectItem value={item} key={item}>
													{item}
												</SelectItem>
											);
										})}
									</SelectContent>
								</Select>
								<FormDescription>Your Story Status</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Link href={"addstories/69"}>
					<Button>Add Chapter +</Button>
				</Link>
				<div className="p-4 text-end space-x-4">
					<Link href={"../"}>
						<Button type="button">Cancel</Button>
					</Link>
					<Button type="submit">Save</Button>
				</div>
			</form>
		</Form>
	);
}
