import React from 'react';

export default function Liste({ l1, l2, l3 }) {
    return (
        <div className="border border-black rounded-md p-1.5 bg-[#008a8a] text-white w-[150px] mb-[15px] hover:bg-sky-700 hover:cursor-pointer">

            <p className="mb-[5px]">{l1}</p>
            <p className="mb-[5px]">{l2}</p>
            <p className="mb-[5px]">{l3}</p>
        </div >
    );
}

