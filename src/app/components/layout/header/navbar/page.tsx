"use client";

import Link from "next/link"
import React, { useState } from "react";


export default function Navbar () {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void =>{
        setisClick(!isClick)
    }
  return (
    <div>
    <div>
        <ul className='md:flex justify-around text-md'>
        <li className='md:inline-block mx-5 border-b-2 border-b-[#531D60]'>
            <Link href="/">Home</Link>
        </li>
        <li className='md:inline-block mx-5 hover:border-b-2 hover:border-b-[#531D60]'>
            <Link href="/agency">Web Agency</Link>
        </li>
        <li className='md:inline-block mx-5 hover:border-b-2 hover:border-b-[#531D60]'>
            <Link href="/services">Services</Link>
        </li>
        <li className='md:inline-block mx-5 hover:border-b-2 hover:border-b-[#531D60]'>
            <Link href="/about">About us</Link>
        </li>
        </ul>
    </div>
    <div className="md:hidden flex items-center">
        <button className="inline-flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-insert focuse:ring-white"
        onClick={toggleNavbar}
        >
            {isClick ? (
                <svg 
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                >
                </path>
                </svg>
            ): (
                <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"

                />
                </svg>
            )
            }
        </button>

    </div>
    </div>
  )
}


