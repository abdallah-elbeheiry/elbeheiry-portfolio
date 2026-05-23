"use client";

import { motion } from "framer-motion";
import { Server, Layers3, Globe, Brain } from "lucide-react";

const strengths = [
    {
        title: "Backend Systems",
        icon: Server,
        accent: "bg-blue-600",
        meter: "86%",
        description:
            "I build with .NET, Go, and Java, and I'm comfortable moving from APIs to concurrency to the underlying system behavior.",
        points: [
            "ASP.NET Core, Entity Framework Core, RESTful APIs",
            "Go, Java, JavaScript",
            "Multithreading, concurrency, systems programming",
        ],
    },
    {
        title: "Architecture & Quality",
        icon: Layers3,
        accent: "bg-emerald-500",
        meter: "78%",
        description:
            "I care about structure early, because clean architecture makes fast work sustainable instead of fragile.",
        points: [
            "SOLID, Clean Code, TDD",
            "Factory, Builder, MVC, MVVM",
            "Documentation, peer review, maintainability",
        ],
    },
    {
        title: "Data & Delivery",
        icon: Globe,
        accent: "bg-amber-500",
        meter: "74%",
        description:
            "I'm used to shipping with real persistence, real tooling, and real constraints.",
        points: [
            "PostgreSQL, SQLite, MongoDB",
            "Git, GitHub, Docker",
            "Unit testing and integration testing",
        ],
    },
    {
        title: "Performance & Graphics",
        icon: Brain,
        accent: "bg-purple-600",
        meter: "70%",
        description:
            "I don't just write application code; I've also worked close to the metal in graphics and engine-style systems.",
        points: [
            "OpenGL / JOGL",
            "Physics engine development",
            "Deterministic simulation and rendering workflows",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative flex flex-col items-center justify-center mt-28 px-4 sm:px-6 scroll-mt-32 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_60%)]" />

            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl text-center"
            >
                <p className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-blue-600 dark:text-purple-400 font-semibold">
                    Skills
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-normal text-gray-950 dark:text-white sm:text-xl">
                    The areas I keep coming back to are backend systems, architecture, and lower-level technical work.
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
                    I am still a student, but these are the tools and topics I have spent the most time with through
                    coursework, personal projects, and team projects.
                </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-1 gap-6 w-full max-w-[100rem] md:grid-cols-2 lg:grid-cols-4">
                {strengths.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/85 p-5 shadow-lg backdrop-blur-xl transition-transform hover:-translate-y-1 dark:border-purple-500/20 dark:bg-gray-900/80 sm:p-7"
                        >
                            <div className={`h-1.5 w-full ${item.accent}`} />

                            <div className="relative z-10 flex items-start gap-4 pt-5 sm:pt-7">
                                <div className="rounded-2xl bg-blue-100 p-3 dark:bg-purple-500/20">
                                    <Icon size={22} className="text-blue-700 dark:text-purple-300" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                                        <div
                                            className={`h-full rounded-full ${item.accent}`}
                                            style={{ width: item.meter }}
                                        />
                                    </div>

                                    <div className="mt-5 grid gap-3">
                                        {item.points.map((point) => (
                                            <div
                                                key={point}
                                                className="break-words rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-gray-800 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-gray-200"
                                            >
                                                {point}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
