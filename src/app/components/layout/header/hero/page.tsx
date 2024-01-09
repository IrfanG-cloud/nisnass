import Link from "next/link"
import Image from "next/image"

export default function Hero () {
  return (
    <div className="md:flex md:justify-around">
        <div className="px-10 py:10 md:pt-20">
            <h1 className="text-4xl md:text-6xl text-white">
                Web Design & Development Company
            </h1>
            <p className="text-2xl text-white md:text-4xl py-10">
            NisNass, a distinguished web design and development company based in Dubai.
            </p>
            <div className="md:flex md:mt-10">
                <div>
                    <button className="bg-[#e72828] text-white py-4 px-8 border border-[#fa0456] hover:border-transparent rounded-full ">
                        <Link href='/'> Read More</Link>
                    </button>
                </div>
                <div className="mt-4 md:mt-0">
                <button className="bg-white hover:bg-[#e72828] py-4 px-8 text-[#000000] hover:text-white hover:border-transparent rounded-full md:ml-6">
                    <Link href='/'> Contact Us</Link>
                </button>
                </div>
            </div>
        </div> 
        <div className="mt-20">
            <Image src="/galax2.png" width={800} height={400} alt="hero" />
        </div>
    </div>
  )
}
