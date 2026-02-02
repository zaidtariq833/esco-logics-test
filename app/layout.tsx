import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ProviderApp from "@/provider/ProviderApp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const nunitoSansExtraBold = Nunito_Sans({
  weight: "800",
  style: "normal",
  subsets: ["latin"],
});

export const nunitoBold = Nunito({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export const nunitoSemiBold = Nunito({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

export const nunitoMedium = Nunito({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const nunitoRegular = Nunito({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const geistSans = Geist({ subsets: ["latin"] });
export const geistMono = Geist_Mono({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoRegular.className} antialiased`} id="container">
        <ProviderApp>{children}</ProviderApp>
      </body>
    </html>
  );
}
