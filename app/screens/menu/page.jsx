"use client";

import React, { useState } from "react";
import Lumina from "../../../public/src/Lumina.jpg";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
    const menuList = [
        { sn: '0', image: Lumina, name: 'Obsidian Octopus', price: '$42', description: 'Ash-cured Atlantic octopus, charred over birchwood, served with fermented chili and ink-silk.', extra: 'CONTAINS SHELLFISH', isShellfish: true },
        { sn: '1', image: Lumina, name: 'Marrow & Embers', price: '$38', description: 'Roasted bone marrow, sourdough crisps, hearth-baked herb oil, and crystal salt.', extra: 'ALLERGY SAFE', isShellfish: false },
        { sn: '2', image: Lumina, name: 'Celestial Shell', price: '$64', description: 'Butter-bathed lobster, saffron mist, and sea buckthorn reduction.', extra: 'CONTAINS SHELLFISH', isShellfish: true },
        { sn: '3', image: Lumina, name: 'Smoke-Kissed Wagyu', price: '$85', description: 'A5 Wagyu seared on volcanic rock, smoked dynamic salt, charred leek emulsion.', extra: 'ALLERGY SAFE', isShellfish: false },
    ];

    const abyssalList = [
        { sn: '0', name: 'Midnight Oysters', price: '$28', title: 'Electric', description: 'Pacific brine, frozen kelp vinaigrette, and pearl dust', isShellfish: true },
        { sn: '1', name: 'Glow Crudo', price: '$34', title: 'Luminous', description: 'Hamachi slices, citrus-amber pearls, and wild radish slivers.', isShellfish: false },
    ];

    const [shellfishSafe, setShellfishSafe] = useState(false);

    const filteredMenuList = shellfishSafe
        ? menuList.filter(item => !item.isShellfish)
        : menuList;

    const filteredAbyssalList = shellfishSafe
        ? abyssalList.filter(item => !item.isShellfish)
        : abyssalList;

    return (
        <div className="w-full min-h-screen bg-black text-white lg:px-16 px-4 sm:px-7 flex flex-col justify-between pb-12">

            <div className="flex flex-col md:flex-row gap-8 mt-20 sm:mt-28 items-center max-w-7xl mx-auto w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-white text-4xl sm:text-6xl font-serif sm:text-left text-center leading-tight">
                        A Sensory <span className="text-amber-300">Journey</span>
                    </h1>
                    <p className="text-sm max-w-lg pt-6 text-zinc-400 leading-relaxed sm:text-left text-center">
                        Beyond ingredients, we plate emotions. Each chapter of our menu is a curated sensory landscape designed to ignite memory and wonder.
                    </p>

                    <div className="bg-zinc-900/50 border border-zinc-800/80 w-full sm:w-95 py-3.5 mt-8 rounded-xl text-center flex items-center justify-center gap-4 shadow-inner">
                        <span className={`text-xs tracking-wider transition-colors uppercase ${!shellfishSafe ? "text-amber-300 font-medium" : "text-zinc-500"}`}>
                            Standard Menu
                        </span>

                        <button
                            onClick={() => setShellfishSafe(!shellfishSafe)}
                            className={`inline-flex h-5 w-10 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/50 ${shellfishSafe ? "bg-amber-400" : "bg-zinc-700"}`}
                            role="switch"
                            aria-checked={shellfishSafe}
                            aria-label="Toggle Shellfish Safe Mode"
                        >
                            <span className={`h-4 w-4 transform rounded-full bg-black transition-transform duration-300 ${shellfishSafe ? "translate-x-5" : "translate-x-1"}`} />
                        </button>

                        <span className={`text-xs tracking-wider transition-colors uppercase ${shellfishSafe ? "text-emerald-400 font-medium" : "text-zinc-500"}`}>
                            Shellfish-Safe Mode
                        </span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative h-80 w-full max-w-md rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
                        <Image src={Lumina} alt='Lumina Dining Ambient Room' fill className="object-cover opacity-80" />
                    </div>
                </div>
            </div>

            <div className="my-16 w-full max-w-7xl mx-auto">

                <div className="mb-20">
                    <div className="flex justify-between items-baseline mb-6 border-b border-zinc-900 pb-4">
                        <h2 className="text-white text-2xl sm:text-3xl font-serif tracking-wide">
                            Smoke & Ember
                        </h2>
                        <span className="text-[10px] text-amber-300/50 font-mono tracking-widest uppercase">
                            Chapter I: The Primordial
                        </span>
                    </div>

                    {filteredMenuList.length > 0 ? (
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            navigation={true}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            modules={[Navigation, Pagination]}
                            className="pb-12"
                        >
                            {filteredMenuList.map((item) => (
                                <SwiperSlide key={item.sn}>
                                    <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-900 flex flex-col h-full justify-between hover:border-amber-400/20 transition-all group">
                                        <div>
                                            <div className="w-full h-44 relative overflow-hidden rounded-xl bg-zinc-900 mb-4">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                                                />
                                            </div>

                                            <div className="w-full mb-3 flex flex-row justify-between items-start gap-4">
                                                <h3 className="text-lg font-serif text-zinc-200 group-hover:text-amber-300 transition-colors line-clamp-1">
                                                    {item.name}
                                                </h3>
                                                <span className="font-mono text-xs text-amber-200 bg-amber-950/40 border border-amber-500/20 px-2.5 py-1 rounded-md shrink-0">
                                                    {item.price}
                                                </span>
                                            </div>

                                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className={`mt-5 pt-3 border-t border-zinc-900 text-[10px] tracking-wider font-mono font-bold ${item.isShellfish ? 'text-red-400/80' : 'text-emerald-400/80'}`}>
                                            {item.extra}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/40">
                            <p className="text-sm text-zinc-500 italic">No items available under this filter setup tonight.</p>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">

                    <div className="grid grid-cols-2 gap-4 h-80">
                        <div className="grid grid-rows-2 gap-4">
                            <div className="relative rounded-lg overflow-hidden border border-zinc-900">
                                <Image src={Lumina} alt="Seafood Prep Close up" fill className="object-cover opacity-75" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden border border-zinc-900">
                                <Image src={Lumina} alt="Plating Detail" fill className="object-cover opacity-75" />
                            </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden border border-zinc-900">
                            <Image src={Lumina} alt="Hearth Smoke" fill className="object-cover opacity-75" />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline mb-4 border-b border-zinc-900 pb-3">
                            <h2 className="text-white text-2xl font-serif tracking-wide">Salt & Sea</h2>
                            <span className="text-[10px] text-amber-300/50 font-mono tracking-widest uppercase">Chapter II: The Abyssal</span>
                        </div>

                        <div className="space-y-6">
                            {filteredAbyssalList.map((item) => (
                                <div key={item.sn} className="group border-b border-zinc-950 pb-4 last:border-0">
                                    <div className="flex flex-row justify-between items-baseline">
                                        <h3 className="text-lg font-serif text-zinc-300 group-hover:text-amber-200 transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="font-mono text-sm text-amber-300/90">{item.price}</span>
                                    </div>
                                    <span className="text-[11px] font-serif italic text-amber-400/60 block mt-0.5">
                                        &ldquo;{item.title}&rdquo;
                                    </span>
                                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}

                            {filteredAbyssalList.length === 0 && (
                                <p className="text-xs text-zinc-500 italic py-4">The waters are quiet. No shellfish-free alternatives available in this chapter.</p>
                            )}
                        </div>

                        <button className="w-full text-xs text-amber-300 bg-transparent py-3 mt-8 rounded-lg border border-amber-300/30 tracking-widest transition-all hover:bg-amber-300 hover:text-black cursor-pointer font-mono font-bold uppercase">
                            Discover The Full Catch
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}