"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function SparklesPreviewWholeBgAbout() {
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

    const appDescription = `Boopprint makes pet care, adoption, and lost pet recovery easier than ever. With advanced nose-scan technology for pet identification, you can report a pet as lost or found, adopt a new friend, or connect with shelters and vets, all in one app. Download Boopprint today and join a global network dedicated to pet safety and support.`;

    const testimonialsDescription = `Discover how Boopprint is making a difference in the lives of pets and their owners worldwide. From reuniting lost pets to finding forever homes, hear from our community!`;

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
            <div className="px-12 sm:px-20  mt-28 sm:mt-40">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-black dark:text-white font-semibold text-xl lg:text-3xl text-center"
                >
                   Making Pet Adoption Simple & Secure
                </motion.h2>
            </div>
            <div className="px-12 sm:px-24 lg:px-40">
                <TextGenerateEffect words={fullDescription} className="font-normal text-sm sm:text-lg text-center" />
            </div>

            <div className="px-4 sm:px-20 mt-0 sm:mt-6">
                <FeaturesSectionDemo />
            </div>

            <div className="px-12 sm:px-20 mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-black dark:text-white font-semibold text-xl lg:text-3xl text-center"
                >
                   Boopprint Application
                </motion.h2>
            </div>
            <div className="px-12 sm:px-24 lg:px-40">
                <TextGenerateEffect words={appDescription} className="font-normal text-sm sm:text-lg text-center" />
            </div>

            <div className="px-0 sm:px-20 mt-0 sm:mt-6">
                <CardHoverEffectDemo />
            </div>

            <div className="px-12 sm:px-20 mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-black dark:text-white font-semibold text-xl lg:text-3xl text-center"
                >
                   What Our Users Say About Boopprint
                </motion.h2>
            </div>
            <div className="px-12 sm:px-24 lg:px-40">
                <TextGenerateEffect words={testimonialsDescription} className="font-normal text-sm sm:text-lg text-center" />
            </div>

            <div className="px-0 sm:px-20">
                <InfiniteMovingCardsDemo />
            </div>
        </div>
    );
}
