import Image from "next/image"
import Link from "next/link"

export default function SectionThree () {
  return (
    <>
    <div className="bg-gradient-to-b from-yellow-50 to-gray-100 px-10 py-20 ">
        <h1 className="text-2xl text-center py-4 px-4 md:text-6xl md:pb-20 md:px-20">
            Here is how science-based design can help you get more customers
        </h1>
        <div className="md:flex">
                <div className="mb-8 mx-4 basis-1/3 bg-white p-10 rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold">Relevance</h2>
                    <p className="py-10">
                    Today you are only a google away. But how do you convince your visitors that you are the solution they are looking for? Visual relevance is a must to make the visits stay.
                    </p>
                    <Image src="relevans.svg" width={150} height={150} alt="" className="m-auto" />
                </div>
                <div className="mb-8 mx-4 basis-1/3 bg-blue-200 p-10 rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold">Focus</h2>
                    <p className="py-10">
                    It may sound harsh but your prospective customers don not have time to read, they do not care who you are or why you have the philosophies you have. They just want to know how you can influence their business and solve their problems. </p>
                    <Image src="kund.svg" width={250} height={250} alt="" />
                </div>
                <div className="mb-8 mx-4 basis-1/3 bg-yellow-200 p-10 rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold">Right Guide</h2>
                    <p className="py-10">
                    Why have they ended up on your side? What problems do they have and what are they trying to solve? With the right buying journey, where all the content on your page exists solely to help your visitors achieve their goals, you have reached a first step towards a better converting website.                    </p>
                    <Image src="guida-ratt.svg" width={300} height={300} alt="" />
                </div>
        </div>
        <div className="py-10 mx-auto">
            <div>
            <h3 className="text-xl align-center py-4 px-4 md:text-4xl md:pb-20 md:px-20">
                Do you want to know how you can get more customers?
            </h3>
            </div>
            <div className="flex justify-center">
            <button className="bg-[#FED072] hover:bg-[#32154b] py-4 text-[#32154b] hover:text-white py-2 px-12 rounded-full text-2xl">
                <Link href='/'> Contact Us</Link>
            </button>
            </div>
        </div>
    </div>
    </>
  )
}

