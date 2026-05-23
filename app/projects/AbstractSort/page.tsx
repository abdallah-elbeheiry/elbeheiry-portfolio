import Link from "next/link";
import AbstractSortDocumentation from "./documentation";

export default function AbstractSortPage() {
    return (
        <div className="min-h-screen bg-gray-50 transition-colors duration-500 ease-in-out dark:bg-gray-900">
            <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-gray-900 dark:text-gray-100">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-purple-400">
                    Project notes
                </p>
                <h1 className="mt-4 text-5xl font-black tracking-tight text-gray-950 dark:text-white">
                    Teracura.AbstractSort
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                    This project shows how I think when I&apos;m building something reusable: define the problem clearly,
                    add tests, document the behavior, and keep the design extensible instead of fragile.
                </p>

                <div className="mt-10 grid gap-4 rounded-3xl border border-blue-100 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-purple-500/20 dark:bg-gray-900/80">
                    <p className="leading-relaxed">
                        AbstractSort was where I proved I could turn a small idea into a polished C# library. I used it to
                        practice builder-style configuration, custom comparers, documentation, and unit tests while getting
                        comfortable with extensibility and generic design.
                    </p>

                    <p className="leading-relaxed">
                        The broader signal is simple: I like building things that are reusable, predictable, and well thought
                        out. That matters to me more than making a one-off demo look impressive.
                    </p>
                </div>

                <AbstractSortDocumentation />

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
