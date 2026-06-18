import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dan Moretti · Game Design Portfolio",
  description:
    "Portfolio of Daniele (Dan) Moretti — graduate game designer (RMIT, Distinction) specialising in game design, narrative development, and interactive experiences.",
  openGraph: {
    title: "Dan Moretti · Game Design Portfolio",
    description:
      "Graduate game designer specialising in game design, narrative development, and interactive experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a222c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
