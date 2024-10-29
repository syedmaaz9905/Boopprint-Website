"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <form className="flex flex-col gap-4 w-full">
                        <CardItem
                            translateZ="40"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            <motion.input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 dark:border-gray-900 bg-white dark:bg-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" // Ensure w-full
                                whileFocus={{ scale: 1.02 }}
                            />
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="50"
                            className="text-neutral-500 text-sm w-full mt-2 dark:text-neutral-300"
                        >
                            <motion.input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 dark:border-gray-900 bg-white dark:bg-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" // Ensure w-full
                                whileFocus={{ scale: 1.02 }}
                            />
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="50"
                            className="text-neutral-500 text-sm w-full mt-2 dark:text-neutral-300"
                        >
                            <motion.input
                                type="tel"
                                placeholder="Phone Number"
                                className="border border-gray-300 dark:border-gray-900 bg-white dark:bg-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" // Ensure w-full
                                whileFocus={{ scale: 1.02 }}
                            />
                        </CardItem>

                        <CardItem translateZ="100" className="w-full mt-4">
                            <motion.textarea
                                placeholder="Your Message"
                                className="border border-gray-300 dark:border-gray-900 bg-white dark:bg-[#2a2a2a] rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full" // Ensure w-full
                                whileFocus={{ scale: 1.02 }}
                            />
                        </CardItem>

                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            <motion.button
                                type="submit"
                                className="bg-blue-500 dark:bg-black text-white font-semibold p-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit
                            </motion.button>
                        </CardItem>
                    </form>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
}
