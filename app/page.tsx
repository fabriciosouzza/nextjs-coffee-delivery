import IntroSection from "./components/IntroSection";
import ProductCard from "./components/ProductCard";
import { productList } from "../api-data/products";

export interface Product {
  id: number;
  name: string;
  description: string;
  tag: string[];
  price: string;
  image: string;
}

export default function Home() {
  const products: Product[] = productList;
  return (
    <main>
      <IntroSection />
      <h3 className="container mx-auto px-4 font-Baloo_2 text-[2rem] leading-10 font-extrabold text-base-subtitle mt-8 mb-14">
        Nossos cafés
      </h3>
      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((card) => <ProductCard key={card.id} data={card} /> )}
        </div>
      </div>
    </main>
  );
}
