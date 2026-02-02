import Image from "next/image";
import Buttons from "./shared/Buttons";
import { ourServices, quickLinks, socialIcons } from "@/constants";
import { FaPhoneVolume, FaVoicemail } from "react-icons/fa";
import { nunitoBold, nunitoSemiBold } from "@/fonts/fonts";

export default function Links() {
  return (
    <div className="grid grid-cols-12 gap-8 2xl:mt-[57px]">
      {/* upper section */}
      <div className="py-[20px] text-center col-span-12 2xl:text-left 2xl:py-0  lg:col-span-5">
        <Image
          src={"/images/logo.png"}
          width={337}
          height={74}
          alt="logo"
          className="mx-auto xl:mx-0"
        />
        <p
          className={`${nunitoBold.className} text-[15px] py-[10px] px-[17px] leading-[27.9px] text-white lg:text-left xl:px-0 2xl:text-[18px] 2xl:max-w-[370px] 2xl:pt-[51px] 2xl:pb-[60px]`}
        >
          Subscribe to our Newsletter for Spotlight Products and Specials.
        </p>
        <div className="flex justify-center mt-4 lg:justify-start 2xl:mt-0">
          <Buttons btnText="Contact Us" dropShadow={false} />
        </div>
        <div className="flex justify-center lg:justify-start items-center gap-8 mt-[25px] 2xl:mt-[25px] 2xl:mb-[50px]">
          <p className="text-white">-</p>
          <p className={`${nunitoBold.className} text-white text-[16px]`}>
            Follow on
          </p>
          <article className="flex gap-4">
            {socialIcons.map((social, index) => {
              const Icon = social;
              return <Icon key={index} className="w-6 h-6 text-white" />;
            })}
          </article>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-7 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mt-[50px] xl:gap-0">
        {/* links */}
        <div className="px-6 sm:px-0">
          <h3
            className={`${nunitoSemiBold.className} mb-2 relative text-white text-[18px]`}
          >
            Quick Link
          </h3>
          <div className="flex gap-[10px] mb-4">
            <div className="w-6 h-[2px] bg-yellow-400 rounded"></div>
            <div className="w-12 h-[2px] bg-white rounded"></div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-6 xl:gap-0 2xl:flex-col">
            {quickLinks.map((link, index) => (
              <div key={index} className="flex gap-4 items-center mb-6">
                <Image
                  src="/icons/double-arrow.svg"
                  width={11}
                  height={11}
                  alt="double arrow"
                />
                <p className={`${nunitoBold.className} text-white text-[16px]`}>
                  {link}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="px-6 sm:px-0 2xl:px-0">
          <h3
            className={`${nunitoSemiBold.className} mb-2 relative text-white text-[18px]`}
          >
            Our Services
          </h3>
          <div className="flex gap-[10px] mb-4">
            <div className="w-6 h-[2px] bg-yellow-400 rounded"></div>
            <div className="w-12 h-[2px] bg-white rounded"></div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-6 xl:gap-0 2xl:flex-row">
            {ourServices.map((link, index) => (
              <div key={index} className="flex gap-4 items-center mb-6">
                <Image
                  src="/icons/double-arrow.svg"
                  width={11}
                  height={11}
                  alt="double arrow"
                />
                <p className={`${nunitoBold.className} text-white text-[16px]`}>
                  {link}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 sm:px-0 2xl:px-0">
          <h3
            className={`${nunitoSemiBold.className} mb-2 relative text-white text-[18px]`}
          >
            Contact Us
          </h3>
          <div className="">
            <div className="flex gap-[10px] mb-4">
              <div className="w-6 h-[2px] bg-yellow-400 rounded"></div>
              <div className="w-12 h-[2px] bg-white rounded"></div>
            </div>
            <div className="flex gap-4 items-center mb-6">
              <FaPhoneVolume className="text-orange-500 w-6 h-6" />
              <p className={`${nunitoBold.className} text-white text-[16px]`}>
                (855)905-0875
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center mb-6">
            <FaVoicemail className="text-orange-500 w-6 h-6" />
            <p className={`${nunitoBold.className} text-white text-[16px]`}>
              Sales@cechms.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
