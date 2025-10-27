"use client";

import { useState } from "react";
import Image from "next/image";

const BASE_PATH = "/elbeheiry-portfolio";

const images = [
  {
    src: `/nizam-desk/dark-mode-start-nizam-desk.webp`,
    alt: "Dark Mode Start Nizam Desk",
    desc: "Dark mode home screen"
  },
  {
    src: `/nizam-desk/light-mode-start-nizam-desk.webp`,
    alt: "Light Mode Start Nizam Desk",
    desc: "Light mode home screen"
  },
  {
    src: `/nizam-desk/login-page-dark.webp`,
    alt: "Login Page Dark",
    desc: "Login page in dark mode"
  },
  {
    src: `/nizam-desk/register-page-dark.webp`,
    alt: "Register Page Dark",
    desc: "Register page in dark mode"
  },
];


export default function NizamDeskPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string; desc: string} | null>(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-purple-800 mb-10">
        NizamDesk Screenshots
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer">
            <div
              className="w-full h-80 relative hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
              {img.desc}
            </p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1800}
              height={1200}
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 text-center text-white">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
