'use client'

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import React, { useState } from "react";


export default function ProductCardForm() {
    const [inputValue, setInputValue] = useState(0);

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    function handleChangeAlgumaCoisa() {
        
    }

    const HandleIncreaseInput = () => setInputValue(inputValue + 1);

    const HandleDecreaseInput = () => {
        if (inputValue > 0) {
            setInputValue(inputValue - 1);
        };
    };

    const HandleAddToCart = () => {
        console.log(inputValue)
        setInputValue(0)
    }

    return (
        <form className="flex items-center gap-2" action="">
            <div className="flex justify-center items-center gap-1 p-2 rounded-md bg-base-button">
                <button type="button" onClick={HandleDecreaseInput}><Minus size={14} color="#8047F8" weight="bold" /></button>
                <input
                    className="font-Roboto text-base text-base-title text-center bg-inherit w-5 focus:outline-none"
                    type="number"
                    name=""
                    id=""
                    onChange={HandleChange}
                    value={inputValue}
                    min={0}
                    readOnly />
                <button type="button" onClick={HandleIncreaseInput}><Plus size={14} color="#8047F8" weight="bold" /></button>
            </div>
            <button className="flex p-2 justify-center items-center gap-2 rounded-md bg-purple-dark" type="button" onClick={HandleAddToCart}>
                <ShoppingCartSimple size={16} weight="fill" color="#F3F2F2" />
            </button>
        </form>
    );
}