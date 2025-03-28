import React from 'react'
import { Link, useLocation } from 'react-router'

export default function Page1() {
  const location = useLocation();
  const person = location.state.person;
  return (
    <>
      <h1>Page2</h1>
      <div>Hello {person.firstname}</div>
      <Link to="/" className='hover:cursor-pointer'>Link to: Page1</Link>
    </>
  );
}
