"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { PinContainer } from "./ui/3d-pin";

type DogCardProps = {
    name: string;
    age: string;
    image: string | StaticImageData;
};

export function AnimatedPinDemo({ name, age, image }: DogCardProps) {
    return (
        <div className="flex items-center justify-center">
            <PinContainer title={name} href="#">
                <div className="flex flex-col items-center p-4 text-slate-100/50 w-32 sm:w-60 h-54 sm:h-72 bg-gray-800 rounded-lg shadow-md">
                    <Image src={image} alt={name} className="w-full h-32 rounded-lg object-cover mb-2" />
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{name}</h3>
                    <p className="text-sm text-slate-400">Age: {age}</p>
                </div>
            </PinContainer>
        </div>
    );
}
