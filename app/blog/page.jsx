"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lumina from "../../public/src/Lumina.jpg";

export default function BlogIndex() {
    const [activeFilter, setActiveFilter] = useState("all");

    const blogPosts = [
        {
            slug: "philosophy-of-the-eternal-ember",
            title: "The Philosophy of the Eternal Ember",
            excerpt: "An investigation into why we design culinary experiences around dynamic wood-fires and temperature thresholds.",
            category: "ritual",
            date: "June 08, 2026",
            readTime: "5 min read",
            image: Lumina
        },
        {
            slug: "sourcing-the-abyssal-catch",
            title: "Sourcing the Abyssal Catch: Deep Sea Logistics",
            excerpt: "Behind the scenes with our specialized Atlantic diving crews fetching wild blue crustacea under moon cycles.",
            category: "sourcing",
            date: "May 29, 2026",
            readTime: "8 min read",
            image: Lumina
        },
        {
            slug: "alkalinity-in-modern-fermentation",
            title: "Alkalinity and Ash in Modern Fermentation",
            excerpt: "How our lab utilizes birchwood ash infusions to shift the enzymatic landscape of winter roots.",
            category: "alchemy",
            date: "May 14, 2026",
            readTime: "12 min read",
            image: Lumina
        }
    ];

    const filteredPosts = activeFilter === "all"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeFilter);

    return (
        <div className="w-full min-h-screen bg-black text-white lg:px-16 px-4 sm:px-7 py-20">
            <div className="max-w-6xl mx-auto">

                <div className="border-b border-zinc-900 pb-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <span className="text-[10px] tracking-widest text-amber-400 font-mono font-bold uppercase">The Lumina Anthology</span>
                        <h1 className="text-4xl sm:text-5xl font-serif mt-2">Culinary Chronicles & Lab Notes</h1>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                        {["all", "ritual", "sourcing", "alchemy"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 py-2 rounded-md border transition-all uppercase tracking-wider ${activeFilter === cat
                                        ? "bg-amber-300 border-amber-300 text-black font-bold"
                                        : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article key={post.slug} className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-amber-400/20 transition-all">
                            <div>
                                <div className="h-48 w-full relative overflow-hidden bg-zinc-900">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-[11px] font-mono text-amber-400/80 mb-3">
                                        <span className="uppercase tracking-widest">{post.category}</span>
                                        <span className="text-zinc-600">•</span>
                                        <span className="text-zinc-500">{post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-serif text-zinc-200 group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0 mt-4 flex items-center justify-between border-t border-zinc-900/60 pt-4">
                                <span className="text-[10px] font-mono text-zinc-500">{post.readTime}</span>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-xs font-mono font-bold text-amber-300/90 hover:text-amber-300 tracking-wider uppercase group-hover:translate-x-1 transition-transform"
                                >
                                    Read Manuscript &rarr;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}