"use client"

import FilterSidebar from "@/components/FilterSidebar";
import DogImg from '../assets/images/dog.png';
import SwiperSlider from "@/components/SwiperSlider";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
    // Dummy data for dogs
    const dogs = [
        { id: 1, name: "Buddy", age: "2 years", imageSrc: DogImg, weight: "5kg", price: 20 },
        { id: 2, name: "Max", age: "3 years", imageSrc: DogImg, weight: "8kg", price: 50 },
        { id: 3, name: "Bella", age: "1 year", imageSrc: DogImg, weight: "2kg", price: 420 },
    ];

    const words = ["Perfect Buddy", "Your Companion", "Your Best Friend"];
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [likedShake, setLikedShake] = useState(false);

    const [priceFilter, setPriceFilter] = useState(0);
    const [weightFilter, setWeightFilter] = useState(0);
    const [ageFilter, setAgeFilter] = useState(0);    

    // Filter dogs based on the selected criteria
    const filteredDogs = dogs.filter(
        (dog) =>
            (priceFilter === 0 || dog.price <= priceFilter) &&
            (weightFilter === 0 || parseInt(dog.weight) <= weightFilter) &&
            (ageFilter === 0 || parseInt(dog.age) <= ageFilter)
    );

    const triggerShake = () => {
        setLikedShake(true);
        setTimeout(() => setLikedShake(false), 500);
    };

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
                    <FilterSidebar
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                        weightFilter={weightFilter}
                        setWeightFilter={setWeightFilter}
                        ageFilter={ageFilter}
                        setAgeFilter={setAgeFilter}
                    />
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
                        <span className="text-center text-lg sm:text-2xl font-semibold">
                            Find Your<FlipWords words={words} />and Make a Life-Changing Connection Today!
                        </span>
                    </div>
                    <SwiperSlider dogs={filteredDogs} onAccept={triggerShake} />
                    <div className="flex flex-row justify-center items-center w-full flex-wrap gap-3 mt-4 z-20">
                        <Link href="/viewAllPets">
                            <button className="px-4 py-2 rounded-lg font-semibold text-white hover:-translate-y-1 bg-blue-600 dark:bg-blue-950 hover:bg-blue-700 dark:hover:bg-blue-700 transition duration-200 ease-in-out">
                                View All Pets
                            </button>
                        </Link>
                        <Link href="/viewLikedPets">
                            <motion.button
                                key={likedShake ? "shake-active" : "shake-inactive"}
                                animate={{ x: [0, -15, 15, -15, 15, 0], rotateZ: [0, -5, 5, -5, 5, 0] }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="px-4 py-2 rounded-lg font-semibold text-white bg-green-600 dark:bg-green-950 hover:-translate-y-1 hover:bg-green-700 dark:hover:bg-green-700 transition duration-200 ease-in-out"
                            >
                                View Liked Pets
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
