'use client'

import coffeeImage from 'public/home-coffee-image.png'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Image from "next/image";

export default function IntroSection() {
    return (
        <section className="bg-custom-background bg-no-repeat bg-cover">
            <div className='container mx-auto flex justify-between gap-14 h-256-custom pt-24'>
                <div className="flex flex-col gap-y-16">
                    <div>
                        <p className="text-5xl font-extrabold font-Baloo_2 text-base-title self-stretch break-normal max-w-xl leading-tight">Encontre o café perfeito para qualquer hora do dia</p>
                        <p className="text-xl font-Roboto text-base-subtitle self-stretch">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <span className="flex items-center gap-3">
                            <span className='flex justify-center items-center gap-2 p-2 rounded-full bg-yellow-dark'><ShoppingCart size={16} color="#f2f2f2" weight="fill" /></span>
                            Compra simples e segura
                        </span>
                        <span className="flex items-center gap-3">
                            <span className='flex justify-center items-center gap-2 p-2 rounded-full bg-base-text'><Package size={16} color="#f2f2f2" weight="fill" /></span>
                            Embalagem mantém o café intacto
                        </span>
                        <span className="flex items-center gap-3">
                            <span className='flex justify-center items-center gap-2 p-2 rounded-full bg-yellow'><Timer size={16} color="#f2f2f2" weight="fill" /></span>
                            Entrega rápida e rastreada
                        </span>
                        <span className="flex items-center gap-3">
                            <span className='flex justify-center items-center gap-2 p-2 rounded-full bg-purple'><Coffee size={16} color="#f2f2f2" weight="fill" /></span>
                            O café chega fresquinho até você
                        </span>
                    </div>
                </div>
                <div><Image src={coffeeImage} width={476} height={360} alt='' /></div>
            </div>
        </section>
    );
}

