import Link from "next/link";
import { Github } from "lucide-react";

const featuredProjects = [
    {
        label: "QadyJudge",
        stack: "ASP.NET Core, Docker, C#, PostgreSQL",
        href: "https://github.com/abdallah-elbeheiry/QadyJudge",
        note: "Backend API for securely compiling and running user code in isolated containers.",
    },
    {
        label: "Notabor Engine",
        stack: "Go, OpenGL, GLFW",
        href: "https://github.com/abdallah-elbeheiry/NotaborEngine",
        note: "Engine project with deterministic scheduling, worker pools, rendering, input, collision, and entity systems.",
    },
    {
        label: "SCICU Admission System",
        stack: "ReactJS, MongoDB, ExpressJS, JWT",
        href: "https://github.com/MahMoud-Nabil1/FacultyAdmissionSystem-Project",
        note: "Team admission system where I contributed REST endpoints, JWT auth, React admin work, reviews, and documentation.",
    },
];

const otherProjects = [
    {
        label: "RPGTextAdventureWin",
        stack: ".NET MAUI, C#, SQLite",
        href: "https://github.com/abdallah-elbeheiry/RPGTextAdventureWin",
        note: "Cross-platform text RPG with EF Core persistence and MVVM-style separation.",
    },
    {
        label: "Onnet",
        stack: "Java, JOGL",
        href: "https://github.com/fscu-student-team/onnet",
        note: "Team graphics project where I led engine architecture, collision, simulation, and GitHub workflow.",
    },
    {
        label: "NizamDesk",
        stack: "ASP.NET Core, PostgreSQL",
        href: "https://github.com/teracura/nizamdesk",
        note: "Backend-focused project that helped me learn API design, authentication, and database structure.",
    },
    {
        label: "Teracura.AbstractSort",
        stack: "C#, TDD, Library Design",
        href: "https://github.com/Teracura/Teracura.AbstractSort",
        note: "C# sorting library with configurable behavior, documentation, and unit tests.",
    },
];

function ProjectList({
    title,
    items,
}: {
    title: string;
    items: Array<{ label: string; stack: string; href: string; note: string }>;
}) {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{title}</h2>
            <div className="mt-5 grid gap-4">
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-3xl border border-blue-100 bg-white/85 p-5 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 dark:border-purple-500/20 dark:bg-gray-900/80 sm:p-6"
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                                    {item.label}
                                </h3>
                                <p className="mt-2 break-words text-sm font-semibold uppercase tracking-[0.08em] text-blue-600 dark:text-purple-400 sm:tracking-[0.16em]">
                                    {item.stack}
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1 dark:text-purple-400">
                                <Github size={17} />
                                GitHub
                            </span>
                        </div>
                        <p className="mt-4 text-gray-700 dark:text-gray-300">
                            {item.note}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default function ProjectsFallBack() {
    return (
        <div className="min-h-screen bg-gray-50 transition-colors duration-500 ease-in-out dark:bg-gray-900">
            <div className="mx-auto flex max-w-5xl flex-col px-4 pb-16 pt-24 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-purple-400 sm:tracking-[0.28em]">
                    Projects
                </p>
                <h1 className="mt-4 text-4xl font-black tracking-normal text-gray-950 dark:text-white sm:text-5xl">
                    All projects
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                    The homepage highlights the projects closest to my current CV. I kept the older projects here too,
                    because they still show useful parts of how I learned.
                </p>

                <ProjectList title="Featured from my CV" items={featuredProjects} />
                <ProjectList title="More projects" items={otherProjects} />

                <p className="mt-10 text-center text-gray-700 dark:text-gray-300">
                    Return to the{" "}
                    <Link href="/" className="font-semibold text-blue-600 dark:text-purple-400">
                        homepage
                    </Link>
                    ?
                </p>
            </div>
        </div>
    );
}
