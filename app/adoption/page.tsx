"use client"

import FilterSidebar from "@/components/FilterSidebar";
import SwiperSlider from "@/components/SwiperSlider";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dog1, Dog2, Dog3, Rabbit1, Rabbit2 } from "../assets";

export default function Page() {
    // Updated animal data
    const animals = [
        { id: 1, name: "Buddy", age: "2 years", imageSrc: Dog1, weight: "5kg", price: 20, type: "dog", gender: "male", color: "brown", locationType: "shelter" },
        { id: 2, name: "Max", age: "3 years", imageSrc: Dog2, weight: "8kg", price: 50, type: "dog", gender: "male", color: "black", locationType: "rescue" },
        { id: 3, name: "Bella", age: "1 year", imageSrc: Dog3, weight: "2kg", price: 420, type: "dog", gender: "female", color: "white", locationType: "shelter" },
        { id: 4, name: "Fluffy", age: "6 months", imageSrc: Rabbit1, weight: "1kg", price: 15, type: "rabbit", gender: "female", color: "gray", locationType: "rescue" },
        { id: 5, name: "Milo", age: "9 months", imageSrc: Rabbit2, weight: "2kg", price: 15, type: "rabbit", gender: "male", color: "brown", locationType: "shelter" },
    ];

    const words = ["Perfect Buddy", "Your Companion", "Your Best Friend"];
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [likedShake, setLikedShake] = useState(false);

    const [priceFilter, setPriceFilter] = useState(0);
    const [weightFilter, setWeightFilter] = useState(0);
    const [ageFilter, setAgeFilter] = useState(0);

    // Add state for animal type filter
    const [animalTypeFilter, setAnimalTypeFilter] = useState("Any");
    const [genderFilter, setGenderFilter] = useState("Any");
    const [colorFilter, setColorFilter] = useState("Any");
    const [locationFilter, setLocationFilter] = useState("Any");

    // Filter dogs based on the selected criteria
    const filteredAnimals = animals.filter(
        (animal) =>
            (animalTypeFilter === "Any" || animal.type === animalTypeFilter) &&
            (genderFilter === "Any" || animal.gender === genderFilter) &&
            (colorFilter === "Any" || animal.color === colorFilter) &&
            (locationFilter === "Any" || animal.locationType === locationFilter) &&
            (priceFilter === 0 || animal.price <= priceFilter) &&
            (weightFilter === 0 || parseInt(animal.weight) <= weightFilter) &&
            (ageFilter === 0 || parseInt(animal.age) <= ageFilter)
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
            <div className="w-full flex flex-col md:grid grid-cols-5 gap-0">
                {/* Left Sidebar (20%) */}
                <div className="col-span-1 md:min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
                    <FilterSidebar
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                        weightFilter={weightFilter}
                        setWeightFilter={setWeightFilter}
                        ageFilter={ageFilter}
                        setAgeFilter={setAgeFilter}
                        animalTypeFilter={animalTypeFilter}
                        setAnimalTypeFilter={setAnimalTypeFilter}
                        genderFilter={genderFilter}
                        setGenderFilter={setGenderFilter}
                        colorFilter={colorFilter}
                        setColorFilter={setColorFilter}
                        locationFilter={locationFilter}
                        setLocationFilter={setLocationFilter}
                    />
                </div>

                {/* Right Content (80%) */}
                <div className="col-span-4 relative min-h-screen px-4 md:px-8 flex flex-col gap-4 justify-start md:justify-center items-start md:items-center mt-10 md:mt-0">
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

                    <SwiperSlider dogs={filteredAnimals} onAccept={triggerShake} />

                    {/* Display Filtered Results Count */}
                    <div className="text-center mt-4">
                        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                            {filteredAnimals.length === animals.length
                                ? `Showing all ${animals.length} pets`
                                : `Showing ${filteredAnimals.length} of ${animals.length} results`}
                        </span>
                    </div>


                    <div className="flex flex-row justify-center items-center w-full flex-wrap gap-3 mt-4 z-20">
                        <Link href="/viewAllPets">
                            <button className="px-4 py-2 rounded-lg font-semibold text-white hover:-translate-y-1 bg-[#00a7e3] dark:bg-blue-950 hover:bg-[#489fbe] dark:hover:bg-blue-700 duration-300 ease-in-out">
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
