"use client";

import { motion } from "framer-motion";
import { Server, Layers3, Globe, Brain } from "lucide-react";

const categories = [
    {
        title: "Backend Engineering",
        icon: Server,
        description: "Core backend technologies and platform experience.",
        skills: [
            "C# / .NET (ASP.NET Core MVC + Blazor)",
            "Entity Framework Core + LINQ",
            "RESTful API design",
            "Authentication (JWT / OAuth)",
            "SQL Server, PostgreSQL, SQLite",
            "Async / await + concurrency"
        ]
    },
    {
        title: "Architecture & Patterns",
        icon: Layers3,
        description: "Design principles and structural decision-making.",
        skills: [
            "SOLID principles",
            "Clean Architecture basics",
            "MVC / MVVM",
            "Singleton, Factory, Builder",
            "Dependency Injection & IoC",
            "Test-driven development (xUnit)"
        ]
    },
    {
        title: "Frontend & Web",
        icon: Globe,
        description: "Modern web technologies and UI foundations.",
        skills: [
            "React fundamentals",
            "Next.js App Router",
            "Tailwind CSS",
            "Component-based architecture",
            "Client / Server rendering concepts"
        ]
    },
    {
        title: "Foundations & Professional",
        icon: Brain,
        description: "Core CS knowledge and professional capabilities.",
        skills: [
            "Data structures & algorithms",
            "Discrete math, Linear algebra, Calculus",
            "Git workflows",
            "Analytical problem-solving",
            "Clear technical communication",
            "Time management & adaptability"
        ]
    }
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative flex flex-col items-center justify-center mt-40 px-6 scroll-mt-32"
        >
            {/* dramatic ambient glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]" />

            <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent tracking-tight">
                Technical Profile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
                {categories.map((category, index) => {
                    const Icon = category.icon;

                    return (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-400/40 via-transparent to-blue-600/40 dark:from-purple-500/40 dark:to-purple-700/40"
                        >
                            <div className="relative h-full rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* spotlight hover glow */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-200/20 to-blue-500/10 dark:from-purple-500/20 dark:to-purple-800/10 blur-2xl" />

                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-blue-100 dark:bg-purple-500/20">
                                            <Icon className="text-blue-600 dark:text-purple-400" size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-blue-700 dark:text-purple-300">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {category.skills.map((skill) => (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                className="relative px-4 py-3 rounded-xl bg-blue-50/60 dark:bg-purple-500/10 border border-blue-100 dark:border-purple-500/30 text-sm text-gray-800 dark:text-gray-200 transition-all"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
