import type { Metadata, Viewport } from "next";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "St. Philip Neri Catholic Church – Smethwick",
    template: "%s | St. Philip Neri Catholic Church",
  },
  description:
    "Welcome to St. Philip Neri Catholic Church in Smethwick, Birmingham. Find Mass times, events, announcements and more.",
  keywords: [
    "Catholic Church",
    "Smethwick",
    "Birmingham",
    "Mass",
    "St. Philip Neri",
  ],
  authors: [{ name: "St. Philip Neri Parish" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://stphilipneri.org.uk",
    siteName: "St. Philip Neri Catholic Church",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
