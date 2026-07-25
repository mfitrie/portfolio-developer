import { useEffect, useState, useRef } from "react"

export default function TitleHomepage() {
    const finalWord = "a system";
    const [wordScramble, setWordScramble] = useState<string>(finalWord);
    const frameRef = useRef<number>(0);
    const frameCountRef = useRef<number>(0);

    const chars = "!<>-_\\/[]{}—=+*^?#________";

    useEffect(() => {
        const queue: { from: string; to: string; start: number; end: number }[] = [];

        for (let i = 0; i < finalWord.length; i++) {
            const from = "";
            const to = finalWord[i];
            const start = Math.floor(Math.random() * 20);
            const end = start + Math.floor(Math.random() * 20) + 10;
            queue.push({ from, to, start, end });
        }

        const update = () => {
            let output = "";
            let complete = 0;

            for (let i = 0; i < queue.length; i++) {
                const { to, start, end } = queue[i];

                if (frameCountRef.current >= end) {
                    output += to;
                    complete++;
                } else if (frameCountRef.current >= start) {
                    output += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    output += "";
                }
            }

            setWordScramble(output);

            if (complete === queue.length) {
                cancelAnimationFrame(frameRef.current);
                return;
            }

            frameCountRef.current++;
            frameRef.current = requestAnimationFrame(update);
        };

        frameCountRef.current = 0;
        frameRef.current = requestAnimationFrame(update);

        return () => cancelAnimationFrame(frameRef.current);
    }, []);

    return (
        <span className="text-2xl">I build <span className="text-cyan-400 text-3xl">{wordScramble}</span> to solve business problem</span>
    )
}