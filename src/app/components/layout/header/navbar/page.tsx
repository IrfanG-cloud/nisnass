"use client";

import Link from "next/link"
import React, { useState } from "react";


export default function Navbar () {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void =>{
        setisClick(!isClick)
    }
  return (
    <nav>
        <div>
            <ul className='hidden md:flex justify-around text-md'>
            <li className='md:inline-block mx-5 border-b-2 text-[#e72828] border-b-[#e72828]'>
                <Link href="/">Home</Link>
            </li>
            <li className='md:inline-block mx-5 hover:border-b-2 text-white hover:text-[#e72828] hover:border-b-[#e72828]'>
                <Link href="/agency">Web Agency</Link>
            </li>
            <li className='md:inline-block mx-5 hover:border-b-2 text-white hover:text-[#e72828] hover:border-b-[#e72828]'>
                <Link href="/services">Services</Link>
            </li>
            <li className='md:inline-block mx-5 text-white hover:border-b-2 hover:text-[#e72828] hover:border-b-[#e72828]'>
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
        {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y- sm:px-32">
                <ul className="justify-end text-md">
                    <li className='md:inline-block block mx-5 border-b-2 py-4 border-b-[#fa0456] text-white '>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='md:inline-block block mx-5 py-4 hover:border-b-2 hover:text-white hover:border-b-[#fa0456]'>
                        <Link href="/agency">Web Agency</Link>
                    </li>
                    <li className='md:inline-block block mx-5 py-4 hover:border-b-2 hover:text-white hover:border-b-[#fa0456]'>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className='md:inline-block block mx-5 py-4 hover:border-b-2 hover:text-white hover:border-b-[#fa0456]'>
                        <Link href="/about">About us</Link>
                    </li>
                </ul>
                </div>

            </div>
        )
        }
    </nav>

  )
}


