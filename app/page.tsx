import IntroSection from "./components/IntroSection";
import ProductCard from "./components/ProductCard";
import { listCoffees } from "@/services/coffeeServices";

export default async function Home() {
  const coffees = await listCoffees()
  return (
    <main>
      <IntroSection />
      <h3 className="container mx-auto px-4 font-Baloo_2 text-[2rem] leading-10 font-extrabold text-base-subtitle mt-8 mb-14">
        Nossos cafés
      </h3>
      <div className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coffees && coffees.map((product) => (
              <ProductCard key={product.id} id={product.id} data={product.attributes} />
            ))}
          </div>
      </div>
    </main>
  );
}
