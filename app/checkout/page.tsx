"use client";
import { useContext } from "react";
import AddressForm from "../components/AddressForm";
import ResumeCard from "../components/ResumeCard";
import { OrderContext } from "@/context/OrderContext";

export default function Checkout() {
  const { productsState } = useContext(OrderContext);

  const totalItems = productsState.reduce(function (acc, current) {
    return acc + (current.price as number) * (current.amount as number);
  }, 0);

  const deliveryFee = 2;
  const totalOrder = totalItems + deliveryFee;

  return (
    <section className="container mx-auto flex justify-between px-4 mt-12">
      <div className="flex flex-col mb-10">
        <h4 className="font-Baloo_2 text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h4>
        <AddressForm key={'form-01'} total={totalOrder} />
      </div>

      <div className="mb-14">
        <h4 className="font-Baloo_2 text-lg font-bold text-base-subtitle">
          Cafés selecionados
        </h4>
        <div className="flex flex-col w-[28rem] p-10 items-start gap-6 rounded-md rounded-tr-[2.75rem] rounded-bl-[2.75rem] bg-base-card">
          <div className="overflow-y-auto max-h-[30.5rem]">
            {productsState.map((product) => (
              <>
                <ResumeCard key={product.id} data={product} />
                <hr className="stroke-1 stroke-base-button self-stretch h-0 mb-4" />
              </>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start gap-3 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <span className="font-Roboto text-sm text-right text-base-text">
                Total de itens
              </span>
              <span className="font-Roboto text-base text-right text-base-text">
                R$
                {String(
                  totalItems.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                ).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between items-center self-stretch">
              <span className="font-Roboto text-sm text-right text-base-text">
                Entrega
              </span>
              <span className="font-Roboto text-base text-right text-base-text">
                R$
                {String(
                  deliveryFee.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                ).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between items-center self-stretch">
              <span className="font-Roboto text-xl font-bold text-right text-base-subtitle">
                Total
              </span>
              <span className="font-Roboto text-xl font-bold text-right text-base-subtitle">
                R$
                {String(
                  totalOrder.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                ).replace(".", ",")}
              </span>
            </div>
          </div>
          <button
            form="address-form"
            type="submit"
            className="flex justify-center items-center py-3 px-2 gap-1 self-stretch rounded-md bg-yellow font-Roboto text-sm font-bold text-white uppercase hover:bg-yellow-dark"
          >
            confirmar pedido
          </button>
        </div>
      </div>
    </section>
  );
}
