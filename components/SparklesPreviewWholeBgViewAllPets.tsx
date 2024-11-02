"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "./ExpandableCardDemo";

export function SparklesPreviewWholeBgViewAllPets() {
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

    const fullDescription = `Browse our dogs ready for adoption and find a loyal friend waiting for a forever home!`;

    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-start overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
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
            <div className="px-12 sm:px-20  mt-28 sm:mt-40">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-black dark:text-white font-semibold text-xl lg:text-3xl text-center"
                >
                   Find Your Perfect Companion
                </motion.h2>
            </div>
            <div className="px-12 sm:px-20">
                <TextGenerateEffect words={fullDescription} className="font-normal text-sm sm:text-lg text-center" />
            </div>
            <div className="z-20 sm:w-[60%] lg:w-[40%]">
                <ExpandableCardDemo />
            </div>
        </div>
    );
}
