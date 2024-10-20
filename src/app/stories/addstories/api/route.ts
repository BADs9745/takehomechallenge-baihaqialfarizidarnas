"use server";

import { NextResponse, type NextRequest } from "next/server";
import { type Chapter, PrismaClient } from "prisma/prisma-client";

type addStory = {
	title: string;
	author: string;
	synopsis: string;
	category: string;
	tags: string;
	status: string;
	chapters: Chapter;
	createTime: Date;
	update: Date;
	chapter: string;
};

export async function PUT(req: NextRequest) {
	const conn = new PrismaClient();
	const reqBody: addStory = await req.json();
	const title = reqBody.title;
	const author = reqBody.author;
	const synopsis = reqBody.synopsis;
	const category = reqBody.category;
	const tags = reqBody.tags;
	const status = reqBody.status;
	const chapters = reqBody.chapters;

	try {
		const newStory = await conn.story.create({
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

		return NextResponse.json({
			message: "Story created successfully",
			story: newStory,
		});
	} catch (error) {
		console.error("Error creating story:", error);
		return NextResponse.json(
			{ error: "Failed to create story" },
			{ status: 500 },
		);
	} finally {
		await conn.$disconnect();
	}
}
