import { getPosts } from '@/api/post';
import Link from 'next/link';

export default async function PostPage() {
    const posts = await getPosts();
    
    return (
        <>
            <h1>전체 포스트</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.category}/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}