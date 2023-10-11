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
import { useContext, useEffect } from "react";
import { OrderContext } from "@/context/OrderContext";
import { newOrderRegister } from "@/services/coffeeServices";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressByCep } from "@/services/cepServices";

const estados = z.enum([
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
]);

const orderFormSchema = z.object({
  username: z.string().min(1, { message: "Preencha o campo 'Nome'" }),
  email: z
    .string()
    .min(1, { message: "Preencha o campo 'Email'" })
    .email("Esse não é um email válido"),
  cep: z.string().min(8, { message: "Preencha o campo 'CEP'" }),
  rua: z.string().min(1, { message: "Preencha o campo 'Rua'" }),
  numero: z.string().min(1, { message: "Preencha o campo 'Número'" }),
  complemento: z.string(),
  bairro: z.string().min(1, { message: "Preencha o campo 'Bairro'" }),
  cidade: z.string().min(1, { message: "Preencha o campo 'Cidade'" }),
  uf: estados,
  payment: z.string(),
});

type orderFormSchemaType = z.infer<typeof orderFormSchema>;
type ufFormSchemaType = z.infer<typeof estados>

export default function AddressForm(total: any) {
  const { productsToFetch, cleanProductList } = useContext(OrderContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<orderFormSchemaType>({
    resolver: zodResolver(orderFormSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<orderFormSchemaType> = (data) => {
    const orderData: order = {
      user: {
        name: data.username as string,
        email: data.email as string,
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
      total: total | 0,
      payment: data.payment as string,
    };

    const idValue = () => {
      newOrderRegister(orderData).then((idToSuccess) => {
        return router.push(`/success/${idToSuccess.id}`);
      });
    };

    idValue();
    reset();
    cleanProductList();
  };

  // const cepInfo = (cep: string) => {
  //   addressByCep(cep).then((response) => {
  //     return response
  //   })
  // }

  const inputToWatch = watch("cep");
  useEffect(() => {
    async function fetchAddress() {
      if (inputToWatch && inputToWatch.length == 8) {
        const dataToReturn = addressByCep(Number(inputToWatch)).then(
          (response) => {
            setValue('rua', `${response.logradouro}`, { shouldValidate: true })
            setValue('complemento', `${response.complemento}`, { shouldValidate: true })
            setValue('bairro', `${response.bairro}`, { shouldValidate: true })
            setValue('cidade', `${response.localidade}`, { shouldValidate: true })
            setValue('uf', `${response.uf as ufFormSchemaType}`, { shouldValidate: true })
            return console.log(response);
          }
        );
      }
    }
    fetchAddress();
  }, [inputToWatch, setValue]);

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
          {...register("username")}
          placeholder="Nome"
        />
        {errors.username && (
          <p className="text-sm text-red-600">{errors.username.message}</p>
        )}
        <input
          type="email"
          className="flex p-3 items-center gap-4 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
          {...register("email")}
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
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
            {...register("cep")}
            placeholder="CEP"
          />
          {errors.cep && (
            <p className="text-sm text-red-600">{errors.cep.message}</p>
          )}
          <input
            className="flex p-3 items-center gap-1 self-stretch bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            type="text"
            {...register("rua")}
            placeholder="Rua"
          />
          {errors.rua && (
            <p className="text-sm text-red-600">{errors.rua.message}</p>
          )}
          <div className="flex items-center gap-3 self-stretch">
            <div className="flex flex-col self-stretch basis-full">
              <input
                type="text"
                {...register("numero")}
                placeholder="Número"
                className="p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
              />
            </div>
            <div className="flex flex-col self-stretch basis-full">
              <input
                type="text"
                {...register("complemento")}
                placeholder="Complemento (Opcional)"
                className="basis-full p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
              />
            </div>
          </div>
          {errors.numero && (
            <p className="text-sm text-red-600">{errors.numero.message}</p>
          )}

          <div className="flex items-center gap-3 self-stretch">
            <input
              type="text"
              {...register("bairro")}
              placeholder="Bairro"
              className="p-3 bg-base-input rounded outline-0 border border-base-button focus:border-yellow-dark"
            />
            <input
              type="text"
              {...register("cidade")}
              placeholder="Cidade"
              className="basis-full p-3 bg-base-input outline-0 rounded border border-base-button focus:border-yellow-dark"
            />
            <select
              {...register("uf")}
              className="w-[70px] p-3 bg-base-input outline-0 rounded border border-base-button appearance-none focus:border-yellow-dark"
            >
              <option disabled selected hidden>
                UF
              </option>
              {estados.options.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          {errors.bairro && (
            <p className="text-sm text-red-600">{errors.bairro.message}</p>
          )}
          {errors.cidade && (
            <p className="text-sm text-red-600">{errors.cidade.message}</p>
          )}
          {errors.uf && (
            <p className="text-sm text-red-600">{"Preencha o campo 'UF'"}</p>
          )}
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
          <label className="radio-label flex flex-[1_0_0%] p-4 items-center gap-3 rounded-md bg-base-button hover:bg-base-hover">
            <input
              className="w-0 opacity-0"
              type="radio"
              value="Cartão de Crédito"
              {...register("payment")}
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
              value="Cartão de Débito"
              {...register("payment")}
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
              value="Dinheiro"
              {...register("payment")}
            />
            <Money size={16} fill="#8047F8" />
            <span className="font-Roboto text-xs text-base-text uppercase">
              dinheiro
            </span>
          </label>
        </fieldset>
        <div>
          {errors.payment && (
            <p className="text-sm text-red-600">
              Selecione uma forma de pagamento
            </p>
          )}
        </div>
      </section>
    </form>
  );
}
