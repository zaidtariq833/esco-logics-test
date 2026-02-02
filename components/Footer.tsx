"use client";
import { nunitoBold } from "@/app/layout";
import NewsLetter from "./NewsLetter";
import Links from "./Links";

export default function Footer() {
  return (
    <footer className="bg-darkPurple">
      <div className="w-[400px] sm:w-[500px] md:w-[650px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] mx-auto">
        <NewsLetter />
        <Links />
        <hr className="text-gray-600" />
        <div className="flex flex-col 2xl:flex-row items-center justify-between pt-7 pb-7">
          <p className={`${nunitoBold.className} text-dimGray`}>
            All Copyright 2026 by cechms.co
          </p>
          <p className={`${nunitoBold.className} text-dimGray`}>
            Designed And Developed by Esco Logics
          </p>
        </div>
      </div>
    </footer>
  );
}
