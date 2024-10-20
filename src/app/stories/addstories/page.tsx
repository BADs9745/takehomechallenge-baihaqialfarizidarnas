import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FormComponent } from "./components/form";

export default function AddStoriesPage() {
	return (
		<section className="">
			<Link href={"/stories"}>
				<Button>Go Back</Button>
			</Link>
			<div className="m-4">
				<FormComponent />
			</div>
		</section>
	);
}
