"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";
import { applications } from "@/constants";
import { nunitoSansExtraBold } from "@/app/layout";

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="hidden lg:flex absolute lg:right-[-50px] top-1/2 -translate-y-1/2
                 w-10 h-10 bg-[#ffa920] text-white rounded-full
                 items-center justify-center shadow"
    >
      <FaArrowRight />
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="hidden lg:flex absolute lg:left-[-50px] top-1/2 -translate-y-1/2
                 w-10 h-10 bg-[#ffa920] text-white rounded-full
                 items-center justify-center shadow"
    >
      <FaArrowLeft />
    </button>
  );
}

export default function Applications() {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section className="py-16 lg:px-[80px] 2xl:pt-[76px] 2xl:pb-[137.57px]">
      <h2
        className={`${nunitoSansExtraBold.className}
        text-[35px] text-center 2xl:py-0 2xl:leading-[120%] 2xl:text-[53px]`}
      >
        Example Applications
      </h2>

      <div className="w-full mt-12 px-4 2xl:px-[121px]">
        <Slider {...settings}>
          {applications.map((app, index) => (
            <div key={index} className="">
              <div className="relative w-full aspect-[490/470]">
                <Image
                  src={app}
                  alt="applications"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
