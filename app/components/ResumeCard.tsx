"use client";
import { OrderContext } from "@/context/OrderContext";
import { resumeActionOrderType } from "@/utils/models";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import Image from "next/image";
import { useContext } from "react";

export default function ProductResumeCard(attributes: resumeActionOrderType) {
  const { deleteProduct, increaseProductAmount, decreaseProductAmount } =
    useContext(OrderContext);

  function handleDelete() {
    const orderAttributesToDelete = {
      id: attributes.data.id,
    };
    deleteProduct(orderAttributesToDelete);
  }
  function handleIncrease() {
    const orderAttributesToIncrease = {
      id: attributes.data.id,
      amount: 1,
    };
    increaseProductAmount(orderAttributesToIncrease);
  }
  function handleDecrease() {
    const orderAttributesToDecrease = {
      id: attributes.data.id,
      amount: 1,
    };
    if ((attributes.data.amount as number) > 1) {
      decreaseProductAmount(orderAttributesToDecrease);
    }
  }

  const totalItemsPerCoffee = ((attributes.data.price as number) * (attributes.data.amount as number)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  const coffeeResumeImage = `http://coffee-strapi:1337${attributes.data.image}`;

  return (
    <section className="flex py-2 px-1 justify-between gap-20 items-start self-stretch bg-base-card mb-6">
      <div className="flex items-center gap-5">
        <Image src={coffeeResumeImage} width={64} height={64} alt="" />
        <div className="flex flex-col items-start gap-2">
          <span className="font-Roboto text-base text-base-subtitle">
            {attributes.data.name}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex justify-center h-8 items-center gap-1 p-2 rounded-md bg-base-button">
              <button type="button" onClick={handleDecrease}>
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
                value={attributes.data.amount}
                min={0}
                readOnly
              />
              <button type="button" onClick={handleIncrease}>
                <Plus
                  size={14}
                  color="#8047F8"
                  weight="bold"
                  className="hover:fill-purple-dark"
                />
              </button>
            </div>
            <button
              className="flex py-0 px-2 h-8 justify-center items-center gap-2 rounded-md bg-base-button"
              onClick={handleDelete}
            >
              <Trash fill="#8047F8" size={16} />
              <span className="font-Roboto text-xs uppercase text-base-text">
                remover
              </span>
            </button>
          </div>
        </div>
      </div>
      <span className="font-Roboto text-base font-bold text-base-text">
        R${String(totalItemsPerCoffee).padEnd(4, "0").replace(".", ",")}
      </span>
    </section>
  );
}
