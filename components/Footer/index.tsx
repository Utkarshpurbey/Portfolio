import { socialLinks } from "@/public/utils/constants";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="py-3 text-center">
      <div className=" text-[12px] md:text-sm md:flex justify-between md:px-9 text-white bottom-0 w-full">
        <div className="mt-2">Designed and Developed by Utkarsh Purbey</div>
        <div className="mt-2 text-white">
          &copy; {new Date().getFullYear()} Utkarsh Purbey
        </div>
        <div className="mt-2 flex items-center justify-center">
          <a href={socialLinks.GITHUB} className="mr-4">
            <FaGithub size={20} />
          </a>
          <a href={socialLinks.LINKEDIN} className=" mr-4">
            <FaLinkedin size={20} />
          </a>
          <a href={socialLinks.TWITTER} className="mr-4">
            <FaTwitter size={20} />
          </a>
          <a href={socialLinks.INSTAGRAM} className="mr-4">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
