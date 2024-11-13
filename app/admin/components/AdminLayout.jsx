"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { useAdmin } from "@/lib/firestore/admins/read";
import { Button, CircularProgress } from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const sidebarRef = useRef(null);
    const { user } = useAuth();
    const { data: admin, error, isLoading } = useAdmin({ email: user?.email });







    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        toggleSidebar();
    }, [pathname]);


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



    if (isLoading) {
        return (
          <div className="h-screen w-screen flex justify-center items-center">
            <CircularProgress />
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="h-screen w-screen flex justify-center items-center">
            <h1 className="text-red-500">{error}</h1>
          </div>
        );
      }

      if (!admin) {
        return (
          <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
            
            <h1 className="font-bold">You are not admin!</h1>
            <h1 className="text-gray-600 text-sm">{user?.email}</h1>
            <Button
              onClick={async () => {
                await signOut(auth);
              }}
            >
              Logout
            </Button>
          </div>
        );
      }

 

    // Ensure the sidebar closes when navigating to a new page
  

    // Handle click outside to close sidebar
 

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
