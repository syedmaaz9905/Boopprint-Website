"use client";

import React from "react";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { SparklesPreviewWholeBg } from "@/components/SparklesPreviewWholeBg";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        {/* Light Mode Component */}
        <div className="block dark:hidden">
           <SparklesPreviewWholeBg />
        </div>

        {/* Dark Mode Component */}
        <div className="hidden dark:block">
          <AuroraBackgroundDemo />
        </div>
      </div>
    </div>
  );
}
