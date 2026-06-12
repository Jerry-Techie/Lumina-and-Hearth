"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lumina from "../../../public/src/Lumina.jpg";

export default function StoryPage() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [isMetricMuted, setIsMetricMuted] = useState(false);

  const historyTimeline = [
    {
      year: "2024",
      title: "The Volcanic Core",
      subtitle: "Hearth Foundation",
      description: "Erecting our signature 4-ton open hearth engineered entirely from high-density basalt volcanic slabs, tailored to sustain uninterrupted wood-fire heat architectures.",
      metric: "920°C",
      metricLabel: "Peak Operating Temp",
      detailImage: Lumina,
      manifesto: "Fire is not a cooking medium; it is an active ingredient. By tracking how variable airflow vectors interact with oak embers, we dictate molecular caramelization profiles before food ever hits steel."
    },
    {
      year: "2025",
      title: "Abyssal Extraction",
      subtitle: "Logistical Blueprinting",
      description: "Establishing proprietary deep-sea cold chains directly with small-scale Atlantic diving vessels, guaranteeing that delicate marine elements arrive structurally pristine.",
      metric: "48 hrs",
      metricLabel: "Ocean to Platter",
      detailImage: Lumina,
      manifesto: "To preserve the clean oceanic minerality of deep-water catch, thermal shocking sequences must occur immediately at the harbor line, halting post-mortem cellular degradation completely."
    },
    {
      year: "2026",
      title: "Atmospheric Dining",
      subtitle: "The Complete Expansion",
      description: "Integrating multi-sensory environmental modulations across the dining space, pairing kinetic light transitions and wood-smoke density to custom audio pairings.",
      metric: "100%",
      metricLabel: "Sensory Cohesion",
      detailImage: Lumina,
      manifesto: "Plating food is only half the equation. True modern gastronomy bridges the gap between olfactory sensory inputs and live architectural acoustic resonance."
    }
  ];

  const currentData = historyTimeline[selectedMilestone];

  return (
    <div className="w-full min-h-screen bg-black text-white lg:px-16 px-4 sm:px-7 py-16 flex flex-col justify-between">

      <div className="max-w-7xl mx-auto w-full mb-7">
        <span className="text-[10px] tracking-widest text-amber-300 font-mono font-bold uppercase block mb-2">
          Architectural Lineage
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif tracking-tight max-w-2xl leading-tight">
          Crafting the <span className="text-amber-300/90 italic">Lumina</span> Methodology
        </h1>
        <p className="text-sm text-zinc-400 max-w-xl mt-4 leading-relaxed">
          A look behind our structural choices, thermal research pipelines, and the evolution of our dynamic culinary workspace.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-0">

        <div className="lg:col-span-4 space-y-4">
          <div className="text-[10px] tracking-wider font-mono text-zinc-500 uppercase pb-2 border-b border-zinc-900">
            Select Paradigm
          </div>
          {historyTimeline.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setSelectedMilestone(idx)}
              className={`w-full text-left p-5 rounded-xl border transition-all flex flex-col justify-between ${selectedMilestone === idx
                  ? "bg-zinc-950 border-amber-400/30 shadow-lg shadow-amber-500/5"
                  : "bg-transparent border-zinc-900 opacity-60 hover:opacity-100"
                }`}
            >
              <div className="flex justify-between items-baseline w-full">
                <span className={`font-mono text-xs tracking-wider ${selectedMilestone === idx ? "text-amber-300" : "text-zinc-400"}`}>
                  {item.subtitle}
                </span>
                <span className="font-mono text-sm font-bold text-zinc-600">{item.year}</span>
              </div>
              <h3 className="text-md font-serif text-zinc-200 mt-2">{item.title}</h3>
            </button>
          ))}

          <div className="pt-6">
            <Link
              href="/blog"
              className="w-full text-center text-xs font-mono tracking-widest text-zinc-400 hover:text-amber-300 border border-zinc-800 hover:border-amber-300/30 bg-zinc-950/40 py-4 rounded-xl block transition-all uppercase"
            >
              Explore Research Chronicles &rarr;
            </Link>
          </div>
        </div>

        <div className="lg:col-span-8 bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[440px]">

          <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/20 text-amber-300">
                  {currentData.year}
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  {currentData.subtitle}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-zinc-100 mt-4 tracking-wide">
                {currentData.title}
              </h2>

              <p className="text-xs text-zinc-400 leading-relaxed mt-4">
                {currentData.description}
              </p>
            </div>

            <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
              <span className="text-[10px] font-mono tracking-widest text-amber-300/60 uppercase block mb-1">
                Operational Creed
              </span>
              <p className="text-xs font-serif text-zinc-300 italic leading-relaxed">
                {currentData.manifesto}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4 h-full justify-center">
            <div className="relative h-48 w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
              <Image
                src={currentData.detailImage}
                alt={currentData.title}
                fill
                className="object-cover opacity-80"
              />
            </div>

            <div
              onClick={() => setIsMetricMuted(!isMetricMuted)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-center text-center ${isMetricMuted
                  ? "bg-zinc-950 border-zinc-900 opacity-40"
                  : "bg-zinc-900/30 border-zinc-800/80 shadow-inner"
                }`}
            >
              <span className={`text-3xl font-mono font-bold tracking-tight transition-colors ${isMetricMuted ? "text-zinc-600" : "text-amber-300"}`}>
                {currentData.metric}
              </span>
              <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase mt-1">
                {currentData.metricLabel}
              </span>
            </div>
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-6 text-zinc-500 font-mono text-[11px] uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-amber-300">✦</span> Open Hearth Verification Loop
        </div>
        <div className="flex items-center gap-2 sm:justify-center">
          <span className="text-amber-300">✦</span> Dynamic Local CMS Integration Available
        </div>
        <div className="flex items-center gap-2 sm:justify-end">
          <span className="text-amber-300">✦</span> Fully Graph Connected Architecture
        </div>
      </div>

    </div>
  );
}