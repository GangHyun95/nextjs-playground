import Link from "next/link";

export default function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav className="p-4 mt-2 flex gap-2 border">
                <LinkButton href="/posts/">전체</LinkButton>
                <LinkButton href="/posts/javascript">javascript</LinkButton>
                <LinkButton href="/posts/react">react</LinkButton>
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
        <Link href={href} className="px-2">
            {children}
        </Link>
    );
}
