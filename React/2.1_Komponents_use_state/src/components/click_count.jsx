import React, { useState } from "react";

export default function Clicks({ }) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);

    let style = amountOfClicks > 5 ? "bg-green-400" : "";
    let style2 = amountOfClicks > 50 ? "bg-green-900" : "";

    return (
        <div className={`border p-4 hover:cursor-pointer ${style}  ${style2}`} onClick={() => {
            setAmountOfClicks(amountOfClicks + 1)
        }}>
            <h1 className="font-extrabold text-2xl">Hello User !</h1>
            <p>Click me!</p>
            <div>Amount of Clicks: {amountOfClicks}</div>
        </div>
    );
}
