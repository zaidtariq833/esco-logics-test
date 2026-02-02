"use client";

import { nav } from "@/constants";
import Image from "next/image";
import { TypeNav } from "@/types";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { nunitoMedium } from "@/app/layout";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);

  return (
    <header className="bg-maroon text-white px-5 2xl:px-28 py-4 2xl:py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          width={404}
          height={88}
          alt="logo"
          className="w-[160px] xl:w-[300px] 2xl:w-[400px] h-auto"
        />

        <ul className="hidden xl:flex items-center gap-10 relative">
          {nav.map((item: TypeNav, index: number) => (
            <li
              key={index}
              className={`${nunitoMedium.className} relative flex items-center gap-1 text-[15px] 2xl:text-[18px] cursor-pointer`}
            >
              {item.navName === "800-922-5120" ? (
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  <a href="#">{item.navName}</a>
                </div>
              ) : (
                <a href="#">{item.navName}</a>
              )}

              {item.navName === "About Us" && (
                <>
                  <button onClick={() => setAboutMenu(!aboutMenu)}>
                    <MdArrowDropDown className="w-6 h-6" />
                  </button>

                  {aboutMenu && item.dropdown && (
                    <div
                      className="
                        absolute
                        top-10
                        left-0
                        w-52
                        bg-white
                        text-black
                        rounded-xl
                        shadow-xl
                        py-3
                        flex
                        flex-col
                        z-50
                      "
                    >
                      {item.dropdown.map((drop, i) => (
                        <a
                          key={i}
                          href="#"
                          className="
                            px-5
                            py-2
                            text-[14px]
                            hover:bg-gray-100
                            transition
                          "
                        >
                          {drop}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        <Image
          src="/images/search.png"
          width={60}
          height={60}
          alt="search"
          className="hidden xl:block"
        />

        <RxHamburgerMenu
          className="xl:hidden w-7 h-7 cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>

      {mobileMenu && (
        <div className="xl:hidden mt-6">
          <ul className="flex flex-col gap-4">
            {nav.map((item: TypeNav, index: number) => (
              <li key={index} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">{item.navName}</span>

                  {item.navName === "About Us" && (
                    <MdArrowDropDown
                      className="cursor-pointer"
                      onClick={() => setAboutMenu(!aboutMenu)}
                    />
                  )}
                </div>

                {/* Mobile dropdown */}
                {aboutMenu && item.dropdown && (
                  <div className="pl-4 flex flex-col gap-2 text-[13px] text-gray-300">
                    {item.dropdown.map((drop, i) => (
                      <a key={i} href="#">
                        {drop}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
