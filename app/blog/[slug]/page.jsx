"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Lumina from "../../../public/src/Lumina.jpg";

export default function BlogPostView() {
    const params = useParams();

    const articleDb = {
        "philosophy-of-the-eternal-ember": {
            title: "The Philosophy of the Eternal Ember",
            category: "ritual",
            date: "June 08, 2026",
            author: "Chef Julian Vane",
            content: [
                "To cook with dynamic fire is to surrender absolute control in exchange for structural truth. Modern industrial kitchens isolate ingredients from environmental elements inside uniform combs of predictable electric heat. At Lumina, we view temperature as an interactive conversation partner.",
                "When the central hearth surges past 900 degrees Celsius, the molecular breakdown of the ambient hardwood shifts. It begins to expel micro-particulates of charred essential sugars that glaze raw tissues instantly. This is not simply heating; it is an atmospheric bonding process.",
                "Every session in the kitchen requires mapping out the fuel cycles weeks in advance, matching specific hardwood moisture densities to corresponding sections of the dynamic nightly menu framework."
            ]
        }
    };

    const post = articleDb[params.slug] || {
        title: "Manuscript Archiving Placeholder",
        category: "System",
        date: "Real-time",
        author: "Lumina Intelligence",
        content: ["This specific log path is currently being updated in the local CMS system. Check back once deployment sync loops finish execution."]
    };

    return (
        <div className="w-full min-h-screen bg-black text-white lg:px-16 px-4 sm:px-7 py-20">
            <article className="max-w-3xl mx-auto">

                <div className="mb-8">
                    <Link href="/blog" className="text-xs font-mono text-zinc-500 hover:text-amber-300 transition-colors">
                        &larr; RETURN TO CHRONICLES
                    </Link>
                    <div className="flex items-center gap-4 text-xs font-mono text-amber-400 mt-6 uppercase tracking-widest">
                        <span>{post.category}</span>
                        <span className="text-zinc-700">•</span>
                        <span className="text-zinc-500">{post.date}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-serif mt-3 leading-tight text-zinc-100">{post.title}</h1>
                    <p className="text-xs font-mono text-zinc-400 mt-4 tracking-wide">RECORDED BY: {post.author.toUpperCase()}</p>
                </div>

                <div className="relative h-96 w-full rounded-xl overflow-hidden border border-zinc-900 my-10">
                    <Image src={Lumina} alt="Feature visual" fill className="object-cover opacity-80" />
                </div>

                <div className="text-zinc-300 text-sm leading-relaxed space-y-6 font-sans tracking-wide">
                    {post.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

            </article>
        </div>
    );
}