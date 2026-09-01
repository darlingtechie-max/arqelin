import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arqelin",
  description: "AI-powered customer resolution and follow-through.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav
          style={{
            background: "#17233D",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            ARQELIN
          </Link>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Dashboard
            </Link>

            <Link
              href="/Cases"
              style={{
                color: "#F2994A",
                textDecoration: "none",
              }}
            >
              Cases
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}