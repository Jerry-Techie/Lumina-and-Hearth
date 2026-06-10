"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingTerminal({ isOpen, onClose }) {
    const [currentStep, setCurrentStep] = useState("reserve");
    const [selectedZone, setSelectedZone] = useState("hearthside");
    const [partySize, setPartySize] = useState("2");
    const [bookingDate, setBookingDate] = useState("2026-06-12");
    const [bookingTime, setBookingTime] = useState("20:00");

    const [billingDetails, setBillingDetails] = useState({
        name: "Oluyomi Oyelami",
        email: "yomi@domain.com",
        phone: "+234 800 000 0000",
        notes: "",
    });

    const [bookingType, setBookingType] = useState("standard");

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails((prev) => ({ ...prev, [name]: value }));
    };

    const steps = [
        { id: "reserve", label: "Time & Space" },
        { id: "details", label: "Guest Details" },
        { id: "payment", label: "Verification" },
    ];

    const slideVariants = {
        enter: { x: 20, opacity: 0 },
        center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { x: -20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
                <div className="absolute inset-0 -z-10" onClick={onClose} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-zinc-950 border border-zinc-900/80 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-145 text-zinc-100"
                >
                    <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-zinc-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                            <h1 className="text-sm font-medium uppercase tracking-widest text-zinc-400 font-mono">
                                Lumina Experience Desk
                            </h1>
                        </div>

                        {currentStep !== "confirmed" && (
                            <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono">
                                {steps.map((step, idx) => {
                                    const isActive = currentStep === step.id;
                                    const isPast =
                                        steps.findIndex((s) => s.id === currentStep) > idx;
                                    return (
                                        <div key={step.id} className="flex items-center gap-2">
                                            <span
                                                className={`transition-all duration-300 ${isActive
                                                        ? "text-amber-400 font-bold"
                                                        : isPast
                                                            ? "text-zinc-400"
                                                            : "text-zinc-600"
                                                    }`}
                                            >
                                                {step.label}
                                            </span>
                                            {idx < steps.length - 1 && (
                                                <span className="text-zinc-800">&rarr;</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="p-6 sm:p-8 grow flex flex-col justify-between relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {currentStep === "reserve" && (
                                <motion.div
                                    key="reserve"
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="space-y-6 grow flex flex-col justify-between"
                                >
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-2xl font-serif font-light tracking-wide">
                                                Secure Your Table
                                            </h2>
                                            <p className="text-sm text-zinc-500 mt-1">
                                                Select an atmosphere tier and timing sequence for your reservation.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {[
                                                { id: "hearthside", label: "Hearth Core", desc: "Premium live-fire seating" },
                                                { id: "abyssal", label: "The Salt Room", desc: "Acoustically quiet intimate block" },
                                                { id: "loft", label: "Elevated Ridge", desc: "Panoramic view layout" },
                                            ].map((zone) => (
                                                <motion.div
                                                    key={zone.id}
                                                    whileHover={{ y: -2, backgroundColor: "rgba(24, 24, 27, 0.6)" }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => setSelectedZone(zone.id)}
                                                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${selectedZone === zone.id
                                                            ? "bg-amber-950/10 border-amber-400/80 shadow-md shadow-amber-500/5"
                                                            : "bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:border-zinc-800"
                                                        }`}
                                                >
                                                    <span className={`text-sm font-medium block ${selectedZone === zone.id ? "text-amber-400" : "text-zinc-200"}`}>
                                                        {zone.label}
                                                    </span>
                                                    <span className="text-xs opacity-70 block mt-1.5 leading-normal">
                                                        {zone.desc}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="block text-xs text-zinc-500 uppercase tracking-wider font-mono">Date</label>
                                                <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="w-full bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-900 rounded-xl p-3 text-sm text-zinc-200 focus:outline-none focus:border-amber-400/50 transition-all font-mono" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-xs text-zinc-500 uppercase tracking-wider font-mono">Time Window</label>
                                                <select value={bookingTime} onChange={(e) => setBookingTime(e.target.value)} className="w-full bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-900 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400/50 transition-all font-mono cursor-pointer">
                                                    <option value="18:00" className="bg-amber-400 text-black">18:00 Dinner Split</option>
                                                    <option value="20:00" className="bg-amber-400 text-black">20:00 Premium Split</option>
                                                    <option value="22:30" className="bg-amber-400 text-black">22:30 Late Seating</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-xs text-zinc-500 uppercase tracking-wider font-mono">Party Volume</label>
                                                <select value={partySize} onChange={(e) => setPartySize(e.target.value)} className="w-full bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-900 rounded-xl p-3 text-sm text-zinc-300 focus:outline-none focus:border-amber-400/50 transition-all font-mono cursor-pointer">
                                                    <option value="1" className="bg-amber-400 text-black">1 Guest</option>
                                                    <option value="2" className="bg-amber-400 text-black">2 Guests</option>
                                                    <option value="4" className="bg-amber-400 text-black">4 Guests</option>
                                                    <option value="6" className="bg-amber-400 text-black">6 Guests</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-zinc-900/50 flex justify-end">
                                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={() => setCurrentStep("details")} className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-white text-black font-medium text-sm rounded-xl transition-colors shadow-lg" >
                                            Next: Contact Details
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === "details" && (
                                <motion.div
                                    key="details"
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="space-y-0 grow flex flex-col justify-between"
                                >
                                    <div className="space-y-1">
                                        <div>
                                            <h2 className="text-2xl font-serif font-light tracking-wide">
                                                Guest Information
                                            </h2>
                                            <p className="text-xs text-zinc-500 mt-1 mb-4">
                                                Please provide your authentication contacts for confirmations.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex flex-row sm:grid-cols-2 gap-4">
                                                <div className="space-y-1.5 flex-1">
                                                    <label className="block text-xs text-zinc-500 font-mono uppercase tracking-wider">Full Name</label>
                                                    <input type="text" name="name" required value={billingDetails.name} onChange={handleInputChange} className="w-full bg-zinc-900/40 border border-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-amber-400/50 transition-all" />
                                                </div>
                                                <div className="space-y-1.5 flex-1">
                                                    <label className="block text-xs text-zinc-500 font-mono uppercase tracking-wider">Email Address</label>
                                                    <input type="email" name="email" required value={billingDetails.email} onChange={handleInputChange} className="w-full bg-zinc-900/40 border border-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-amber-400/50 transition-all" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs text-zinc-500 font-mono uppercase tracking-wider">Phone Terminal</label>
                                                    <input type="text" name="phone" required value={billingDetails.phone} onChange={handleInputChange} className="w-full bg-zinc-900/40 border border-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-amber-400/50 transition-all font-mono" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="block text-xs text-zinc-500 font-mono uppercase tracking-wider">Special Preferences (Optional)</label>
                                                <textarea name="notes" rows="2" value={billingDetails.notes} onChange={handleInputChange} className="w-full bg-zinc-900/40 border border-zinc-900 rounded-xl p-4 text-sm text-zinc-200 focus:outline-none focus:border-amber-400/50 transition-all resize-none h-88" placeholder="Allergies, accommodations, high acoustic comfort..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-6 border-t border-zinc-900/50 gap-4">
                                        <button onClick={() => setCurrentStep("reserve")} className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors px-4 py-2 cursor-pointer">
                                            &larr; Back
                                        </button>
                                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={() => setCurrentStep("payment")} className="sm:px-8 py-3.5 hover:bg-white bg-amber-400 cursor-pointer text-black px-4 font-medium text-sm rounded-xl transition-colors shadow-lg" >
                                            Next: Verification
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === "payment" && (
                                <motion.div
                                    key="payment"
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="flex flex-col justify-between h-full min-h-95"
                                >
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-2xl font-serif font-light tracking-wide">
                                                Verification Tier
                                            </h2>
                                            <p className="text-sm text-zinc-500 mt-1">
                                                Choose your method to anchor this seating assignment into our manifest.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div
                                                onClick={() => setBookingType("standard")}
                                                className={`p-5 rounded-xl border cursor-pointer text-left transition-all ${bookingType === "standard"
                                                        ? "bg-amber-950/10 border-amber-400/80 text-zinc-100"
                                                        : "bg-zinc-900/20 border-zinc-900 text-zinc-500 hover:border-zinc-800"
                                                    }`}
                                            >
                                                <span className={`font-medium block ${bookingType === "standard" ? "text-amber-400" : "text-zinc-200"}`}>
                                                    Standard Verification
                                                </span>
                                                <span className="text-xs opacity-70 block mt-1.5 leading-relaxed">
                                                    Holds table cleanly for up to 15 minutes past target arrival window. No deposit needed.
                                                </span>
                                            </div>

                                            <div
                                                onClick={() => setBookingType("premium")}
                                                className={`p-5 rounded-xl border cursor-pointer text-left transition-all ${bookingType === "premium"
                                                        ? "bg-amber-950/10 border-amber-400/80 text-zinc-100"
                                                        : "bg-zinc-900/20 border-zinc-900 text-zinc-500 hover:border-zinc-800"
                                                    }`}
                                            >
                                                <span className={`font-medium block ${bookingType === "premium" ? "text-amber-400" : "text-zinc-200"}`}>
                                                    Premium Vault Lock
                                                </span>
                                                <span className="text-xs opacity-70 block mt-1.5 leading-relaxed">
                                                    Requires $25.00 authorization hold. Credited instantly toward your final invoice.
                                                </span>
                                            </div>
                                        </div>

                                        <AnimatePresence mode="wait">
                                            {bookingType === "premium" ? (
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl" >
                                                    <div className="space-y-1">
                                                        <label className="block text-[11px] text-zinc-500 font-mono uppercase">Card Number</label>
                                                        <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full bg-zinc-950 border border-zinc-900 rounded-lg p-2.5 text-sm text-zinc-200 tracking-widest focus:outline-none focus:border-zinc-800 font-mono" />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-1">
                                                            <label className="block text-[11px] text-zinc-500 font-mono uppercase">Expiry (MM/YY)</label>
                                                            <input type="text" placeholder="09/29" className="w-full bg-zinc-950 border border-zinc-900 rounded-lg p-2.5 text-sm text-zinc-200 text-center focus:outline-none focus:border-zinc-800 font-mono" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <label className="block text-[11px] text-zinc-500 font-mono uppercase">CVV</label>
                                                            <input type="password" placeholder="***" maxLength="3" className="w-full bg-zinc-950 border border-zinc-900 rounded-lg p-2.5 text-sm text-zinc-200 text-center focus:outline-none focus:border-zinc-800 font-mono" />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-zinc-900/10 border border-zinc-900/60 p-4 rounded-xl text-center" >
                                                    <p className="text-xs text-zinc-500 font-sans">
                                                        Complimentary verification path. No credit card files required.
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex justify-between items-center pt-6 border-t border-zinc-900/50 gap-4 mt-8">
                                        <button onClick={() => setCurrentStep("details")} className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors px-4 py-2" >
                                            &larr; Back
                                        </button>
                                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={(e) => { e.preventDefault(); setCurrentStep("confirmed"); }} className="flex-1 sm:flex-initial px-8 py-3.5 bg-amber-400 hover:bg-white hover:text-black text-black text-sm font-medium rounded-xl transition-all shadow-xl shadow-emerald-500/5" >
                                            Complete Reservation {bookingType === "premium" && "($25.00)"}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === "confirmed" && (
                                <motion.div
                                    key="confirmed"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-center py-12 space-y-6 flex flex-col justify-center items-center"
                                >
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl shadow-inner" >
                                        ✓
                                    </motion.div>

                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-serif font-light tracking-wide text-zinc-100">
                                            Reservation Secured
                                        </h2>
                                        <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                                            A confirmation sequence has been anchored for{" "}
                                            <span className="text-amber-400 font-medium">{billingDetails.name}</span>.
                                        </p>
                                    </div>

                                    <div className="bg-zinc-900/30 border border-zinc-900/80 p-5 rounded-2xl text-left text-xs text-zinc-400 space-y-2 w-full max-w-md font-mono">
                                        <div className="flex justify-between border-b border-zinc-900/40 pb-2">
                                            <span className="text-zinc-600">TOKEN:</span>
                                            <span className="text-zinc-200">LMN-2026-BOOK99</span>
                                        </div>
                                        <div className="flex justify-between border-b border-zinc-900/40 pb-2 pt-6">
                                            <span className="text-zinc-600">ZONE:</span>
                                            <span className="text-zinc-200 uppercase">{selectedZone}</span>
                                        </div>
                                        <div className="flex justify-between pt-6">
                                            <span className="text-zinc-600">SCHEDULE:</span>
                                            <span className="text-zinc-200">
                                                {bookingDate} @ {bookingTime}
                                            </span>
                                        </div>
                                    </div>

                                    <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={() => { setCurrentStep("reserve"); onClose(); }} className="w-full max-w-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs py-3.5 rounded-xl uppercase tracking-widest font-mono font-medium transition-all mt-4 cursor-pointer" >
                                        Exit Terminal Desk
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}