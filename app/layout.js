import "./globals.css";
import { Roboto } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you need
  display: "swap",
});

export const metadata = {
  title: "Lowkey Autos",
  description:
    "Lowkey Autos is a reliable car dealership serving the whole of Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
