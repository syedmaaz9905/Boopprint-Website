"use client";

import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

interface Dog {
    id: number;
    name: any;
    age: any;
    imageSrc: any;
    weight: any;
    price: any;
}

interface SwiperSliderProps {
    dogs: Dog[];
    onAccept: any;
}

let EffectCoverflow: any;

const SwiperSlider: FC<SwiperSliderProps> = ({ dogs, onAccept }) => {
    const [isModulesReady, setIsModulesReady] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [showFeedback, setShowFeedback] = useState<'accept' | 'reject' | null>(null);
    const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

    useEffect(() => {
        EffectCoverflow = require('swiper/modules').EffectCoverflow;
        setIsModulesReady(true);
    }, []);

    if (!isModulesReady) return null;

    const handleFeedback = (type: 'accept' | 'reject') => {
        setShowFeedback(type);
    
        if (type === 'accept') {
            console.log("Accepted dog, triggering shake animation");
            onAccept();
        }
    
        setTimeout(() => {
            setShowFeedback(null);
            if (swiperInstance) swiperInstance.slideNext();
        }, 1000);
    };

    return (
        <div className="w-64 mx-auto">
            <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                modules={[EffectCoverflow]}
                className="mySwiper duration-300 hover:-translate-y-1"
            >
                {dogs.map((dog) => (
                    <SwiperSlide key={dog.id} className="flex justify-center relative">
                        <div
                            className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => setSelectedDog(dog)}
                        >
                            <Image
                                src={dog.imageSrc}
                                alt={dog.name}
                                fill
                                className="object-cover"
                                style={{ position: 'absolute' }}
                            />
                            {/* Static overlay for name and age */}
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-3 text-white">
                                <h3 className="text-lg font-semibold">{dog.name}</h3>
                                <p className="text-sm">{dog.age}</p>
                            </div>

                            {/* Accept/Reject Feedback Animation */}
                            <AnimatePresence>
                                {showFeedback === 'accept' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-50"
                                    >
                                        <FaCheckCircle size={50} color="white" />
                                    </motion.div>
                                )}
                                {showFeedback === 'reject' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-50"
                                    >
                                        <FaTimesCircle size={50} color="white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center space-x-4 mt-4">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer p-2 rounded-full bg-gray-200"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, rotate: -20, scale: 1.2 }}
                    onClick={() => handleFeedback('reject')}
                >
                    <FaTimesCircle size={24} color="red" />
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer p-2 rounded-full bg-gray-200"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, rotate: 20, scale: 1.2 }}
                    onClick={() => handleFeedback('accept')}
                >
                    <FaCheckCircle size={24} color="green" />
                </motion.div>
            </div>

            {/* Modal for Dog Details */}
            <AnimatePresence>
                {selectedDog && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setSelectedDog(null)}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-950 rounded-lg p-6 w-11/12 max-w-md mx-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={selectedDog.imageSrc} alt={selectedDog.name} width={400} height={300} className="rounded-md object-cover" />
                            <h3 className="text-2xl font-semibold mt-4">{selectedDog.name}</h3>
                            <p className="text-gray-500 mt-2">Age: {selectedDog.age}</p>
                            <p className="text-gray-500">Weight: {selectedDog.weight}</p>
                            <p className="text-gray-500">Price: {selectedDog.price}</p>

                            <motion.button
                                onClick={() => setSelectedDog(null)}
                                className="absolute top-1.5 right-1 text-red-500 text-xl"
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaTimesCircle />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SwiperSlider;
