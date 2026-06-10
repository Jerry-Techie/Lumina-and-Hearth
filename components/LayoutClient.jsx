"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar"; // Adjust path if needed
import BookingCheckoutTerminal from "./BookingCheckoutTerminal"; // Adjust path if needed

export default function LayoutClient({ children }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalView, setTerminalView] = useState("reserve");

  // Dummy state structure for the cart items array
  const [cartItems, setCartItems] = useState([
    { sn: '0', name: 'Obsidian Octopus', price: '$42', quantity: 1 }
  ]);

  const handleOpenTerminal = (viewType) => {
    setTerminalView(viewType); // 'reserve' or 'cart'
    setIsTerminalOpen(true);
  };

  const handleUpdateCartQty = (sn, newQty) => {
    if (newQty <= 0) {
      setCartItems(prev => prev.filter(item => item.sn !== sn));
    } else {
      setCartItems(prev => prev.map(item => item.sn === sn ? { ...item, quantity: newQty } : item));
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={totalCartCount}
        onOpenBooking={handleOpenTerminal}
      />

      <main>{children}</main>

      <BookingCheckoutTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        initialView={terminalView}
        cartItems={cartItems}
        onUpdateCartQty={handleUpdateCartQty}
      />
    </>
  );
}