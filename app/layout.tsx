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
const divStyle = {
  background: 'rgb(0, 0, 5)',
  backgroundImage: 'linear-gradient(180deg, rgba(61, 115, 224, 0.16) 0%, rgba(222, 143, 255, 0.1) 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#3D73E0", endColorstr="#DE8FFF", GradientType=1)',
  blur:'347px'
};
const background = {
  backgroundColor: "rgb(61, 115, 224)",
  background: `linear-gradient(180deg, rgba(61, 115, 224, 0.16) 0%, rgba(222, 143, 255, 0.1) 100%)`,
  filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#3d73e0,endColorstr=#de8fff,GradientType=1)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-poppins" style = {background}>
          <MyHeader />
          <div className="min-h-screen">{children}</div>
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
