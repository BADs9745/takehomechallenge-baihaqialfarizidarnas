"use client";
import { Button } from "@/components/ui/button";
import { FilterDialog } from "./dialog";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const routeOpt = [
	{
		title: "Stories",
		href: "/stories",
	},
	{
		title: "Add Stories",
		href: "/stories/addstories",
	},
	{
		title: "Add Chapter",
		href: "/stories/addstories/addchapter",
	},
];

export default function Header() {
	const route = usePathname();
	const titlefun = () => {
		const txtindex = routeOpt.find((e) => {
			return e.href === route;
		});
		const txt = txtindex?.title;
		return txt;
	};
	return (
		<header className="bg-white shadow p-5 flex justify-between items-center">
			<h1 className="text-2xl font-semibold">{titlefun()}</h1>
			<div
				className={clsx("inline-flex items-center space-x-4", {
					hidden:
						route === "/stories/addstories" ||
						route === "/stories/addstories/addchapter",
				})}
			>
				<FilterDialog />
				<div className="h-10 w-[1px] bg-black" />
				<Link href={"/stories/addstories"}>
					<Button>Add Stories</Button>
				</Link>
			</div>
		</header>
	);
}
