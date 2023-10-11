import Image from "next/image";
import deliveryImage from "@/public/delivery-image.png";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { Timer } from "@phosphor-icons/react/dist/ssr/Timer";
import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr/CurrencyDollar";
import { getHistory, getOrderById } from "@/services/coffeeServices";
import HistoryTable from "@/app/components/HistoryTable";

export default async function Success({ params }: { params: { id: number } }) {
  const orderData = await getOrderById(params.id);

  const orderId = orderData ? orderData.attributes.user.email : "noreply@noreply"
  const historyInfo = await getHistory(orderId)

  return (
    <main className="container mx-auto flex flex-col px-4 gap-10 mt-20">
      <section>
        <h3 className="font-Baloo_2 text-4xl font-extrabold text-yellow-dark">
          Uhu! Pedido Confirmado
        </h3>
        <span className="font-Roboto text-xl text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </section>
      <section className="flex justify-between">
        <div className="flex flex-col items-start gap-8 w-[32.8rem] p-10 border border-purple rounded-md rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
          <div className="flex items-center gap-3">
            <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-purple">
              <MapPin size={22} color="#f2f2f2" weight="fill" />
            </span>
            <div className="flex flex-col">
              <span className="font-Roboto text-base text-base-text">
                Entrega em{" "}
                <span className="font-bold">
                  Rua {orderData && orderData.attributes.address.rua},{" "}
                  {orderData && orderData.attributes.address.numero}
                </span>
              </span>
              <span className="font-Roboto text-base text-base-text">
                {orderData && orderData.attributes.address.bairro} -{" "}
                {orderData && orderData.attributes.address.cidade},{" "}
                {orderData && orderData.attributes.address.uf}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-yellow">
              <Timer size={22} color="#f2f2f2" weight="fill" />
            </span>
            <div className="flex flex-col">
              <span className="font-Roboto text-base text-base-text">
                Previsão de entrega
              </span>
              <span className="font-Roboto font-bold text-base text-base-text">
                20min - 30min
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-yellow-dark">
              <CurrencyDollar size={22} fill="#f2f2f2" />
            </span>
            <div className="flex flex-col">
              <span className="font-Roboto text-base text-base-text">
                Pagamento na entrega
              </span>
              <span className="font-Roboto font-bold text-base text-base-text">
                {orderData && orderData.attributes.payment}
              </span>
            </div>
          </div>
        </div>
        <Image src={deliveryImage} width={492} height={293} alt="" />
      </section>
      <button className="flex justify-center items-center self-center mt-12 w-80 py-3 px-2 gap-1 rounded-md bg-yellow font-Roboto text-sm font-bold text-white uppercase hover:bg-yellow-dark">
        meus pedidos
      </button>
      <div>
        <HistoryTable />
        {`${JSON.stringify(historyInfo)}`}
      </div>
    </main>
  );
}
