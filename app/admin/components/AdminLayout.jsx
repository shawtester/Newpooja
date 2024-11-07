"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Ensure the sidebar closes when navigating to a new page
    useEffect(() => {
        toggleSidebar();
    }, [pathname]);

    // Handle click outside to close sidebar
    const handleClickOutsideEvent = useCallback((event) => {
        // Check if the click is outside of the sidebar element
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }, []);

    // Add event listener when the component mounts and clean up when it unmounts
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideEvent);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideEvent);
        };
    }, [handleClickOutsideEvent]);

    return (
        <main className="flex relative">
            {/* Sidebar on large screens */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Sidebar on small screens */}
            <div
                ref={sidebarRef}
                className={`fixed inset-0 z-50 transition-transform ease-in-out transition-all duration-400 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="relative">
                    <Sidebar />
                    {/* Cut button over the sidebar */}
                    <button
                        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        X
                    </button>
                </div>
            </div>

            <section className="flex-1 flex flex-col min-h-screen">
                <Header toggleSidebar={toggleSidebar} /> {/* Pass toggle function to Header if needed */}

                {/* Main content */}
                <section className="flex-1 bg-[#eff3f4]">
                    {children}
                </section>
            </section>
        </main>
    );
}
