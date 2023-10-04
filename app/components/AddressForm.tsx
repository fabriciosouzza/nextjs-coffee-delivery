"use client";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

export default function AddressForm() {
  return (
    <form action="" className="flex flex-col gap-3 w-[42rem]">
      <section className="flex flex-col p-10 justify-start gap-8 rounded-md bg-base-card">
        <div className="flex items-start gap-2 self-stretch">
          <div className="">
            <MapPinLine size={22} color="#C47F17" />
          </div>
          <div className="flex flex-col">
            <span className="font-Roboto text-base text-base-subtitle">
              Endereço de Entrega
            </span>
            <span className="font-Roboto text-sm text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 self-stretch">
          <input
            className="flex w-52 p-3 items-center gap-4 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            type="text"
            placeholder="CEP"
          />
          <input
            className="flex p-3 items-center gap-1 self-stretch bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            type="text"
            placeholder="Rua"
          />
          <div className="flex items-center gap-3 self-stretch">
            <input
              type="text"
              placeholder="Número"
              className="p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              placeholder="Complemento (Opcional)"
              className="basis-full p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
          </div>
          <div className="flex items-center gap-3 self-stretch">
            <input
              type="text"
              placeholder="Bairro"
              className="p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              placeholder="Cidade"
              className="basis-full p-3 bg-base-input outline-0 rounded border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              placeholder="UF"
              className="w-[60px] p-3 bg-base-input outline-0 rounded border border-base-button focus:border-yellow-dark"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col p-10 items-start gap-8 self-stretch rounded-md bg-base-card">
        <div className="flex">
          <div>
            <CurrencyDollar size={22} fill="#8047F8" />
          </div>
          <div className="flex flex-col">
            <span className="font-Roboto text-base text-base-subtitle">
              Pagamento
            </span>
            <span className="font-Roboto text-sm text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <fieldset className="flex justify-center gap-3 items-center self-stretch">
          <label className="flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover focus-within:bg-purple-light focus-within:border focus-within:border-purple focus-within:p-[15px]">
            <input className="w-0 opacity-0" type="radio" name="radio" />
            <CreditCard size={16} fill="#8047F8" />
            <span className="font-Roboto text-xs text-base-text uppercase">
              cartão de crédito
            </span>
          </label>

          <label className="flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover focus-within:bg-purple-light focus-within:border focus-within:border-purple focus-within:p-[15px]">
            <input className="w-0 opacity-0" type="radio" name="radio" />
            <Bank size={16} fill="#8047F8" />
            <span className="font-Roboto text-xs text-base-text uppercase">
              cartão de débito
            </span>
          </label>

          <label className="flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover focus-within:bg-purple-light focus-within:border focus-within:border-purple focus-within:p-[15px]">
            <input className="w-0 opacity-0" type="radio" name="radio" />
            <Money size={16} fill="#8047F8" />
            <span className="font-Roboto text-xs text-base-text uppercase">
              dinheiro
            </span>
          </label>
        </fieldset>
      </section>
    </form>
  );
}
