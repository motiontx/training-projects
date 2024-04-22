import "./prosemirror.css";
import "./globals.css";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Notes",
  description: "Yet another note-taking app",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body
      className={cn("min-h-screen font-sans antialiased", GeistSans.variable)}
    >
      <main>{children}</main>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
