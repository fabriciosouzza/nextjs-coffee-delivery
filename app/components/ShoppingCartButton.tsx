"use client";
import { OrderContext } from "@/context/OrderContext";
import { ShoppingCart } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext } from "react";

export default function ShoppingCartButton() {
  const { productsState } = useContext(OrderContext);
  return (
    <div className="flex">
      <span className="p-2 bg-yellow-light rounded-md">
        <Link href="/checkout">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </Link>
      </span>
      {productsState.length > 0 ? (
        <span className="flex justify-center items-center -ml-2 -mt-2 w-5 h-5 bg-yellow-dark rounded-full text-white text-xs tracking-tighter font-bold">
          {productsState.length}
        </span>
      ) : null}
    </div>
  );
}
