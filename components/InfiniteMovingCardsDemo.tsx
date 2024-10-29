"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-[#f7fafc] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote: "Boopprint helped me reunite with my lost dog within hours. The nose scan feature is incredible and made all the difference. I'm so grateful!",
        name: "Sarah Johnson",
        title: "Happy Pet Owner",
    },
    {
        quote: "Adopting a pet has never been easier! I found the perfect companion through Boopprint. The process was seamless, and I’m thrilled with my new furry friend.",
        name: "Mark Lee",
        title: "Pet Adopter",
    },
    {
        quote: "I found a stray dog in my neighborhood and reported it on Boopprint. Turns out, he had an owner nearby! This app truly works wonders for pet recovery.",
        name: "Jessica Martinez",
        title: "Animal Lover",
    },
    {
        quote: "As a shelter volunteer, Boopprint has been a game-changer. We’ve matched so many pets with loving families. The exposure has been fantastic for our shelter!",
        name: "Carlos Ruiz",
        title: "Shelter Volunteer",
    },
    {
        quote: "Boopprint’s local vet and shelter finder is super helpful. I located a nearby vet for an emergency and could immediately get my dog the help he needed.",
        name: "Emily Chan",
        title: "Pet Parent",
    },
];
