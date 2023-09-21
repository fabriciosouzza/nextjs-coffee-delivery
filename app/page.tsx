import IntroSection from "./components/IntroSection";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <h3 className="container mx-auto px-4 font-Baloo_2 text-[2rem] leading-10 font-extrabold text-base-subtitle mt-8 mb-14">
        Nossos cafés
      </h3>
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-10 sm:justify-between w-full md:gap-12 lg:gap-10 2xl:gap-12">
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
          <div className=""><ProductCard /></div>
        </div>
      </div>
    </main>
  );
}
