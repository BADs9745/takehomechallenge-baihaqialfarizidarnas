import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChFormComponent } from "./component/chform";

export default function AddCahpterPage() {
	return (
		<section>
			<Link href={"../"}>
				<Button>Go Back</Button>
			</Link>
			<ChFormComponent />
		</section>
	);
}
