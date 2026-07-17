import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-src",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "RCCG Kings World, Ile-Ife — Welcome Home",
  description:
    "RCCG Kings World, Ile-Ife. A place of power, purpose and radical love. Raising Kings, Transforming the World.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
