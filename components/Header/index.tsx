"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { headerInfo } from "@/public/utils/constants";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../public/assets/image/logo.png";
import Image from "next/image";
import {RxHamburgerMenu,RxCross1} from "react-icons/rx";

function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const anchorClasses =
    "transition hover:-translate-y-1 hover:scale-105 cursor-pointer";
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0 mt-11 ">
                <Image src={logo} alt="logo" height={120} width={120} />
              </div>
              <div className="hidden md:block w-full">
                <div>
                  <div className="ml-10 flex items-baseline justify-center space-x-4  ">
                    {headerInfo.map((index) => (
                      <div
                        key={index.title}
                        onClick={() => router.push(index.routeTo)}
                        className=" text-white md:px-10 py-2 rounded-md text-base font-medium"
                      >
                        <div
                          className={
                            pathname === index.routeTo
                              ? anchorClasses + " text-[#FECD56]"
                              : anchorClasses
                          }
                        >
                          {index.title}{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <RxHamburgerMenu /> : <RxCross1 />}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                {headerInfo.map((index) => (
                  <div
                    key={index.title}
                    onClick={() => router.push(index.routeTo)}
                    className=" hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {index.title}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default MyHeader;
