"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../app/theme-toggle";

const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/elbeheiry-portfolio" : "";
const CV_FILE_NAME = "elbeheiry CV new.pdf";
const CV_HREF = `${BASE_PATH}/${encodeURIComponent(CV_FILE_NAME)}`;
const CONTACT_EMAIL = "abdallahelbhary39@gmail.com";

const navItems = [
    { label: "Home", href: "#introduction" },
    { label: "Strengths", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Download CV", href: CV_HREF, external: true, download: "Abdallah-Elbeheiry-CV.pdf" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl
        ${scrolled
                ? "bg-white/90 dark:bg-gray-900/85 shadow-md border-b border-blue-200 dark:border-purple-500/30"
                : "bg-white/70 dark:bg-gray-900/70"}`}
        >
            <div className="max-w-[100rem] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-600 to-blue-400
            dark:from-purple-400 dark:to-purple-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_4px_rgba(59,130,246,0.35)]
            dark:drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]
            group-hover:scale-105 transition-transform">
                        Abdallah Elbeheiry
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex items-center gap-2">
                    {navItems.map((item) => {
                        const href = item.href.startsWith("#") ? `${BASE_PATH}/${item.href}` : item.href;
                        const active = !item.external && pathname === href;

                        if (item.external) {
                            return (
                                <a
                                    key={item.label}
                                    href={href}
                                    download={item.download}
                                    className="relative px-4 py-2 rounded-xl font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-purple-500/15 transition-all duration-300"
                                >
                                    {item.label}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={item.href}
                                href={href}
                                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300
                  ${active
                                    ? "text-white bg-blue-500/90 dark:bg-purple-600/90 shadow-[0_0_10px_rgba(59,130,246,0.25)] dark:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                                    : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-purple-500/15"}`}
                            >
                                {item.label}
                                {active && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-3 right-3 -bottom-1 h-[2px] bg-blue-500 dark:bg-purple-400 rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* CTA Button */}
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="ml-3 px-5 py-2 rounded-2xl font-semibold text-white
              bg-blue-600 hover:bg-blue-700
              dark:bg-purple-600 dark:hover:bg-purple-700
              shadow-[0_0_12px_rgba(59,130,246,0.25)] dark:shadow-[0_0_16px_rgba(168,85,247,0.35)]
              hover:scale-105 transition-all"
                    >
                        Hire Me
                    </a>

                    <div className="ml-3">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden p-2 rounded-xl hover:bg-blue-100 dark:hover:bg-purple-500/20 transition"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="sm:hidden bg-white dark:bg-gray-900 border-t border-blue-200 dark:border-purple-500/30"
                    >
                        <div className="flex flex-col px-6 py-5 gap-2">
                            {navItems.map((item) => {
                                const href = item.href.startsWith("#") ? `${BASE_PATH}/${item.href}` : item.href;

                                if (item.external) {
                                    return (
                                        <a
                                            key={item.label}
                                            href={href}
                                            download={item.download}
                                            onClick={() => setIsOpen(false)}
                                            className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-purple-500/15 transition"
                                        >
                                            {item.label}
                                        </a>
                                    );
                                }

                                return (
                                    <Link
                                        key={item.href}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-purple-500/15 transition"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-4 py-3 rounded-xl text-center font-semibold text-white bg-blue-600 dark:bg-purple-600 shadow"
                            >
                                Hire Me
                            </a>

                            <div className="pt-3 border-t border-blue-200 dark:border-purple-500/30 flex justify-center">
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
