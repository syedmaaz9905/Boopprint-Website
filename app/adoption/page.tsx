// pages/Page.tsx

import FilterSidebar from "@/components/FilterSidebar";
import { MeteorsDemo } from "@/components/MeteorsDemo";
import DogImg from '../assets/images/dog.png';

export default function Page() {
    // Dummy data for dogs
    const dogs = [
        { id: 1, name: "Buddy", age: "2 years", imageSrc: DogImg },
        { id: 2, name: "Max", age: "3 years", imageSrc: DogImg },
        { id: 3, name: "Bella", age: "1 year", imageSrc: DogImg },
    ];

    return (
        <div className="min-h-screen flex items-start justify-center">
            <div className="w-full flex flex-col sm:grid grid-cols-5 gap-0">
                {/* Left Sidebar (20%) */}
                <div className="col-span-1 sm:min-h-screen flex items-center justify-center bg-white">
                    <FilterSidebar />
                </div>

                {/* Right Content (80%) */}
                <div className="col-span-4 min-h-screen px-4 sm:px-8 flex flex-wrap gap-4 justify-start mt-10 sm:mt-20">
                    {dogs.map(dog => (
                        <MeteorsDemo key={dog.id} name={dog.name} age={dog.age} imageSrc={dog.imageSrc} />
                    ))}
                </div>
            </div>
        </div>
    );
}
