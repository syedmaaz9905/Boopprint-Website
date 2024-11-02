"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { SigninFormDemo } from "./SigninFormDemo";

export function SparklesPreviewWholeBgLogin() {
    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={80}
                    className="w-full h-full"
                    particleColor="#000"
                />
            </div>
            <div className="z-20 w-full mt-20 mb-10">
                <SigninFormDemo />
            </div>
        </div>
    );
}
