import { Footer } from "@/components/Footer";
import LayoutClient from "@/components/LayoutClient";

export const metadata = {
  title: "Lunina & Hearth",
  description: "Track and analyze prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
