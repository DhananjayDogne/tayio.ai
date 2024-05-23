import React from 'react'
import Link from 'next/link'
import ContactList from './ContactList';
export default function Contact() {
  return (
    <div className='m-auto w-fit'>
      <h1 className='text-black'>Contact</h1>
      <Link href='/contact/form' className='bg-green-500 px-4 py-2 rounded'>
        Create Contact
      </Link>
        <div className='grid grid-cols-1 gap-4'>
          <ContactList/>
        </div>

    </div>
  )
}


