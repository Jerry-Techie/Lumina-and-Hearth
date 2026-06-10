"use client";

import React from "react";
import "../app/globals.css";
import Link from "next/link";
import { FaAngleDoubleDown, FaArrowAltCircleRight, FaArrowDown, FaDotCircle, FaFacebookSquare, FaInstagramSquare, FaStar, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const socialIcon=[
    {sn:'0', icon:<FaInstagramSquare/>},
    {sn:'1', icon:<FaWhatsappSquare/>},
    {sn:'2', icon:<FaFacebookSquare/>},
  ]

  // Add all the paths where you want this Footer to be hidden completely
  const disabledPaths = ["/page", "/dashboard"];

  if (disabledPaths.includes(pathname)) {
    return null;
  }

  return (
    <footer className="bg-black border-t border-amber-300/10 text-white w-full sticky top-0 z-50 font-bondoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 sm:my-10">
        <div className="block sm:flex justify-between h-full">
          <div className="shrink-0 sm:pt-0 pt-10">
            <Link
              href="/"
              className="text-sm font-bondoni tracking-wider hover:text-gray-300 transition"
            >
              LUMINA & HEARTH
            </Link>
            <div className="font-hanken text-xs pt-3 text-amber-100/80">An unusual high-end culinary event. Dining as theater, fire as life</div>
            <div className="flex flex-row gap-4 pt-3 ">
              {socialIcon.map((idx)=>(
                <div key={idx.sn} className="cursor-pointer hover:text-gray-300 transition">
                  <span className="text-amber-100/80">{idx.icon}</span>
                </div>
              ))}
            </div>
          </div>
         <div>
            <div className="text-sm font-bondoni tracking-wider hover:text-gray-300 transition pt-10 sm:pt-0">THE SANCTUARY</div>
            <div className="text-xs font-hanken text-amber-100/80 tracking-wider">
              <div className="pt-3"><Link href="/">Transport Partners</Link></div>
              <div className="pt-3"><Link href="/">Allergy Quick-View</Link></div>
              <div className="pt-3"><Link href="/">Privacy Rituals</Link></div>
            </div>
         </div>
         <div className="pb-10">
            <h2 className="text-sm font-bondoni tracking-wider hover:text-gray-300 transition pt-10 sm:pt-0">JOIN THE CYCLE</h2>
            <div className="text-xs font-hanken text-amber-100/80 tracking-wider pt-3">Receive invitations to moon-phase rituals and equinox feasts</div>
            <form className="pt-3">
            <div className="relative">
              <input id="email" name="email" type="email" required placeholder='Your essence (email)' 
                  className="bg-amber-400/10 text-amber-200 border rounded-sm border-amber-200/30 ps-1 text-sm h-8 w-60"/>
                <label id="email" className="absolute left-1 cursor-text transition-all duration-200 "/>
                <button type="submit" className="absolute left-52 top-2 cursor-pointer"><FaArrowAltCircleRight/></button>
            </div>
          </form>
         </div>
        </div>
      </div>
    </footer>
  );
}
