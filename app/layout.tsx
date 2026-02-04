import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hengyun-tech.com"),
  title: {
    default: "HENGYUN · STEPS",
    template: "%s · HENGYUN",
  },
  description:
    "Deployable pavement cooling and low-grade thermal recovery systems for urban demonstration sites.",
  openGraph: {
    title: "HENGYUN · STEPS",
    description:
      "Pavement cooling and low-grade thermal recovery for urban demonstration sites.",
    siteName: "HENGYUN Technology",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HENGYUN · STEPS",
    description:
      "Pavement cooling and low-grade thermal recovery for urban demonstration sites.",
  },
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