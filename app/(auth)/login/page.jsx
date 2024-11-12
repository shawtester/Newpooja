"use client";

import { auth } from "@/lib/firebase";
import { Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Header from "@/app/components/Header";
import { checkIfUserIsAdmin } from "@/app/utils/checkAdmin" // Import the utility function

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Google login
      const credential = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = credential.user;

      // Check if the logged-in user is an admin by their email using the utility function
      const isAdmin = checkIfUserIsAdmin(user.email);

      toast.success("Logged in successfully!"); // Show success toast

      // Redirect to admin page if user is admin, otherwise to home
      if (isAdmin) {
        router.push("/admin"); // Redirect to the admin page
      } else {
        router.push("/"); // Redirect to the home page
      }
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
        <section className="flex flex-col gap-3">
          <div className="flex justify-center">
            <img className="h-12" src="/logo.png" alt="Logo" />
          </div>
          <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
            <h1 className="font-bold text-xl text-center">Sign In with Google</h1>
            <Button
              isLoading={isLoading}
              isDisabled={isLoading}
              onClick={handleLoginWithGoogle}
              className="mt-5"
            >
              Sign In with Google
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
