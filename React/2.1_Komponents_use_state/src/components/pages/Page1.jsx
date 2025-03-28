import React from 'react'
import { Link } from 'react-router'

export default function Page1() {
  return (
    <>
      <h1 className='p-8'>Page1</h1>
      <Link to="/page2" className='bg-green-400 rounded-2xl hover:cursor-pointer hover:bg-green-900 p-4'>Dashboard</Link>
    </>
  );
}
