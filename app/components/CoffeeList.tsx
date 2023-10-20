"use client";
import { Product, ProductPropsDataType } from "@/utils/models";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "@/context/OrderContext";
import ProductCard from "./ProductCard";

export default function CoffeeList(data: ProductPropsDataType) {
  const { tagsToFilter } = useContext(OrderContext);
  const [filteredCoffees, setFilteredCoffees] = useState<Product[]>([]);
  const coffees = data.coffees;

  useEffect(() => {
    if (tagsToFilter[0] != undefined && tagsToFilter[0].length > 0) {
        console.log(tagsToFilter[0]);
        setFilteredCoffees(coffees.filter(element => {
           return element.attributes.tags.data.some(el => JSON.stringify(tagsToFilter[0]).includes(String(el.id)))
        }));
    } else {
        setFilteredCoffees(coffees)
    }
    
  }, [tagsToFilter, coffees]);


  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCoffees &&
          filteredCoffees.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              data={product.attributes}
            />
          ))}
      </div>
    </div>
  );
}
