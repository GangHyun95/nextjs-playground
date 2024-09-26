import { getPost, getPosts } from '@/api/post';

type Props = {
    params: {
        category: string;
        post: string;
    };
};

export default async function PostPage({ params }: Props) {
    const post = await getPost(params.post);

    if (!post) {
        return <div>게시물을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        category: post.category,
        post: post.id,
    }));
}
