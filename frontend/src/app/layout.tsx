import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { airBnbIcon } from "../../utility/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBnb Clone",
  description: "an airbnb clone hotel booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
