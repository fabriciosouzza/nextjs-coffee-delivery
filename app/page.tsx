import IntroSection from "./components/IntroSection";
import CoffeeList from "./components/CoffeeList";
import SearchBar from "./components/SearchBar";
import { listCoffees, tagList } from "@/services/coffeeServices";

export default async function Home() {
  const coffees = await listCoffees();
  const tags = await tagList();
  return (
    <main>
      <IntroSection />
      <div className="container mx-auto flex justify-between mt-8 mb-14">
        <h3 className="px-4 font-Baloo_2 text-[2rem] leading-10 font-extrabold text-base-subtitle">
          Nossos cafés
        </h3>
        <SearchBar tags={tags} />
      </div>
      <CoffeeList coffees={coffees} />
    </main>
  );
}
