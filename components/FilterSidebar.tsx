"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const FilterSidebar = ({
    priceFilter,
    setPriceFilter,
    weightFilter,
    setWeightFilter,
    ageFilter,
    setAgeFilter,
    animalTypeFilter,
    setAnimalTypeFilter,
    genderFilter,
    setGenderFilter,
    colorFilter,
    setColorFilter,
    locationFilter,
    setLocationFilter,
}: any) => {
    const [priceOpen, setPriceOpen] = useState(false);
    const [weightOpen, setWeightOpen] = useState(false);
    const [ageOpen, setAgeOpen] = useState(false);
    const [visibleFilters, setVisibleFilters] = useState(['animalType', 'gender', 'color', 'location']);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const allFilters = ['animalType', 'gender', 'color', 'location', 'price', 'weight', 'age'];

    const filters = [
        { key: 'animalType', label: 'Animal Type', value: animalTypeFilter, setValue: setAnimalTypeFilter, options: ['Any', 'dog', 'rabbit'] },
        { key: 'gender', label: 'Gender', value: genderFilter, setValue: setGenderFilter, options: ['Any', 'male', 'female'] },
        { key: 'color', label: 'Color', value: colorFilter, setValue: setColorFilter, options: ['Any', 'brown', 'black', 'white', 'gray'] },
        { key: 'location', label: 'Location', value: locationFilter, setValue: setLocationFilter, options: ['Any', 'shelter', 'rescue'] },
        { key: 'price', label: 'Price Range', value: priceFilter, setValue: setPriceFilter, type: 'range', open: priceOpen, setOpen: setPriceOpen },
        { key: 'weight', label: 'Weight', value: weightFilter, setValue: setWeightFilter, type: 'range', open: weightOpen, setOpen: setWeightOpen },
        { key: 'age', label: 'Age', value: ageFilter, setValue: setAgeFilter, type: 'range', open: ageOpen, setOpen: setAgeOpen },
    ];

    const cycleFilters = () => {
        setVisibleFilters((prevFilters) => {
            const nextIndex = allFilters.indexOf(prevFilters[prevFilters.length - 1]) + 1;
            const nextFilter = allFilters[nextIndex % allFilters.length];
            return [...prevFilters.slice(1), nextFilter];
        });
    };

    return (
        <div className="flex flex-col items-center p-4 w-full max-w-xs md:mt-0 mt-20">
            <AnimatePresence>
                {filters.map((filter) =>
                    visibleFilters.includes(filter.key) ? (
                        <motion.div
                            key={filter.key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full mb-4"
                        >
                            <label className="block text-gray-800 dark:text-gray-300 font-semibold mb-2">
                                {filter.label}
                            </label>
                            {filter.type === 'range' ? (
                                <div>
                                    <button
                                        onClick={() => filter.setOpen(!filter.open)}
                                        className="w-full flex justify-between items-center py-2 px-4 border-b border-gray-300 text-gray-800 dark:text-gray-300 font-semibold"
                                    >
                                        {filter.label}
                                        <span>{filter.open ? "-" : "+"}</span>
                                    </button>
                                    <motion.div
                                        initial="hidden"
                                        animate={filter.open ? "visible" : "hidden"}
                                        variants={{
                                            hidden: { height: 0, opacity: 0 },
                                            visible: { height: "auto", opacity: 1 },
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4">
                                            <input
                                                type="range"
                                                min="0"
                                                max="1000"
                                                value={filter.value}
                                                onChange={(e) => filter.setValue(Number(e.target.value))}
                                                className="w-full"
                                            />
                                            <div className="flex justify-between items-center mt-2">
                                                <span>0</span>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    max="1000"
                                                    value={filter.value}
                                                    onChange={(e) => filter.setValue(Number(e.target.value))}
                                                    className="w-20 text-center border rounded-md dark:bg-gray-800 dark:text-white"
                                                />
                                                <span>1000</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ) : (
                                <select
                                    value={filter.value}
                                    onChange={(e) => filter.setValue(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
                                >
                                    {filter.options?.map((option) => (
                                        <option key={option} value={option}>
                                            {option.charAt(0).toUpperCase() + option.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Buttons to Cycle Filters and View All Filters */}
            <div className="flex flex-col items-center space-y-2">
                <motion.button
                    onClick={cycleFilters}
                    className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-[#00a7e3] rounded-md shadow-md dark:bg-blue-500 dark:text-gray-100 
                        hover:bg-[#3788a5] dark:hover:bg-blue-600 transition-all duration-300 ease-in-out transform active:scale-95"
                    whileTap={{ scale: 0.95 }}
                >
                    Show More
                </motion.button>

                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-2 px-6 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-md dark:bg-green-500 dark:text-gray-100 
                        hover:bg-green-700 dark:hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400
                        transition-all duration-200 ease-in-out transform active:scale-95"
                    whileTap={{ scale: 0.95 }}
                >
                    View All Filters
                </motion.button>
            </div>

            {/* Modal for Viewing All Filters */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white dark:bg-gray-900 rounded-lg p-6 w-11/12 max-w-md max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">All Filters</h2>
                            <button onClick={() => setIsModalOpen(false)}>
                                <IoClose className="w-8 h-8" />
                            </button>
                        </div>
                        {filters.map((filter) => (
                            <div key={filter.key} className="mb-4">
                                <label className="block text-gray-800 dark:text-gray-300 font-semibold mb-2">
                                    {filter.label}
                                </label>
                                {filter.type === 'range' ? (
                                    <div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={filter.value}
                                            onChange={(e) => filter.setValue(Number(e.target.value))}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between items-center mt-2">
                                            <span>0</span>
                                            <input
                                                type="number"
                                                min="0"
                                                max="1000"
                                                value={filter.value}
                                                onChange={(e) => filter.setValue(Number(e.target.value))}
                                                className="w-20 text-center border rounded-md dark:bg-gray-800 dark:text-white"
                                            />
                                            <span>1000</span>
                                        </div>
                                    </div>
                                ) : (
                                    <select
                                        value={filter.value}
                                        onChange={(e) => filter.setValue(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
                                    >
                                        {filter.options?.map((option) => (
                                            <option key={option} value={option}>
                                                {option.charAt(0).toUpperCase() + option.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 w-full px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-md dark:bg-red-500 dark:text-gray-100 
                                hover:bg-red-700 dark:hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400
                                transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default FilterSidebar;
