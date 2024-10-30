"use client"

import FilterSidebar from "@/components/FilterSidebar";
import DogImg from '../assets/images/dog.png';
import SwiperSlider from "@/components/SwiperSlider";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEffect, useState } from "react";

export default function Page() {
    // Dummy data for dogs
    const dogs = [
        { id: 1, name: "Buddy", age: "2 years", imageSrc: DogImg, weight: "5kg", price: 20 },
        { id: 2, name: "Max", age: "3 years", imageSrc: DogImg, weight: "8kg", price: 50 },
        { id: 3, name: "Bella", age: "1 year", imageSrc: DogImg, weight: "2kg", price: 420 },
    ];

    const words = ["Perfect Buddy", "Your Companion", "Your Best Friend"];

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
        <div className="min-h-screen flex items-start justify-center">
            <div className="w-full flex flex-col sm:grid grid-cols-5 gap-0">
                {/* Left Sidebar (20%) */}
                <div className="col-span-1 sm:min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
                    <FilterSidebar />
                </div>

                {/* Right Content (80%) */}
                <div className="col-span-4 relative min-h-screen px-4 sm:px-8 flex flex-col gap-4 justify-start sm:justify-center items-start sm:items-center mt-10 sm:mt-0">
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
                    <div className='mb-6 flex flex-row justify-center'>
                        <p className="text-center text-lg sm:text-2xl font-semibold">
                            Find Your<FlipWords words={words} />and Make a Life-Changing Connection Today!
                        </p>
                    </div>
                    <SwiperSlider dogs={dogs} />
                </div>
            </div>
        </div>
    );
}
