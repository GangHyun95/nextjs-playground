'use client';

import { useEffect, useState } from 'react';

export default function Advice() {
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchAdvice = async () => {
            try {
                const res = await fetch('https://api.adviceslip.com/advice');
                const data = await res.json();
                setText(data.slip.advice);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAdvice();
    }, []);

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
}
