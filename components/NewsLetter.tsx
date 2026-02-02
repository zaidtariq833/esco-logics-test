import { socialIcons } from "@/constants";
import InputField from "./shared/InputField";
import { nunitoSansExtraBold } from "@/fonts/fonts";

export default function NewsLetter() {
  return (
    <section className="bg-[url('/images/bg-footer.jpg')] bg-golden bg-blend-multiply bg-cover relative z-10 rounded-bl-[20px] rounded-br-[20px]">
      <div className="flex flex-col items-center justify-center py-[20px] gap-5 lg:flex-row xl:px-[47px] xl:justify-between 2xl:gap-20  2xl:py-[43px]">
        <div>
          <h3
            className={`${nunitoSansExtraBold.className} text-[21px] w-full lg:max-w-[180px] text-white leading-[27.9px]`}
          >
            Subscribe To Our News Letter
          </h3>
        </div>
        <div className="lg:mt-0 xl:w-[480px] mt-8">
          <InputField placeholder="Enter Your Email Address" />
        </div>
        <div className="flex gap-3">
          {socialIcons.map((social, index) => {
            const Icon = social;
            return (
              <Icon
                className="bg-white text-yellow-400 w-8 h-8 p-2 rounded-full"
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
