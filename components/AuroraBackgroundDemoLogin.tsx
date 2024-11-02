"use client";

import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { SigninFormDemo } from "./SigninFormDemo";

export function AuroraBackgroundDemoLogin() {
    return (
        <AuroraBackground>
            <div className="z-20 w-full mt-48 sm:mt-0 min-h-screen content-center">
                <SigninFormDemo />
            </div>
        </AuroraBackground>
    );
}
