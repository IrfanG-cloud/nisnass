import Link from "next/link"

export default function Contact(){
 
    return (
        <div className="hidden md:show">
            <button className="bg-transparent hover:bg-[#531D60] text-[#531D60] hover:text-white py-2 px-4 border border-[#531D60] hover:border-transparent rounded-full">
                <Link href=''> Contact Us</Link>
            </button>
        </div>
    )}