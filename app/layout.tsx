import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "UPRIGHT — Daily Support for Your Standing Day",
  description:
    "If standing up feels like a workout, your body just needs backup. The UPRIGHT Kit: a daily comfort system designed for people who feel lightheaded, drained, and unsteady on their feet.",
  openGraph: {
    title: "UPRIGHT — Daily Support for Your Standing Day",
    description:
      "A daily comfort system for people who feel lightheaded, drained, and unsteady when they stand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-oat text-ink">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
