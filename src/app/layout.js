import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components";
import RevealMount from "@/components/RevealMount";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://novodx.vercel.app"),
  title: {
    default: "NOVO DX — Diagnostics Anywhere",
    template: "%s · NOVO DX",
  },
  description:
    "Bring lab-grade precision to the palm of your hand. Fast, accurate, connected diagnostics.",
  openGraph: {
    type: "website",
    url: "https://novodx.vercel.app",
    title: "NOVO DX — Diagnostics Anywhere",
    description: "Lab-grade results in minutes. Portable. Connected.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "NOVO DX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVO DX — Diagnostics Anywhere",
    description: "Lab-grade results in minutes. Portable. Connected.",
    images: ["/og/home.jpg"],
  },
  themeColor: "#faad18",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RevealMount />
        <Header />
        <div style={{ padding: "0 24px 24px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
