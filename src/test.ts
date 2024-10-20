import { PrismaClient, type Chapter } from "@prisma/client";

async function createStory(
	title: string,
	author: string,
	synopsis: string,
	category: string,
	tags: string,
	status: string,
	chapters: Chapter,
) {
	const prisma = new PrismaClient();

	try {
		const newStory = await prisma.story.create({
			data: {
				title: title,
				author: author,
				synopsis: synopsis,
				category: category,
				tags: {
					create: {
						name: tags,
					},
				},
				status: status,
				chapters: {
					create: { title: chapters.title, content: chapters.content },
				},
			},
		});

		console.log("Story created successfully:", newStory);
	} catch (error) {
		console.error("Error creating story:", error);
	} finally {
		await prisma.$disconnect();
	}
}

// Example usage
createStory(
	"New Story",
	"John Doe",
	"A fantastic new story about a brave hero.",
	"Fantasy",
	"Adventure",
	"Published",
	{ title: "Chapter 1", content: "The story begins..." },
);
