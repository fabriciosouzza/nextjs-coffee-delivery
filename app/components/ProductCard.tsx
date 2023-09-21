import Image from "next/image";
import ProductCardForm from "./ProductCardForm";
import tradicionalAPAGAR from "../../public/coffeeAssets/tradicional.png";

export default function ProductCard() {
  return (
    <div className="flex flex-col items-center justify-around w-64 h-[19.375rem] bg-base-card rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <span className="-mt-7">
        <Image src={tradicionalAPAGAR} width={120} height={120} alt="" />
      </span>
      <p className="flex justify-center px-2 py-1 rounded-full bg-yellow-light text-yellow-dark font-Roboto text-[0.625rem] leading-3 uppercase font-bold">
        tradicional
      </p>
      <p className="font-Baloo_2 text-xl capitalize font-bold">
        expresso tradicional
      </p>
      <p className="w-52 text-center font-Roboto text-sm font-normal text-base-label">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="flex w-52 justify-between items-center">
        <p className="font-Roboto text-sm text-right text-base-text">
          R${" "}
          <span className="font-Baloo_2 text-2xl leading-5 font-extrabold">
            9,90
          </span>
        </p>
        <ProductCardForm />
      </div>
    </div>
  );
}
