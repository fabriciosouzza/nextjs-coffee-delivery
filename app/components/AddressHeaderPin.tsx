"use client";
import { OrderContext } from "@/context/OrderContext";
import { MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext } from "react";

export default function AddressHeaderPin() {
  const { headerPinAddressInfo } = useContext(OrderContext);

  return (
    <div className="flex justify-center items-center p-2 gap-1 bg-purple-light rounded-md cursor-pointer">
      <Link href="/checkout/#c12e34p56">
        <MapPin size={22} color="#8047F8" weight="fill" />
      </Link>
      {headerPinAddressInfo.cidade == "" ? null : (
        <span className="text-purple-dark text-sm font-Roboto hidden min-[360px]:inline">
          {`${headerPinAddressInfo.cidade}, ${headerPinAddressInfo.estado}`}
        </span>
      )}
    </div>
  );
}
