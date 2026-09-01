import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "AI-powered customer resolution and follow-through",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarStyle = {
    width: "220px",
    minWidth: "220px",
    minHeight: "100vh",
    background: "#17233D",
    color: "#FFFFFF",
    padding: "24px 16px",
    boxSizing: "border-box" as const,
  };

  const linkStyle = {
    display: "block",
    padding: "12px 14px",
    marginBottom: "6px",
    borderRadius: "8px",
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "15px",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body style={{ margin: 0, background: "#F7F5F0" }}>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
          }}
        >
          <aside style={sidebarStyle}>
            <div style={{ marginBottom: "36px" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "24px",
                  letterSpacing: "1px",
                }}
              >
                ARQELIN
              </h1>

              <p
                style={{
                  marginTop: "8px",
                  color: "#F2994A",
                  fontSize: "12px",
                }}
              >
                Customer resolution & follow-through
              </p>
            </div>

            <nav>
              <p
                style={{
                  color: "#AAB4C8",
                  fontSize: "11px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                WORKSPACE
              </p>

              <Link href="/" style={linkStyle}>
                🏠 Dashboard
                </Link>

                <Link href="/Tickets" style={linkStyle}>
                  🎫 Tickets
                  </Link>

                  <Link href="/Cases" style={linkStyle}>
                    📁 Cases
                    </Link>


              <Link href="/PromiseTracker" style={linkStyle}>
                ⏰ Promise Tracker
                </Link>
                
              

              <Link href="/Automations" style={linkStyle}>
                ⚡ Automations
                </Link>
              
              

              <div style={linkStyle}>
                ✦ Arqelin AI
              </div>

              <div style={linkStyle}>
                📊 Analytics
              </div>
            </nav>

            <div style={{ marginTop: "40px" }}>
              <p
                style={{
                  color: "#AAB4C8",
                  fontSize: "11px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                ACCOUNT
              </p>

              <div style={linkStyle}>⚙️ Settings</div>
              <div style={linkStyle}>👤 Profile</div>
            </div>
          </aside>

          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <header
              style={{
                background: "#FFFFFF",
                borderBottom: "1px solid #E4E1D8",
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <input
                type="text"
                placeholder="Search cases..."
                style={{
                  width: "280px",
                  maxWidth: "45%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid #D8DCE3",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <span>🔔</span>

                <button
                  style={{
                    background: "#F2994A",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  + New Case
                </button>

                <span>👤</span>
              </div>
            </header>

            <main style={{ flex: 1 }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}