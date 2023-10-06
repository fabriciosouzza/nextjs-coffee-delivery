'use client'
import { OrderContext } from "@/context/OrderContext";
import { ProductCardProps } from "@/utils/models";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { useContext, useState } from "react";

export default function AmountHandler({ id, data }: ProductCardProps) {
  const { addNewProduct } = useContext(OrderContext);
  const [inputValue, setInputValue] = useState(0);

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
    <section className="flex items-center gap-2">
      <div className="flex justify-center items-center gap-1 p-2 rounded-md bg-base-button">
        <button type="button" onClick={HandleDecreaseInput}>
          <Minus
            size={14}
            color="#8047F8"
            weight="bold"
            className="hover:fill-purple-dark"
          />
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
          <Plus
            size={14}
            color="#8047F8"
            weight="bold"
            className="hover:fill-purple-dark"
          />
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
  );
}
