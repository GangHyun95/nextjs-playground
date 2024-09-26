import Link from 'next/link';
import { getCategories, getPostsByCategory } from '@/api/post';

type Props = {
    params: {
        category: string;
    };
};

export const revalidate = 3;

export default async function CategoryPage({ params }: Props) {
    const categories = getCategories();
    const posts = await getPostsByCategory(params.category);

    if (!categories.includes(params.category)) {
        return <div>해당 카테고리는 존재하지 않습니다.</div>;
    }

    return (
        <>
            <h1>{params.category}</h1>
            {!posts.length ? (
                <div>해당 카테고리에 게시물이 없습니다.</div>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/posts/${params.category}/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export function generateStaticParams() {
    const categories = ['전체', 'javascript', 'react'];
    return categories.map((category) => ({ category }));
}
