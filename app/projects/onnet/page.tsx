"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OnnetLearnMore() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 min-h-screen py-16 px-4">
            {/* Page Header */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl font-bold text-center text-blue-600 dark:text-purple-800 mb-10 mt-10"
            >
                Onnet
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-10"
            >
                Project Analysis & Technical Breakdown
            </motion.h2>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto text-gray-900 dark:text-gray-100 space-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="leading-relaxed">
                        <strong>Onnet</strong> is a <strong>team-based student game project</strong> developed for <strong>CS304 – Computer Graphics</strong>, built on a <strong>custom Java OpenGL (JOGL) game engine</strong>.
                        <br /><br />
                        As <strong>Development Lead</strong>, I was responsible for engine architecture, physics system, renderer lifecycle, and performance-critical systems, while managing the <strong>GitHub repository</strong> and coordinating merges.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Project Goals</h3>
                    <ul className="list-disc list-outside pl-8 space-y-2 leading-relaxed">
                        <li>Designing a <strong>reusable and extensible game engine</strong></li>
                        <li>Understanding <strong>OpenGL rendering pipelines</strong> via JOGL</li>
                        <li>Exploring <strong>performance optimization</strong> in desktop Java graphics</li>
                        <li>Practicing <strong>team-based software development</strong> with real workflows</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Engine Architecture & Game Loop</h3>
                    <p className="leading-relaxed mb-4">
                        Onnet uses a <strong>single-window, single-canvas architecture</strong> with decoupled physics (500 Hz) and rendering (60 FPS) cycles to ensure stable, deterministic performance.
                    </p>
                    <p className="leading-relaxed">
                        The physics engine includes a custom collision system with <strong>neighbor-pattern-like detection</strong> and <strong>Minimum Translation Vector (MTV)</strong> resolution.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Team & Leadership</h3>
                    <ul className="list-disc list-outside pl-8 space-y-2 leading-relaxed">
                        <li>Defined core engine architecture and physics system</li>
                        <li>Managed GitHub issues, pull requests, and branching policies</li>
                        <li>Supported teammates by unblocking technical challenges</li>
                        <li>Maintained architectural consistency across the codebase</li>
                        <li>Planned project vision and task breakdown for parallel development</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">What I Learned</h3>
                    <ul className="list-disc list-outside pl-8 space-y-2 leading-relaxed">
                        <li>Engine-level decisions affect performance</li>
                        <li>Renderer and canvas management in OpenGL</li>
                        <li>Leading a technical project effectively</li>
                        <li>Project management and GitHub workflows</li>
                        <li>Delivering under tight deadlines</li>
                    </ul>
                </motion.div>

                {/* YouTube Embed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mt-12"
                >
                    <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.youtube.com/embed/-J24kzDO9qU?si=r7re9-EAgH9bMhE5"
                            title="Onnet Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Navigation Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center gap-5 mt-16"
                >
                    <Link href="/projects">
                        <button className="px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Back to Projects
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Back to Home
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}