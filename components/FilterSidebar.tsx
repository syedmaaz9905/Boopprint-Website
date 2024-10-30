"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const FilterSidebar = () => {
    const [priceOpen, setPriceOpen] = useState(false);
    const [weightOpen, setWeightOpen] = useState(false);
    const [nameOpen, setNameOpen] = useState(false);

    const [price, setPrice] = useState(500); // Default price
    const [weight, setWeight] = useState(50); // Default weight

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
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm mt-2">
                            <span>$0</span>
                            <span>${price}</span> {/* Current price value */}
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
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm mt-2">
                            <span>0 lbs</span>
                            <span>{weight} lbs</span> {/* Current weight value */}
                            <span>100 lbs</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Name Filter */}
            <div className="w-full mt-4">
                <button
                    onClick={() => setNameOpen(!nameOpen)}
                    className="w-full flex justify-between items-center py-2 px-4 border-b border-gray-300 text-gray-800 dark:text-gray-300 font-semibold"
                >
                    Dog Name
                    <span>{nameOpen ? "-" : "+"}</span>
                </button>
                <motion.div
                    initial="hidden"
                    animate={nameOpen ? "visible" : "hidden"}
                    variants={accordionVariants}
                    className="overflow-hidden"
                >
                    <div className="p-4">
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option value="A-Z">A to Z</option>
                            <option value="Z-A">Z to A</option>
                        </select>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FilterSidebar;
