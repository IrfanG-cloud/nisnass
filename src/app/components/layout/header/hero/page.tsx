import Link from "next/link"
import Image from "next/image"

export default function Hero () {
  return (
    <div className="md:flex md:justify-around">
        <div className="px-10 py-20">
            <h1 className="text-2xl md:text-6xl">
                Web Design & Development Company
            </h1>
            <p className="text-4xl py-10">
            NisNass, a distinguished web design and development company based in Dubai.
            </p>
            <div className="flex">
                <div>
                    <button className="bg-[#531D60] text-white px-4 py-1 md:py-3 md:px-8 border border-[#531D60] hover:border-transparent rounded-full ">
                        <Link href='/'> Read More</Link>
                    </button>
                </div>
                <div>
                <button className="bg-transparent hover:bg-[#531D60] md:py-3 md:px-8  text-[#531D60] hover:text-white py-2 px-4 border border-[#531D60] hover:border-transparent rounded-full ml-6">
                    <Link href='/'> Contact Us</Link>
                </button>
                </div>
            </div>
        </div> 
        <div>
            <Image src="/galax2.png" className="" width={600} height={400} alt="hero" />
        </div>
    </div>
  )
}
