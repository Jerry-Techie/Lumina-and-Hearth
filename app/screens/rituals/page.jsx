"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lumina from "../../../public/src/Lumina.jpg";

export default function RitualsPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        guestName: "",
        guestEmail: "",
        ritualType: "gathering",
        attendanceCount: "2",
        notes: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const ritualsList = [
        {
            time: "20:00",
            name: "The First Kindling",
            focus: "Atmospheric Induction",
            description: "An opening sequence where dry birchwood configurations are loaded into the main pit, introducing micro-droplets of natural aromatic resin into the air currents."
        },
        {
            time: "21:30",
            name: "Deep Fluid Seeding",
            focus: "Thermal Transmutation",
            description: "Placing heavy reduction vessels directly into live embers, shifting internal liquid profiles without artificial convective currents."
        },
        {
            time: "23:00",
            name: "The Ash Rest",
            focus: "Alchemical Cool-Down",
            description: "Sealing remaining surface roots in oxygen-starved containment fields to slowly concentrate essential carbon attributes overnight."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-black text-white lg:px-16 px-4 sm:px-7 py-16 flex flex-col justify-between">

            <div className="max-w-7xl mx-auto w-full border-b border-zinc-900 pb-10">
                <span className="text-[10px] tracking-widest text-amber-300 font-mono font-bold uppercase block mb-2">
                    Operational Matrix
                </span>
                <h1 className="text-4xl sm:text-6xl font-serif tracking-tight max-w-3xl leading-tight">
                    Nightly Kitchen <span className="text-amber-300/90 italic">Rituals</span>
                </h1>
                <p className="text-sm text-zinc-400 max-w-xl mt-4 leading-relaxed">
                    Schedules and processing loops governing our central hearth environment, and coordinate requests for structured private logs.
                </p>
            </div>

            <div className="max-w-7xl mx-auto w-full block sm:flex flex-row gap-12 items-start mb-16">

                <div className="lg:col-span-5 bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 sm:p-8 sm:w-1/2 w-full">
                    <div className="mb-6">
                        <h2 className="text-xl font-serif text-zinc-100">Manifest Attendance</h2>
                        <p className="text-xs text-zinc-500 mt-1">Submit parameters to request seat integration for seasonal laboratory analysis blocks.</p>
                    </div>

                    {!formSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Identifier Name</label>
                                <input
                                    type="text"
                                    name="guestName"
                                    required
                                    value={formData.guestName}
                                    onChange={handleInputChange}
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-400/40 font-mono"
                                    placeholder="Oluyomi Oyelami"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Secure Email Routing</label>
                                <input
                                    type="email"
                                    name="guestEmail"
                                    required
                                    value={formData.guestEmail}
                                    onChange={handleInputChange}
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-400/40 font-mono"
                                    placeholder="yomi@domain.com"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Target Horizon</label>
                                    <select
                                        name="ritualType"
                                        value={formData.ritualType}
                                        onChange={handleInputChange}
                                        className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-amber-400/40 font-mono appearance-none"
                                    >
                                        <option value="gathering">Gathering</option>
                                        <option value="laboratory">Lab Block</option>
                                        <option value="private">Private</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Volume Count</label>
                                    <select
                                        name="attendanceCount"
                                        value={formData.attendanceCount}
                                        onChange={handleInputChange}
                                        className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-amber-400/40 font-mono appearance-none"
                                    >
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="4">4 People</option>
                                        <option value="6">6 People</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Special System Directives</label>
                                <textarea
                                    name="notes"
                                    rows="3"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-xs text-zinc-200 focus:outline-none focus:border-amber-400/40 font-sans leading-relaxed resize-none"
                                    placeholder="Specify dietary conditions or acoustic seating structural priorities..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-300 hover:bg-amber-400 text-black text-xs font-mono font-bold tracking-widest py-3.5 rounded-xl uppercase transition-colors cursor-pointer mt-2"
                            >
                                Dispatch Request
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-amber-400/20 rounded-xl bg-amber-950/5">
                            <span className="text-xl block mb-2">✦</span>
                            <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">Transmission Linked</h3>
                            <p className="text-xs text-zinc-400 max-w-xs mx-auto mt-2 leading-relaxed">
                                Parameters for {formData.guestName} registered successfully. Validation loops will sync directly back to {formData.guestEmail}.
                            </p>
                            <button
                                onClick={() => setFormSubmitted(false)}
                                className="text-[10px] font-mono text-zinc-500 hover:text-white uppercase tracking-widest mt-6 underline"
                            >
                                Reopen Terminal Form
                            </button>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-7 space-y-6 w-2/2">
                    <div className="text-[10px] tracking-wider font-mono text-zinc-500 uppercase pb-2 border-b border-zinc-900">
                        Nightly Sequence Tracks
                    </div>

                    <div className="space-y-4">
                        {ritualsList.map((ritual, idx) => (
                            <div
                                key={idx}
                                className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start group hover:border-zinc-800 transition-colors"
                            >
                                <div className="font-mono text-sm font-bold text-amber-300/80 bg-amber-950/30 border border-amber-500/10 px-3 py-1 rounded-md shrink-0">
                                    {ritual.time}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex flex-wrap items-baseline gap-2">
                                        <h3 className="text-md font-serif text-zinc-200 group-hover:text-amber-300 transition-colors">
                                            {ritual.name}
                                        </h3>
                                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                                            [{ritual.focus}]
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed pt-2">
                                        {ritual.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
