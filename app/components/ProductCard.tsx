"use client";
import { useContext, useState } from "react";
import { productAttributes } from "@/utils/models";
import { OrderContext } from "@/context/OrderContext";
import Image from "next/image";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

interface ProductCardProps {
  id: number;
  data: productAttributes;
}

export default function ProductCard({ id, data }: ProductCardProps) {
  
  const { productsState, addNewProduct, deleteProduct, increaseProductAmount, decreaseProductAmount } = useContext(OrderContext);
  const [inputValue, setInputValue] = useState(0);

  const coffeeImage = `http://coffee-strapi:1337${data.image.data.attributes.url}`;


  const orderAttributes = {
      id: id,
      name: data.name,
      price: data.price,
      image: data.image.data.attributes.url,
      amount: inputValue,
    };

  function HandleAddToCart() {
    if (inputValue > 0) {
      addNewProduct(orderAttributes);
    }
    setInputValue(0);
  }

  function HandleIncreaseInput() {
    setInputValue(inputValue + 1);
  }

  function HandleDecreaseInput() {
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-around w-64 h-[19.375rem] bg-base-card rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <span className="-mt-7">
        <Image src={coffeeImage} width={120} height={120} alt="" />
      </span>
      <div className="flex gap-1">
        {data.tags.data.map((item) => {
          return (
            <span
              key={item.id}
              className="flex justify-center px-2 py-1 rounded-full bg-yellow-light text-yellow-dark font-Roboto text-[0.625rem] leading-3 uppercase font-bold"
            >
              {item.attributes.type}
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
            {String(data.price).padEnd(4, "0").replace(".", ",")}
          </span>
        </p>
        <section className="flex items-center gap-2">
          <div className="flex justify-center items-center gap-1 p-2 rounded-md bg-base-button">
            <button type="button" onClick={HandleDecreaseInput}>
              <Minus size={14} color="#8047F8" weight="bold" className="hover:fill-purple-dark" />
            </button>
            <input
              className="font-Roboto text-base text-base-title text-center bg-inherit w-5 focus:outline-none"
              type="number"
              name=""
              id=""
              value={inputValue}
              min={0}
              readOnly
            />
            <button type="button" onClick={HandleIncreaseInput}>
              <Plus size={14} color="#8047F8" weight="bold" className="hover:fill-purple-dark"/>
            </button>
          </div>
          <button
            className="flex p-2 justify-center items-center gap-2 rounded-md bg-purple-dark hover:bg-purple"
            type="button"
            onClick={HandleAddToCart}
          >
            <ShoppingCartSimple size={16} weight="fill" color="#F3F2F2" />
          </button>
        </section>
      </div>
    </div>
  );
}
