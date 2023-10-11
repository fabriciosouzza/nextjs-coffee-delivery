"use client";
import { OrderContext } from "@/context/OrderContext";
import { MapPin } from "@phosphor-icons/react";
import { useContext } from "react";

export default function AddressHeaderPin() {
  const { headerPinAddressInfo } = useContext(OrderContext);

  return (
    <div className="flex justify-center items-center p-2 gap-1 bg-purple-light rounded-md cursor-pointer">
      <MapPin size={22} color="#8047F8" weight="fill" />
      {headerPinAddressInfo.cidade == "" ? null : (
        <span className="text-purple-dark text-sm font-Roboto hidden min-[360px]:inline">
          {`${headerPinAddressInfo.cidade}, ${headerPinAddressInfo.estado}`}
        </span>
      )}
    </div>
  );
}
