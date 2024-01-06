import Image from "next/image";
import Link from "next/link";

export default function SectionFive (){
 
  return (
      <div className="bg-gradient-to-b from-gray-100 to-blue-300 md:flex px-10 pb-20">
        <div className="md:w-1/2 px-4">
            <Link href="/">
            <Image src="/Telcred.png" width={600} height={400} alt="" className="pb-10"/>
            </Link>
            <p>Phone Credit</p>
            <h1 className="text-4xl font-bold my-4">New website & Identity</h1>
            <p>Web design & development, identity & Art Direction</p>
        </div>
        <div className="md:w-1/2 px-4">
        <Link href="/" >
        <Image src="/Maze.png" width={600} height={400} alt="" className="pb-10"/>
        </Link>
        <p>Phone Credit</p>
        <h1 className="text-4xl font-bold my-4">New website & Identity</h1>
        <p>Web design & development, identity & Art Direction</p>
        </div>
      </div>

  )
}
