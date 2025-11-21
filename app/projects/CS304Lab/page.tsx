import Link from "next/link";

export default function CS304LabLearnMore() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-800 text-center pt-20 mb-10 mt-2">
                CS304Lab
            </h1>

            <div className="flex justify-center items-center mx-auto mb-6 text-gray-900 dark:text-gray-100 px-4">
                <h2 className="text-2xl font-semibold mb-6 px-4">
                    Project Analysis
                </h2>
            </div>

            <div className="max-w-5xl mx-auto text-gray-900 dark:text-gray-100 px-4">

                <p className="mb-10 px-4">
                    This project uses Java open GL library (JOGL) as well as AWT and Swing to finish various tasks provided by the lab professor (as well as some extra features by me)
                    <br /><br />
                    The main goal of this project was to learn the basics of computer graphics, OpenGL and 2D graphics programming in general (animations, transformations, composition etc).
                    <br /><br />
                    Of course, the tasks provided by the lab professor can all be hardcoded, but I wanted to take a better approach, of designing a proper template that not only will make solving various tasks for me much faster.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Project Structure
                </h3>

                <p className="mb-3 px-8 leading-relaxed">
                    so far, at the time of writing this article (21-11-2025) the structure is as follows:
                </p>
                <ul className="list-disc list-outside mb-10 px-8 leading-relaxed">
                    <li>
                        <strong>Game</strong>: contains game logic, window(page) management, loop(physics loop)
                        handling, as well as input handling.
                    </li>
                    <br />

                    <li>
                        <strong>Graphics</strong>: Contains some graphical utilities (Assets class), Colors class,
                        Coordinate class, as well as the Shape interface.

                        <ul className="list-disc list-inside">
                            <li><strong>Basic Shapes</strong>: Contains basic shapes like Triangles, circles Rectangles etc, all using the Shape interface and builder pattern</li>
                            <li><strong>Complex Shapes</strong>: Contains composite shapes like House, Car, Tree etc, all using the Shape interface and builder pattern, and are made of two or more classes inside basic shapes</li>
                        </ul>
                    </li>
                    <br />


                    <li>
                        <strong>Physics</strong>: contains Physics actions, contains movement handlers, randomization utils and anything related to physics calculations.

                        <ul className="list-disc list-inside">
                            <li><strong>Collision</strong>: contains basic hitboxes, rectangular and circular, applied for basic shapes and detects when a hitbox collides or includes another hitbox via the Hitbox Interface</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <strong>SceneRenderers</strong>: Renderers that render scenes and pages, each renderer is made to render a specific scene or page

                        <ul className="list-disc list-inside">
                            <li><strong>StandardRenderers</strong>: renderers that implements <code>GlEventListener</code>, can be either static renders or animation renders with no physics logic and no physics cycles, runs purely off of FPS</li>
                            <li><strong>PhysicalRenderers</strong>: renderers that implements <code>GlEventListener</code> and <code>GameLoop</code>, unlike StandardRenderers, these renderers have physics logic and run physics cycles (which are hardcoded to 500 physics cycles per second) and all physics is done within these cycles decoupled completely from rendering logic which runs at FPS rates</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <strong>Scenes</strong>: contains the <code>Page</code> interface, which provides a template for all scene classes that implement it, each scene uses JFrame to hook up the renders, page adapters, page managers etc, each handling a specific purpose.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Deeper dive
                </h3>

                <p className="mb-10 px-8 leading-relaxed">

                </p>

            </div>

            <div className="max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-center loader pb-10 gap-5">
                    <Link href="/projects" >
                        <button className="mx-auto mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Back to Projects
                        </button>
                    </Link>
                    <Link href="/" >
                        <button className="mx-auto mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}