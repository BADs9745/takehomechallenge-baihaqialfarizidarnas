// app/stories/components/SearchBar.tsx
import React from "react";

type Story = {
	no: number;
	title: string;
	writer: string;
	category: string;
	keyword: string[];
	status: string;
};

const stories: Story[] = [
	{
		no: 1,
		title: "The Moon that Can't be Seen",
		writer: "Rara",
		category: "Teen Fiction",
		keyword: ["school", "fiction"],
		status: "Draft",
	},
	{
		no: 2,
		title: "Given",
		writer: "Sansa S.",
		category: "Romance",
		keyword: ["music"],
		status: "Draft",
	},
	{
		no: 3,
		title: "Fish Swimming In The Sky",
		writer: "Kaenarita Faly",
		category: "Fantasy",
		keyword: ["fantasy", "romance"],
		status: "Publish",
	},
	{
		no: 4,
		title: "The Science of Fertility PCOS",
		writer: "Jessie Inchauspe",
		category: "Non Fiction",
		keyword: ["science", "PCOS"],
		status: "Publish",
	},
	{
		no: 5,
		title: "The Glucose Goddess Method",
		writer: "Jessie Inchauspe",
		category: "Non Fiction",
		keyword: ["glucose", "science"],
		status: "Publish",
	},
];

export default function StoriesPage() {
	return (
		<>
			<div className="relative">
				<input
					type="text"
					placeholder="Search by Writers / Title"
					className="p-3 border rounded-lg w-full"
				/>
			</div>
			<table className="min-w-full bg-white border-collapse">
				<thead>
					<tr>
						<th className="border p-2">No</th>
						<th className="border p-2">Title</th>
						<th className="border p-2">Writers</th>
						<th className="border p-2">Category</th>
						<th className="border p-2">Keyword</th>
						<th className="border p-2">Status</th>
					</tr>
				</thead>
				<tbody>
					{stories.map((story) => (
						<tr key={story.no}>
							<td className="border p-2">{story.no}</td>
							<td className="border p-2">{story.title}</td>
							<td className="border p-2">{story.writer}</td>
							<td className="border p-2">{story.category}</td>
							<td className="border p-2">
								{story.keyword.map((k) => (
									<span
										key={k}
										className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-1"
									>
										{k}
									</span>
								))}
							</td>
							<td className="border p-2">
								<span
									className={`px-2 py-1 rounded-full text-white ${
										story.status === "Publish"
											? "bg-green-400"
											: "bg-yellow-400"
									}`}
								>
									{story.status}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
