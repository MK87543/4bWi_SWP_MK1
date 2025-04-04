import React from 'react'
import { Link } from 'react-router'

export default function Page1() {
  const person = { firstname: "hans", lastname: "müller" }

  return (

    <>
      <h1 className='p-8'>Page1</h1>
      <p className='p-2 font-main'>new font</p>
      <Link to="/page2" state={{ person: person, title: "test" }} className='bg-green-400 rounded-2xl hover:cursor-pointer hover:bg-green-900 p-4'>Dashboard</Link>
    </>
  );
}
