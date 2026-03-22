"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "RPGTextAdventureWin",
        github: "https://github.com/teracura/RPGTextAdventureWin",
        link: "/projects/RPGTextAdventureWin",
        content: (
            <>
                A text-based RPG game built with <strong>C#</strong> and <strong>.NET MAUI</strong>, featuring turn-based combat mechanics.
                <br /><br />
                Gained experience in game design, state management, saveState with <strong>SQLite</strong>, <strong>Entity Framework Core</strong>, <strong>Factory</strong> and <strong>Singleton patterns</strong>, <strong>Asynchronous programming</strong>, and more.
                <br /><br />
                Engaging experience with character progression, inventory/shop management, and diverse enemy encounters.
                <br /><br />
                First (real) published project on GitHub!
            </>
        ),
    },
    {
        title: "Elbeheiry Portfolio",
        github: "https://github.com/teracura/elbeheiry-portfolio",
        link: "/projects/ElbeheiryPortfolio",
        content: (
            <>
                Personal portfolio website built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, showcasing my technical skills, featured projects, and personal achievements on programming related topics.
                <br /><br />
                It strengthened my understanding of React components, client/server rendering, UI/UX design principles, Tailwind CSS and more related to ReactJS and web.
                <br /><br />
                Project is ongoing with plans for more features and projects.
            </>
        ),
    },
    {
        title: "NizamDesk",
        github: "https://github.com/teracura/nizamdesk",
        link: "/projects/NizamDesk",
        content: (
            <>
                A productivity web application built with <strong>ASP.NET Blazor</strong>, designed for task and project management.
                <br /><br />
                I implemented <strong>login/logout</strong> with SQLServer (now PostgreSQL) and added <strong>OAuth</strong> support.
                Learned security aspects like <strong>password hashing</strong> and <strong>input validation</strong>.
                <br /><br />
                Through this project I got a Full-stack foundation in RESTful APIs, database management, and authentication. Currently remade to be backend-focused only.
            </>
        ),
    },
    {
        title: "Teracura.AbstractSort",
        github: "https://github.com/Teracura/Teracura.AbstractSort",
        link: "/projects/AbstractSort",
        content: (
            <>
                C# class library offering abstract and customizable sorting algorithms with <strong>LINQ</strong>.
                <br /><br />
                Supports mixed-type collections, version strings, and multi-level sorting via <strong>reflection</strong> or <strong>lambda expressions</strong>.
                <br /><br />
                Includes <strong>unit tests</strong> (<strong>xUnit</strong>) and <strong>builder-pattern API</strong>, helping me learn <strong>TDD</strong> and advanced C# concepts.
            </>
        ),
    },
    {
        title: "Onnet",
        github: "https://github.com/FSCU-Student-team/Onnet",
        link: "/projects/onnet",
        content: (
            <>
                A <strong>team-based student game project</strong> developed for <strong>CS304 – Computer Graphics</strong>, built on top of a <strong>custom Java OpenGL (JOGL) engine</strong> created from scratch.
                <br /><br />
                I served as the <strong>dev lead</strong>, responsible for core engine architecture, physics system, renderer management, and overall technical direction.
                <br /><br />
                Uses performance-driven design decisions like <strong>single-canvas rendering</strong>, a custom 500Hz physics loop, MTV-based collision resolution, persistent leaderboards, and a single-page UI architecture.
            </>
        ),
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative flex flex-col items-center justify-center mt-32 px-6 scroll-mt-32"
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-purple-900/20 blur-3xl" />

            <h2 className="text-4xl font-extrabold mb-12 text-blue-600 dark:text-purple-400 tracking-tight">
                My Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-blue-100 dark:border-purple-500/20 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-200/20 to-blue-400/10 dark:from-purple-500/20 dark:to-purple-700/10 blur-xl" />

                        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-purple-400">
                            {project.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                            {project.content}
                        </p>

                        <div className="flex gap-3 mt-auto relative z-10">
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center py-2 px-4 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 shadow-sm transition-all"
                            >
                                GitHub
                            </Link>

                            <Link
                                href={project.link}
                                className="flex-1 text-center py-2 px-4 rounded-xl font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-sm transition-all"
                            >
                                Details
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
