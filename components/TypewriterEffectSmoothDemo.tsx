"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Find",
        },
        {
            text: "Your",
        },
        {
            text: "Bestfriend",
        },
        {
            text: "Now!",
            className: "text-[#00bbff] dark:text-[#00bbff]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
