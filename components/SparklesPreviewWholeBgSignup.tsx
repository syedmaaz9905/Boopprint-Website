"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { SignupFormDemo } from "./SignupFormDemo";

export function SparklesPreviewWholeBgSignup() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const checkDarkMode = () => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    useEffect(() => {
        // Check the initial dark mode setting
        checkDarkMode();

        // Listen for changes in the "dark" class on the document
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Clean up the observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 min-h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.3}
                    maxSize={0.9}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor={isDarkMode ? "#fff" : "#000"}
                />
            </div>

            <div className="z-20 w-full mt-32 sm:mt-0 mb-10 sm:mb-0">
                <SignupFormDemo />
            </div>
        </div>
    );
}
