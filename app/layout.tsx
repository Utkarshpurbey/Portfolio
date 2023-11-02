import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utkarsh's Arena",
  description: "A personal portfolio for me .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-poppins">
          <MyHeader />
          <div>{children}</div>
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
