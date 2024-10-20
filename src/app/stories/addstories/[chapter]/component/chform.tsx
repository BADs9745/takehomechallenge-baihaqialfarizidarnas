"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	title: z.string().min(5).max(255),
	story: z.string().min(50),
});

const Submit = (values: z.infer<typeof formSchema>) => {
	console.log(values);
};

export function ChFormComponent() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "No Title",
			story: "",
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(Submit)}>
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
					name="story"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Writer Name</FormLabel>
								<FormControl>
									<Textarea
										className="h-52"
										placeholder="Writer Name"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Who are you that write this story
								</FormDescription>
							</FormItem>
						);
					}}
				/>

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
