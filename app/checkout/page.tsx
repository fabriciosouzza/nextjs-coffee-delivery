"use client";
import { useContext } from "react";
import AddressForm from "../components/AddressForm";
import ProductResumeCard from "../components/ProductResumeCard";
import { OrderContext } from "@/context/OrderContext";

export default function Checkout() {
  const { productsState } = useContext(OrderContext);

  return (
    <section className="container mx-auto flex justify-evenly mt-12">
      <div>
        <h4 className="font-Baloo_2 text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h4>
        <AddressForm />
      </div>

      <div>
        <h4 className="font-Baloo_2 text-lg font-bold text-base-subtitle">
          Cafés selecionados
        </h4>
        <div className="flex flex-col w-[28rem] p-10 items-start gap-6 rounded-md rounded-tr-[2.75rem] rounded-bl-[2.75rem] bg-base-card">
          <div>
            {productsState.map((product) => (
              <>
                <ProductResumeCard key={product.id} data={product} />
                <hr className="stroke-1 stroke-base-button self-stretch h-0 mb-4"/>
              </>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start gap-3 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <span className="font-Roboto text-sm text-right text-base-text">Total de itens</span>
              <span className="font-Roboto text-base text-right text-base-text">R$29,70</span>
            </div>
            <div className="flex justify-between items-center self-stretch">
              <span className="font-Roboto text-sm text-right text-base-text">Entrega</span>
              <span className="font-Roboto text-base text-right text-base-text">R$3,50</span>
            </div>
            <div className="flex justify-between items-center self-stretch">
              <span className="font-Roboto text-xl font-bold text-right text-base-subtitle">Total</span>
              <span className="font-Roboto text-xl font-bold text-right text-base-subtitle">R$33,20</span>
            </div>
          </div>
          <button className="flex justify-center items-center py-3 px-2 gap-1 self-stretch rounded-md bg-yellow font-Roboto text-sm font-bold text-white uppercase">confirmar pedido</button>
        </div>
      </div>
    </section>
  );
}
