import coffeeImage from "public/home-coffee-image.png";
import Image from "next/image";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { Package } from "@phosphor-icons/react/dist/ssr/Package";
import { Timer } from "@phosphor-icons/react/dist/ssr/Timer";
import { Coffee } from "@phosphor-icons/react/dist/ssr/Coffee";

export default function IntroSection() {
  return (
    <section className="bg-custom-background bg-no-repeat bg-cover">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row-reverse justify-between gap-14 h-fit pt-24 pb-24">
        <div>
          <Image src={coffeeImage} width={476} height={360} alt="" />
        </div>
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-extrabold font-Baloo_2 text-base-title self-stretch break-normal max-w-xl leading-tight">
              Encontre o café perfeito para qualquer hora do dia
            </p>
            <p className="text-xl font-Roboto text-base-subtitle self-stretch">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <span className="flex items-center gap-3">
              <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-yellow-dark">
                <ShoppingCartSimple size={16} color="#f2f2f2" weight="fill" />
              </span>
              Compra simples e segura
            </span>
            <span className="flex items-center gap-3">
              <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-base-text">
                <Package size={16} color="#f2f2f2" weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </span>
            <span className="flex items-center gap-3">
              <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-yellow">
                <Timer size={16} color="#f2f2f2" weight="fill" />
              </span>
              Entrega rápida e rastreada
            </span>
            <span className="flex items-center gap-3">
              <span className="flex justify-center items-center gap-2 p-2 rounded-full bg-purple">
                <Coffee size={16} color="#f2f2f2" weight="fill" />
              </span>
              O café chega fresquinho até você
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
