import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        id: 1,
        title: "Lost & Found",
        description: "Report a missing pet or a sighting of a found one. With our unique nose-scan technology, quickly connect pets to their owners.",
        link: "https://apps.apple.com/us/app/boopprint/id6717579095",
    },
    {
        id: 2,
        title: "Adopt a Pet",
        description: "Browse and adopt pets from shelters worldwide, giving you the chance to bring home a new furry friend.",
        link: "https://apps.apple.com/us/app/boopprint/id6717579095",
    },
    {
        id: 3,
        title: "Add Your Pet",
        description: "Register your pet with a nose scan for unique identification. This helps ensure they’re safe and easy to identify.",
        link: "https://apps.apple.com/us/app/boopprint/id6717579095",
    },
    {
        id: 4,
        title: "Report Sightings",
        description: "If you spot a stray pet, report the sighting or scan to see if it’s already registered in our system.",
        link: "https://apps.apple.com/us/app/boopprint/id6717579095",
    },
    {
        id: 5,
        title: "Find Local Shelters & Vets",
        description: "Locate nearby shelters, veterinarians, and pet services to support your pet care needs.",
        link: "https://apps.apple.com/us/app/boopprint/id6717579095",
    },
    {
        id: 6,
        title: "Download Now",
        description: "Join the Boopprint community and enjoy our pet adoption, care, and safety features today.",
        link: "https://apps.apple.com/us/app/boopprint/id6717579095",
    },
];
