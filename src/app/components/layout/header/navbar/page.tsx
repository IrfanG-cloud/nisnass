import Link from "next/link"

export default function Navbar () {
  return (
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
  )
}


