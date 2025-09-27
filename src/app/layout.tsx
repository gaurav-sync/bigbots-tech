import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BigBots.tech - Discover, Compare & Learn About AI Tools",
  description: "Your hub for chatbots, automation tools, and AI solutions. Discover the biggest bots and AI tools to enhance your productivity.",
  keywords: "AI tools, chatbots, automation, artificial intelligence, bots, productivity",
  authors: [{ name: "BigBots.tech" }],
  openGraph: {
    title: "BigBots.tech - Discover, Compare & Learn About AI Tools",
    description: "Your hub for chatbots, automation tools, and AI solutions.",
    url: "https://bigbots.tech",
    siteName: "BigBots.tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BigBots.tech - Discover, Compare & Learn About AI Tools",
    description: "Your hub for chatbots, automation tools, and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force dark mode always
              document.documentElement.classList.add('dark');
              console.log('Layout: Forced dark mode');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-900 text-white`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
