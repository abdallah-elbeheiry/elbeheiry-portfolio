"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OnnetLearnMore() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-16 transition-colors duration-500 dark:bg-gray-900">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-10 text-center text-5xl font-black tracking-tight text-gray-950 dark:text-white sm:text-6xl"
            >
                Onnet
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-gray-700 dark:text-gray-300"
            >
                I was the dev lead on this one, so a lot of my time went into engine architecture, physics, renderer
                decisions, and keeping the team moving in the same direction.
            </motion.p>

            <div className="mx-auto mt-12 max-w-5xl space-y-8 text-gray-900 dark:text-gray-100">
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="rounded-3xl border border-blue-100 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-purple-500/20 dark:bg-gray-900/80"
                >
                    <h2 className="text-2xl font-bold">Why I included it</h2>
                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        It shows that I can lead technically, think about performance, and keep a team moving without
                        losing sight of the bigger picture.
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="rounded-3xl border border-blue-100 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-purple-500/20 dark:bg-gray-900/80"
                >
                    <h2 className="text-2xl font-bold">What I did</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700 dark:text-gray-300">
                        <li>Led a five-person team building a JOGL-based game project.</li>
                        <li>Defined core systems for collision, simulation, and renderer management.</li>
                        <li>Used GitHub workflows and code review to coordinate development.</li>
                        <li>Thought about performance and stability instead of only visible features.</li>
                    </ul>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                    className="rounded-3xl border border-blue-100 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-purple-500/20 dark:bg-gray-900/80"
                >
                    <h2 className="text-2xl font-bold">What it says about me</h2>
                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        I work best when there is a real problem to solve, a team to coordinate with, and a clear reason
                        to care about quality.
                    </p>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.25 }}
                    className="flex flex-wrap justify-center gap-4 pt-2"
                >
                    <Link
                        href="/projects"
                        className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700"
                    >
                        Back to projects
                    </Link>
                    <Link
                        href="/"
                        className="rounded-2xl border border-blue-200 bg-white/80 px-6 py-3 font-semibold text-blue-700 transition-transform hover:scale-105 hover:bg-blue-50 dark:border-purple-500/20 dark:bg-gray-900/75 dark:text-purple-300 dark:hover:bg-purple-500/10"
                    >
                        Back to home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
