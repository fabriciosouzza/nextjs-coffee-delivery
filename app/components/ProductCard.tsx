import Image from "next/image";
import ProductCardAdd from "./ProductCardAdd";
import { Product } from "../page";
import React from "react";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center justify-around w-64 h-[19.375rem] bg-base-card rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <span className="-mt-7">
        <Image src={data.image} width={120} height={120} alt="" />
      </span>
      <div className="flex gap-1">
        {data.tag.map((item, index) => {
          return (
              <span
                key={index}
                className="flex justify-center px-2 py-1 rounded-full bg-yellow-light text-yellow-dark font-Roboto text-[0.625rem] leading-3 uppercase font-bold"
              >
                {item}
              </span>
          );
        })}
      </div>
      <p className="font-Baloo_2 text-xl capitalize font-bold">{data.name}</p>
      <p className="w-52 text-center font-Roboto text-sm font-normal text-base-label">
        {data.description}
      </p>

      <div className="flex w-52 justify-between items-center">
        <p className="font-Roboto text-sm text-right text-base-text">
          R${" "}
          <span className="font-Baloo_2 text-2xl leading-5 font-extrabold">
            9,90
          </span>
        </p>
        <ProductCardAdd />
      </div>
    </div>
  );
}
