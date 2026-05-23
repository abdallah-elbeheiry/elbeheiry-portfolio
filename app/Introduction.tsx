"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Container, Database, Download, GraduationCap, Mail, MapPin, Server } from "lucide-react";

const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/elbeheiry-portfolio" : "";
const CV_HREF = `${BASE_PATH}/${encodeURIComponent("elbeheiry CV new.pdf")}`;
const EMAIL = "abdallahelbhary39@gmail.com";

const highlights = [
    "Cairo University CS student",
    ".NET, Go, Java, JavaScript",
    "PostgreSQL, Docker, GitHub",
    "Backend and systems work",
];

const snapshot = [
    { label: "Focus", value: "Backend", icon: Server },
    { label: "Graduation", value: "2027", icon: GraduationCap },
    { label: "Location", value: "Cairo", icon: MapPin },
];

const systemRows = [
    { label: "APIs", detail: "ASP.NET Core + REST", icon: Code2 },
    { label: "Data", detail: "PostgreSQL + MongoDB", icon: Database },
    { label: "Runtime", detail: "Docker + sandboxing", icon: Container },
];

export default function Introduction() {
    return (
        <section
            id="introduction"
            className="relative overflow-hidden scroll-mt-32 px-4 pt-28 pb-20 sm:px-6"
        >
            <div className="absolute inset-0 -z-10 bg-gray-50 dark:bg-gray-900" />
            <div className="absolute inset-0 -z-10 opacity-[0.55] dark:opacity-[0.28] bg-[linear-gradient(to_right,rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.1)_1px,transparent_1px)] bg-[size:44px_44px]" />

            <div className="mx-auto grid w-full max-w-[100rem] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="text-center lg:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="inline-flex max-w-full items-center rounded-xl border border-blue-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur dark:border-purple-500/30 dark:bg-gray-900/75 dark:text-purple-300 sm:tracking-[0.22em]"
                    >
                        Computer science student
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="mt-6 text-4xl font-black tracking-normal text-gray-950 dark:text-white sm:text-6xl lg:text-7xl"
                    >
                        Abdallah Elbeheiry
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-6 max-w-3xl text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg lg:mx-0"
                    >
                        I&apos;m a Cairo University computer science student focused on backend work, APIs, databases, and
                        systems projects. I like building useful things and learning from projects that are a little bigger
                        than my current comfort zone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
                    >
                        {highlights.map((item) => (
                            <span
                                key={item}
                                className="rounded-xl border border-blue-100 bg-white/85 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-gray-900/75 dark:text-gray-200"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>


                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-xl"
                >
                    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white/90 shadow-2xl shadow-blue-900/10 backdrop-blur dark:border-purple-500/25 dark:bg-gray-950/85 dark:shadow-purple-950/20">
                        <div className="border-b border-blue-100 bg-gray-950 px-5 py-4 text-left dark:border-purple-500/20">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                                <span className="h-3 w-3 rounded-full bg-green-400" />
                                <span className="ml-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                    student-profile
                                </span>
                            </div>
                        </div>

                        <div className="p-5 sm:p-6">
                            <div className="grid grid-cols-3 gap-3">
                                {snapshot.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="rounded-xl border border-blue-100 bg-blue-50/80 p-3 text-left dark:border-purple-500/20 dark:bg-purple-500/10"
                                        >
                                            <Icon size={18} className="text-blue-700 dark:text-purple-300" />
                                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                                                {item.label}
                                            </p>
                                            <p className="mt-1 text-sm font-bold text-gray-950 dark:text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 space-y-3">
                                {systemRows.map((row) => {
                                    const Icon = row.icon;

                                    return (
                                        <div
                                            key={row.label}
                                            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                                                <Icon size={19} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-gray-950 dark:text-white">
                                                    {row.label}
                                                </p>
                                                <p className="break-words text-sm text-gray-600 dark:text-gray-300">
                                                    {row.detail}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
