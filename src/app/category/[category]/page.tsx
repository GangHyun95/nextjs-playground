type Props = {
    params: {
        category: string;
    };
};
export default function page({ params }: Props) {
    console.log(params);
    return <div>{params.category}</div>;
}

export function generateStaticParams() {
    const categories = ["javascript", "react"];
    return categories.map((category) => ({
        category: category,
    }));
}
