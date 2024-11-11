"use client";

import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function Categories({ categories }) {
  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }

  return (
    <div className="flex flex-col gap-8 justify-center md:p-10 p-5">
      <div className="flex justify-center w-full">
        <h1 className="text-lg font-semibold">OUR SERVICE'S</h1>
      </div>

      {/* Container with background image */}
      <div
        className="bg-cover bg-center py-8 px-4 rounded-lg"
        style={{
          backgroundImage: 'url(/Background.jpg)', // Path to your background image
          backgroundSize: 'cover', // Make sure the image covers the entire container
          backgroundPosition: 'center', // Center the image in the container
        }}
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link href={`/categories/${category?.id}`} key={category?.id}>
              <div className="group flex flex-col gap-2 items-center justify-center p-4 rounded-xl border border-gray-300 bg-white shadow-lg hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="md:h-32 md:w-32 h-24 w-24 rounded-full overflow-hidden relative">
                  <img
                    src={category?.imageURL || "/default-image.jpg"}
                    alt={category?.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:transform group-hover:-translate-y-4"
                  />
                </div>
                <h1 className="font-semibold text-center">{category?.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
