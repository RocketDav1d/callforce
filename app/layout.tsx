import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Callforce";
let description = "Turn Calls into Actionable Insights";
let ogimage = "https://callforce.vercel.app/";
let sitename = "callforce.com";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/black-circle.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://callforce.vercel.app/",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
