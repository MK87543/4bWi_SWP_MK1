import React from 'react'
import { Link } from 'react-router'

export default function Page1() {
  return (
    <>
      <h1>Page2</h1>
      <Link to="/" className='hover:cursor-pointer'>Link to: Page1</Link>
    </>
  );
}
