import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    url: "https://www.hengyun-tech.com",
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