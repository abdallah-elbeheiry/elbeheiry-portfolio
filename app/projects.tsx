"use client";

import Link from "next/link";

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center mt-20 text-center px-6 scroll-mt-32"
        >
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-purple-700">
                My Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 w-full max-w-8xl mb-10">

                {/* RPGTextAdventureWin */}
                <div
                    className="bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-600">RPGTextAdventureWin</h3>
                    <p className="text-start text-base font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A text-based RPG game built with <strong>C#</strong> and <strong>.NET MAUI</strong>, featuring
                        turn-based combat mechanics.<br/><br/>
                        Gained experience in game design, state management, saveState
                        with <strong>SQLite</strong>, <strong>Entity Framework
                        Core</strong>, <strong>Factory</strong> and <strong>Singleton patterns</strong>, <strong>Asynchronous
                        programming</strong>, and more.<br/><br/>
                        Engaging experience with character progression, inventory/shop management, and diverse enemy
                        encounters.<br/><br/>
                        First (real) published project on GitHub!
                    </p>
                    <div className="flex justify-center w-full gap-3">
                        <Link href="https://github.com/teracura/RPGTextAdventureWin" target="_blank"
                              rel="noopener noreferrer" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                View on GitHub
                            </button>
                        </Link>
                        <Link href="/projects/RPGTextAdventureWin" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Elbeheiry Portfolio */}
                <div
                    className="bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-600">Elbeheiry Portfolio</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        Personal portfolio website built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>,
                        showcasing my technical skills, featured projects, and personal achievements on programming
                        related topics.<br/><br/>
                        It strengthened my understanding of React components, client/server rendering, UI/UX design
                        principles, Tailwind CSS and more related to ReactJS and web.<br/><br/>
                        Project is ongoing with plans for more features and projects. <br/><br/><br/>
                    </p>
                    <div className="flex justify-center w-full gap-3">
                        <Link href="https://github.com/teracura/elbeheiry-portfolio" target="_blank"
                              rel="noopener noreferrer" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                View on GitHub
                            </button>
                        </Link>
                        <Link href="/projects/ElbeheiryPortfolio" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>

                {/* NizamDesk */}
                <div
                    className="bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-600">NizamDesk</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A productivity web application built with <strong>ASP.NET Blazor</strong>, designed for task and
                        project management.<br/><br/>
                        I implemented <strong>login/logout</strong> with SQLServer (now PostgreSQL) and
                        added <strong>OAuth</strong> support.<br/>
                        And learned security aspects like <strong>password hashing</strong> and <strong>input
                        validation</strong>.<br/><br/>
                        Through this project I got a Full-stack foundation in RESTful APIs, database management, and
                        authentication. though now currently remade to be Backend focused only without using Blazor.
                    </p>
                    <div className="flex justify-center w-full gap-3">
                        <Link href="https://github.com/teracura/nizamdesk" target="_blank" rel="noopener noreferrer"
                              className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                View on GitHub
                            </button>
                        </Link>
                        <Link href="/projects/NizamDesk" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Teracura.AbstractSort */}
                <div
                    className="bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-600">Teracura.AbstractSort</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        C# class library offering abstract and customizable sorting algorithms
                        with <strong>LINQ</strong>.<br/><br/>
                        Supports mixed-type collections, version strings, and multi-level sorting
                        via <strong>reflection</strong> or <strong>lambda expressions</strong>.<br/><br/>
                        Includes <strong>unit tests</strong> (<strong>xUnit</strong>) and <strong>builder-pattern
                        API</strong>, helping me learn <strong>TDD</strong> and more
                        advanced <strong>C#</strong> concepts like LINQ.
                    </p>
                    <div className="flex justify-center w-full gap-3">
                        <Link href="https://github.com/Teracura/Teracura.AbstractSort" target="_blank"
                              rel="noopener noreferrer" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                View on GitHub
                            </button>
                        </Link>
                        <Link href="/projects/AbstractSort" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Onnet */}
                <div
                    className="bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-600">Onnet</h3>

                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A <strong>team-based student game project</strong> developed for
                        <strong> CS304 – Computer Graphics</strong>, built on top of a
                        <strong> custom Java OpenGL (JOGL) game engine</strong> created from scratch.<br/><br/>

                        I served as the <strong>dev lead</strong>, responsible for the core engine architecture,
                        physics system, renderer management, and <strong>overall technical direction</strong>. I also
                        managed the project and ensured quality and
                        coordinated merges to keep the codebase stable as the team scaled features in
                        parallel.<br/><br/>

                        The project uses various performance-and-stability-driven design decisions like <strong>single-canvas
                        rendering</strong>, a custom 500Hz physics loop, MTV-based
                        collision resolution, persistent leaderboards, and a AWT-based single-page UI architecture.
                    </p>

                    <div className="flex justify-center w-full gap-3">
                        <Link
                            href="https://github.com/FSCU-Student-team/Onnet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                View on GitHub
                            </button>
                        </Link>

                        <Link href="/projects/onnet" className="w-full">
                            <button
                                className="w-full bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
}
