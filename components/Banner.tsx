import Image from "next/image";
import Buttons from "./shared/Buttons";
import { bannerText } from "@/constants";
import { nunitoBold, nunitoSansExtraBold } from "@/fonts/fonts";

export default function Banner() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 2xl:items-center px-[30px] lg:px-[80px] 2xl:px-[120px] py-[40px] 2xl:pt-[96px] 2xl:pb-[105.88px]">
      <div className="">
        <span
          className={`${nunitoSansExtraBold.className} uppercase text-[14px] 2xl:text-[17px] leading-none tracking-[0.1em] text-golden`}
        >
          Products/ Partition and Cages
        </span>
        <h1
          className={`$${nunitoSansExtraBold.className} text-[35px] md:text-[45px] 2xl:text-[60px] tracking-none leading-[48px] mt-[11px] font-extrabold`}
        >
          Partitions and <span className="text-maroon">Cages</span>
        </h1>
        <article className="text-justify 2xl:text-left 2xl:my-[34.7px] flex flex-col gap-[16.85px]">
          {bannerText.map((text, index) => {
            return (
              <>
                <p
                  key={text}
                  className={`${nunitoBold.className} 2xl:text-[1.5rem] tracking-normal leading-[34px] text-grayish`}
                >
                  {text}
                </p>
              </>
            );
          })}
        </article>
        <div className="flex justify-center mt-4 xl:justify-start 2xl:mt-0">
          <Buttons btnText="View Products" dropShadow={true} />
        </div>
      </div>
      <div className="pt-10 place-items-center xl:pt-15!">
        <Image
          src={"/images/banner-image.png"}
          width={805.95}
          height={658.24}
          alt="banner image"
        />
      </div>
    </section>
  );
}
