import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function ProgressScroll() {
    const [scrollPercent, setScrollPercent] = useState<number>(0);

    useEffect(() => {
        function updateScrollPercent() {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollPercent(percent);
        }

        window.addEventListener("scroll", updateScrollPercent);
        window.addEventListener("resize", updateScrollPercent);

        // run once on mount in case the page loads already scrolled
        updateScrollPercent();

        return () => {
            window.removeEventListener("scroll", updateScrollPercent);
            window.removeEventListener("resize", updateScrollPercent);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <Progress
                value={scrollPercent} 
            />
        </div>
    )
}