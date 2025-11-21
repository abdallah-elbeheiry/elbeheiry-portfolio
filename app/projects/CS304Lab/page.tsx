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
                    There are two cycles happening at the same time, both spanning the lifecycle of each page/scene individually.
                    <br />
                    the first cycle is called the physics cycle, runs a fixed amount of times (though can be altered to change game speed) across all pages/scenes at the same time, this cycle is responsible for updating all physics logic, movement logic, collision detection etc.
                    <br />
                    the reason why it's its own cycle in the first place is to decouple physics logic from rendering logic, that way incase a heavy scene is loading and starts effecting the FPS, no physics bugs happen, as physics is updated at a fixed rate regardless of rendering speed.
                    <br /><br />
                    the second cycle is the rendering cycle (or Frame cycle).
                    <br />
                    which means each page/scene can run at an FPS unique from another page, I designed it that way so when multiple pages/scenes are open at the same time, no heavy scene bottlenecks a lighter scene.
                    <br /><br />
                    What happens behind the scenes is as following:
                </p>
                <ul className="list-disc list-outside mb-10 px-8 leading-relaxed">
                    <li>
                        each page/scene has its own JFrame window, with its own GLCanvas, and its own renderer (Let's assume a PhysicalRenderer)
                    </li>
                    <li>
                        each renderer has its own FPS setting, which determines how many times per second the <code>display()</code> method is called (Frame cycles)
                    </li>
                    <li>
                        each renderer also implements the <code>GameLoop</code> interface, which has its own fixed physics cycle rate (500 cycles per second by default)
                    </li>
                    <li>
                        when the page/scene is opened, both cycles start running in parallel, and a new LoopState class instance is initialized to keep track of accumulation time and last frame time
                    </li>
                    <li>
                        Inputs are registered via <code>InputHandler</code>'s bind method to bind inputs to <code>Action</code> instances, which are then processed in the physics cycle
                    </li>
                    <li>
                        inside <code>display()</code> method, it runs the default method inside <code>GameLoop</code> interface, which updates the loop state, calculates delta time, and accumulates time, then runs the physics updates as many times as needed based on the accumulated time each frame cycle
                    </li>
                    <li>
                        each physics update runs the <code>physicsUpdate()</code> method overriden from <code>GameLoop</code> interface, which then handles all physics logic and does actions according to inputs pressed
                    </li>
                    <li>
                        after all physics updates are done, run the <code>renderUpdate()</code> method overriden from <code>GameLoop</code> interface, which then handles all rendering logic and drawing
                    </li>
                </ul>

                <p className="mb-10 px-8 leading-relaxed">
                    Overall, this process is inspired from how Gdot's delta time and accumulation time works, as well as the game loop pattern used in many game engines, but I made it so there is no need to multiply everything physics related by delta time.
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