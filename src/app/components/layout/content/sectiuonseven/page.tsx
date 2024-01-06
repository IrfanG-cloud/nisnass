import Link from "next/link"
import Image from "next/image"

export default function SectionSeven (){
 
    return (
        <div className="flex py-20 px-10">
        <div className="md:w-3/5 px-4">
            <h1 className="text-4xl font-bold">
            A web agency that is constantly learning and developing
            </h1>
            <p className="pt-10">
            It is almost impossible to manage business and marketing at the same time. And it is completely impossible to do both things really well. Because if we are to be completely honest (and we like honesty), both digital design and digital marketing consist of extremely many variables today. The customer journey is far from straight, the channels are huge and the meeting between human and website can be awkward. Therefore, Galax Webbyrå Stockholm works iteratively, which is an unnecessarily difficult way of saying that we learn while we work. Everything we do for you teaches us how to make it even better. Surely it is a wonderful time we live in?            </p>
        </div>
        <div className="md:w-2/5">
        <Image src="/med.png" width={500} height={400} alt=" "/>
        </div>
    </div>
    )}