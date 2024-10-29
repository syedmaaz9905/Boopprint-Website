import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Built for Pet Lovers",
            description:
                "Designed for pet enthusiasts and families looking to adopt their new best friend with ease.",
            icon: <IconTerminal2 />,
        },
        {
            title: "User-Friendly Experience",
            description:
                "Our platform makes adoption as easy as possible, guiding you every step of the way.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Affordable Adoption Plans",
            description:
                "With accessible pricing, we make adoption affordable for everyone.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Reliable & Secure Platform",
            description: "Your information and pet details are securely stored, always.",
            icon: <IconCloud />,
        },
        {
            title: "Support for All Pet Types",
            description:
                "Adopt and find care for all kinds of pets, from dogs and cats to smaller companions.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "24/7 Adoption Assistance",
            description:
                "Have questions? Our team and AI support are here to help you anytime.",
            icon: <IconHelp />,
        },
        {
            title: "Satisfaction Guarantee",
            description:
                "We’re dedicated to making sure you have a smooth adoption experience.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "Join a Caring Community",
            description:
                "Connect with other pet owners and adopters who share your love for animals.",
            icon: <IconHeart />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#00bbff] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};