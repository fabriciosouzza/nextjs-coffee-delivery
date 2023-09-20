import Link from "next/link";
import IntroSection from "./components/IntroSection";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
    <main>
      <IntroSection />
      <p className="container mx-auto font-Baloo_2 text-[2rem] leading-10 font-extrabold text-base-subtitle mt-8 mb-14">Nossos cafés</p>
      <div className="container mx-auto grid grid-cols-4 gap-y-10 mb-40">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  )
}
