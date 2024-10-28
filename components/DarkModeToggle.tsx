import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div
            onClick={toggleTheme}
            className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${theme === "dark" ? "translate-x-6" : ""
                    }`}
            />
        </div>
    );
};

export default DarkModeToggle;
