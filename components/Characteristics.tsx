import { charactersitics } from "@/constants";
import { nunitoRegular, nunitoSansExtraBold } from "@/fonts/fonts";
import { TypeCharacteristics } from "@/types";
import Image from "next/image";

export default function Characteristics() {
  return (
    <section className="lg:px-[80px] 2xl:px-[121px] 2xl:pt-[101px] xl:pb-[106px] bg-cream">
      <h2
        className={`${nunitoSansExtraBold.className} text-[35px] text-center py-[50px] 2xl:py-0 2xl:leading-[120%] 2xl:text-[53px]`}
      >
        Key Characteristics
      </h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-0 2xl:gap-8">
        {charactersitics.map((chars: TypeCharacteristics, index: number) => {
          return (
            <article
              key={chars.title}
              className="bg-white mx-[15px] 2xl:mx-0 px-[30px] py-[30px] 2xl:mt-[49px] rounded-[20px] flex flex-col justify-between h-full"
            >
              <div>
                <Image src={chars.icon} width={44} height={60} alt="icon" />
                <h5
                  className={`${nunitoSansExtraBold.className} 2xl:text-[33px] mt-[15px] 2xl:mt-[30px] mb-[12px]`}
                >
                  {chars.title}
                </h5>
                <p
                  className={`${nunitoRegular.className} 2xl:text-[20px] text-lightestGray leading-[150%] tracking-normal`}
                >
                  {chars.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
