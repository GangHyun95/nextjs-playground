import path from 'path';
import { promises } from 'fs';

export function getCategories() {
    return ['javascript', 'react'];
}

export type Post = {
    id: string;
    category: string;
    title: string;
    content: string;
}

export async function getPosts(): Promise<Post[]> {
    const dir = path.join(process.cwd(), 'data', 'posts.json');
    const data = await promises.readFile(dir, 'utf-8');
    return JSON.parse(data);
}

export async function getPost(id: string): Promise<Post | undefined> {
    const posts = await getPosts();
    return posts.find((post) => post.id === id) || undefined;
}

export async function getPostsByCategory(category: string) {
    const posts = await getPosts();
    console.log(posts);
    return posts.filter((post) => post.category === category);
}
