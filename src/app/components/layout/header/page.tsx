
import Logo from './logo/page';
import Contact from './contact/page';
import Navbar from './navbar/page';
import Hero from './hero/page';
import Paterns from './patners/page';
import Image from 'next/image';

export default function Header(){
 
  return (
      <header className='md:w-90% bg-[#FED072] '>
        <div className="md:flex md:justify-between md:items-center py-2 px-6">
        <Logo />
        <Navbar />
        <Contact />
        </div>
        <Hero />
        <Paterns />
        <div className="px-10 ">
        <Image src="/galax1.png" width={1200} height={300} alt="" />
        </div>
      </header>     

  )
}
