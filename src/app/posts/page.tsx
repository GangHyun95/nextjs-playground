import { getPosts } from '@/api/post';
import Link from 'next/link';

// export const revalidate = 3;

export default async function PostPage() {
    const posts = await getPosts();
    const res = await fetch('https://api.adviceslip.com/advice', {
        // next: { revalidate: 3},
        // cache: 'force-cache',
        // next: { revalidate: 0 },
        cache: 'no-store',
    });
    const data = await res.json();
    const advice = data.slip.advice;

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
            <h1>{advice}</h1>
        </>
    );
}
