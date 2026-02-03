// BUILD_MARKER: 2026-02-03-1
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HENGYUN · STEPS",
    template: "%s · HENGYUN",
  },
  description:
    "HENGYUN Technology — STEPS (Sustainable Thermal Energy Pavement System).",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}