// components/NavigationWrapper.js
"use client";

import { usePathname } from "next/navigation";

export default function NavigationWrapper({ children }) {
  const pathname = usePathname();

  // Define routes where Navbar and Footer should be completely omitted
  const disabledPaths = ["/page", "/login", "/dashboard"];
  const isHidden = disabledPaths.includes(pathname);

  // If we are on a disabled path, render ONLY the page content, bypassing Nav/Footer
  if (isHidden) {
    // children contains the <main>{children}</main> block
    return (
      <>{children.find ? children.find((c) => c.type === "main") : children}</>
    );
  }

  return <>{children}</>;
}
