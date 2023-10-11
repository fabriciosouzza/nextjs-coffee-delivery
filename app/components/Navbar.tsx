import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";
import ShoppingCartButton from "./ShoppingCartButton";
import AddressHeaderPin from "./AddressHeaderPin";

export default function Navbar() {


  return (
    <header className="container mx-auto px-4 h-10 my-8 flex justify-between">
      <Link href="/">
        <Image src={logo} width={85} height={40} alt="" />
      </Link>
      <div className="flex gap-3">
        <AddressHeaderPin />
        <ShoppingCartButton />
      </div>
    </header>
  );
}
