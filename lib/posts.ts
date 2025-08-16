import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {PostInterface} from "@/types";
import {remark} from "remark";
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): PostInterface[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostInterface[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the blog metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        };
    });

    // Sort blog by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPost(id: string): Promise<PostInterface> {

    const fileName = id.concat(".md")

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const stringHtmlContent = await remark()
        .use(html)
        .process(matterResult.content)

    return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        content: stringHtmlContent.toString(),
    };
}