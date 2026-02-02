import { nunitoSemiBold } from "@/fonts/fonts";

interface Props {
  btnText: string;
  dropShadow: boolean;
  css?: string;
}

export default function Buttons({ btnText, dropShadow }: Props) {
  return (
    <button
      className={`${nunitoSemiBold.className} text-[15px] px-[20px] bg-golden py-[15px] rounded-[60px] text-white whitespace-nowrap sm:text-[13px] sm:px-[30px] 2xl:text-[20px] ${dropShadow ? "shadow-[0_4px_26px_0_rgba(66,71,76,0.27)]" : ""} `}
    >
      {btnText}
    </button>
  );
}
