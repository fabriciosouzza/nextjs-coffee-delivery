'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export default function Navbar() {
    return (
        <header className='container mx-auto h-10 my-8 flex justify-between'>
          <Link href="/"><Image src={logo} width={85} height={40} alt='' /></Link>
          <div className='flex gap-3'>
            <div className='flex justify-center items-center p-2 gap-1 bg-purple-light rounded-md cursor-pointer'>
              <MapPin size={22} color="#8047F8" weight="fill" />
              <span className='text-purple-dark text-sm font-Roboto'>Porto Alegre, RS</span>
            </div>
            <div className='flex'>
              <span className='p-2 bg-yellow-light rounded-md'><Link href="/checkout"><ShoppingCart size={22} color="#C47F17" weight="fill"/></Link></span> 
              <span className='flex justify-center items-center -ml-2 -mt-2 w-5 h-5 bg-yellow-dark rounded-full text-white text-xs tracking-tighter font-bold'>3</span>
            </div>
          </div>
        </header>
    );
}