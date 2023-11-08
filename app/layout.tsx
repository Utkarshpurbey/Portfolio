import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import ShootingStar from "@/components/shootingStart";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utkarsh's Arena",
  description: "A personal portfolio for me.",
};

const background = {
  backgroundColor: "rgb(61, 115, 224)",
  background: `linear-gradient(180deg, rgba(61, 115, 224, 0.16) 0%, rgba(222, 143, 255, 0.1) 100%)`,
  filter:
    "progid:DXImageTransform.Microsoft.gradient(startColorstr=#3d73e0,endColorstr=#de8fff,GradientType=1)",
};

const shootingStarContainer = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "88%",
  overflow: "hidden",
  zIndex: 0, // Set the z-index to a lower value
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-poppins z-10" style={background}>
          <div className="min-h-screen relative z-10">
          <MyHeader />
           <div className="p-8">{children}</div> 
            <MyFooter />
          </div>
          <div className="fixed top-0 left-0 w-full min-h-screen overflow-hidden z-0">
            <ShootingStar />
          </div>
        </div>
      </body>
    </html>
  );
}
