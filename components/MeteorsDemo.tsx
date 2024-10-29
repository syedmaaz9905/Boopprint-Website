import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";

interface MeteorsDemoProps {
    name: string;
    age: string;
    imageSrc: any;
}

export function MeteorsDemo({ name, age, imageSrc }: MeteorsDemoProps) {
    return (
        <div className="flex">
            <div className="relative">
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-3 overflow-hidden rounded-2xl flex flex-col justify-center items-start gap-3">
                    {/* Dog's name */}
                    <h1 className="font-bold text-xl text-white relative z-50">
                        {name}
                    </h1>

                    {/* Dog's age */}
                    <p className="font-normal text-base text-slate-500 relative z-50">
                        Age: {age}
                    </p>

                    {/* Dog's image using Next.js Image component */}
                    <Image src={imageSrc} alt={name} width={160} height={160} className="w-full h-40 object-cover rounded-lg mb-2 z-20" />

                    {/* Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
