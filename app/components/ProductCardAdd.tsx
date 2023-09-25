'use client'

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";


export default function ProductCardAdd() {
    const [inputValue, setInputValue] = useState(0);
    
    const HandleAddToCart = () => {
        console.log(`Foram adicionadas ${inputValue} xícaras de café`)
        setInputValue(0)
    }


    const HandleIncreaseInput = () => setInputValue(inputValue + 1);

    const HandleDecreaseInput = () => {
        if (inputValue > 0) {
            setInputValue(inputValue - 1);
        };
    };


    return (
        <section className="flex items-center gap-2">
            <div className="flex justify-center items-center gap-1 p-2 rounded-md bg-base-button">
                <button type="button" onClick={HandleDecreaseInput}><Minus size={14} color="#8047F8" weight="bold" /></button>
                <input
                    className="font-Roboto text-base text-base-title text-center bg-inherit w-5 focus:outline-none"
                    type="number"
                    name=""
                    id=""
                    value={inputValue}
                    min={0}
                    readOnly />
                <button type="button" onClick={HandleIncreaseInput}><Plus size={14} color="#8047F8" weight="bold" /></button>
            </div>
            <button className="flex p-2 justify-center items-center gap-2 rounded-md bg-purple-dark" type="button" onClick={HandleAddToCart}>
                <ShoppingCartSimple size={16} weight="fill" color="#F3F2F2" />
            </button>
        </section>
    );
}