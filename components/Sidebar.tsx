import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { usePathname } from "next/navigation";

interface SidebarProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    setIsOpen: (isOpen: boolean) => void;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ theme, setTheme, setIsOpen, activeTab, setActiveTab }: SidebarProps) => {
    const pathname = usePathname();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const getActiveTab = (href: string) => {
        return pathname === href || (pathname === "/" && href === "/");
    };

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-background text-foreground flex flex-col p-6"
        >
            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center p-2 rounded-full bg-[#FBBF24] dark:bg-gray-700 transition"
                >
                    {theme === "light" ? <FiSun className="text-white" /> : <FiMoon />}
                </button>
                <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold"
                >
                    <GrClose />
                </motion.button>
            </div>
            <nav className="flex flex-col space-y-4">
                {["Home", "Adoption", "About", "Contact"].map((link, index) => {
                    const href = `/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`;
                    return (
                        <Link
                            key={link}
                            href={href}
                            onClick={() => {
                                setActiveTab(href);
                                setIsOpen(false);
                            }}
                            className={`flex flex-col justify-start items-start p-2 ${getActiveTab(href) ? "border-b border-[#00a7e3] text-black dark:text-white" : "hover:underline"
                                }`}
                        >
                            <div className="text-lg font-normal">
                                {String(index + 1).padStart(2, '0')}.
                            </div>
                            <div className="text-3xl font-semibold">
                                {link}
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </motion.div>
    );
};

export default Sidebar;