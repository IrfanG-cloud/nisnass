import Link from "next/link"
import Image from "next/image"

export default function Left (){
 
    return (
        <div className="md:w-1/2 px-4">
            <h1 className="text-4xl font-bold">
            With Nisnass digital, you get a dedicated and knowledgeable web agency that has expertise in web design and digital marketing
            </h1>
            <Image src="/Google_Patents.png" width={200} height={200} alt="" className="my-10"/>
            <p>
                Nisnass has been a Google Partner since 2015
            </p>
        </div>
    )}