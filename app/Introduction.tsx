"use client";

import { motion } from 'framer-motion';

export default function Introduction() {
    return (
        <section
            id="introduction"
            className="relative flex flex-col items-center justify-center mt-20 text-center scroll-mt-32 px-6 py-16"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50/20 dark:from-purple-900/10 to-transparent" />

            {/* Name with gradient text */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-purple-500 dark:to-purple-700 bg-clip-text text-transparent"
            >
                Abdallah Elbeheiry<br/>(عبدالله عاطف عبدالله)
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-lg"
            >
                Computer Science student at Cairo University.
            </motion.p>
        </section>
    );
}