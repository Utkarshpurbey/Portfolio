"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import bitemoji from "../public/assets/image/bitemoji.png";
const MainPage = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="flex justify-between w-[90%]">
        <div className="md:text-[64px] font-semibold">
          {" "}
          <div>
            <div className="animate-wave">👋🏻</div>
            Hi&#44; I&apos;m Utkarsh !
          </div>
          <TypeAnimation
            sequence={[
              "Sofware Engineer 💻",
              1500,
              "Programmer < / >",
              1500,
              "Gamer 🎮",
              1500,
            ]}
            speed={40}
            repeat={Infinity}
            preRenderFirstString={true}
            className="text-[#FECD56]"
          />
        </div>
        <div>
          <Image src={bitemoji} alt="Bitemoji" />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
