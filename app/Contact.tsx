"use client";

import { motion } from "framer-motion";
import { GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";

const CONTACT_EMAIL = "abdallahelbhary39@gmail.com";

const details = [
    { label: "Location", value: "Cairo, Egypt", icon: MapPin },
    { label: "Education", value: "Cairo University, CS", icon: GraduationCap },
    { label: "LinkedIn", value: "abdallah-elbeheiry", icon: Linkedin },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative mt-36 mb-24 overflow-hidden px-4 sm:px-6 scroll-mt-32"
        >
            <div className="mx-auto grid w-full max-w-5xl gap-6 rounded-2xl border border-blue-100 bg-blue-50/85 p-5 shadow-xl shadow-blue-950/5 backdrop-blur dark:border-purple-500/20 dark:bg-gray-950/85 dark:shadow-purple-950/10 sm:p-8 md:grid-cols-[1.1fr_0.9fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-blue-600 dark:text-purple-400 font-semibold">
                        Contact
                    </p>

                    <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        If you think I&apos;d be a good fit, you can email me here.
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        I&apos;m mainly looking for backend, software, or platform internships where I can keep learning and
                        contribute to real work.
                    </p>

                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.2)] transition-transform hover:scale-[1.02] hover:bg-blue-700 dark:bg-purple-600 dark:shadow-[0_12px_30px_rgba(147,51,234,0.22)] dark:hover:bg-purple-700"
                    >
                        <Mail size={18} />
                        Email me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-2xl bg-gray-950 p-5 text-white dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(30,27,75,0.94),rgba(88,28,135,0.72))] dark:text-white"
                >
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4 dark:border-purple-300/20">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 dark:bg-white/10">
                            <Mail size={19} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] opacity-60">
                                Main email
                            </p>
                            <p className="break-words text-sm font-bold">{CONTACT_EMAIL}</p>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                        {details.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 rounded-xl bg-white/10 p-3 dark:bg-white/10"
                                >
                                    <Icon size={18} className="shrink-0" />
                                    <div className="min-w-0">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] opacity-60">
                                            {item.label}
                                        </p>
                                        <p className="break-words text-sm font-semibold">{item.value}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
