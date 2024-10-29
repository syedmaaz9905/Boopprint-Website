"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";

export function SparklesPreviewWholeBgAdoption() {
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

    const fullDescription = `At Boopprint, we’re dedicated to making pet adoption easier and safer. From unique nose-scanning technology for pet identification to 24/7 support, we’re here to help you welcome a new furry friend into your life with confidence.`;

    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-start overflow-hidden rounded-md">
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
            <div className="px-12 sm:px-20 mt-28 sm:mt-40">
                
            </div>
        </div>
    );
}
