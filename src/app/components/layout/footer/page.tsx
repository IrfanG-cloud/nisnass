import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return (
        <div className="px-10 py-20">
            <div className="">
                <h1 className="text-xl font-bold text-center pb-10">Do you have a digital project underway? Please contact us.</h1>
                <div className="md:flex md:justify-center pb-10">
                    <button className="bg-[#FED072] hover:bg-[#32154b] text-[#32154b] hover:text-white py-2 px-12 rounded-full text-2xl">
                        <Link href='/'> Contact Us</Link>
                    </button>
                </div>
            </div>
            <div className="md:flex pt-10">
                <div className="md:w-1/2">
                <Image src="/final_logo.svg" width={200} height={200} alt="" />
                <p className="py-10">
                We are a full-service web agency / digital agency in Dubai that helps companies with digital marketing and by developing fast and converting websites and homepages in WordPress.

We are data and results driven and advocate building long-term value through measurable activities and really good relationships.
                </p>
                <h1 className="text-2xl font-bold">in</h1>
                </div>
                <div className="md:w-1/2">
                    <div>
                    <h1 className="text-4xl">Web Development & Design company Nisnass</h1>
                    <div className="pt-10"><span>Galax (Great Nash AB)</span></div>
                    <div className="pb-4"><span>Office.nummer 050-4474-063</span></div>
                    </div>
                    <div>
                       <div><span>Adress: Burdubai, Dubai, UAE</span></div>
                        <div><span>Tel: 0504486939</span></div>
                        <h1 className="text-2xl font-bold py-10"><Link href="">Pages</Link></h1>
                    </div>
                </div>
            </div>
            <div className="md:flex md:align-center"><p className="align-center">Copyright © Nisnass Digital 2024</p></div>
        </div>
    )
}