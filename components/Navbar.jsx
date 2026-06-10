"use client";
import '../app/globals.css'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar({ cartCount = 0, onOpenBooking }) {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

  const disabledPaths = ["/page", "/dashboard"];
  if (disabledPaths.includes(pathname)) {
    return null;
  }

  const navLinks = [
    { name: "Menu", href: "/screens/menu" },
    { name: "Stories", href: "/screens/stories" },
    { name: "Rituals", href: "/screens/rituals" },
  ];

  return (
    <nav className="bg-black border-b border-zinc-800 text-white w-full sticky top-0 z-50 font-bondoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-wider hover:text-gray-300 transition"
            >
              LUMINA & HEARTH
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-white ${isActive
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-gray-400"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <button
            className="relative p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="View Kitchen Cart"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-[9px] font-mono font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => onOpenBooking("cart")}
           className='hidden md:flex bg-amber-400 text-black text-sm font-semibold text-shadow-amber-200 px-6 py-2 rounded-b-sm cursor-pointer hover:bg-white hover:text-black'>Book a Table</button>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
             <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-zinc-950 border-b border-zinc-800"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? "bg-zinc-800 text-white"
                    : "text-gray-400 hover:bg-zinc-900 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
