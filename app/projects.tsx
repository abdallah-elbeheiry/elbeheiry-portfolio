"use client";

import { motion } from "framer-motion";
import { Cpu, Github, ShieldCheck, Sparkles, Users } from "lucide-react";

const projects = [
    {
        title: "QadyJudge",
        type: "Backend System",
        github: "https://github.com/abdallah-elbeheiry/QadyJudge",
        summary:
            "A backend API for compiling and running user code inside isolated containers.",
        icon: ShieldCheck,
        visual: ["Submit", "Sandbox", "Result"],
        whatIDid: [
            "Designed endpoints for code submission, execution, and result retrieval.",
            "Used Docker isolation, sandboxing, and resource limits to reduce abuse risk.",
            "Added integration tests while working in a test-driven style.",
        ],
        stack: ["ASP.NET Core", "Docker", "PostgreSQL"],
        frame: "from-blue-200 via-white to-blue-500 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950",
        art: "from-blue-600 via-blue-400 to-cyan-300 dark:from-blue-900 dark:via-blue-700 dark:to-purple-700",
        glow: "shadow-blue-500/20",
        rarity: "Secure execution",
    },
    {
        title: "Notabor Engine",
        type: "Systems Project",
        github: "https://github.com/abdallah-elbeheiry/NotaborEngine",
        summary:
            "A Go/OpenGL engine project focused on scheduling, rendering, collision, input, and entity systems.",
        icon: Cpu,
        visual: ["Tick", "Systems", "Render"],
        whatIDid: [
            "Designed a fixed-tick system for physics, AI, and input processing.",
            "Implemented worker-pool based parallel task execution.",
            "Built modular engine systems around rendering, input, collision, and entities.",
        ],
        stack: ["Go", "OpenGL", "GLFW"],
        frame: "from-indigo-200 via-white to-blue-500 dark:from-gray-950 dark:via-indigo-950 dark:to-blue-950",
        art: "from-indigo-600 via-sky-400 to-blue-200 dark:from-indigo-950 dark:via-blue-800 dark:to-slate-900",
        glow: "shadow-indigo-500/20",
        rarity: "Engine architecture",
    },
    {
        title: "SCICU Admission System",
        type: "Team Platform",
        github: "https://github.com/MahMoud-Nabil1/FacultyAdmissionSystem-Project",
        summary:
            "A university admission system built by a team of six, covering backend endpoints, auth, and admin work.",
        icon: Users,
        visual: ["Forms", "JWT", "Dashboard"],
        whatIDid: [
            "Implemented RESTful API endpoints with JWT authentication.",
            "Built parts of the admin dashboard in React.",
            "Contributed through code reviews, documentation, and bug reporting.",
        ],
        stack: ["React", "Express", "MongoDB"],
        frame: "from-purple-200 via-white to-blue-500 dark:from-black dark:via-purple-950 dark:to-blue-950",
        art: "from-purple-600 via-violet-400 to-blue-200 dark:from-purple-950 dark:via-violet-800 dark:to-blue-950",
        glow: "shadow-violet-500/20",
        rarity: "Team delivery",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative flex flex-col items-center justify-center mt-28 px-4 sm:px-6 scroll-mt-32 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(219,234,254,0.72),transparent)] dark:bg-[linear-gradient(180deg,transparent,rgba(88,28,135,0.18),transparent)]" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="max-w-5xl text-center"
            >
                <p className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-blue-600 dark:text-purple-400 font-semibold">
                    Projects
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-normal text-gray-950 dark:text-white sm:text-5xl">
                    A few projects I worked on.
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
                    I wanted these to feel less like a resume table and more like three project cards you can quickly
                    understand at a glance.
                </p>
            </motion.div>

            <div className="mx-auto mt-14 grid w-full grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-10 xl:px-14 max-w-[100rem]">
                {projects.map((project, index) => {
                    const Icon = project.icon;

                    return (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -10 }}
                            className={`project-card-frame group relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${project.frame} p-[3px] shadow-2xl ${project.glow} transition-transform`}
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-blue-200/70 dark:border-purple-300/20" />

                            <div className="relative overflow-hidden rounded-[1.25rem] bg-white text-gray-950 ring-1 ring-blue-950/20 dark:bg-gray-950 dark:text-white dark:ring-purple-400/20">
                                <div className="flex items-center justify-between gap-3 border-b border-blue-100 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(219,234,254,0.92))] px-4 py-3 dark:border-purple-500/20 dark:bg-[linear-gradient(90deg,rgba(2,6,23,0.98),rgba(30,27,75,0.94))]">
                                    <h3 className="break-words text-xl font-black tracking-normal text-gray-950 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <div className="flex shrink-0 gap-1">
                                        {project.stack.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                title={tag}
                                                className="h-6 w-6 rounded-full border border-blue-950/20 bg-blue-50 shadow-inner dark:border-purple-300/30 dark:bg-purple-500/25"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className={`project-art-panel relative h-44 overflow-hidden rounded-xl border border-blue-950/20 bg-gradient-to-br ${project.art} dark:border-purple-300/20`}>
                                        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:18px_18px] dark:opacity-15" />
                                        <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                                            {project.visual.map((step) => (
                                                <span
                                                    key={step}
                                                    className="rounded-lg border border-white/45 bg-white/45 px-2.5 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-gray-950 shadow-sm backdrop-blur dark:border-purple-200/25 dark:bg-black/25 dark:text-white"
                                                >
                                                    {step}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/45 bg-white/35 shadow-2xl backdrop-blur-md dark:border-purple-200/25 dark:bg-black/30">
                                                <Icon size={42} className="text-gray-950 dark:text-white" />
                                            </div>
                                        </div>

                                        <Sparkles
                                            size={26}
                                            className="absolute bottom-5 right-5 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                                        />
                                    </div>
                                </div>

                                <div className="border-y border-blue-100 bg-[linear-gradient(90deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98),rgba(239,246,255,0.95))] px-4 py-2 dark:border-purple-500/20 dark:bg-[linear-gradient(90deg,rgba(15,23,42,0.98),rgba(30,27,75,0.92),rgba(15,23,42,0.98))]">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-sm font-black uppercase tracking-[0.08em] text-blue-900 dark:text-purple-200">
                                            {project.type}
                                        </p>
                                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                                            {project.rarity}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 px-4 py-4">
                                    <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                                        {project.summary}
                                    </p>

                                    <div className="space-y-2">
                                        {project.whatIDid.map((point) => (
                                            <div
                                                key={point}
                                                className="grid grid-cols-[18px_1fr] gap-2 text-sm leading-6 text-gray-900 dark:text-gray-100"
                                            >
                                                <span className="mt-2 h-2 w-2 rounded-full bg-blue-700 dark:bg-purple-300" />
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-3 border-t border-blue-100 bg-[linear-gradient(90deg,rgba(255,255,255,0.98),rgba(239,246,255,0.95))] px-4 py-3 dark:border-purple-500/20 dark:bg-[linear-gradient(90deg,rgba(2,6,23,0.98),rgba(30,27,75,0.9))]">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.stack.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-blue-800 dark:border-purple-400/20 dark:bg-purple-500/10 dark:text-purple-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-bold text-white transition-transform hover:scale-[1.03] hover:bg-blue-800 dark:bg-purple-600 dark:hover:bg-purple-700"
                                    >
                                        <Github size={16} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
