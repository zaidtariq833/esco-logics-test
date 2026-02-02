"use client";
import Image from "next/image";
import Buttons from "./shared/Buttons";
import { TypeProductCatalogue } from "@/types";
import { nunitoBold, nunitoRegular, nunitoSansExtraBold } from "@/fonts/fonts";

export default function ProductCard({
  image,
  title,
  price,
  category,
}: TypeProductCatalogue) {
  return (
    <article className="pt-[53px] flex flex-col h-full 2xl:px-0">
      <div className="bg-slightGray rounded-[20px] px-4 flex-shrink-0">
        <div className="flex justify-between">
          <div className={category === "Featured" ? "visible" : "invisible"}>
            <Image
              src={"/images/featured.png"}
              width={90.67}
              height={24}
              alt="featured"
              className="pt-[15px] relative left-[-19px] placeholder:text-[16px]"
            />
          </div>
          <div className="">
            <Image
              src={"/icons/heart.svg"}
              width={37.6}
              height={34}
              alt="featured icons"
              className="pt-[15px] relative right-[5px]"
            />
          </div>
        </div>
        <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h4
          className={`${nunitoBold.className} text-center text-[15px] my-4 sm:pt-[20px] sm:pb-[15px] lg:text-[25px] 2xl:text-left 2xl:pt-[30px] 2xl:pb-[45px]`}
        >
          {title}
        </h4>
        <hr className="text-[#A6A6A6]" />
        <h4
          className={`${nunitoSansExtraBold.className} text-[15px] text-center text-maroon pt-[16px] pb-[28px] lg:text-[25px] 2xl:text-left `}
        >
          {price}
        </h4>
        <div className="flex w-full justify-center items-center gap-2">
          <div>
            <Buttons btnText="Add To Cart" dropShadow={false} />
          </div>
          <div>
            <button
              className={`${nunitoRegular.className} text-[15px] px-[20px] sm:px-[30px] 2xl:text-[20px] whitespace-nowrap bg-slightGray py-[15px] rounded-[60px] text-black`}
            >
              Select options
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
