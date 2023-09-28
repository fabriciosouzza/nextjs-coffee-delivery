"use client";
import IntroSection from "./components/IntroSection";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { listCoffees } from "@/services/coffeeServices";
import { Product } from "@/utils/models";
import OrderContextProvider from "@/context/OrderContext";

export default function Home() {
  const [coffees, setCoffees] = useState<Product[]>([]);

  useEffect(() => {
    async function fecthCoffees() {
      try {
        const response: Product[] | undefined = await listCoffees();
        if (response) {
          setCoffees(response);
        }
      } catch (error) {}
    }
    fecthCoffees();
  }, []);

  return (
    <main>
      <IntroSection />
      <h3 className="container mx-auto px-4 font-Baloo_2 text-[2rem] leading-10 font-extrabold text-base-subtitle mt-8 mb-14">
        Nossos cafés
      </h3>
      <div className="container mx-auto px-4 mb-10">
        <OrderContextProvider>
          <div className="grid grid-cols-1 gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coffees.map((product) => (
              <ProductCard key={product.id} id={product.id} data={product.attributes} />
            ))}
          </div>
        </OrderContextProvider>
      </div>
    </main>
  );
}
