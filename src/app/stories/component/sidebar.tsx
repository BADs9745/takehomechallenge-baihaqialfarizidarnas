import Link from "next/link";

export default function Sidebar() {
	return (
		<aside className="w-64 h-full p-5">
			<div className="text-2xl font-bold mb-10">STORYKU</div>
			<nav>
				<ul>
					<li className="mb-5">
						<Link href="#" className="text-lg text-gray-800">
							Dashboard
						</Link>
					</li>
					<li>
						<Link href="#" className="text-lg text-gray-800">
							Story Management
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
