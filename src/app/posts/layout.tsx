import { getCategories } from '@/api/post';
import Link from 'next/link';

export default function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const categories = getCategories();
    return (
        <>
            <nav className='p-4 mt-2 flex gap-2 border'>
                <LinkButton href='/posts/'>전체</LinkButton>
                {categories.map((category) => (
                    <LinkButton key={category} href={`/posts/${category}`}>
                        {category}
                    </LinkButton>
                ))}
            </nav>
            <section>{children}</section>
        </>
    );
}

function LinkButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link href={href} className='px-2'>
            {children}
        </Link>
    );
}
