"use client";

import { Heart, ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";  // Import Firestore methods
import { auth } from "@/lib/firebase";  // Assuming auth is initialized here

export default function Header() {
  const [user, setUser] = useState(null); // Store the user data
  const [loading, setLoading] = useState(true); // State for loading

  const menuList = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        try {
          // Fetch the user document from Firestore
          const db = getFirestore();
          const userDocRef = doc(db, "users", currentUser.uid);  // Assuming user collection is named "users"
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();  // Get user data from Firestore
            setUser(userData);
          } else {
            console.log("No such user document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is currently logged in");
      }

      setLoading(false); // Stop loading when data is fetched
    };

    fetchUserData(); // Run the fetch user data function on mount
  }, []); // Runs only once on component mount

  if (loading) {
    return <div>Loading...</div>; // Optionally show a loading indicator
  }

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">
      <Link href={"/"}>
        <img className="h-4 md:h-5" src="/logo.png" alt="Logo" />
      </Link>
      <div className="hidden md:flex gap-2 items-center font-semibold">
        {menuList?.map((item) => (
          <Link href={item?.link} key={item.name}>
            <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
              {item?.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-1">
        <Link href={`/login`}>
          <button
            title="My Account"
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
          >
            <UserCircle2 size={14} />
          </button>
        </Link>

        {/* Admin button always visible */}
        <Link href={`/admin`}>
          <button
            title="Admin Panel"
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
          >
            <Heart size={14} /> {/* Admin Icon */}
          </button>
        </Link>

        {/* Optionally display user name or image */}
        {user && (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt={user.displayName}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm">{user.displayName || "User"}</span>
          </div>
        )}
      </div>
    </nav>
  );
}
