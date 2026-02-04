import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hengyun-tech.com"),
  title: {
    default: "HENGYUN · STEPS",
    template: "%s · HENGYUN",
  },
  description:
    "A deployable system for urban pavement cooling and thermal energy recovery.",

  openGraph: {
    title: "HENGYUN · STEPS",
    description:
      "A deployable system for urban pavement cooling and thermal energy recovery.",
    siteName: "HENGYUN Technology",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "HENGYUN · STEPS",
    description:
      "A deployable system for urban pavement cooling and thermal energy recovery.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}