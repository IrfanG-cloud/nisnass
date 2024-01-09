import Image from "next/image"
import Link from "next/link"

export default function SectionSix () {
  return (
    <>
    <div className="bg-green-100 px-10">
        <h1 className="text-xl text-center py-4 px-4 md:text-6xl md:pb-20 md:px-20">
        That way you get an optimized e-commerce with a higher conversion rate and ROAS
        </h1>
        <div className="md:flex">
                <div className="mb-8 mx-4 basis-1/3 bg-white p-10 rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold">Conversion rate</h2>
                    <p className="py-10">
                    What would a 10% increase in your conversion rate mean to your bottom line? Focusing on the conversion rate at all levels will increase your margins and give you significant effects on the bottom line.
                    </p>
                    <Image src="relevans.svg" width={150} height={150} alt="" className="m-auto" />
                </div>
                <div className="mb-8 mx-4 basis-1/3 bg-green-400 p-10 rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold">Purchase trip</h2>
                    <p className="py-10">
                    Today, customers make their entire buying journey online and there is great potential to influence potential buyers early in their buying journey. With well-thought-out design that is adapted to your target group and by using the latest conversion strategies, you can reach new heights in your e-commerce journey.
                    </p>
                    <Image src="kopresa-3.svg" width={250} height={250} alt="" />
                </div>
                <div className="mb-8 mx-4 basis-1/3 bg-red-400 p-10 rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold">Data Decides</h2>
                    <p className="py-10">
                    Today there is no need for guesswork, the data shows what you do well and what you can improve. With the right insights, we can create webshops that get it right from the start and shorten the journey to a profitable investment. With our ongoing improvement work, we ensure that you are always at the forefront of conversion and results.
                    </p>
                    <Image src="data.svg" width={300} height={300} alt="" />
                </div>
        </div>
        <div className="py-10">
            <div>
                <div className="flex justify-center py-4">
                    <Image src="/woo.png" width={100} height={100} alt="" />
                </div>
            <h3 className="text-xl px-4 md:text-6xl md:pb-20 md:px-20">
            Do you want to know how an e-commerce with WooCommerce can work?
            </h3>
            </div>
            <div className="flex justify-center pb-10">
            <button className="bg-[#e72828] hover:bg-green-500 text-white hover:text-white py-4 px-12 rounded-full text-2xl">
                <Link href='/'> Contact Us</Link>
            </button>
            </div>
        </div>
    </div>
    </>
  )
}

