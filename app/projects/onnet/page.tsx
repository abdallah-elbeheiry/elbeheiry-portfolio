import Link from "next/link";

export default function OnnetLearnMore() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-800 text-center pt-20 mb-10">
                Onnet
            </h1>

            <div className="flex justify-center items-center mx-auto mb-6 text-gray-900 dark:text-gray-100 px-4">
                <h2 className="text-2xl font-semibold">
                    Project Analysis & Technical Breakdown
                </h2>
            </div>

            <div className="max-w-5xl mx-auto text-gray-900 dark:text-gray-100 px-4">

                <p className="mb-10 leading-relaxed">
                    <strong>Onnet</strong> is a <strong>team-based student game project</strong> developed for
                    <strong> CS304 – Computer Graphics</strong>, built on top of a
                    <strong> custom Java OpenGL (JOGL) game engine</strong>.
                    <br/><br/>
                    The project was developed by a small team, where I acted as the
                    <strong> Development Lead</strong>. I was responsible for the engine architecture,
                    physics system, renderer lifecycle, and most performance-critical systems.
                    Additionally, I managed the <strong>GitHub repository</strong>, enforced a
                    <strong> branching strategy</strong>, reviewed pull requests, and coordinated merges
                    to keep the codebase stable throughout development.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Project Goals
                </h3>

                <p className="mb-10 leading-relaxed">
                    While the project originated as a university CS304 assignment, the primary goal went far
                    beyond “making a game”. The focus was on:
                </p>

                <ul className="list-disc list-outside mb-10 px-8 leading-relaxed">
                    <li>Designing a <strong>reusable and extensible game engine</strong></li>
                    <li>Understanding <strong>OpenGL rendering pipelines</strong> via JOGL</li>
                    <li>Exploring <strong>performance optimization</strong> in desktop Java graphics</li>
                    <li>Practicing <strong>team-based software development</strong> with real workflows</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Team & Leadership
                </h3>

                <p className="mb-10 leading-relaxed">
                    As Development Lead, I defined the technical direction of the project and ensured
                    that multiple contributors could work in parallel without breaking core systems.
                    <br/><br/>
                    This included:
                </p>

                <ul className="list-disc list-outside mb-10 px-8 leading-relaxed">
                    <li>Designing and implementing the <strong>core engine architecture</strong></li>
                    <li>Owning the <strong>physics engine and collision system</strong></li>
                    <li>Managing <strong>GitHub issues</strong> and pull request reviews</li>
                    <li>Enforcing a <strong>branching policy</strong> to isolate features and fixes</li>
                    <li>Supporting teammates by unblocking technical issues and reviewing code</li>
                    <li>Ensuring <strong>architectural consistency</strong> between all team members to unify code structure
                        throughout the project
                    </li>
                    <li>Owning the <strong>Project vision</strong> and splitting big tasks into smaller micro tasks to
                        ensure parallel development
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Engine Architecture Overview
                </h3>

                <p className="mb-10 leading-relaxed">
                    Onnet is built around a <strong>single-window, single-canvas architecture</strong>.
                    Instead of creating multiple OpenGL canvases, the engine swaps <strong>renderers</strong> on the
                    same <code>GLJPanel</code>, significantly reducing
                    overhead and improving performance.

                    Note: Renderers are classes used throughout the engine that
                    implement <code>GLEventListener</code> and <code>GameLoop</code>, they handle all drawing logic, and
                    within them the physics logic is called from other classes
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Game Loop & Performance Design
                </h3>

                <p className="mb-10 leading-relaxed">
                    The engine runs two decoupled cycles:
                </p>

                <ul className="list-disc list-outside mb-10 px-8 leading-relaxed">
                    <li>
                        <strong>Physics Cycle</strong>: Runs at a fixed rate of
                        <strong> 500 updates per second</strong>, handling movement, collisions, and input
                        processing.
                    </li>
                    <li>
                        <strong>Rendering Cycle</strong>: Runs at a 60 FPS rate and is fully decoupled from
                        physics to avoid instability under heavy rendering load.
                    </li>
                </ul>

                <p className="mb-10 leading-relaxed">
                    This approach ensures deterministic physics behavior even when frame rate fluctuates.
                    It is inspired by traditional game engine loop patterns and accumulation-based timing,
                    while avoiding the need to multiply physics values by delta time.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Collision System
                </h3>

                <p className="mb-10 leading-relaxed">
                    The physics engine includes a custom collision system supporting multiple shapes
                    using a <strong>neighbor-pattern-like approach</strong> to handle all intersection
                    permutations.
                    <br/><br/>
                    When penetration occurs, collisions are resolved using
                    <strong> Minimum Translation Vector (MTV)</strong> calculations to safely separate
                    objects without jitter or instability.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    What I Learned
                </h3>

                <ul className="list-disc list-outside mb-10 px-8 leading-relaxed">
                    <li>How engine-level decisions directly affect performance</li>
                    <li>Why renderer and canvas management matters in OpenGL</li>
                    <li>How to lead a technical project, not just write code</li>
                    <li>How real Project management prevent chaos in team projects</li>
                    <li>How merging, branching, rebasing etc. works in github</li>
                    <li>How to work under a tight time window of 8 days and deliver</li>
                </ul>

            </div>

            <div className="max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-center pb-10 gap-5">
                    <Link href="/projects">
                        <button
                            className="mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Back to Projects
                        </button>
                    </Link>
                    <Link href="/">
                        <button
                            className="mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}