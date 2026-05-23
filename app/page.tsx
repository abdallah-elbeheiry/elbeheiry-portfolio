import Link from "next/link";
import Introduction from "./Introduction";
import Projects from "./projects";
import TechStack from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out">
      <Introduction />
      <TechStack />
      <Projects />
      <Contact />
      <div className="flex justify-center pb-10">
        <Link href="/projects">
          <button className="bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
            View projects
          </button>
        </Link>
      </div>


    </div>
  );
}
