"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { headerInfo } from "@/public/utils/constants";
import { HumBurgerSVG, CrossSVG } from "@/public/assets/svg/headerSVGs";

function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">  
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block w-full">
                <div>
                  <div className="ml-10 flex items-baseline justify-center space-x-4 ">
                    {headerInfo.map((index) => (
                      <a
                        key={index.title}
                        href={index.routeTo}
                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {index.title}
                      </a>
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
                {!isOpen ? <HumBurgerSVG /> : <CrossSVG />}
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
                  <a
                    key={index.title}
                    href={index.routeTo}
                    className=" hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {index.title}
                  </a>
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