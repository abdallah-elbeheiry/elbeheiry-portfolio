"use client";

import Link from "next/link";
import Pictures from "./pictures";

export default function NizamDeskPage() {
    return (
        <div className="min-h-screen bg-gray-50 transition-colors duration-500 ease-in-out dark:bg-gray-900">
            <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-gray-900 dark:text-gray-100">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-purple-400">
                    Project notes
                </p>
                <h1 className="mt-4 text-5xl font-black tracking-tight text-gray-950 dark:text-white">
                    NizamDesk
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                    NizamDesk is important because it shows judgment. I noticed architectural issues early, stopped trying
                    to force the wrong shape, and chose to rebuild toward a backend-first design that made more sense.
                </p>

                <div className="mt-10 grid gap-4 rounded-3xl border border-blue-100 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-purple-500/20 dark:bg-gray-900/80">
                    <p className="leading-relaxed">
                        The project taught me that being a strong engineer is not just about adding features. It is about
                        seeing when the design is wrong, admitting that clearly, and fixing the foundation before moving on.
                    </p>
                    <p className="leading-relaxed">
                        It also sharpened my thinking around authentication, database structure, dependency injection, and
                        how to keep a codebase maintainable while the product direction evolves.
                    </p>
                </div>

                <Pictures />

                <div className="mt-10 flex flex-wrap justify-center gap-4">
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
                </div>
            </div>
        </div>
    );
}
