import React from 'react'

export default function Card(Name, info) {
    return (
        <div className='border-solid border-2 w-30 h-50 m-8'>
            <div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" srcset="" />
            </div>

            <div className="h1">{Name}</div>
            <div className="h2">{info}</div>
        </div>
    )
}
