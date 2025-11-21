"use client";
import Link from "next/link";
import Pictures from "./pictures";

export default function NizamDeskPage() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-800 text-center pt-20 mb-10">
                NizamDesk
            </h1>

            <div className="flex justify-center items-center mx-auto mb-6">
                <h2 className="text-2xl font-semibold mb-6 px-4">
                    Project Analysis (why I did what I did):
                </h2>
            </div>

            <div className="max-w-5xl mx-auto text-gray-900 dark:text-gray-100 px-4">

                <p className="mb-10 px-4">
                    This unfinished project is an attempt at making an employee and project
                    management system combining some features of Jira and Discord, though
                    what’s made as of now is the login/logout.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">
                    Why Blazor? And why freeze the project?
                </h2>

                <p className="mb-10 px-8 leading-relaxed">
                    Initially I didn’t choose Blazor — I first tried ASP.NET MVC, but
                    did not get the seamless frontend experience I had with XAML in MAUI.
                    <br /><br />
                    So I switched to Blazor because it's more modern, but I also wasn’t
                    comfortable with it. ASP.NET is great for backend
                    but the frontend experience didn’t feel as good as React (which I have tried later on).
                    <br /><br />
                    I also realized I made architecture mistakes: JWT setup was wrong, the
                    layers were designed poorly, and I was mixing UI logic with business
                    logic. Dependency injection wasn’t used properly either.
                    <br /><br />
                    The biggest mistake was the database schema being designed incorrectly,
                    and the code I already wrote depended on that schema.
                    <br /><br />
                    So I paused development to reevaluate and learn from these mistakes.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Update</h2>

                <p className="mb-10 px-8 leading-relaxed">
                    I decided to delete the entire frontend (and most of the project except
                    entities and minor logic) and rebuild it as a pure backend API in .NET.
                    I plan to later create the frontend in Next.js.
                    <br /><br />
                    Basically I'm switching to a NPN tech stack, next.js, .NET and PostgreSQL... I just made that name up
                    <br /><br />
                    I also fixed the database issues mentioned earlier. the main problem was missing entity
                    relationships, which caused a lot of trouble and confusion. Also fixed the dependency injection issues mentioned earlier
                    <br /><br />
                    I also removed the JWT authentication part temporarily, as I wanted to get a minimal API working then I would think about that
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">More project details</h2>
                <h3 className="text-xl font-semibold mt-4 mb-2 px-4">Enum flags</h3>

                <p className="px-8 leading-relaxed">
                    The enum flag [Flags] I used for permissions... why? well, I thought about what's an appropriate
                    way to implement permissions, a few methods came to mind:
                </p>

                <ul className="list-disc list-inside mt-2 mb-4 px-12">
                    <li>a class with a list of permissions as boolean values each representing a different permission</li>
                    <li>taking the permissions of the highest role only (in index)</li>
                    <li>using an enum</li>
                </ul>

                <p className="mb-10 px-8 leading-relaxed">
                    The class method seemed too verbose and would be way too complex in my opinion, plus how do I even combine
                    multiple permissions of different roles? manually ensure that all permissions are combined correctly? yeah no thanks.
                    <br />
                    The highest role method could work in theory, sounds simple enough, but I wanted the roles permissions to function
                    like discord, so that is too limiting and will cause logic errors.
                    <br />
                    Even enums I quickly thought that they would only store one permission at the time... that was until I learned
                    about the [Flags] attribute in C# which was perfect for my use case.
                    <br /><br />
                    The main idea is treat every single permission as a bit in a binary number, so for example if we have 4 permissions:
                </p>

                <ul className="list-disc list-inside mt-2 mb-4 px-12">
                    <li>Read (1000)</li>
                    <li>Write (0100)</li>
                    <li>Delete (0010)</li>
                    <li>Admin (0001)</li>
                </ul>

                <p className="mb-10 px-8 leading-relaxed">
                    Now if a role has Read and Delete permissions, we just add the values 1 + 4 = 5, and store that single integer value.
                    <br />
                    Later on when checking permissions, we can use bitwise operations…
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2 px-4">Password handling</h3>

                <p className="mb-10 px-8 leading-relaxed">
                    For password hashing I used the System.Security.Cryptography library and SHA256.
                    <br /><br />
                    I also added salting…
                    <br /><br />
                    And finally I used a pepper… once at the start and twice at the end, with random ASCII values 100–128.
                    <br /><br />
                    And of course when verifying a password, I hash the input with the same salt and the same peppering format.
                </p>
            </div>

            <div className="flex justify-center items-center mx-auto mb-10 gap-5">
                <Link href="/projects">
                    <button className="mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        Back to Projects
                    </button>
                </Link>

                <Link href="/">
                    <button className="mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        Back to Home
                    </button>
                </Link>
            </div>

            <Pictures />
        </div>
    );
}
