import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hengyun-tech.com"),
  title: {
    default: "HENGYUN Technology | Thermal Infrastructure Engineering",
    template: "%s | HENGYUN Technology",
  },
  description:
    "Transforming engineering research into practical thermal infrastructure solutions.",
  openGraph: {
    title: "HENGYUN Technology | Thermal Infrastructure Engineering",
    description: "Transforming engineering research into practical thermal infrastructure solutions.",
    siteName: "HENGYUN Technology",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HENGYUN Technology | Thermal Infrastructure Engineering",
    description: "Transforming engineering research into practical thermal infrastructure solutions.",
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
