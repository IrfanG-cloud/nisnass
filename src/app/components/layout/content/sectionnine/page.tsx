import Link from "next/link";
import Image from "next/image";

export default function SectionNine (){
    return (
        <div className="md:flex px-10 py-20 bg-gray-100">
            <div className="md:w-3/5 bg-white rounded-2xl px-10">
                <h1 className="py-10 text-2xl font-bold">Dubai's most far-sighted web agency</h1>
                <p className="py-6 text-xl">Okay, maybe not so short-sighted. Of course we have eyes for what is right in front of us too. It is needed to be nimble in the turns. But we've been doing this for a long time now, and we know what works and what doesn't. Unlike ideas, solutions and opinions, value cannot arise in a short time. Therefore, we let patience, strategy and follow-up show the way.

                It is quickly possible to be long-term. See examples of growth with some of our customers:</p>
                <ul className="">
                    <li className="pb-4"><Link href="/">- All Companies: Strandberg Guitars</Link></li>
                    <li className="pb-4"><Link href="/">- All Companies: Rillion One</Link></li>
                    <li className="pb-8"><Link href="/">- All Companies: Black Box</Link></li>
                </ul>
                <Image src="webbyra.svg" width={700} height={400} alt="" />
            </div>
            <div className="md:w-2/5 bg-blue-300 rounded-2xl px-10 md:mx-10 md:mt-0 mt-10">
            <h1 className="py-10 text-2xl font-bold">Your very own web agency in Stockholm</h1>
                <p className="py-6 text-xl">
                We probably know this better than you do. Otherwise you wouldn't be reading this. But you know your business better than we do. So, of course, the greatest happiness occurs when we combine this in a mix where we become your web department and your very own agency. You know, the ones that you can interrupt at any time with questions, ideas or lots of other fun.
                </p>
                <Image src="/egna.png" width={700} height={400} alt="" className=""/>
                
            </div>
        </div>
    )
}