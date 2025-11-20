import Link from "next/link";

export default function ProjectsFallBack() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-700 text-center pt-20 mb-10 mt-5">
                All projects
            </h1>
            <div className="flex flex-col items-center space-y-6 mx-auto mb-6">
                <Link href="/projects/AbstractSort">
                    <button className="w-64 px-6 py-3 bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        Teracura.AbstractSort
                    </button>
                </Link>
                <Link href="/projects/NizamDesk">
                    <button className="w-64 px-6 py-3 bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        NizamDesk
                    </button>
                </Link>
                <Link href="/projects/CS304Lab">
                    <button className="w-64 px-6 py-3 bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        CS304Lab
                    </button>
                </Link>
                <Link href="/projects/ElbeheiryPortfolio">
                    <button className="w-64 px-6 py-3 bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        ElbeheiryPortfolio
                    </button>
                </Link>
                <Link href="/projects/RPGTextAdventureWin">
                    <button className="w-64 px-6 py-3 bg-blue-600 dark:bg-purple-700 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        RPGTextAdventureWin
                    </button>
                </Link>
            </div>

            <p className="text-center">
                return to the <Link href="/" className="text-blue-600 dark:text-purple-400">homepage</Link>?
            </p>
        </div>
    );
}
