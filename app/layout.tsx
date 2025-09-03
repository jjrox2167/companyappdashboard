import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer05Page from "@/components/ui/footer-05";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Company - Admin Dashboard",
  description: "My Company - Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* This flex container ensures the layout takes up the full screen height
              and that the footer stays at the bottom.
            */}
            <div className="flex min-h-screen flex-col">
              <Navbar />
              {/* The 'main' content area will grow to fill available space */}
              <main className="flex-grow">
                {children}
              </main>
              {/* The Footer is now correctly placed inside the body */}
              <Footer05Page />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
