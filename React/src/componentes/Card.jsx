import React from 'react'

export default function Card({ name, jobtitle, desciption }) {
    return (<div className="bg-orange-200 border w-full">Card
        <p>{name}</p>
        <p>{jobtitle}</p>
        <p>{desciption}</p>

    </div>

    )
}
