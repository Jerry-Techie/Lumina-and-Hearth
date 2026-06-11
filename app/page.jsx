"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleDown, FaArrowDown, FaDotCircle, FaStar, FaBell, FaLeaf } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRouter } from "next/navigation";
import Lumina from "../public/src/Lumina.jpg";

export default function LandingPage() {
  const router = useRouter();

  const [selectedDiet, setSelectedDiet] = useState("all");
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const round1 = useTransform(count1, (latest) => Math.round(latest));
  const round2 = useTransform(count2, (latest) => Math.round(latest));
  const round3 = useTransform(count3, (latest) => Math.round(latest));

  const menu = [
    { sn: '0', name: 'Stardust Oysters', description: 'Charcoal-infused salt, finger lime pearls', price: '$32', tags: ['seafood', 'gf'] },
    { sn: '1', name: 'The Embark Duck Oysters', description: 'Honey-glazed over cherrywood, smoked parsnip', price: '$58', tags: ['meat'] },
    { sn: '2', name: 'Celestial Sphere', description: 'Dark chocolate, gold leaf, meteor-smoke nitrogen', price: '$26', tags: ['v', 'gf'] },
  ];

  useEffect(() => {
    const controls1 = animate(count1, 24, { duration: 3, ease: "easeOut" });
    const controls2 = animate(count2, 12, { duration: 3, ease: "easeOut" });
    const controls3 = animate(count3, 82, { duration: 3, ease: "easeOut" }); 

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, [count1, count2, count3]);

  const filteredMenu = selectedDiet === "all"
    ? menu
    : menu.filter(item => item.tags.includes(selectedDiet));

  const chapters = [
    {
      era: "01",
      title: "The Seed of Ignition",
      focus: "Hearth Foundation",
      description: "Assembling a team of multi-disciplinary masons to erect a 4-ton zero-gas volcanic rock hearth capable of sustaining continuous heat signatures.",
      link: "/blog/philosophy-of-the-eternal-ember"
    },
    {
      era: "02",
      title: "Mapping the Abyssal Thermal Grid",
      focus: "Ingredient Science",
      description: "Perfecting deep-sea cold chains with precision thermal storage containers to keep deep sea life elements pristine until fire impact.",
      link: "/blog/sourcing-the-abyssal-catch"
    },
    {
      era: "03",
      title: "Alchemical Gastronomy Labs",
      focus: "Molecular Preservation",
      description: "Introducing automated monitoring configurations across charcoal silos to harvest volatile wood smoke essences natively.",
      link: "/blog/alkalinity-in-modern-fermentation"
    }
    ];

  return (
    <div className="w-full bg-black text-white px-4 sm:px-7 min-h-screen font-sans">
      <div className="flex flex-col items-center justify-center pt-20 sm:pt-28">
        <h1 className="text-white text-4xl sm:text-6xl max-w-2xl text-center font-serif tracking-wide leading-tight">
          Dine in the <span className="text-amber-300">Glow</span> of the Hearth.
        </h1>
        <p className="text-sm text-gray-400 max-w-xl text-center leading-relaxed pt-5">
          Where primordial fire meets cosmic inspiration. An elemental journey through the stars and the embers.
        </p>
        <div className="pt-6 flex gap-4">
          <button
            onClick={() => router.push("/screens/stories")}
            className="text-sm text-black bg-amber-300 px-5 py-2.5 rounded-md font-medium transition-all hover:bg-white hover:text-black cursor-pointer"
          >
            Experience the Flame
          </button>
          <button
            onClick={() => router.push("/screens/menu")}
            className="text-sm text-white bg-transparent px-5 py-2.5 rounded-md border border-amber-300/50 font-medium transition-all hover:bg-amber-300 hover:text-black cursor-pointer"
          >
            View the Menu
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-16 text-xs text-gray-500 tracking-widest">
        <span>DESCEND</span>
        <span className="animate-bounce pt-2">
          <FaAngleDoubleDown className="text-amber-300" />
        </span>
      </div>

      <div className="max-w-6xl mx-auto bg-zinc-900/20 p-6 rounded-xl border border-zinc-800/50 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pb-6 border-b border-zinc-800/50">
          <div>
            <h2 className="text-2xl font-serif tracking-wide">The Night&apos;s Rhythm</h2>
            <p className="text-xs text-gray-400 mt-1">Real-time availability for tonight&apos;s culinary performance.</p>
          </div>
          <div className="flex items-center text-amber-200 text-sm mt-3 md:mt-0 bg-amber-950/30 px-3 py-1.5 rounded-full border border-amber-500/20">
            <FaDotCircle className="me-2 animate-pulse" />
            Tonight is <motion.span className="mx-1 font-mono">{round3}</motion.span>% Formed
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">

          <div className="relative md:col-span-2 h-64 rounded-lg overflow-hidden border border-zinc-800">
            <Image src={Lumina} alt="Lumina Hearth" fill className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-amber-400 font-bold">THE ALCHEMIST TABLE</span>
                <h3 className="text-xl font-serif mt-1">Chef&apos;s Table Experience</h3>
                <p className="text-xs text-gray-400 max-w-md mt-2">
                  Our most immersive setting, directly facing the hearth. Limited to <motion.span className="font-bold text-amber-300">{round2}</motion.span> guests per evening.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowWaitlistModal(true)}
                  className="text-xs text-gray-400 bg-zinc-900/80 px-4 py-2 rounded border border-zinc-800 flex items-center gap-2 hover:bg-zinc-800 transition-colors"
                >
                  18:00 <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Booked <FaBell className="text-amber-400 text-[10px]" />
                </button>
                <button className="text-xs text-black bg-amber-300 px-4 py-2 rounded font-medium flex items-center gap-2 hover:bg-white transition-all">
                  21:30 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Available
                </button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-widest text-amber-400 font-bold font-mono">WALK-IN STATIONS</span>
              <h3 className="text-xl font-serif mt-1">The Orbit Lounge</h3>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Walk-in drinks and light ritual snacks under the star-glass roof. <motion.span className="text-amber-300 font-mono">{round1}</motion.span> spots currently open.
              </p>
            </div>
            <span className="text-[11px] text-amber-300/70 underline tracking-wider cursor-pointer hover:text-amber-300">Live Lounge Wait-Times &rarr;</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800/60 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-lg font-serif">Private Ritual</h3>
              <p className="text-xs text-gray-400 mt-2 max-w-xs">The &apos;Celestial Void&apos; room is ready for private configurations up to 12 guests.</p>
            </div>
            <button className="text-xs text-white border border-amber-300/40 px-4 py-2 rounded mt-6 hover:bg-white hover:text-black transition-all">
              Enquire Privately
            </button>
          </div>

          <div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800/60 flex gap-4">
            <div className="w-1/3 relative hidden sm:block h-full min-h-27.5 rounded overflow-hidden">
              <Image src={Lumina} alt="Flash Ritual dish" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded border border-amber-400/20 tracking-wider font-mono">FLASH RITUAL</span>
              <h3 className="text-lg font-serif mt-1.5">The Ember Scallop</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">A surprise 15-minute gastronomic special served dynamically only when the hearth reaches 900°C. Tonight at 20:15.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 my-24 items-center">
        <div className="relative h-100 w-full border border-zinc-800 rounded-xl overflow-hidden hidden md:block">
          <Image src={Lumina} alt="Menu showcase" fill className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent" />
        </div>

        <div>
          <span className="text-[10px] tracking-widest text-amber-400 font-bold">SENSORY HIGHLIGHTS</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-1 mb-4">A Peek at the Menu</h2>

    
          <div className="flex gap-2 mb-6 border-b border-zinc-900 pb-3 text-xs">
            <button onClick={() => setSelectedDiet("all")} className={`px-3 py-1 rounded transition-colors ${selectedDiet === 'all' ? 'bg-amber-300 text-black font-medium' : 'text-gray-400 hover:text-white'}`}>All Creation</button>
            <button onClick={() => setSelectedDiet("gf")} className={`px-3 py-1 rounded transition-colors flex items-center gap-1 ${selectedDiet === 'gf' ? 'bg-amber-300 text-black font-medium' : 'text-gray-400 hover:text-white'}`}>Gluten Free</button>
            <button onClick={() => setSelectedDiet("v")} className={`px-3 py-1 rounded transition-colors flex items-center gap-1 ${selectedDiet === 'v' ? 'bg-amber-300 text-black font-medium' : 'text-gray-400 hover:text-white'}`}><FaLeaf className="text-[10px]" /> Plant Based</button>
          </div>

          <div className="space-y-6">
            {filteredMenu.map((item) => (
              <div key={item.sn} className="group">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-md font-serif group-hover:text-amber-300 transition-colors">{item.name}</h4>
                  <span className="flex-1 border-b border-dotted border-zinc-800 mx-4 h-1"></span>
                  <span className="font-mono text-sm text-amber-200">{item.price}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 pl-1">{item.description}</p>
              </div>
            ))}
            {filteredMenu.length === 0 && (
              <p className="text-xs text-gray-500 italic">No stellar alignments matching this filter tonight.</p>
            )}
          </div>

          <div className="text-xs pt-8 flex items-center gap-2 font-serif text-amber-200/80 cursor-pointer hover:text-amber-300 transition-colors">
            Explore the Full Anthology <FaArrowDown className="animate-pulse text-amber-300 text-[10px]" />
          </div>
        </div>
      </div>

      {showWaitlistModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-amber-300/30 p-6 rounded-xl max-w-sm w-full shadow-2xl relative">
            <h3 className="text-lg font-serif text-amber-300">Join the Instant Ember Waitlist</h3>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              18:00 is fully committed. Drop your number below; if a party cancels, our systems auto-text your party instantly based on distance metrics.
            </p>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full bg-zinc-900 border border-zinc-800 text-sm p-2.5 rounded mt-4 focus:outline-none focus:border-amber-300 text-white font-mono"
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowWaitlistModal(false)}
                className="flex-1 text-xs bg-zinc-900 text-gray-400 py-2 rounded hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowWaitlistModal(false)}
                className="flex-1 text-xs bg-amber-300 text-black font-medium py-2 rounded hover:bg-white transition-all"
              >
                Secure Backup Slot
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-7xl mx-auto px-4 my-24">
        <div className="border-b border-zinc-900 pb-4 mb-16 text-center md:text-left">
          <span className="text-[10px] tracking-widest text-amber-400 font-mono font-bold uppercase">Chronological Trajectory</span>
          <h2 className="text-white text-2xl sm:text-3xl font-serif tracking-wide mt-1">Our Structural Lineage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative before:absolute before:top-4 before:left-4 md:before:left-0 before:w-0.5 md:before:w-full md:before:h-0.5 before:h-full before:bg-zinc-900">
          {chapters.map((chap) => (
            <div key={chap.era} className="relative pl-8 md:pl-0 md:pt-8 group">
              <div className="absolute top-3 left-3 md:top-1.5 md:left-0 w-3 h-3 rounded-full bg-black border-2 border-amber-300 z-10 group-hover:bg-amber-300 transition-colors duration-300" />

              <span className="font-mono text-3xl font-bold text-zinc-800 group-hover:text-amber-400/30 transition-colors block leading-none">
                {chap.era}
              </span>

              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300/70 mt-2 block">
                {chap.focus}
              </span>

              <h4 className="text-md font-serif text-zinc-200 mt-1 group-hover:text-white transition-colors">
                {chap.title}
              </h4>

              <p className="text-xs text-zinc-500 mt-3 leading-relaxed pr-4">
                {chap.description}
              </p>

              <Link
                href={chap.link}
                className="text-[11px] font-mono font-bold text-zinc-400 hover:text-amber-300 transition-colors tracking-wide uppercase mt-4 inline-block"
              >
                Analyze Records &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-zinc-950 border-t border-zinc-900 py-16 flex flex-col justify-center items-center text-center">
        <FaStar className="text-amber-300 animate-pulse text-lg" />
        <h2 className="font-serif italic text-2xl pt-4 tracking-wide">A Letter from the Hearth</h2>

        <div className="max-w-xl text-xs leading-relaxed font-sans text-gray-400 pt-6 space-y-4 px-4">
          <p>&ldquo;Gastronomy is not merely the consumption of sustenance; it is a ritual of the soul. At Lumina & Hearth, we look both downward into the primordial coals and upward into the infinite night sky.&rdquo;</p>
          <p>&ldquo;Our philosophy, Celestial Gastronomy, is built on the tension between the finite warmth of the fire and the cold expansion of the universe. Every plate is a constellation, every flavor a distant memory of a star.&rdquo;</p>
        </div>

        <h3 className="pt-8 font-serif text-md text-white tracking-wider">Chef Julian Vane</h3>
        <span className="text-[10px] tracking-widest text-amber-400 font-bold mt-1">MASTER OF THE ETERNAL EMBER</span>
      </div>

    </div>
  );
}