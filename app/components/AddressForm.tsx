"use client";
import { order, registrationType } from "@/utils/models";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  UserList,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { OrderContext } from "@/context/OrderContext";
import { newOrderRegister } from "@/services/coffeeServices";

export default function AddressForm() {
  const { productsToFetch } = useContext(OrderContext);
  const { register, handleSubmit, reset } = useForm<registrationType>();
  const onSubmit: SubmitHandler<registrationType> = (data) => {
    const orderData: order = {
      user: {
        name: data.username as string,
        email: data.email as string
      },
      products: [...productsToFetch],
      address: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
      },
      payment: data.payment as string,
    };

    newOrderRegister(orderData);
    reset()
  };

  return (
    <form
      id="address-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-[42rem]"
    >
      <section className="flex flex-col p-10 justify-start gap-8 rounded-md bg-base-card">
        <div className="flex items-start gap-2 self-stretch">
          <div>
            <UserList size={22} color="#C47F17" />
          </div>
          <div className="flex flex-col">
            <span className="font-Roboto text-base text-base-subtitle">
              Informações Pessoais
            </span>
            <span className="font-Roboto text-sm text-base-text">
              Informe o seu nome e email que podemos entrar em contato
            </span>
          </div>
        </div>
        <input
          type="text"
          className="flex p-3 items-center gap-4 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
          {...register("username", { required: true, minLength: 2 })}
          placeholder="Nome"
        />
        <input
          type="email"
          className="flex p-3 items-center gap-4 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
          {...register("email", { required: true, minLength: 2 })}
          placeholder="Email"
        />
      </section>

      <section className="flex flex-col p-10 justify-start gap-8 rounded-md bg-base-card">
        <div className="flex items-start gap-2 self-stretch">
          <div>
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
            {...register("cep", { required: true, minLength: 2 })}
            placeholder="CEP"
          />
          <input
            className="flex p-3 items-center gap-1 self-stretch bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            type="text"
            {...register("rua", { required: true, minLength: 2 })}
            placeholder="Rua"
          />
          <div className="flex items-center gap-3 self-stretch">
            <input
              type="text"
              {...register("numero", { required: true, minLength: 2 })}
              placeholder="Número"
              className="p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              {...register("complemento", { required: false })}
              placeholder="Complemento (Opcional)"
              className="basis-full p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
          </div>
          <div className="flex items-center gap-3 self-stretch">
            <input
              type="text"
              {...register("bairro", { required: true, minLength: 2 })}
              placeholder="Bairro"
              className="p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              {...register("cidade", { required: true, minLength: 2 })}
              placeholder="Cidade"
              className="basis-full p-3 bg-base-input outline-0 rounded border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              {...register("uf", { required: true, minLength: 2 })}
              placeholder="UF"
              className="w-[60px] p-3 bg-base-input outline-0 rounded border border-base-button focus:border-yellow-dark"
            />
          </div>
        </div>
      </section>

      <section
        id="payment-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-10 items-start gap-8 self-stretch rounded-md bg-base-card"
      >
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
          <label className="radio-label flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover">
            <input
              className="w-0 opacity-0"
              type="radio"
              value="cartão de crédito"
              {...register("payment", { required: true })}
            />
            <CreditCard size={16} fill="#8047F8" />
            <span className="font-Roboto text-xs text-base-text uppercase">
              cartão de crédito
            </span>
          </label>

          <label className="radio-label flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover">
            <input
              className="w-0 opacity-0"
              type="radio"
              value="cartão de débito"
              {...register("payment", { required: true })}
            />
            <Bank size={16} fill="#8047F8" />
            <span className="font-Roboto text-xs text-base-text uppercase">
              cartão de débito
            </span>
          </label>

          <label className="radio-label flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover">
            <input
              className="w-0 opacity-0"
              type="radio"
              value="dinheiro"
              {...register("payment", { required: true })}
            />
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
