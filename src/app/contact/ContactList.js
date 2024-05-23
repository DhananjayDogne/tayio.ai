'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/slice';
import { useRouter } from 'next/navigation';

const ContactList = () => {
    const contacts = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <div className='p-6 max-w-3xl mx-auto'>
            <h1 className=' text-3xl font-bold mb-6 text-center text-gray-800'>Contact List</h1>
            {contacts.length === 0 ? (
                <p className='text-center text-gray-500'>No contacts available.</p>
            ) : (
                <div className='grid grid-cols-1 gap-6'>
                    {contacts.map((contact) => (
                        <div key={contact.id} className='bg-white p-6 m-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center mb-4'>
                               
                                <div className='ml-4'>
                                    <h2 className='text-xl font-semibold text-gray-900'>{contact.name} {contact.lname}</h2>
                                    
                                </div>
                            </div>
                            <div className='flex justify-between mt-4'>
                                <button
                                    className='bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition-colors duration-300'
                                    onClick={() => router.push(`/contact/form/edit/${contact.id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className='bg-red-500 text-white rounded-full px-6 py-2 hover:bg-red-600 transition-colors duration-300'
                                    onClick={() => dispatch(removeUser(contact.id))}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContactList;
