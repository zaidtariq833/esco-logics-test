import Applications from "@/components/Applications";
import Banner from "@/components/Banner";
import Characteristics from "@/components/Characteristics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Characteristics />
      <Applications />
      <ProductsSection />
      <Footer />
    </>
  );
}
