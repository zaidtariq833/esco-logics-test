import { nunitoRegular } from "@/fonts/fonts";
import "./globals.css";
import ProviderApp from "@/provider/ProviderApp";

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
