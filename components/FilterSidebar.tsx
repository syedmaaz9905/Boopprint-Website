"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const FilterSidebar = ({
    priceFilter,
    setPriceFilter,
    weightFilter,
    setWeightFilter,
    ageFilter,
    setAgeFilter,
}: any) => {
    const [priceOpen, setPriceOpen] = useState(false);
    const [weightOpen, setWeightOpen] = useState(false);
    const [ageOpen, setAgeOpen] = useState(false);

    const accordionVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: "auto", opacity: 1 },
    };

    return (
        <div className="flex flex-col items-center p-4 w-full max-w-xs md:mt-0 mt-20">
            {/* Price Range Filter */}
            <div className="w-full">
                <button
                    onClick={() => setPriceOpen(!priceOpen)}
                    className="w-full flex justify-between items-center py-2 px-4 border-b border-gray-300 text-gray-800 dark:text-gray-300 font-semibold"
                >
                    Price Range
                    <span>{priceOpen ? "-" : "+"}</span>
                </button>
                <motion.div
                    initial="hidden"
                    animate={priceOpen ? "visible" : "hidden"}
                    variants={accordionVariants}
                    className="overflow-hidden"
                >
                    <div className="p-4">
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span>$0</span>
                            <input
                                type="number"
                                min="0"
                                max="1000"
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(Number(e.target.value))}
                                className="w-20 text-center border rounded-md dark:bg-gray-800 dark:text-white"
                            />
                            <span>$1000</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Weight Filter */}
            <div className="w-full mt-4">
                <button
                    onClick={() => setWeightOpen(!weightOpen)}
                    className="w-full flex justify-between items-center py-2 px-4 border-b border-gray-300 text-gray-800 dark:text-gray-300 font-semibold"
                >
                    Weight
                    <span>{weightOpen ? "-" : "+"}</span>
                </button>
                <motion.div
                    initial="hidden"
                    animate={weightOpen ? "visible" : "hidden"}
                    variants={accordionVariants}
                    className="overflow-hidden"
                >
                    <div className="p-4">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={weightFilter}
                            onChange={(e) => setWeightFilter(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span>0 kgs</span>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={weightFilter}
                                onChange={(e) => setWeightFilter(Number(e.target.value))}
                                className="w-20 text-center border rounded-md dark:bg-gray-800 dark:text-white"
                            />
                            <span>100 kgs</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Age Filter */}
            <div className="w-full mt-4">
                <button
                    onClick={() => setAgeOpen(!ageOpen)}
                    className="w-full flex justify-between items-center py-2 px-4 border-b border-gray-300 text-gray-800 dark:text-gray-300 font-semibold"
                >
                    Age
                    <span>{ageOpen ? "-" : "+"}</span>
                </button>
                <motion.div
                    initial="hidden"
                    animate={ageOpen ? "visible" : "hidden"}
                    variants={accordionVariants}
                    className="overflow-hidden"
                >
                    <div className="p-4">
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={ageFilter}
                            onChange={(e) => setAgeFilter(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm mt-2">
                            <span>0 yrs</span>
                            <span>{ageFilter} yrs</span>
                            <span>10 yrs</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FilterSidebar;
