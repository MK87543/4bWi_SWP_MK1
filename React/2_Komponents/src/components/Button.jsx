import React from 'react'

export default function Button({ info }) {
    return (
        <div className=' flex bg-green-500 w-60 h-30 justify-center items-center hover:bg-green-900 hover:cursor-pointer'>{info}</div>
    )
}
