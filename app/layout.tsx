import { nunitoRegular } from "@/fonts/fonts";
import "./globals.css";
import ProviderApp from "@/provider/ProviderApp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoRegular.className} antialiased`} id="container">
        <ProviderApp>{children}</ProviderApp>
      </body>
    </html>
  );
}
