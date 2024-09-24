'use client';

type Props = {
    params: {
        category: string;
    }
}
export default function page({params} : Props) {
    console.log(params);
    return (
        <div>
            {params.category}
        </div>
    );
}

