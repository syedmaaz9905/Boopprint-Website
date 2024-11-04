import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdLogIn } from "react-icons/io";

type NavbarProps = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(usePathname() || "/");
    const [hasScrolled, setHasScrolled] = useState(false);
    const pathname = usePathname();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setActiveTab(pathname || "/");
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 100);
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Adoption", href: "/adoption" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 flex items-center justify-between px-5 sm:px-10 py-3 sm:py-5 transition-all duration-300 ${hasScrolled
                ? "bg-opacity-70 backdrop-blur-md bg-background text-foreground shadow-lg"
                : "bg-transparent text-foreground"
                }`}
        >
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-xl font-bold">
                    Boopprint
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`relative text-lg transition-colors duration-300 ${pathname === link.href
                            ? "text-[#00a7e3]"
                            : "hover:text-[#00bbff]"
                            }`}
                    >
                        {link.name}
                        {pathname === link.href && (
                            <motion.div
                                className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#00a7e3]"
                                layoutId="underline"
                            />
                        )}
                    </Link>
                ))}
            </div>

            <div className="flex items-center space-x-4 relative">

                <Link href={'/login'}>
                    <button className="hidden md:flex">
                        <IoMdLogIn className="w-8 h-8 text-black dark:text-white duration-300 hover:text-blue-300 hover:scale-105" />
                    </button>
                </Link>

                <button
                    onClick={toggleTheme}
                    className="relative p-1 rounded-full hidden md:flex items-center justify-between gap-1 transition duration-300 md:text-lg sm:text-sm bg-gray-200 dark:bg-gray-700"
                >
                    <motion.div
                        className="absolute top-0 bottom-0 m-auto h-full rounded-full"
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{
                            backgroundColor: theme === "light" ? "#FBBF24" : "#00a7e3",
                            width: "50%",
                            left: theme === "light" ? "0%" : "50%",
                        }}
                    />

                    <div className="flex items-center justify-center p-1 z-10">
                        <FiSun size={16} className={`transition-colors duration-300 ${theme === "light" ? "text-white" : "text-gray-500"}`} />
                    </div>

                    <div className="flex items-center justify-center p-1 z-10">
                        <FiMoon size={16} className={`transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-500"}`} />
                    </div>
                </button>

                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="block md:hidden p-2 text-2xl"
                >
                    <FiMenu />
                </button>
            </div>

            <AnimatePresence>
                {isSidebarOpen && (
                    <Sidebar
                        theme={theme}
                        setTheme={setTheme}
                        setIsOpen={setIsSidebarOpen}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
