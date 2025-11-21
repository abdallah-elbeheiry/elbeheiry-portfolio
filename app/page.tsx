import Link from "next/link";
import Header from "./header";
import Introduction from "./Introduction";
import Projects from "./projects";
import TechStack from "./Skills";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out min-h-screen">
      <Introduction />
      <TechStack />
      <Projects />
      <div className="flex justify-center pb-10">
        <Link href="/projects">
          <button className="w-7xl bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
            All projects
          </button>
        </Link>
      </div>


    </div>
  );
}
