"use client";

import React from "react";
import { AuroraBackgroundDemoLogin } from "@/components/AuroraBackgroundDemoLogin";
import { SparklesPreviewWholeBgLogin } from "@/components/SparklesPreviewWholeBgLogin";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full">
                {/* Light Mode Component */}
                <div className="block dark:hidden">
                    <SparklesPreviewWholeBgLogin />
                </div>

                {/* Dark Mode Component */}
                <div className="hidden dark:block">
                    <AuroraBackgroundDemoLogin />
                </div>
            </div>
        </div>
    );
}
